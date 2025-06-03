import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  type: "BUTTON" | "LINK";
  href?: string;
  className?: string;
};

function GradientButton({ children, type, href, className }: Props) {
  const gradients =
    "bg-gradient-to-r from-cyan-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl p-[2px] via-purple-500 to-pink-500";

  switch (type) {
    case "BUTTON":
      return (
        <div className={gradients}>
          <Button className={cn(className, "rounded-xl")}>{children}</Button>
        </div>
      );

    case "LINK":
      return (
        <div className={gradients}>
          <Link href={href!} className={cn(className, "rounded-xl")}>
            {children}
          </Link>
        </div>
      );

    default:
      return null;
  }
}

export default GradientButton;
