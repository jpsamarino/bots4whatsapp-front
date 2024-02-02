import { SVGAttributes } from "react";

export enum BadgeType {
  info = "info",
  alert = "alert",
  error = "error",
}
export type MenuOptionItem = {
  name: string;
  path?: string;
  icon: (props: SVGAttributes<SVGElement>) => JSX.Element;
  hasBadge: boolean;
  badgeType?: BadgeType;
  badgeValue?: string | number | null;
  selected?: boolean;
  subOptions?: MenuOptionItem[];
  permissions?: string[];
};
export type MenuOption = {
  category: string;
  permissions: string[];
  options: MenuOptionItem[];
};
export type MenuOptions = MenuOption[];
