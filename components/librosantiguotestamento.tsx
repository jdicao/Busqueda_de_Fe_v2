import React from "react";
import {dtLibroAntiguo} from "@/data/dtlibrosantiguo";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

export default function Librosantiguotestamento() {
  
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {dtLibroAntiguo.map((item, index) => (
        <Card
          className="w-full h-full bg-gradient-to-r from-orange-100"
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardHeader className="absolute top-1 w-full flex flex-col items-start p-2 border-t-1 border-zinc-100/50 z-10">
            <p className="text-tiny text-black uppercase font-bold">
              <b>{item.abrev}</b>
            </p>
            <h4 className="text-black/60 font-medium text-small">
              <b>{item.capitulos} Capítulos</b>
            </h4>
          </CardHeader>
          <CardBody className="mt-10 lg:ml-7">
            <Image
              shadow="sm"
              radius="lg"
              height={200}
              width={200}
              alt={item.title}
              className="w-full object-cover h-full"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-large justify-between absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.id}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
