'use client';

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 px-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} AZRA - All rights reserved</p>
    </footer>
  );
}
