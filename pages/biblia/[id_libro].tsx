import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { LibroDetalleResponse } from "@/interfaces/libro-detalle";
import DefaultLayout from "@/layouts/default";
import { subtitle } from "@/components/primitives";
import bibliaApi from "@/api/bibliaapi";
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Pagination,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "react-iconly";
import { NextIcon } from "@/controles/NextIcon";
import { PreviousIcon } from "@/controles/PreviousIcon";



// Definir una interfaz para los datos de los libros
interface LibroDetalle {
  abreviacion: string;
  id_libro: number;
  nombre: string;
  qnt_capitulos: number;
}

interface Versos {
  id_versiculo: number;
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
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null); // Estado para almacenar el capítulo seleccionado
  const [originalVerses, setOriginalVerses] = useState<Versos[]>([]); // Copia de respaldo de los versículos originales
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 20;
  const pages = Math.ceil(versoMostrar.length / rowsPerPage);

  //para leer filas
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);

  const handleReadSelectedRows = () => {
    const table = tableRef.current;
    if (!table) return;

    const selectedRows = Array.from(
      table.querySelectorAll("tr[data-selected='true']")
    ) as HTMLTableRowElement[];
    const texts = selectedRows.map((row) => {
      const textCell = row.querySelectorAll("td")[3];
      return textCell ? textCell.textContent || "" : "";
    });
    setSelectedTexts(texts);
    // console.log("Textos seleccionados:", texts);
    startReading(texts);
  };

  const handlePauseContinue = () => {
    setIsPaused((prev) => !prev);
    if (isPaused) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.pause();
    }
  };

  const startReading = (texts: string[]) => {
    window.speechSynthesis.cancel(); // Cancela cualquier lectura en curso
    texts.forEach((text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    });
  };

  useEffect(() => {
    if (id) {
      const idNumber = Number(id);
      fetch(`https://busqueda-fe-api-oa2db432ja-ue.a.run.app/api/libros/${idNumber}`)
        .then((response) => response.json())
        .then((data) => setLibroDetalle(data[0]))
        .catch((error) => console.error("Error fetching data:", error));

      fetch(
        `https://busqueda-fe-api-oa2db432ja-ue.a.run.app/api/versiculos_por_libro/${idNumber}`
      )
        .then((response) => response.json())
        .then((data) => {
          setVersoDetalle(data);
          setOriginalVerses(data); // Guardar la copia de respaldo de los versículos originales
        })
        .catch((error) =>
          console.error("Error fetching data de versos:", error)
        );
    }
  }, [id]);

  if (!id || !libroDetalleMostrar) {
    return null; // O cualquier otra lógica de manejo de estado de carga
  }

  const nextLibro = Number(id) + 1;
  const beforeLibro = Number(id) === 1 ? Number(id) : Number(id) - 1;

  const listaCapitulos = ["Todos"];
  for (let i = 1; i <= libroDetalleMostrar.qnt_capitulos; i++) {
    listaCapitulos.push(String(i));
  }

  const handleSearch = () => {
    if (!selectedChapter) return;
    const idNumber = Number(id);
    fetch(
      `https://busqueda-fe-api-oa2db432ja-ue.a.run.app/api/versiculos_por_libro/${idNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOriginalVerses(data); // Guardar la copia de respaldo de los versículos originales
        // Filtrar los versículos según el número de capítulo seleccionado
        const filteredVerses =
          selectedChapter === "Todos"
            ? data
            : data.filter(
                (verso: { numero_capitulo: number }) =>
                  verso.numero_capitulo === Number(selectedChapter)
              );
        setVersoDetalle(filteredVerses); // Actualizar los versículos mostrados
        setCurrentPage(1); // Resetear la página a 1 después de cambiar los versículos
      })
      .catch((error) => console.error("Error fetching data de versos:", error));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, versoMostrar.length);
  const items = versoMostrar.slice(startIndex, endIndex);

  const handlePageChange = (newPage: React.SetStateAction<number>) => {
    setCurrentPage(newPage);
  };

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

      <section className="mt-2">
        <div className="flex w-full justify-center sm:justify-left flex-wrap md:flex-nowrap gap-4">
          <Link href="/biblia/libros">
            <Button
              radius="full"
              className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg mt-0 sm:mt-1"
              size="lg"
            >
              Libros
            </Button>
          </Link>

          <Select
            className="max-w-xs"
            id="selectNumbers"
            label="Capítulo a buscar"
            variant="bordered"
            onChange={(e) => setSelectedChapter(e.target.value)}
          >
            {listaCapitulos.map((number) => (
              <SelectItem key={number} value={number}>
                {number}
              </SelectItem>
            ))}
          </Select>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg mt-0 sm:mt-1"
            size="lg"
            onClick={handleSearch} // Manejador de clic para el botón de búsqueda
          >
            Buscar
          </Button>
        </div>

        <div className="mt-2 flex justify-between">
          <Table
            ref={tableRef} //lectura
            aria-label="Lista de versiculos"
            selectionMode="multiple"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={currentPage}
                  total={pages}
                  onChange={handlePageChange} // Manejador de cambio de página
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader>
              <TableColumn key="numero_capitulo">Cap.</TableColumn>
              <TableColumn key="num_versiculo">Ver.</TableColumn>
              <TableColumn key="texto">Texto</TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.id_versiculo}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            onClick={handleReadSelectedRows}
            variant="bordered"
            color="primary"
          >
            Leer versículos
          </Button>
          <Button
            onClick={handlePauseContinue}
            variant="bordered"
            color={isPaused ? "success" : "warning"}
          >
            {isPaused ? "Continuar" : "Pausar"}
          </Button>
        </div>
        {isPaused && (
          <div className="mt-4 text-center text-red-500">
            <p>La lectura está pausada.</p>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
};

export default LibroDetail;
