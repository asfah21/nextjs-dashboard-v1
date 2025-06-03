import { Metadata } from 'next';
import ClientAdminLayout from '@/app/ui/panel/admin-layout';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin dashboard for managing users and settings.',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <ClientAdminLayout>{children}</ClientAdminLayout>;
}