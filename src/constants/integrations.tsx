import InstagramDTBlue from "@/Images/icons/InstagramDTBlue";
import SalesForceDTBlue from "@/Images/icons/SalesForceDTBlue";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description: "Connect your Instagram account to ChatSlide",
    icon: <InstagramDTBlue color="#3352cc" />,
    strategy: "INSTAGRAM", // in future add a function that connects to instagram
  },
  {
    title: "Connect Salesforce",
    description: "Connect your Salesforce account to ChatSlide",
    icon: <SalesForceDTBlue color="#3352cc" />,
    strategy: "CRM",
  },
];
