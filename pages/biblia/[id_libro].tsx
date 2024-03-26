import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { LibroDetalleResponse } from "@/interfaces/libro-detalle";
import DefaultLayout from "@/layouts/default";
import { subtitle } from "@/components/primitives";
import bibliaApi from "@/api/bibliaapi";
import React, { useState, useEffect } from "react";
import { Button, Spacer } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "react-iconly";
import { NextIcon } from "@/controles/NextIcon";
import { PreviousIcon } from "@/controles/PreviousIcon";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";

//import { Button,  Loading, Row, Spacer } from "@nextui-org/react";
// Definir una interfaz para los datos de los libros
interface LibroDetalle {
  abreviacion: string;
  id_libro: number;
  nombre: string;
  qnt_capitulos: number;
}

interface Versos {
  numero_capitulo: number;
  num_versiculo: number;
  texto: string;
}

type Props = {
  libro: LibroDetalleResponse;
};

const LibroDetail = ({ libro }: Props) => {
  const router = useRouter();
  const id = router.query.id_libro as string | undefined;
  const [libroDetalleMostrar, setLibroDetalle] = useState<LibroDetalle | null>(
    null
  );
  const [versoMostrar, setVersoDetalle] = useState<Versos[]>([]);

  useEffect(() => {
    if (id) {
      const idNumber = Number(id);
      fetch(`https://busqueda-back.onrender.com/api/libros/${idNumber}`)
        .then((response) => response.json())
        .then((data) => setLibroDetalle(data[0]))
        .catch((error) => console.error("Error fetching data:", error));

      fetch(
        `https://busqueda-back.onrender.com/api/versiculos_por_libro/${idNumber}`
      )
        .then((response) => response.json())
        .then((data) => setVersoDetalle(data))
        .catch((error) =>
          console.error("Error fetching data de versos:", error)
        );
    }
  }, [id]);

  if (!id || !libroDetalleMostrar) {
    return null; // O cualquier otra lógica de manejo de estado de carga
  }
  const idNumber = Number(id);
  const nextLibro = idNumber + 1;

  let beforeLibro: number;

  if (idNumber == 1) {
    beforeLibro = idNumber;
  }
  beforeLibro = idNumber - 1;

  console.log("Libro", idNumber);
  console.log("Anterior", beforeLibro);
  console.log("Siguiente", nextLibro);
  console.log("Versos", versoMostrar);

  return (
    <DefaultLayout>
      <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col  gap-4 py-0 md:py-0 mt-0">
        <div className="m-0 flex justify-between">
          <div>
            <Link href={`/biblia/${beforeLibro}`}>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon width={undefined} height={undefined} />
              </Button>
            </Link>
          </div>

          <div>
            <h4 className={subtitle({ class: "mt-2 mb-0 text-orange-500" })}>
              {libroDetalleMostrar.nombre}
            </h4>
            <h2 className="text-sm">
              {libroDetalleMostrar.qnt_capitulos} Capítulos
            </h2>
          </div>

          <div>
            <Link href={`/biblia/${nextLibro}`}>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextIcon width={undefined} height={undefined} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="m-0 flex justify-between">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Capítulo</TableColumn>
              <TableColumn>Verso</TableColumn>
              <TableColumn>Texto</TableColumn>
            </TableHeader>
            <TableBody>
            {versoMostrar.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.numero_capitulo}</TableCell>
                <TableCell>{item.num_versiculo}</TableCell>
                <TableCell>{item.texto}</TableCell>
              </TableRow>
               ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LibroDetail;