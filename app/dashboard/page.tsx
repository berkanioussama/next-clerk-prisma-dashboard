import UsersTable from "@/app/dashboard/components/users_table";

const Dashboard = async () => {
  return (
    <main>
      <h2 className="text-2xl font-bold">Users</h2>
      <UsersTable />
    </main>
  );
};

export default Dashboard;
