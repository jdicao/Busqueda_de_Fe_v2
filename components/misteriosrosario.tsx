import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function MisteriosRosario() {
  return (
    <div className='flex flex-col items-center justify-center'>
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

      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Misterios Gozosos"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="/imagenes/gozosos_200.jpg"
            />
          }
          subtitle="Lunes y Sábado"
          title="Gozosos"
        >
          <section className="mr-10 ml-10">
            {/* <Librosbuscarnombre></Librosbuscarnombre> */}
          </section>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Misterios Luminosos"
          className="text-orange-600"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="/imagenes/luminosos_200.jpg"
            />
          }
          subtitle="Jueves"
          title="Luminosos"
        >
          <section className="mr-10 ml-10">
            {/* <Librosantiguotestamento></Librosantiguotestamento> */}
          </section>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Misterios Dolorosos"
          startContent={
            <Avatar
              isBordered
              color="danger"
              radius="lg"
              src="/imagenes/dolorosos_200.jpg"
            />
          }
          subtitle="Martes y Viernes"
          title="Dolorosos"
        >
          <section className="mr-10 ml-10">
            {/* <Librosnuevotestamento></Librosnuevotestamento> */}
          </section>
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Misterios Gloriosos"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="/imagenes/gloriosos_200.jpg"
            />
          }
          subtitle="Miércoles y Domingo"
          title="Gloriosos"
        >
          <section className="mr-10 ml-10">
            {/* <Librosnuevotestamento></Librosnuevotestamento> */}
          </section>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
