import SectionTitle from "@/app/components/section_title";
import AddForm from "@/app/dashboard/categories/components/add_form";
import CategoriesTable from "./components/categories_table";

const Categories = () => {
  return (
    <main>
      <SectionTitle title="Add Category" />
      <AddForm />
      <SectionTitle title="Categories" />
      <CategoriesTable />
    </main>
  );
};

export default Categories;
