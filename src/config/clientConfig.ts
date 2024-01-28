"use client;";
import { env } from "@/config/env";

// use a cached instead consult local storage every time
let currentServerUrl: string | null = null;

export const clientConfig = {
  getServerUrl: () => {
    if (currentServerUrl) {
      return currentServerUrl;
    } else if (typeof window === "undefined") {
      return env.LOCALSERVER;
    }
    currentServerUrl = localStorage.getItem("serverUrl") || env.LOCALSERVER;
    return currentServerUrl;
  },
  setServerUrl: (serverUrl: string) => {
    localStorage.setItem("serverUrl", serverUrl);
    currentServerUrl = serverUrl;
  },
};
