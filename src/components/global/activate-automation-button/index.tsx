import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { ActivitySquare } from "lucide-react";

type Props = {};

const ActivateAutomationButton = (props: Props) => {
  // TODO: Setup optimistic ui
  return (
    <Button className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#9685db] via-[#3352cc] font-medium to-[#1c2d70] ml-4  cursor-pointer">
      <Loader state={false}>
        <ActivitySquare className="size-6" />
        <p className="lg:inline hidden">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
