import { DashBoardIcon } from "@/components/icons";
import { MenuOptions } from "./menuOptionInterfaces";

export const defaultMenuOptions = [
  {
    category: "Users",
    permissions: ["root"],
    options: [
      {
        name: "Manage",
        path: "/users",
        icon: DashBoardIcon,
        hasBadge: false,
        permissions: ["root"],
      },
      {
        name: "Permissions",
        path: "/permissions",
        icon: DashBoardIcon,
        hasBadge: false,
        permissions: ["root"],
      },
    ],
  },
  {
    category: "Bots",
    options: [
      {
        name: "Manage",
        path: "/bots",
        icon: DashBoardIcon,
        hasBadge: false,
        permissions: ["root"],
      },
      {
        name: "flows",
        path: "bots/flows",
        icon: DashBoardIcon,
        hasBadge: false,
      },
      {
        name: "Triggers",
        path: "/bots/triggers",
        icon: DashBoardIcon,
        hasBadge: false,
      },
      {
        name: "Actions",
        path: "/bots/actions",
        icon: DashBoardIcon,
        hasBadge: false,
      },
    ],
  },
  {
    category: "WhatsApp",
    options: [
      {
        name: "Connections",
        path: "/whatsapp/connections",
        icon: DashBoardIcon,
        hasBadge: false,
        selected: true,
        permissions: ["root"],
      },
      {
        name: "Messages",
        icon: DashBoardIcon,
        hasBadge: true,
        badgeType: "info",
        badgeValue: "+99",
        subOptions: [
          {
            name: "Home",
            path: "/whatsapp/messages/home",
            icon: DashBoardIcon,
            hasBadge: true,
            badgeType: "info",
          },
          {
            name: "Scheduled",
            path: "/whatsapp/messages/scheduled",
            icon: DashBoardIcon,
            hasBadge: false,
          },
          {
            name: "Triggers",
            path: "/whatsapp/messages/triggers",
            icon: DashBoardIcon,
            hasBadge: false,
          },
          {
            name: "Shortcuts",
            path: "/whatsapp/messages/shortcuts",
            icon: DashBoardIcon,
            hasBadge: false,
            subOptions: [
              {
                name: "Scheduled",
                path: "/whatsapp/messages/scheduled",
                icon: DashBoardIcon,
                hasBadge: false,
              },
              {
                name: "Triggers",
                path: "/whatsapp/messages/triggers",
                icon: DashBoardIcon,
                hasBadge: false,
                selected: true,
              },
            ],
          },
          {
            name: "Configuration",
            path: "/whatsapp/messages/configuration",
            icon: DashBoardIcon,
            hasBadge: false,
          },
        ],
      },
      {
        name: "Contacts",
        path: "/whatsapp/contacts",
        icon: DashBoardIcon,
        hasBadge: false,
      },
      {
        name: "Chats",
        path: "/whatsapp/chats",
        icon: DashBoardIcon,
        hasBadge: false,
      },
    ],
  },
] as MenuOptions;
