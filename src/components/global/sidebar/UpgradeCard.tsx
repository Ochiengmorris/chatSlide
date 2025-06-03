import React from "react";
import PaymentButton from "../payment-button";

const UpgradeCard = () => {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm text-[#989CA0]">
        Upgrade to{" "}
        <span className="bg-gradient-to-r from-[#CC38D4] to-[#D064AC] bg-clip-text text-transparent font-bold">
          Smart AI
        </span>
      </span>
      <p className="text-[#9b9ca0] font-light text-sm">
        Get access to all the features including Smart AI and more
      </p>

      <PaymentButton />
    </div>
  );
};

export default UpgradeCard;
