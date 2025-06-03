import AutomationDTBlue from "@/Images/icons/AutomationDTBlue";
import ContactDuoTonBlue from "@/Images/icons/ContactDuoTonBlue";
import HomeDTBlue from "@/Images/icons/HomeDTBlue";
import RocketDTBlue from "@/Images/icons/RocketDTBlue";
import SettingDTBlue from "@/Images/icons/SettingDTBlue";
import React from "react";

export const PAGES_BREADCRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type IconProps = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: IconProps = {
  HOME: <HomeDTBlue color="#3352cc" />,
  AUTOMATIONS: <AutomationDTBlue color="#3352cc" />,
  CONTACTS: <ContactDuoTonBlue />,
  SETTINGS: <SettingDTBlue color="#3352cc" />,
  INTEGRATIONS: <RocketDTBlue color="#3352cc" />,
};

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "$0",
    features: [
      "🚀 Skyrocket engagement with laser-targeted responses",
      "⚡ Instantly automate comment replies to captivate your audience",
      "💰 Transform casual followers into paying customers with smart messaging",
    ],
    cta: "Get Started",
  },
  {
    name: "Smart AI Plan",
    description: "Advanced features for power users",
    price: "$99",
    features: [
      "✨ Everything from Free Plan + premium upgrades",
      "🧠 AI-powered response generation that sounds authentically human",
      "📊 Deep analytics & insights to decode your audience's behavior",
      "🎯 Lightning-fast priority support when you need it most",
      "🎨 Full custom branding to make your presence uniquely yours",
    ],
    cta: "Upgrade Now",
  },
];
