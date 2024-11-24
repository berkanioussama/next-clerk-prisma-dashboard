"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { createCategory } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleToast } from "@/lib/handleToast";

const AddForm = () => {

  const form = useForm<z.infer<typeof createCategory>>({
    resolver: zodResolver(createCategory),
    defaultValues: {
      name: "",
    },
  })

  function handleSubmit(values: z.infer<typeof createCategory>) {
    handleToast(`${values.name} Category created successfully`, "success")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Category Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Category</Button>
      </form>
    </Form>
  );
}
 
export default AddForm;