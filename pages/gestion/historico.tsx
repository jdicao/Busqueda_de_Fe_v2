import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

export default function historico() {
    return (
      <DefaultLayout>
        <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col items-center justify-center gap-4 py-0 md:py-0 mt-4">
          <div className="inline-block font-bold text-center justify-center">
            <h4 className={subtitle({ class: "mt-4 text-pink-500" })}>
              Consulta de solicitudes históricas
            </h4>
          </div>
        </section>
  
      </DefaultLayout>
    );
  }
  