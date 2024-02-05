import { useEffect, useState } from "react";
import { type MenuOptionItem } from "./menuOptionInterfaces";
import * as Collapsible from "@radix-ui/react-collapsible";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { IconWithBadage } from "../IconWithBadge";

function deepSearchSelected(itemMenu: MenuOptionItem) {
  if (itemMenu.subOptions?.length) {
    for (const currentItem of itemMenu.subOptions) {
      if (currentItem.selected) {
        return true;
      } else if (currentItem.subOptions?.length) {
        if (deepSearchSelected(currentItem)) {
          return true;
        }
      }
    }
  }
  return itemMenu.selected || false;
}

export function SidebarMenuItem({ itemMenu }: { itemMenu: MenuOptionItem }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const isDeepSelected = deepSearchSelected(itemMenu);
    setIsOpen(isDeepSelected);
  }, [itemMenu]);
  return (
    <>
      {itemMenu.subOptions?.length ? (
        <Collapsible.Root
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <Collapsible.Trigger className="w-full">
            <div className="p-2 pl-3 text-sm flex items-center justify-between">
              <div className="flex items-center">
                <IconWithBadage
                  Icon={itemMenu.icon}
                  hasBadge={itemMenu.hasBadge}
                  badgeValue={itemMenu.badgeValue}
                  badgeType={itemMenu.badgeType}
                />
                {itemMenu.name}
              </div>
              <div className="pr-1">
                <CaretDownIcon
                  className={`transition-transform ${
                    isOpen ? "duration-500 transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {itemMenu.subOptions.map((currentItem) => {
              return (
                <div
                  className="flex items-center justify-start pl-2"
                  key={currentItem.name}
                >
                  <SidebarMenuItem
                    key={currentItem.name}
                    itemMenu={currentItem}
                  />
                </div>
              );
            })}
          </Collapsible.Content>
        </Collapsible.Root>
      ) : (
        <a
          href={itemMenu.path}
          className={`text-sm flex items-center p-2 pl-3 rounded-sm hover:bg-slate-100 w-full ${
            itemMenu.selected && " bg-slate-100"
          }`}
        >
          <IconWithBadage
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
