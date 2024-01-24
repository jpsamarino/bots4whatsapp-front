"use client;";
import { env } from "@/config/env";

// use a cached instead consult local storage every time
let currentServerUrl = localStorage.getItem("serverUrl") || env.LOCALSERVER;

export const clientConfig = {
  getServerUrl: () => {
    return currentServerUrl;
  },
  setServerUrl: (serverUrl: string) => {
    localStorage.setItem("serverUrl", serverUrl);
    currentServerUrl = serverUrl;
  },
};
