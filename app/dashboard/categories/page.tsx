import SectionTitle from "@/app/components/section_title";
import AddForm from "@/app/dashboard/categories/components/add_form";

const Categories = () => {
  return (
    <main>
      <SectionTitle title="Add Category" />
      <AddForm />
      <SectionTitle title="Categories" />
    </main>
  );
};

export default Categories;
