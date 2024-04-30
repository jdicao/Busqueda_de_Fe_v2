import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Librosantiguotestamento from "./librosantiguotestamento";
import Librosnuevotestamento from "./librosnuevotestamento";
import Librosbuscarnombre from "./librosbuscarnombre";
export default function BusquedaLibros() {
  const defaultContent = "Libros";

  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="3"
        aria-label="Buscar"
        startContent={
          <Avatar
            isBordered
            color="success"
            radius="lg"
            src="/imagenes/Busqueda_2_200.jpg"
          />
        }
        subtitle="Búsqueda por nombre"
        title="Buscar"
      >
        <section className="mr-10 ml-10">
          
          <Librosbuscarnombre></Librosbuscarnombre>

        </section>
      </AccordionItem>
      <AccordionItem
        key="1"
        aria-label="Antiguo Testamento"
        className="text-orange-600"
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="/imagenes/AT_200.jpg"
          />
        }
        subtitle="46 Libros"
        title="Antiguo testamento"
      >
        <section className="mr-10 ml-10">
          <Librosantiguotestamento></Librosantiguotestamento>
        </section>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Nuevo Testamento"
        startContent={
          <Avatar
            isBordered
            color="success"
            radius="lg"
            src="/imagenes/NT_200.jpg"
          />
        }
        subtitle="27 Libros"
        title="Nuevo Testamnto"
      >
        <section className="mr-10 ml-10">
          <Librosnuevotestamento></Librosnuevotestamento>
        </section>
      </AccordionItem>
    </Accordion>
  );
}
