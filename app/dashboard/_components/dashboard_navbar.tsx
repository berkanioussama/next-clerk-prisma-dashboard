import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

const DashboardNavbar = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 border-b">
      <div className="flex items-center justify-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <div>
          <h3>Category Things</h3>
        </div>
      </div>
      <UserButton />
    </div>
  );
}
 
export default DashboardNavbar;