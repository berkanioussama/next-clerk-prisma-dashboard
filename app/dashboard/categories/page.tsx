import SectionTitle from "@/app/dashboard/components/section_title";
import AddForm from "@/app/dashboard/categories/components/add_form";
import CategoriesTable from "./components/categories_table";
import Section from "@/app/dashboard/components/section";

const Categories = () => {
  return (
    <main>
      <Section>
        <SectionTitle title="Add Category" />
        <AddForm />
      </Section>
      <Section>
        <SectionTitle title="Categories" />
        <CategoriesTable />
      </Section>
    </main>
  );
};

export default Categories;
