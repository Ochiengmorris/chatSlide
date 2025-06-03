"use client";
import { PAGES_BREADCRUMBS } from "@/constants/pages";
import { usePath } from "@/hooks/use-nav";
import React from "react";
import Sheet from "../sheet";
import { Menu } from "lucide-react";
import Items from "../sidebar/Items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import SubscriptionPlan from "../SubscriptionPlan";
import UpgradeCard from "../sidebar/UpgradeCard";
import CreateAutomation from "../create-automation";
import Search from "../search";
import Notifications from "../notifications";
import MainBreadCrumb from "../main-bread-crumb";
import HelpDTBlue from "@/Images/icons/HelpDTBlue";

type Props = {
  slug: string;
};

function Navbar({ slug }: Props) {
  const { page } = usePath();
  const currentPage = PAGES_BREADCRUMBS.includes(page) || page === slug;
  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="flex items-center flex-1 lg:hidden gap-x-2">
            <Sheet
              trigger={<Menu fill="currentColor" />}
              className="lg:hidden"
              side="left"
            >
              <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e]/90 bg-clip-padding backdrop-filter backdrop-blur-3xl">
                <div className="flex gap-x-2 items-center p-5 justify-center">
                  {/* <LogoSmall /> */}
                  ChartSLide
                </div>

                <div className="flex flex-col py-3 text-amber-50">
                  <Items slug={slug} page={page} />
                </div>

                <div>
                  <Separator
                    orientation="horizontal"
                    className="bg-[#545454]/50"
                  />
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
            </Sheet>
          </span>
          <Search />
          <CreateAutomation />
          <Notifications />
        </div>
        <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
      </div>
    )
  );
}

export default Navbar;
