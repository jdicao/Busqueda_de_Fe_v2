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
                    El ángel Gabriel es enviado a Nazaret a una virgen llamada
                    María, desposada con José. (v. 26-27) El ángel la saluda y
                    le dice que ha hallado gracia ante Dios y que concebirá un
                    hijo al que llamará Jesús. (v. 28) Jesús será grande e Hijo
                    del Altísimo, y Dios le dará el trono de David, su padre.(v.
                    32) María, perpleja, pregunta cómo puede ser esto si es
                    virgen. (v. 34) El ángel le explica que el Espíritu Santo
                    descenderá sobre ella y la cubrirá con su sombra, y por eso
                    el Santo que nacerá será llamado Hijo de Dios. (v. 35) Le da
                    como ejemplo a su pariente Isabel, que también está
                    embarazada a pesar de su vejez. (v. 36) María, aceptando la
                    voluntad de Dios, exclama: 'He aquí la sierva del Señor,
                    hágase en mí según tu palabra. (v. 38)
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Visitación de María a su prima Isabel
                    </div>
                    En cuanto Isabel oye el saludo de María, el niño salta de
                    gozo en su vientre. (v. 41) Isabel, llena del Espíritu
                    Santo, bendice a María y al fruto de su vientre, y llama a
                    Jesús 'Señor'. (v. 42-43) María canta un cántico de alabanza
                    a Dios por su misericordia y su poder. (v. 46-55) Isabel
                    declara que María es bienaventurada por haber creído en la
                    promesa de Dios. (v. 45) María permanece con Isabel unos
                    tres meses y luego regresa a su casa. (v. 56)
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    Tercero Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    Cuarto Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    Quinto Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
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
