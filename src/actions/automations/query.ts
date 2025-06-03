"use server";

import { prisma } from "@/lib/prisma";

export const createAutomation = async (clerkId: string) => {
  return await prisma.user.update({
    where: {
      clerkId,
    },
    data: {
      automation: {
        create: {},
      },
    },
  });
};
