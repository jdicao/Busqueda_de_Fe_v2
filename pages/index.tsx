import dotenv from "dotenv";
dotenv.config();
//import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { stringify } from "querystring";
import Carousel from "@/components/carruselprincipal";
import Link from "next/link";

const DATA = [
  { image: "/imagenes/crs_1.jpeg" },
  { image: "/imagenes/crs_2.jpeg" },
  { image: "/imagenes/crs_3.jpeg" },
  { image: "/imagenes/crs_4.jpeg" },
];

export default function IndexPage() {
  
  const claveApi = process.env.OPENAI_API_KEY;
  console.log('Clave Api',claveApi);
  //const queryParams = stringify({ openAiApiKey: process.env.OPENAI_API_KEY });
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-2 mt-0 py-0 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Búsqueda de Fe</h1>

          <br />

          <h4 className={subtitle({ class: "mt-4" })}>El Señor es mi Pastor</h4>
        </div>
      </section>

      <section className="items-center justify-center gap-4 py-4 md:py-10">
        <Carousel data={DATA} />
      </section>
      <div className="flex flex-col items-center space-y-8 mt-8">
        <h2 className="text-2xl font-bold text-orange-500">
          Opciones disponibles
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <Link
            href={{
              pathname: "/biblia/busqueda",
              query: { openAiApiKey: claveApi },
            }}
          >
            <Card isFooterBlurred radius="lg" className="border-none flex">
              <Image
                alt="Búsqueda"
                className="object-cover"
                height={200}
                src="./imagenes/Pasajes_320.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">Búsqueda de pasajes</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de nueva solicitud */}

          <Link href="/biblia/libros">
            <Card isFooterBlurred radius="lg" className="border-none flex">
              <Image
                alt="Libros"
                className="object-cover"
                height={200}
                src="./imagenes/libros_2_200.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">Buscar Libros</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de solicitudes abiertas */}

          <Link href="/rezos/rosario">
            <Card isFooterBlurred radius="lg" className="border-none flex">
              <Image
                alt="Santo Rosario"
                className="object-cover"
                height={200}
                src="./imagenes/Rosario_320.jpg"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">Santo Rosario</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de solicitudes abiertas */}
          {/*
          <Link href="/gestion/historico">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Historico"
                className="object-cover"
                height={200}
                src="./planes_sol.png"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">Historial de solicitudes</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          

          <Link href="/gestion/plansoporte">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Plan de soporte"
                className="object-cover"
                height={200}
                src="./plan_soporte_sol.png"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">
                  Gestionar plan de soporte
                </p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
*/}
          {/* fin de solicitudes abiertas */}
        </div>
      </div>
      {/* fin de div principal */}
    </DefaultLayout>
  );
}
