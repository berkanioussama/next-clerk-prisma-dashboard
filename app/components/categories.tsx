import { getCategories } from "@/actions/category";
import Section from "@/app/components/section";
import SectionTitle from "@/app/components/section_title";

const Categories = async () => {

  // Fetch all data in parallel
  const [categories] = await Promise.all([
    getCategories()
  ]);

  if (!categories) {
    return null;
  }

  return (
    <Section>
      <SectionTitle title="Categories" />
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="px-8 py-7 border rounded-lg">
            <p className="text-2xl font-bold">{category.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
 
export default Categories;