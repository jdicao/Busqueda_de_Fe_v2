import { useRouter } from "next/router";
import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React, { useEffect, useState } from "react";
import { SearchIcon } from "@/components/icons";
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
  Textarea,
  Button,
} from "@nextui-org/react";

import MisteriosRosario from "@/components/misteriosrosario";

export default function SantoRosario() {
  return (
    <DefaultLayout>
      <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col items-center justify-center gap-4 py-0 md:py-0 mt-0">
        <div className="inline-block font-bold text-center justify-center ">
          <h4 className={subtitle({ class: "mt-2 text-orange-500" })}>
            Santo Rosario
          </h4>
        </div>
      </section>

      <MisteriosRosario></MisteriosRosario>
    </DefaultLayout>
  );
}
