import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
  Button,
} from "@nextui-org/react";

// Definir una interfaz para los datos de los libros antiguos
interface Libro {
  testamento: string;
  abreviacion: string;
  id_libro: number;
  nombre: string;
  qnt_capitulos: number;
}

export default function LibrosBuscarnombre() {
  const [librosBuscar, setLibrosBuscar] = useState<Libro[]>([]);
  const [buscarValor, setBuscarValor] = useState("");

  const handleSearch = () => {
    fetch(`https://busqueda-back.onrender.com/api/librosnombre/${buscarValor}`)
      .then((response) => response.json())
      .then((data) => setLibrosBuscar(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="m-100">
      <div className="flex w-full justify-center sm:justify-left flex-wrap md:flex-nowrap gap-4">
        <Input
          type="text"
          variant="underlined"
          label="Libro"
          placeholder="Ingrese el nombre a buscar"
          value={buscarValor}
          onChange={(e) => setBuscarValor(e.target.value)}
        />
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-0 sm:mt-1"
          size="lg"
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-6">
        {librosBuscar.map((item, index) => (
          <Link
            className="w-full h-full bg-gradient-to-r from-lime-100"
            href={`/biblia/${item.id_libro}`}
            key={index}
          >
            <a className="w-full h-full bg-gradient-to-r from-lime-100">
              <Card
                className="w-full h-full bg-gradient-to-r from-lime-100"
                shadow="sm"
                key={index}
                isPressable
                onPress={() => console.log("item pressed")}
              >
                <CardHeader className="absolute top-1 w-full flex flex-col items-start p-2 border-t-1 border-zinc-100/50 z-10">
                  <p className="text-tiny text-black uppercase font-bold">
                    <b>
                      {item.abreviacion} - {item.testamento}
                    </b>
                  </p>
                  <h4 className="text-black/60 font-medium text-small">
                    <b>{item.qnt_capitulos} Capítulos</b>
                  </h4>
                </CardHeader>
                <CardBody className="mt-10 lg:ml-7">
                  <Image
                    shadow="sm"
                    radius="lg"
                    height={50}
                    width={50}
                    alt={item.nombre}
                    className="w-full h-full"
                    src={`/imagenes/NT_200.jpg`}
                  />
                </CardBody>
                <CardFooter className="text-large justify-between absolute bg-white/80 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <b className="text-orange-600">{item.nombre}</b>
                  <p className="text-default-500">{item.id_libro}</p>
                </CardFooter>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
