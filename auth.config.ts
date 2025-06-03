// import type { NextAuthConfig } from 'next-auth';
 
// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;

//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;

import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // Mengecek apakah pengguna sudah login
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard'); // Mengecek apakah berada di path /dashboard
      const isOnLoginPage = nextUrl.pathname === '/login'; // Mengecek apakah berada di path /login

      // KONDISI 1: Pengguna mencoba mengakses halaman dashboard
      if (isOnDashboard) {
        if (isLoggedIn) {
          return true; // Izinkan akses jika sudah login
        }
        return false; // Redirect pengguna yang belum terautentikasi ke halaman login (sesuai `pages.signIn`)
      } 
      
      // KONDISI 2: Pengguna mencoba mengakses halaman login DAN sudah login
      else if (isOnLoginPage) {
        if (isLoggedIn) {
          // Jika sudah login dan mencoba mengakses /login, redirect ke /dashboard
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true; // Jika belum login, izinkan akses ke halaman login
      }
      
      // KONDISI 3: Pengguna mencoba mengakses halaman lain (termasuk root '/')
      // Izinkan akses ke halaman lain (misalnya root '/') terlepas dari status login.
      return true;
    },
  },
  providers: [], // Tambahkan provider di sini jika ada (misal: Google, Credentials, dll.)
} satisfies NextAuthConfig;