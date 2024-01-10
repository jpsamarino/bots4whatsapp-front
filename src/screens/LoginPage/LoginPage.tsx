"use client";
import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordInput/PasswordInput";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/uiShadCn/card";
import { Checkbox } from "@/components/uiShadCn/checkbox";
import { Input } from "@/components/uiShadCn/input";
import { Label } from "@/components/uiShadCn/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/uiShadCn/tabs";
import CardLoginLocalEnv from "./CardLoginLocalEnv/CardLoginLocalEnv";
import CardLoginRemoteEnv from "./CardLoginRemoteEnv/CardLoginRemoteEnv";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-row flex-wrap justify-center content-center">
      <div className="w-[400px] flex flex-col items-center py-5">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-[#2B3F3E]">
          Bots<span className="text-[#738383]">4</span>Whatsapp
        </h1>
        <h2 className="text-[#738383] text-xl font-semibold lg:text-2xl">
          Admin Panel
        </h2>
        <div className="w-[240px]"></div>
        <Image
          className="relative py-4 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert lg:w-[240px]"
          src="/logo.svg"
          alt="bots4whatspp Logo"
          width={140}
          height={140}
        ></Image>
      </div>
      <Tabs defaultValue="local" className="w-[400px] mx-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="local">Local Env</TabsTrigger>
          <TabsTrigger value="remote">Remote Env</TabsTrigger>
        </TabsList>
        <TabsContent value="local">
          <CardLoginLocalEnv />
        </TabsContent>
        <TabsContent value="remote">
          <CardLoginRemoteEnv />
        </TabsContent>
      </Tabs>
    </div>
  );
}
