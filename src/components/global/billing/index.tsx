import React from "react";
import PaymentCard from "./payment-card";

type Props = {};

const Billing = (props: Props) => {
  //WIP: fetch billing
  return (
    <div className="flex flex-col gap-5 lg:w-10/12 xl:w-8/12 container lg:flex-row w-full">
      <PaymentCard current="PRO" label="PRO" />
    </div>
  );
};

export default Billing;
