import AutomationDTBlue from "@/Images/icons/AutomationDTBlue";
import HomeDTBlue from "@/Images/icons/HomeDTBlue";
import RocketDTBlue from "@/Images/icons/RocketDTBlue";
import SettingDTBlue from "@/Images/icons/SettingDTBlue";
import { v4 as uuid } from "uuid";

export type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDTBlue />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDTBlue />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDTBlue />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingDTBlue />,
  },
];
