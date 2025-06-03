import AutomationBreadCrumbs from "@/components/global/breadcrumbs/automation-breadcrumbs";
import WarningIcon from "@/Images/icons/WarningIcon";
import React from "react";
import Trigger from "../_components/trigger";

type Props = {
  params: Promise<{ id: string }>;
};

// set some metadata TODO:

const Page = async ({ params }: Props) => {
  const { id } = await params;

  // prefetch the user automation data
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationBreadCrumbs id={id} />

      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3">
        <div className="flex gap-x-2">
          <WarningIcon color="#3352cc" />
          When...
        </div>

        <Trigger id={id} />
      </div>
    </div>
  );
};

export default Page;
