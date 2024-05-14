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
                    <div className="font-bold">
                      La Anunciación del Ángel a María
                    </div>
                    Al sexto mes, el ángel Gabriel fue enviado por Dios a una
                    ciudad de Galilea llamada Nazaret, a una virgen desposada
                    con un hombre llamado José, de la casa de David; el nombre
                    de la virgen era María. Y entrando, le dijo: «Alégrate,
                    llena de gracia, el Señor está contigo» (Lucas 1:26-28).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Visitación de María a su prima Isabel
                    </div>
                    En aquellos días, María se levantó y se fue apresuradamente
                    a la región montañosa, a una ciudad de Judá; entró en casa
                    de Zacarías y saludó a Isabel. Y en cuanto Isabel oyó el
                    saludo de María, el niño saltó de gozo en su seno, e Isabel
                    quedó llena del Espíritu Santo (Lucas 1:39-41).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Nacimiento de Jesús en Belén
                    </div>
                    Y aconteció que, mientras estaban allí, se le cumplieron los
                    días de su alumbramiento. Y dio a luz a su hijo primogénito,
                    lo envolvió en pañales y lo acostó en un pesebre, porque no
                    había lugar para ellos en la posada (Lucas 2:6-7).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Presentación de Jesús en el Templo
                    </div>
                    Cuando se cumplieron los días de la purificación de ellos,
                    según la ley de Moisés, le trajeron a Jerusalén para
                    presentarle al Señor, como está escrito en la ley del Señor:
                    Todo varón primogénito será consagrado al Señor (Lucas
                    2:22-23).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Niño Jesús Perdido y Hallado en el Templo
                    </div>
                    Al verlo, se asombraron, y su madre le dijo: «Hijo, ¿por qué
                    nos has hecho esto? Tu padre y yo te hemos estado buscando
                    llenos de angustia.» Él les respondió: «¿Por qué me
                    buscaban? ¿No sabían que tengo que estar en la casa de mi
                    Padre?» (Lucas 2:48-49).
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
