import { features } from "process";

export const PROUDCT_CATEGORIES = [
  {
    lable: "UI Kits ",
    value: "ui_kits" as const,
    features: [
      { name: "editor picks", href: "/#", imageSrc: "/nav/ui-kits/mixed.jpg" },
      { name: "New Arrivals", href: "/#", imageSrc: "/nav/ui-kits/blue.jpg" },
      { name: "Best Sellers", href: "/#", imageSrc: "/nav/ui-kits/purple.jpg" },
    ],
  },
  {
    lable: "Icons",
    value: "icons" as const,
    features: [
      {
        name: "Favorite Icon Picks",
        href: "/#",
        imageSrc: "/nav/icons/picks.jpg",
      },
      { name: "New Arrivals", href: "/#", imageSrc: "/nav/icons/new.jpg" },
      {
        name: "Best Sellers",
        href: "/#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
