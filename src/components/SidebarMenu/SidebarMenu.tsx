import Image from "next/image";
import {
  type MenuOption,
  type MenuOptionItem,
  type MenuOptions,
} from "./menuOptionInterfaces";
import { Separator } from "../uiShadCn/separator";
import { ScrollArea } from "../uiShadCn/scroll-area";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { isAllowAcess } from "@/utils/permissionsFunctions";

export function SidebarMenu({
  menuOptions,
  userPermissions,
}: {
  menuOptions: MenuOptions;
  userPermissions: string[];
}) {
  return (
    <div className="h-screen">
      <div
        id="aside-menu"
        className="max-w-[250px] h-full border-r p-1 flex flex-col"
      >
        <div id="menu" className="flex items-center justify-start p-2 mb-1 ">
          <Image
            src="/logo.svg"
            alt="Bots4Whatsapp"
            width={45}
            height={45}
            className="pr-2"
          />
          <div className="flex flex-col items-center leading-4 text-sm font-extrabold  text-[--logo-foreground]">
            <div className="">
              Bots<span className="text-[--logo]">4</span>Whatsapp
            </div>
            <div className="font-semibold text-[--logo]">Admin Panel</div>
          </div>
        </div>
        <Separator />
        <ScrollArea>
          <div id="menu-items" className="p-1.5 font-semibold">
            {menuOptions
              .filter((menuOption: MenuOption) =>
                isAllowAcess(menuOption.permissions, userPermissions)
              )
              .map((menuOption: MenuOption) => {
                return (
                  <div className="" key={menuOption.category}>
                    <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight my-4 pl-3">
                      {menuOption.category}
                    </h2>
                    <ul>
                      {menuOption.options
                        .filter((currentItem: MenuOptionItem) =>
                          isAllowAcess(currentItem.permissions, userPermissions)
                        )
                        .map((currentItem: MenuOptionItem) => {
                          return (
                            <li
                              className={`justify-start`}
                              key={currentItem.name}
                            >
                              <SidebarMenuItem
                                key={currentItem.name}
                                itemMenu={currentItem}
                                userPermissions={userPermissions}
                              />
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
