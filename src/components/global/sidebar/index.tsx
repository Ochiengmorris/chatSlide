"use client";
import { usePath } from "@/hooks/use-nav";
import React from "react";
import Items from "./Items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import SubscriptionPlan from "../SubscriptionPlan";
import UpgradeCard from "./UpgradeCard";
import HelpDTBlue from "@/Images/icons/HelpDTBlue";
// import LogoSmall from "../SVGs/logo-smal";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();
  return (
    <div className="w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#7688DD] to-[#7688DD] via-[#171717] hidden bottom-0 top-0 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e]/90 bg-clip-padding backdrop-filter backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          {/* <LogoSmall /> */}
          ChartSLide
        </div>

        <div className="flex flex-col py-3 text-amber-50">
          <Items slug={slug} page={page} />
        </div>

        <div>
          <Separator orientation="horizontal" className="bg-[#545454]/50" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#989CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3 text-[#989CA0]">
            <HelpDTBlue />
            <p className="text-[#989CA0]">Help</p>
          </div>
        </div>

        <SubscriptionPlan type="PRO">
          <div className="flex-1 flex flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
