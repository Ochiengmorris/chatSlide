import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

const Notifications = () => {
  return (
    <Button
      variant={"ghost"}
      className="rounded-full bg-white cursor-pointer py-6"
    >
      <Bell color="#3352cc" fill="#3352cc" className="size-6" />
    </Button>
  );
};

export default Notifications;
