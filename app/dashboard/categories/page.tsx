'use client'

import SectionTitle from "@/app/dashboard/components/section_title";
import AddForm from "@/app/dashboard/categories/components/add_form";
import CategoriesTable from "./components/categories_table";
import Section from "@/app/dashboard/components/section";
import { useEffect} from "react";
import useFetch from "@/hooks/use_fetch";

const Categories = () => {

  const { data, isLoading, fetchData } = useFetch("/api/data/category")

  useEffect(() => {
    fetchData()
  },[])

  const reFishData = () => {
    fetchData();
  }
  
  return (
    <main>
      <Section>
        <SectionTitle title="Add Category" />
        <AddForm reFetchData={reFishData} />
      </Section>
      <Section>
        <SectionTitle title="Categories" />
        {isLoading &&
          <div className="flex items-center justify-center">
            <p className="text-lg text-center">Loading...</p>
          </div>
        }
        <CategoriesTable categories={data} reFetchData={reFishData} />
      </Section>
    </main>
  );
};

export default Categories;
