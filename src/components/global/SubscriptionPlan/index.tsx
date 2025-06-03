import React from "react";

type Props = {
  type: "FREE" | "PRO";
  children: React.ReactNode;
};

const SubscriptionPlan = ({ type, children }: Props) => {
  return <>{children}</>;
};

export default SubscriptionPlan;
