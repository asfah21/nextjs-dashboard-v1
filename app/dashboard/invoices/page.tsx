import Pagination from '@/app/ui/invoices/pagination'; // import komponen Pagination untuk navigasi halaman
import Search from '@/app/ui/search'; // import komponen Search untuk mencari invoice
import Table from '@/app/ui/invoices/table'; // import komponen Table untuk menampilkan daftar invoice
import { CreateInvoice } from '@/app/ui/invoices/buttons'; // import tombol CreateInvoice
import { inter } from '@/app/ui/fonts'; // import font lusitana yang digunakan untuk heading
import { InvoicesTableSkeleton } from '@/app/ui/skeletons'; // import skeleton loader untuk tampilan saat loading data
import { Suspense } from 'react'; // import Suspense untuk handling komponen async secara efisien
import { fetchInvoicesPages } from '@/app/lib/data'; // import fungsi untuk menghitung total halaman berdasarkan query pencarian
import { Metadata } from 'next'; // import Metadata untuk mendefinisikan metadata halaman

export const metadata: Metadata = {
  title: 'Invoices', // judul halaman
};

// Komponen Page bersifat async karena memanggil data server-side
export default async function Page(
  props: {
    searchParams?: Promise<{
      query?: string; // parameter pencarian dari URL
      page?: string;  // parameter nomor halaman dari URL
    }>;
  }
) {
  // Tunggu parameter pencarian dari props (biasanya diberikan oleh Next.js routing)
  const searchParams = await props.searchParams;

  // Ambil nilai query pencarian dan halaman saat ini
  const query = searchParams?.query || ''; // default kosong jika tidak ada query
  const currentPage = Number(searchParams?.page) || 1; // default ke halaman 1

  // Hitung total halaman berdasarkan query
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      {/* Header judul halaman */}
      <div className="flex w-full items-center justify-between">
        <h1 className={`${inter.className} text-2xl`}>Invoices</h1>
      </div>

      {/* Area pencarian dan tombol tambah invoice */}
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." /> {/* input pencarian */}
        <CreateInvoice /> {/* tombol tambah invoice */}
      </div>

      {/* Tampilkan tabel invoice dalam Suspense agar bisa loading skeleton */}
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} /> {/* komponen tabel yang menampilkan data invoice */}
      </Suspense>

      {/* Komponen pagination untuk navigasi halaman */}
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}