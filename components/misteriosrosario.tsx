import React from "react";
import { Accordion, AccordionItem, Avatar, Tab, Tabs } from "@nextui-org/react";

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function MisteriosRosario() {
  return (
    <div className="flex flex-col items-center justify-center">
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
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    Primero Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    Segundo Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    Tercero Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    Cuarto Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>       
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    Quinto Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>                        
            </Tabs>
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
