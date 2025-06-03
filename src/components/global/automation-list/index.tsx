"use client";
import { usePath } from "@/hooks/use-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";

type Props = {};

function AutomationList({}: Props) {
  const { pathname } = usePath();

  // WIP: if no automations show no automations
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathname}/1234`}
        className="bgbg-[#1d1d1d] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automation flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">Automation name</h2>
          <p className="text-sm mb-2 font-light text-[#989CA0]">
            This is from the comment
          </p>
          {/* WIP: wrap this into a map and use key */}
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                "rounded-full px-4 py-1 capitalize",
                (0 + 1) % 1 == 0 &&
                  "bg-green-500/30 border-2 border-green-500/50",
                (1 + 1) % 2 == 0 &&
                  "bg-purple-500/30 border-2 border-purple-500/50",
                (2 + 1) % 3 == 0 &&
                  "bg-amber-500/30 border-2 border-amber-500/50",
                (3 + 1) % 4 == 0 && "bg-red-500/30 border-2 border-red-500/50"
              )}
            >
              Get Started
            </div>
          </div>

          <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3]">No Keywords</p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          {/* attach real date */}
          <p className="capitalize text-sm font-light text-[#989CA0]">
            October 5th 2024
          </p>

          {/* WIP:render button based on the listener */}
          <GradientButton
            type="BUTTON"
            className="w-full bg-black/80 text-white hover:bg-background/80"
          >
            Smart AI
          </GradientButton>
          <Button className="bg-black/80 hover:bg-background/80 text-white">
            Standard
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default AutomationList;
