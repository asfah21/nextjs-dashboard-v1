import { Roboto, Inter, Lusitana } from 'next/font/google';
 
export const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});
 
export const inter = Inter({ // Mengubah nama variabel dan font menjadi Inter
  subsets: ['latin'],
});

export const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });