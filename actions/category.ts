'use server'

import { database } from "@/prisma/database"

export const getCategories = async () => {
  try {
    const categories = await database.category.findMany()
    return categories
  } catch (error) {
    return null
  }
}