import { Button } from "@/components/ui/button";
import { PLANS } from "@/constants/pages";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import React from "react";

type Props = {
  label: string;
  current: "PRO" | "FREE";
  landing?: boolean;
};

function PaymentCard({ label, current, landing }: Props) {
  return (
    <div
      className={cn(
        label !== current
          ? "bg-in-active bg-muted-foreground"
          : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "p-[2px] rounded-xl overflow-hidden"
      )}
    >
      <div
        className={cn(
          landing && "radial--gradient--p ",
          "flex flex-col rounded-xl pl-5 py-5 pr-10 bg-black/90"
        )}
      >
        {landing ? (
          <h2 className="2xl">
            {label === "PRO" && "Premium Plan"}
            {label === "FREE" && "Standard"}
          </h2>
        ) : (
          <h2 className="text-2xl">
            {label === current
              ? "Your Current Plan"
              : current === "PRO"
                ? "Downgrade"
                : "Upgrade"}
          </h2>
        )}
        <p className="text-muted-foreground text-sm mb-2">
          {/* focus on content creation and let us take care of the rest! */}
          This is what your plan covers for automations and AI features
        </p>

        {label === "PRO" ? (
          <span className="bg-gradient-to-r text-3xl from-indigo-500 via-purple-500 to-pink-500 font-bold bg-clip-text text-transparent">
            SmartAI
          </span>
        ) : (
          <p className="font-bold mt-2text-muted-foreground">Standard</p>
        )}

        {label === "PRO" ? (
          <p className="mb-2">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="text-xl mb-2">Free</p>
        )}

        {PLANS[label === "PRO" ? 1 : 0].features.map((feature) => (
          <p key={feature} className="mt-2 text-muted-foreground flex gap-2">
            <CheckCircle color="#3b82f6" />
            {feature}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              "rounded-full mt-5 cursor-pointer",
              label === "PRO"
                ? "bg-gradient-to-br from-indigo-500 to-pink-500 via-purple-500 text-white"
                : "bg-black/90 text-white hover:text-black/80"
            )}
          >
            {label === current
              ? "Get Started"
              : current === "PRO"
                ? "Free"
                : "Get Started"}
          </Button>
        ) : (
          <Button
            className="mt-5 rounded-full bg-black/80 text-white hover:text-black-80"
            disabled={label === current}
          >
            {label === current
              ? "Active"
              : current === "PRO"
                ? "Downgrade"
                : "Upgrade"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default PaymentCard;
