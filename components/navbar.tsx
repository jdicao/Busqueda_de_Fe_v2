//require('dotenv').config();
import React, { useState } from "react";
import {
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import axios from "axios";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, SearchIcon } from "@/components/icons";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

export const Navbar = () => {
  return (
    <NextUINavbar
      isBordered
      maxWidth="xl"
      position="sticky"
      className="bg-orange-600"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="rounded-s-lg gap-3 max-w-fit bg-black">
          <NextLink
            className="box-content flex justify-start items-center gap-1"
            href="/"
          >
            <Image src="/Logo.jpg" width={50} height={50} alt="Logo"></Image>
          </NextLink>
        </NavbarBrand>
        
        <div className="hidden font-semibold font-sans lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
                
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/*           <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link> */}
          <ThemeSwitch />
        </NavbarItem>

        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>*/}

        <NavbarItem className="hidden md:flex">
          <Avatar
            isBordered
            showFallback
            src="https://images.unsplash.com/broken"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/*{searchInput}*/}
        
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 0
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "foreground"
                    : "foreground"
                }
                href= {item.href}
                size="lg"
              >
                {item.label}
              </Link>

              
            </NavbarMenuItem>
          ))}
        </div>
        
      </NavbarMenu>
    </NextUINavbar>
  );
};
