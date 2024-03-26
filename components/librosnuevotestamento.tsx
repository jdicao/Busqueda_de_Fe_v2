import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

// Definir una interfaz para los datos de los libros antiguos
interface LibrosNuevo {
  abreviacion: string;
  id_libro: number;
  nombre: string;
  qnt_capitulos: number;
}

export default function Librosnuevotestamento() {
  const [librosNuevo, setLibrosNuevo] = useState<LibrosNuevo[]>([]);

  useEffect(() => {
    fetch("https://busqueda-back.onrender.com/api/libros_nuevo")
      .then((response) => response.json())
      .then((data) => setLibrosNuevo(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-6">
      {librosNuevo.map((item, index) => (
        <Card
          className="w-full h-full bg-gradient-to-r from-lime-100"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardHeader className="absolute top-1 w-full flex flex-col items-start p-2 border-t-1 border-zinc-100/50 z-10">
            <p className="text-tiny text-black uppercase font-bold">
              <b>{item.abreviacion}</b>
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
      ))}
    </div>
  );
}
