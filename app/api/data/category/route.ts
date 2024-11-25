import { database } from "@/prisma/database"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  try {
    const categories = await database.category.findMany()
    if (categories.length === 0) {
      return NextResponse.json({ message: "No categories found" }, { status: 404 });
    }
    return NextResponse.json({data: categories}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}