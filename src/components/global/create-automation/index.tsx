import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { Activity } from "lucide-react";

type Props = {};

const CreateAutomation = (props: Props) => {
  // WIP: create in database using mutate
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#9685db] via-[#3352cc] font-medium to-[#1c2d70] cursor-pointer">
      <Loader state={false}>
        <Activity strokeWidth={3} className="size-6" />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
