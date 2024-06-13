import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, Avatar, Tab, Tabs } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function MisteriosRosario() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    const today = new Date().getDay(); // 0 (Domingo) - 6 (Sábado)
    let sections: string[] = [];

    switch (today) {
      case 0: // Domingo
      case 3: // Miércoles
        sections = ["4"];
        break;
      case 1: // Lunes
      case 6: // Sábado
        sections = ["1"];
        break;
      case 2: // Martes
      case 5: // Viernes
        sections = ["3"];
        break;
      case 4: // Jueves
        sections = ["2"];
        break;
      default:
        sections = [];
    }

    setExpandedSections(sections);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Accordion
        selectionMode="multiple"
        // expandedKeys={new Set(expandedSections)}
      >
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
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Anunciación del Ángel a la Santísima Virgen María
                    </div>
                    El ángel, entrando en la presencia de María, le dijo:
                    Alégrate, llena de gracia, el Señor está contigo…Concebirás
                    en tu vientre y darás a luz un hijo, y le pondrás por nombre
                    Jesús. María contestó: Aquí está la esclava del Señor;
                    hágase en mí según tu palabra (Lucas 1, 26-38).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Visitación de la Santísima Virgen María a su prima Santa Isabel
                    </div>
                    María se puso en camino y fue aprisa a la montaña, y saludó
                    a Isabel. Isabel dijo a voz en grito: ¡Bendita tú entre las
                    mujeres y bendito el fruto de tu vientre! Dichosa tú que has
                    creído. María dijo: Proclama mi alma la grandeza del Señor
                    (Lucas 1, 39-56).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Nacimiento de nuestro Señor Jesús en Belén
                    </div>
                    Mientras estaban en Belén, le llegó a María el tiempo del
                    parto y dio a luz a su Hijo primogénito, lo envolvió en
                    pañales y lo acostó en un pesebre, porque no tenían sitio en
                    la posada. Un ángel se apareció a unos pastores y les dijo:
                    Hoy, en la ciudad de David, os ha nacido un Salvador, el
                    Mesías, el Señor (Lucas 2, 1-14).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Presentación de nuestro Señor Jesús en el Templo
                    </div>
                    Los padres de Jesús lo llevaron a Jerusalén para presentarlo
                    al Señor, de acuerdo con lo escrito en la ley del Señor.
                    Simeón lo tomó en brazos y dijo: Ahora, Señor, según tu
                    promesa, puedes dejar a tu siervo irse en paz. Porque mis
                    ojos han visto a tu Salvador (Lucas 2, 22-40).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Santísimo Niño Jesús Perdido y Hallado en el Templo
                    </div>
                    Cuando Jesús cumplió doce años, subieron sus padres con él a
                    Jerusalén por las fiestas de Pascua. Cuando terminó, se
                    volvieron; pero el niño Jesús se quedó en Jerusalén. A los
                    tres días, lo encontraron en el templo, sentado en medio de
                    los maestros (Lucas 2, 41-52).
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
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      El Bautismo de nuestro Señor Jesús en el Jordán
                    </div>
                    Fue Jesús desde Galilea al Jordán y se presentó a Juan para
                    que lo bautizara. Apenas se bautizó Jesús, salió del agua;
                    se abrió el cielo y vio que el Espíritu de Dios bajaba como
                    una paloma y se posó sobre Él. Y vino una voz del cielo que
                    decía: Éste es mi Hijo, el amado, mi predilecto (Mateo 3,
                    13-17).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Autorrevelación de nuestro Señor Jesús en las Bodas de Caná
                    </div>
                    En Caná de Galilea, Jesús asiste a una boda junto a su madre
                    María y sus discípulos. Durante el banquete, se produce un
                    imprevisto: se acaba el vino. María, atenta a la situación,
                    se dirige a Jesús y le comenta: «No tienen vino». Jesús, con
                    una respuesta que anticipa su naturaleza divina, le
                    responde: «Mujer, ¿qué tengo yo que ver contigo? Todavía no
                    ha llegado mi hora» (Juan 2, 3-4).
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
                    arrepentíos, y creed en el evangelio» (Marcos 1, 14-15).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Transfiguración de nuestro Señor Jesús</div>
                    Subió Jesús a una montaña muy alta y se transfiguró delante
                    de Pedro, Santiago y Juan. Su rostro resplandecía como el
                    sol y sus vestidos se volvieron blancos como la luz. Y una
                    voz desde la nube decía: Éste es mi Hijo, el amado, mi
                    predilecto. Escuchadlo (Mateo 17, 1-9).
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
                    pacto en mi sangre, que por vosotros se derrama» (Lucas 22,
                    19-20).
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
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Oración de nuestro Señor Jesús en el Huerto de Getsemaní
                    </div>
                    Jesús se apartó de los discípulos como un tiro de piedra, y,
                    puesto de rodillas, oraba diciendo Padre, si quieres, aparta
                    de mí este cáliz; pero no se haga mi voluntad, sino la tuya.
                    En medio de su angustia oraba con mayor insistencia (Lucas
                    22, 39-42).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Flagelación de nuestro Señor Jesús</div>
                    Todos lo declararon reo de muerte. Algunos se pusieron a
                    escupirle, y tapándole la cara, lo abofeteaban y le decía:
                    Haz de profeta. Y los ciados le daban bofetadas. Pilato tomó
                    a Jesús y mandó que lo azotaran (Marcos 14, 65; Juan 19, 1).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Coronación de Espinas</div>Y
                    Habiéndole tejido una corona de espinas, se la pusieron
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
                      Nuestro Señor Jesús con la Cruz a Cuestas Camino al Calvario
                    </div>
                    Tomaron a Jesús, y él, cargando con la Cruz, salió al sitio
                    llamado de la Calavera. Lo seguía un gran gentío del pueblo,
                    y de mujeres que se daban golpes y lanzaban lamentos por Él
                    (Juan 19, 16-17; Lucas 23, 27).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Crucifixión y Muerte de nuestro Señor Jesús
                    </div>
                    Lo crucificaron a Él y, con Él, a otros dos, uno a cada lado
                    y Jesús en medio. Junto a la cruz de Jesús estaba su Madre.
                    Jesús, al ver a su Madre y cerca al discípulo que tanto
                    quería, dijo a su Madre: Mujer, ahí tienes a tu hijo (Juan
                    19, 18-30).
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
            <Tabs aria-label="Options">
              <Tab key="1" title="1er">
                <Card>
                  <CardBody>
                    <div className="font-bold">La Resurrección de nuestro Señor Jesús</div>
                    El ángel dijo a las mujeres: «No temáis vosotras; porque yo
                    sé que buscáis a Jesús, el que fue crucificado. No está
                    aquí, pues ha resucitado, como dijo. Venid, ved el lugar
                    donde fue puesto el Señor» (Mateo 28, 5-6).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="2" title="2do">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Ascensión de nuestro Señor Jesús al Cielo
                    </div>
                    Jesús dijo a sus discípulos: Sabed que yo estoy con vosotros
                    todos los días hasta el fin del mundo. El Señor Jesús,
                    después de hablarles, ascendió a los cielos y se sentó a la
                    derecha de Dios (Mateo 28, 20; Marcos 16, 19).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="3" title="3ro">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Venida del Espíritu Santo
                    </div>
                    De repente, un ruido del cielo, como de un viento recio,
                    resonó en toda la casa donde estaban los discípulos. Vieron
                    aparecer unas lenguas, como llamaradas, que se repartían
                    posándose encima de cada uno. Se llenaron todos de Espíritu
                    Santo (Hechos 2, 1-4).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="4" title="4to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Asunción de la Satísima Virgen María al Cielo
                    </div>
                    María dijo: Me felicitarán todas las generaciones, porque el
                    Poderoso ha hecho obras grandes por mí. (Lucas 1, 48-49).
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="5" title="5to">
                <Card>
                  <CardBody>
                    <div className="font-bold">
                      La Coronación de la Santísima Virgen María como Reina del Cielo y de la Tierra
                    </div>
                    Una gran señal apareció en el cielo: una Mujer, vestida de
                    sol, con la luna bajo sus pies y una corona de doce
                    estrellas sobre su cabeza. Y fue arrojado el gran dragón, la
                    Serpiente antigua, el llamado diablo y satanás (Apocalipsis
                    12, 1-9).
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
