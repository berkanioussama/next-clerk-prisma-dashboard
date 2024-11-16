import { currentUser } from "@clerk/nextjs/server";
import DashboardNavbar from "@/app/dashboard/_components/dashboard_navbar";
import DashboardContent from "./_components/dashboard_content";

const Dashboard = async () => {

  const user = await currentUser()
  
  return (
    <main>
      <DashboardNavbar />
      <DashboardContent>
        <h1>Dashboard</h1>
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
        <p>{user?.emailAddresses[0].emailAddress}</p>
      </DashboardContent>
    </main>
  );
}
 
export default Dashboard;