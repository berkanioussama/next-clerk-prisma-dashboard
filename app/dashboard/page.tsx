import { currentUser } from "@clerk/nextjs/server";
import UsersTable from "@/app/dashboard/_components/users_table";

const Dashboard = async () => {

  const user = await currentUser()
  
  return (
    <main>
        <h2 className="text-2xl font-bold">Users</h2>
        <UsersTable />
    </main>
  );
}
 
export default Dashboard;