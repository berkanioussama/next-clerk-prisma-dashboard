'use server'

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getUsers = async () => {

  const user = await currentUser();
  // Redirect if not logged in
  if (!user) {
    redirect("/sign-in");
  }
  // Redirect if the user is not an admin
  if (user.publicMetadata.role !== "admin") {
    redirect("/");
  }

  try {
    const clerk = await clerkClient()
    const users = await clerk.users.getUserList();
    return users;
  } catch {
    return null
  }
}