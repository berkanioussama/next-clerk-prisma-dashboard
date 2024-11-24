import { getUsers } from "@/actions/users";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { User } from "@clerk/clerk-sdk-node";

const UsersTable = async() => {

  // Fetch users securely on the server
  const users = (await getUsers())?.data as User[];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >Name</TableHead>
          <TableHead >Email</TableHead>
          <TableHead >Joined</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(await users).map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.emailAddresses[0].emailAddress}</TableCell>
            <TableCell>{user.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>A list of your all users.</TableCaption>
    </Table>
  );
}
 
export default UsersTable;