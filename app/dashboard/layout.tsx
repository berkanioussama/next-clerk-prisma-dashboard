import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/app/dashboard/components/dashboard_sidebar";
import DashboardNavbar from "@/app/dashboard/components/dashboard_navbar";
import DashboardContent from "@/app/dashboard/components/dashboard_content";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full flex flex-col">
        <DashboardNavbar />
        <DashboardContent>{children}</DashboardContent>
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
