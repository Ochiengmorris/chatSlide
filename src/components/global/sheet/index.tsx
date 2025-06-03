"use client";
import {
  Sheet as SHadcnSheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
};

const Sheet = (props: Props) => {
  return (
    <SHadcnSheet>
      <SheetTrigger className={props.className}>{props.trigger}</SheetTrigger>
      <SheetContent className="p-0" side={props.side}>
        <SheetTitle className="sr-only">Menu</SheetTitle>
        {props.children}
      </SheetContent>
    </SHadcnSheet>
  );
};

export default Sheet;
