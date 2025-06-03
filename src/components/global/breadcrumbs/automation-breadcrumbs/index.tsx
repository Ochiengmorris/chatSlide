import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

function AutomationBreadCrumbs({ id }: Props) {
  return (
    <div className="rounded-full w-full p-5 bg-[#181818A] flex items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#989CA0] truncate">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#989CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#989CA0] truncate">
            This is the automation title
          </p>
          <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4">
            {/* <PencilDTBlue color="#989CA0" /> */}
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block truncate min-w-0 text-gray-400/60 text-sm">
          All updates are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-gray-400 text-sm truncate min-w-0">
            Changes saved
          </p>
          {/* <p className="text-gray-400 text-sm truncate min-w-0">Undo | Redo</p> */}
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
}

export default AutomationBreadCrumbs;
