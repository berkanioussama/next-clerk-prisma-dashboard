import { database } from "@/prisma/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const formValues = await request.json()
    if (!formValues) {
      return NextResponse.json({ message: "No form data" }, { status: 400 });
    }
    const { name } = formValues
    if (!name) {
      return NextResponse.json({ message: "Name is required" }, { status: 400 });
    }

    try {
      const newCategory = await database.category.create({
        data: { name },
      });
      console.log("Category created:", newCategory);
      return NextResponse.json(
        { message: `${newCategory.name} Category created successfully` },
        { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Error: Failed to create category" }, { status: 500 });
    }
    
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
  
}