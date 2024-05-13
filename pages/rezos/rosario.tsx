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

      <div className="flex flex-col items-center justify-center">
        <section className="items-center justify-center gap-4 py-4 md:py-10">
          <iframe
            src="https://www.youtube.com/embed/0OowAuKi-B4?si=KcxllQs-xlEQsRaE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

      </div>

      <div className="flex flex-col items-center justify-center">
        <h4 className={subtitle({ class: "mt-2 text-orange-900" })}>
          Misterios
        </h4>
      </div>

      <MisteriosRosario></MisteriosRosario>
    </DefaultLayout>
  );
}
