import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import BusquedaLibros from "@/components/busquedalibros";


export default function libros() {
    return (
      <DefaultLayout>
        <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col items-center justify-center gap-4 py-0 md:py-0 mt-0">
          <div className="inline-block font-bold text-center justify-center ">
            <h4 className={subtitle({ class: "mt-2 text-orange-500" })}>
              Búsqueda de Libros
            </h4>
          </div>
        </section>
  
        <BusquedaLibros></BusquedaLibros>

      </DefaultLayout>
    );
  }
  