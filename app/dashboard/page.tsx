import UsersTable from "@/app/dashboard/components/users_table";
import SectionTitle from "@/app/dashboard/components/section_title";

const Dashboard = async () => {
  return (
    <main>
      <SectionTitle title="Users" />
      <UsersTable />
    </main>
  );
};

export default Dashboard;
