import Image from "next/image";
import {
  ButtonHTMLAttributes,
  ElementType,
  SVGAttributes,
  useState,
} from "react";
import {
  type BadgeType,
  type MenuOption,
  type MenuOptionItem,
  type MenuOptions,
} from "./menuOptionInterfaces";
import { Separator } from "../uiShadCn/separator";
import * as Collapsible from "@radix-ui/react-collapsible";
import { CaretDownIcon } from "@radix-ui/react-icons";

export type IconWithBandagePropos = ButtonHTMLAttributes<HTMLOrSVGElement> & {
  Icon: ElementType<SVGAttributes<SVGElement>>;
  hasBadge: boolean;
  badgeValue?: number | string | null;
  badgeType?: BadgeType;
};

function IconWithBandage({
  Icon,
  hasBadge,
  badgeValue,
  badgeType,
  ...props
}: IconWithBandagePropos) {
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

function ItemMenu({ itemMenu }: { itemMenu: MenuOptionItem }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {itemMenu.subOptions?.length ? (
        <Collapsible.Root
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <Collapsible.Trigger className="w-full">
            <div className="text-sm flex items-center justify-between">
              <div className="flex items-center">
                <IconWithBandage
                  Icon={itemMenu.icon}
                  hasBadge={itemMenu.hasBadge}
                  badgeValue={itemMenu.badgeValue}
                  badgeType={itemMenu.badgeType}
                />
                {itemMenu.name}
              </div>
              <div className="pr-1">
                <CaretDownIcon />
              </div>
            </div>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {itemMenu.subOptions.map((currentItem) => {
              return (
                <div
                  className="flex items-center justify-start py-2 pl-2"
                  key={currentItem.name}
                >
                  <ItemMenu key={currentItem.name} itemMenu={currentItem} />
                </div>
              );
            })}
          </Collapsible.Content>
        </Collapsible.Root>
      ) : (
        <a href={itemMenu.path} className="text-sm flex items-center">
          <IconWithBandage
            Icon={itemMenu.icon}
            hasBadge={itemMenu.hasBadge}
            badgeValue={itemMenu.badgeValue}
            badgeType={itemMenu.badgeType}
          />
          {itemMenu.name}
        </a>
      )}
    </>
  );
}

export function SidebarMenu({ menuOptions }: { menuOptions: MenuOptions }) {
  return (
    <div className="h-screen">
      <div id="aside-menu" className="max-w-[250px] border-r p-1">
        <div id="menu" className="flex items-center justify-start p-2 mb-1 ">
          <Image
            src="/logo.svg"
            alt="Bots4Whatsapp"
            width={45}
            height={45}
            className="pr-2"
          />
          <div className="flex flex-col items-center leading-4 text-sm font-extrabold  text-[#2B3F3E]">
            <div className="">
              Bots<span className="text-[#738383]">4</span>Whatsapp
            </div>
            <div className="font-semibold text-[#738383]">Admin Panel</div>
          </div>
        </div>
        <Separator />
        <div id="menu-items" className="p-2">
          {menuOptions.map((menuOption: MenuOption) => {
            return (
              <div className="" key={menuOption.category}>
                <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight my-4 pl-3">
                  {menuOption.category}
                </h2>
                <ul>
                  {menuOption.options.map((currentItem: MenuOptionItem) => {
                    return (
                      <li
                        className={`justify-start p-2 pl-3 rounded-sm hover:bg-slate-100 ${
                          currentItem.selected && "bg-slate-100"
                        }`}
                        key={currentItem.name}
                      >
                        <ItemMenu
                          key={currentItem.name}
                          itemMenu={currentItem}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
