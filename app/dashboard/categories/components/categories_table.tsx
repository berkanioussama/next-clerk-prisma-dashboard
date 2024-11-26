"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { handleToast } from "@/lib/handleToast";
import EditForm from "@/app/dashboard/categories/components/edit_form";

type Category = {
  id: string,
  name: string
}

const CategoriesTable = ({ categories, reFetchData }: { categories: Category[], reFetchData: () => void}) => {

  const deleteData = async (id: string) => {
    const confirmAction = confirm("Are you sure to delete this category?");
    if (!confirmAction) return
    const response = await fetch("/api/admin/category", {
      method: "DELETE",
      body: JSON.stringify({id}),
    })

    if (!response.ok) {
      const errorData = await response.json();
      handleToast(errorData.message, "destructive");
      return;
    }

    const successData = await response.json()
    handleToast(successData.message, "success")
    reFetchData();
  }

  

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead >ID</TableHead>
          <TableHead >Name</TableHead>
          <TableHead >Edit</TableHead>
          <TableHead >Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category, index) => (
          <TableRow key={index}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell><EditForm id={category.id} name={category.name} reFetchData={reFetchData} /></TableCell>
            <TableCell><Button variant="destructive" onClick={() => deleteData(category.id)} >Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
 
export default CategoriesTable;