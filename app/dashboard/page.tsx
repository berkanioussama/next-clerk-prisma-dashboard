import { currentUser } from "@clerk/nextjs/server";
import DashboardNavbar from "@/app/dashboard/_components/dashboard_navbar";
import DashboardContent from "@/app/dashboard/_components/dashboard_content";
import UsersTable from "@/app/dashboard/_components/users_table";

const Dashboard = async () => {

  const user = await currentUser()
  
  return (
    <main>
      <DashboardNavbar />
      <DashboardContent>
        <h2 className="text-2xl font-bold">Users</h2>
        <UsersTable />
      </DashboardContent>
    </main>
  );
}
 
export default Dashboard;