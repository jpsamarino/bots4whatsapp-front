import { ButtonHTMLAttributes, ElementType, SVGAttributes } from "react";
import { BadgeType } from "../SidebarMenu/menuOptionInterfaces";

export type IconWithBadagePropos = ButtonHTMLAttributes<HTMLOrSVGElement> & {
  Icon: ElementType<SVGAttributes<SVGElement>>;
  hasBadge: boolean;
  badgeValue?: number | string | null;
  badgeType?: BadgeType;
};
export function IconWithBadage({
  Icon,
  hasBadge,
  badgeValue,
  badgeType,
  ...props
}: IconWithBadagePropos) {
  return (
    <div className="relative">
      <Icon {...props} />
      {hasBadge && badgeValue && (
        <span className="absolute text-xs rounded-full bottom-2.5 left-2 bg-[--error] align-top text-white px-[0.27rem] ">
          {badgeValue}
        </span>
      )}
    </div>
  );
}
