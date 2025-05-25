import { NextResponse } from 'next/server';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// const sql = postgres(process.env.DATABASE_URL!, { ssl: 'verify-full'});

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
  	return NextResponse.json(await listInvoices());
  } catch (error) {
  	return NextResponse.json({ error }, { status: 500 });
  }
}


// import { NextResponse } from 'next/server';
// import postgres from 'postgres';

// // Menggunakan PostgreSQL connection tanpa `connectTimeoutMillis`
// const sql = postgres(process.env.POSTGRES_URL!, {
//   ssl: { rejectUnauthorized: false }, // Menonaktifkan verifikasi SSL sementara untuk debugging
// });

// // Fungsi untuk menjalankan query
// async function listInvoices() {
//   try {
//     // Cek apakah koneksi dapat berjalan dengan query sederhana
//     console.log('Testing database connection...');
//     const testResult = await sql`SELECT NOW()`;
//     console.log('Database connected successfully, test result:', testResult);

//     // Menjalankan query utama
//     console.log('Running main query...');
//     const data = await sql`SELECT NOW`;
//     console.log(data);
    
//     console.log('Query result:', data);
//     return data;
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("Error executing SQL query:", error.message);
//       console.error("Stack trace:", error.stack);
//       throw new Error("Database query failed: " + error.message);
//     } else {
//       console.error("Unknown error:", error);
//       throw new Error("Unknown error occurred while executing the query");
//     }
//   }
// }

// // Handler untuk menangani request GET
// export async function GET() {
//   console.log('Received request for /query');
//   try {
//     const result = await listInvoices();
//     console.log('Returning query result:', result);
//     return NextResponse.json(result);
//   } catch (error) {
//     // Menangani error dan mengembalikan respons 500
//     console.error("Error in GET handler:", error);
//     return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
//   }
// }