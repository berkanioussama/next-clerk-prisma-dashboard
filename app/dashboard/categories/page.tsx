'use client'

import SectionTitle from "@/app/dashboard/components/section_title";
import AddForm from "@/app/dashboard/categories/components/add_form";
import CategoriesTable from "./components/categories_table";
import Section from "@/app/dashboard/components/section";
import { useEffect, useState } from "react";
import { handleToast } from "@/lib/handleToast";

type Category = {
  id: string,
  name: string
}

const Categories = () => {

  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const response = await fetch("/api/data/category", {
      method: "GET",
    })

    if (!response.ok) {
      const errorData = await response.json();
      handleToast(errorData.message, "destructive");
      return;
    }

    const successData = await response.json()

    setCategories(successData.data)
  }

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
        <CategoriesTable categories={categories} reFetchData={reFishData} />
      </Section>
    </main>
  );
};

export default Categories;
