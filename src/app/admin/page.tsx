"use client";
import React from "react";
import { SidebarMenu } from "@/components/SidebarMenu/SidebarMenu";
import { defaultMenuOptions } from "@/components/SidebarMenu/menuOptions";

export default function Admin() {
  return <SidebarMenu menuOptions={defaultMenuOptions} />;
}
