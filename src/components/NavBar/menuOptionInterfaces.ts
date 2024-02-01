import { SVGAttributes } from "react";
import { DashBoardIcon } from "../icons";

export type MenuOptionItem = {
  name: string;
  path?: string;
  icon: SVGAttributes<SVGElement>;
  hasBadge: boolean;
  badgeType?: "info" | "alert" | "error";
  badgeValue?: string | number | null;
  subOptions?: MenuOptionItem[];
  permissions?: string[];
};
export type MenuOption = {
  category: string;
  permissions: string[];
  options: MenuOptionItem[];
};
export type MenuOptions = MenuOption[];
