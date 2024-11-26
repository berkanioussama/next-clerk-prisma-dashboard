"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { editCategory } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { handleToast } from "@/lib/handleToast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const EditForm = ({id}: {id: string}) => {

  const form = useForm<z.infer<typeof editCategory>>({
    resolver: zodResolver(editCategory),
    defaultValues: {
      id: id,
      name: "",
    },
  })

  const handleSubmit = async (values: z.infer<typeof editCategory>) => {
    const response = await fetch("/api/admin/category", {
      method: "PUT",
      body: JSON.stringify( values ),
    })

    if (!response.ok) {
      const errorData = await response.json();
      handleToast(errorData.message, "destructive");
      return;
    }

    const successData = await response.json()
    handleToast(successData.message, "success")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30rem]">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex gap-4">
            <div className="grow">
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
            </div>
            <Button type="submit">Update</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
 
export default EditForm;