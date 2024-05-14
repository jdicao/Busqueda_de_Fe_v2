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
            {/* <Librosbuscarnombre></Librosbuscarnombre> */}
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Bautismo de Jesús en el Jordán
                    </div>
                    Y Jesús, después que fue bautizado, salió luego del agua; y
                    he aquí, los cielos le fueron abiertos, y vio al Espíritu de
                    Dios que descendía como paloma y venía sobre Él. Y hubo una
                    voz de los cielos que decía: «Este es mi Hijo amado, en
                    quien tengo complacencia» (Mateo 3:16-17).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Autorrevelación de Jesús en las Bodas de Caná
                    </div>
                    En Caná de Galilea, Jesús asiste a una boda junto a su madre
                    María y sus discípulos. Durante el banquete, se produce un
                    imprevisto: se acaba el vino. María, atenta a la situación,
                    se dirige a Jesús y le comenta: «No tienen vino» (Juan 2:3).
                    Jesús, con una respuesta que anticipa su naturaleza divina,
                    le responde: «Mujer, ¿qué tengo yo que ver contigo? Todavía
                    no ha llegado mi hora» (Juan 2:4).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Anuncio del Reino de Dios
                    </div>
                    Después que Juan fue encarcelado, Jesús vino a Galilea
                    predicando el evangelio del reino de Dios, y diciendo: «El
                    tiempo se ha cumplido, y el reino de Dios se ha acercado;
                    arrepentíos, y creed en el evangelio» (Marcos 1:14-15).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Transfiguración de Jesús</div>
                    Mientras Él aún hablaba, una nube de luz los cubrió; y he
                    aquí, una voz desde la nube, que decía: «Este es mi Hijo
                    amado, en quien tengo complacencia; a Él oíd» (Mateo 17:5).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Institución de la Eucaristía
                    </div>
                    Y tomó el pan y dio gracias, y lo partió y les dio,
                    diciendo: «Esto es mi cuerpo, que por vosotros es dado;
                    haced esto en memoria de mí.» De igual manera, después que
                    hubo cenado, tomó la copa, diciendo: «Esta copa es el nuevo
                    pacto en mi sangre, que por vosotros se derrama» (Lucas
                    22:19-20).
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
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
            {/* <Librosbuscarnombre></Librosbuscarnombre> */}
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Oración de Jesús en el Huerto de Getsemaní
                    </div>
                    Y adelantándose un poco, se postró sobre su rostro, orando y
                    diciendo: «Padre mío, si es posible, pase de mí esta copa;
                    pero no sea como yo quiero, sino como tú.» (Mateo 26:39).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Flagelación de Jesús</div>
                    Entonces Pilato tomó a Jesús y le azotó. (Juan 19:1).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Coronación de Espinas</div>Y
                    habiéndole tejido una corona de espinas, se la pusieron
                    sobre la cabeza, y una caña en su mano derecha; y
                    arrodillándose delante de Él, le escarnecían, diciendo:
                    «¡Salve, Rey de los judíos!» (Mateo 27:29).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      Jesús con la Cruz a Cuestas Camino al Calvario
                    </div>
                    Y Él, cargando su cruz, salió al lugar llamado de la
                    Calavera, y en hebreo, Gólgota. (Juan 19:17).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Crucifixión y Muerte de Jesús
                    </div>
                    Y cuando llegaron al lugar llamado de la Calavera, le
                    crucificaron allí, y a los malhechores, uno a la derecha y
                    otro a la izquierda. (Lucas 23:33).
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
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
            {/* <Librosbuscarnombre></Librosbuscarnombre> */}
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Resurrección de Jesús</div>
                    El ángel dijo a las mujeres: «No temáis vosotras; porque yo
                    sé que buscáis a Jesús, el que fue crucificado. No está
                    aquí, pues ha resucitado, como dijo. Venid, ved el lugar
                    donde fue puesto el Señor» (Mateo 28:5-6).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Ascensión de Jesús al Cielo
                    </div>
                    Jesús dijo a sus discípulos: Sabed que yo estoy con vosotros
                    todos los días hasta el fin del mundo. El Señor Jesús,
                    después de hablarles, ascendió a los cielos y se sentó a la
                    derecha de Dios (Mateo 28:20; Marcos 16:19)
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Venida del Espíritu Santo en Pentecostés
                    </div>
                    De repente, un ruido del cielo, como de un viento recio,
                    resonó en toda la casa donde estaban los discípulos. Vieron
                    aparecer unas lenguas, como llamaradas, que se repartían
                    posándose encima de cada uno. Se llenaron todos de Espíritu
                    Santo (Hechos 2:1-4).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Asunción de la Virgen María al Cielo
                    </div>
                    María dijo: Me felicitarán todas las generaciones, porque el
                    Poderoso ha hecho obras grandes por mí. (Lucas 1:48-49).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Coronación de María como Reina del Cielo y de la Tierra
                    </div>
                    Una gran señal apareció en el cielo: una Mujer, vestida de
                    sol, con la luna bajo sus pies y una corona de doce
                    estrellas sobre su cabeza. Y fue arrojado el gran dragón, la
                    Serpiente antigua, el llamado diablo y satanás (Apocalipsis
                    12:1-9)
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </section>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
