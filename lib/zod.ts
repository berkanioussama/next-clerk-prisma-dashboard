import { z } from "zod"

export const createCategory = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})

export const deleteCategory = z.object({
  id: z.string().uuid({
    message: "Invalid category ID format.",
  }),
});