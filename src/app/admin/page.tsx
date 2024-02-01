"use client";
import Image from "next/image";
import { Menu } from "./component/menu";
import { Separator } from "@/components/uiShadCn/separator";
import { EyeOpenIcon, CaretDownIcon } from "@radix-ui/react-icons";
import { DashBoardIcon } from "@/components/icons/DashBoardIcon";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";

export default function Admin() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="h-screen">
      <div className="md:hidden">ghghjghghjgh</div>
      <div className="hidden md:block">
        {/* <Menu /> */}
        <div className="border-t">
          <div className="bg-background">
            <div id="aside-menu" className="w-[250px] border-r p-1">
              <div
                id="menu"
                className="flex items-center justify-start p-2 mb-1 "
              >
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
                  <div className="font-semibold text-[#738383]">
                    Admin Panel
                  </div>
                </div>
              </div>
              <Separator />
              <div id="menu-items" className="p-2">
                <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight my-4 pl-3">
                  Api Users
                </h2>
                <ul>
                  <li className="flex items-center justify-start p-2 pl-3">
                    <div className="relative">
                      <DashBoardIcon />
                      {/* create a icon over icon with a number */}
                      <span className="absolute text-xs rounded-full bottom-2 left-2 bg-[--error] align-top bg-opacity-70 text-white px-[0.27rem] ">
                        1
                      </span>
                    </div>
                    <a href="/admin/dashboard" className="text-sm">
                      Manage Users
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2 bg-slate-100 rounded-sm pl-3">
                    <DashBoardIcon />
                    <a href="/admin/bots" className="text-sm">
                      Permisions
                    </a>
                  </li>
                </ul>
                <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight my-4 pl-3">
                  Manage Bots
                </h2>
                <ul>
                  <li className="flex items-center justify-start p-2 pl-3">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Add New Bot
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2 pl-3">
                    <DashBoardIcon />
                    <a href="/admin/bots" className="text-sm">
                      Config Bots
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2 pl-3">
                    <DashBoardIcon />
                    <a href="#" className="text-sm">
                      Bots Flow
                    </a>
                  </li>
                  <li className="hover:bg-slate-50 rounded-sm">
                    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
                      <Collapsible.Trigger className="w-full">
                        <div className="flex items-center justify-between p-2 pl-3">
                          <div className="flex items-center">
                            <DashBoardIcon />
                            <div className="text-sm">Bots Trigger</div>
                          </div>
                          <div className="pr-3">
                            <CaretDownIcon />
                          </div>
                        </div>
                      </Collapsible.Trigger>
                      <Collapsible.Content>
                        <div className="flex items-center justify-start p-2 pl-5">
                          <DashBoardIcon />
                          <a href="/admin/bots" className="text-sm">
                            Teste !23
                          </a>
                        </div>
                      </Collapsible.Content>
                    </Collapsible.Root>
                  </li>
                </ul>
                <h2 className="mb-2 px-1 text-lg font-semibold tracking-tight my-4">
                  WhatsApp
                </h2>
                <ul>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Connections
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Messages Home
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Messages Schedules
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Messages Triggers
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Messages Shortcuts
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/dashboard" className="text-sm">
                      Messages Configs
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/bots" className="text-sm">
                      Contacts
                    </a>
                  </li>
                  <li className="flex items-center justify-start p-2">
                    <DashBoardIcon />
                    <a href="/admin/bots" className="text-sm">
                      Chats
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
