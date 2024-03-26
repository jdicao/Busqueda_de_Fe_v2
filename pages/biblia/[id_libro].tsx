import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { LibroDetalleResponse } from "@/interfaces/libro-detalle";
import DefaultLayout from "@/layouts/default";
import { subtitle } from "@/components/primitives";
import bibliaApi from "@/api/bibliaapi";
import React, { useState, useEffect } from "react";

//import { Button,  Loading, Row, Spacer } from "@nextui-org/react";
// Definir una interfaz para los datos de los libros 
interface LibroDetalle {
  abreviacion: string;
  id_libro: number;
  nombre: string;
  qnt_capitulos: number;
}

type Props = {
  libro: LibroDetalleResponse;
};

const LibroDetail = ({ libro }: Props) => {
  const router = useRouter();
  const id = router.query.id_libro as string | undefined;
  const [libroDetalleMostrar, setLibroDetalle] = useState<LibroDetalle | null>(null);

  useEffect(() => {
    if (id) {
      const idNumber = Number(id);
      fetch(`https://busqueda-back.onrender.com/api/libros/${idNumber}`)
        .then((response) => response.json())
        .then((data) => setLibroDetalle(data[0]))
        .catch((error) => console.error("Error fetching data:", error));
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

  console.log('Libro',idNumber);
  console.log('Anterior',beforeLibro);
  console.log('Siguiente',nextLibro);

  return (
    <DefaultLayout>
      <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col items-center justify-center gap-4 py-0 md:py-0 mt-0">
        <div className="inline-block font-bold text-center justify-center ">
          <h4 className={subtitle({ class: "mt-2 text-orange-500" })}>
            {libroDetalleMostrar.nombre}
          </h4>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default LibroDetail;

/*


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data } = await bibliaApi.get("/libros");
    const paths = data.map((libro: any) => ({
      params: { id_libro: libro.id_libro.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};
  
  export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const id = ctx.params?.id_libro;
  
    if (!id) {
      return {
        notFound: true,
      };
    }
  
    const { data } = await bibliaApi.get<LibroDetalleResponse>(`/libros/${id}`);
  
    return {
      props: {
        libro: data,
      },
    };
  };
  */