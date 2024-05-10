"use client";

import { Button } from "@/components/ui/button";
import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

// import Logo from "./logo";

const components: { title: string; description: string }[] = [
  {
    title: "Frozen",

    description:
      "Recommended template for most use cases. Includes all the components you need to get started.",
  },
  {
    title: "Swift",

    description:
      "A template with a minimal set of components. Use this template if you want to build your own components.",
  },
  {
    title: "Tuscany",

    description:
      "Advanced template with more components and features. Use this template if you want to build a complex UI.",
  },
  {
    title: "Amber",

    description: "Great for building a marketing or landing page.",
  },
  {
    title: "Tide",

    description:
      "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
  },
  {
    title: "Mint",

    description:
      "Nice template for building a blog or a content-heavy website.",
  },
];

export function NavigationMenuBar() {
  return (
    <div className="flex justify-center items-center">
      {" "}
      {/* Add justify-center class */}
      <NavigationMenu className="items-center">
        <NavigationMenuList className="hidden md:flex md:space-x-4">
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className="
              font-medium"
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/#about-section" legacyBehavior passHref>
                <NavigationMenuLink
                  className="
              font-medium"
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/#about-section" legacyBehavior passHref>
                <NavigationMenuLink
                  className="
              font-medium"
                >
                  Community
                </NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="text-md" variant="ghost">
              <Link href="/#carousel" legacyBehavior passHref>
                <NavigationMenuLink
                  className="
              font-medium"
                >
                  Hackathons
                </NavigationMenuLink>
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none items-center">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground items-center justify-center">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
