"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createAutomation } from "./query";

export const getAllAutomations = async () => {
  const user = await currentUser();

  try {
    const create = await createAutomation(user!.id);
    if (create) return { status: 200, data: "Automation created" };
    return { status: 404, data: "Oops Something went wrong" };
  } catch (error) {
    console.log(error);
    return { status: 500, data: "Internal server error" };
  }
};
