import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/app/dashboard/_components/dashboard_sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">
        {children}
      </main>
    </SidebarProvider>
  );
}
