import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import CboProyectos from "@/components/cboproyectocliente";
import CboTipoSoporte from "@/components/cbotiposoporte";
import CboPlanesSoporte from "@/components/cboplanessoporte";
import LblMensajeSaldo from "@/components/lblmensajesaldohoras";
import { Input, Switch, Textarea, Button} from "@nextui-org/react";

export default function NuevoRegion() {
  return (
    <DefaultLayout>
      <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col items-center justify-center gap-4 py-0 md:py-0 mt-4">
        <div className="inline-block font-bold text-center justify-center">
          <h4 className={subtitle({ class: "mt-4 text-pink-500" })}>
            Ingreso de nueva solicitud
          </h4>
        </div>
      </section>

      <form action="">
        <div className="border-1 border-current justify-center rounded-lg mt-4 bg-teal-10">
          <h3 className="underline decoration-solid font-bold m-4">
            DETALLE DE LA SOLICITUD
          </h3>
          <div className="m-4 columns-2 text-center justify-center">
            <div className="flex items-center">
              <CboProyectos />
            </div>
            <div>
              <CboTipoSoporte></CboTipoSoporte>
            </div>
          </div>
          <h2 className="underline decoration-solid font-bold m-4">
            Plan de soporte
          </h2>
          <div className="m-4 columns-2">
            <div className="w-full">
              <CboPlanesSoporte></CboPlanesSoporte>
              <LblMensajeSaldo />
            </div>
          </div>
          {/* fin de seccion plan de soporte */}

          <h2 className="underline decoration-solid font-bold m-4">
            Datos del usuario funcional del soporte
          </h2>
          <div className="m-4 columns-2 text-center justify-center">
            <div>
              <Input
                isRequired
                type="Nombre:"
                label="Nombre"
                defaultValue=""
                className="max-w-xs"
                name="txtUserFun"
              />
            </div>
            <div>
              <Input
                isRequired
                type="Departamento:"
                label="Departamento"
                defaultValue=""
                className="max-w-xs"
                name="txtDepFun"
              />
            </div>
          </div>
          {/* fin de seccion datos del usuario funcional */}

          <h2 className="underline decoration-solid font-bold m-4">
            Datos del usuario técnico encargado del caso (primera línea de
            soporte de Cliente Pruebas S.A.)
          </h2>
          <div className="m-4 columns-2 text-center justify-center">
            <div>
              <Input
                isRequired
                type="Nombre:"
                label="Nombre"
                defaultValue=""
                className="max-w-xs"
                name="txtUserTec"
              />
            </div>
            <div>
              <Input
                isRequired
                type="Departamento:"
                label="Departamento"
                defaultValue=""
                className="max-w-xs"
                name="txtDepTec"
              />
            </div>
          </div>
          {/* fin de seccion datos del usuario tecnico */}

          <h2 className="underline decoration-solid font-bold m-4">
            Datos del equipo
          </h2>
          <div className="m-4 columns-2 text-center justify-center">
            <div className="flex-col">
              <Textarea
                label="Descripción del equipo"
                variant="bordered"
                placeholder="Detalle las características del equipo"
                disableAnimation
                disableAutosize
                name="txtEquipo"
                classNames={{
                  base: "max-w-xs",
                  input: "resize-y min-h-[40px]",
                }}
              />
            </div>
            <div>
              <div className="m-0 flex mt-4">
                <h4 className="m-0 mr-8">
                  La novedad se presenta en todas las estaciones de trabajo ?
                </h4>
                <Switch size="sm"></Switch>
              </div>
            </div>
          </div>
          {/* fin de seccion datos del equipo */}
          <h2 className="underline decoration-solid font-bold m-4">
            Datos del caso
          </h2>
          <div className="m-4 w-full text-center justify-center">
            <Textarea
              isRequired
              fullWidth
              label="Descripción del caso"
              variant="bordered"
              placeholder="Ingrese la descripción del caso"
              disableAnimation
              disableAutosize
              name="txtCaso"
              classNames={{
                base: "max-w-xs",
                input: "resize-y min-h-[40px]",
              }}
            />
          </div>
          {/* fin de seccion datos del caso */}
          <h2 className="underline decoration-solid font-bold m-4">
            Documentos adjuntos
          </h2>
          <div className="m-4 w-full text-center justify-center">
            <Input
              isRequired
              type="File"
              defaultValue=""
              className="max-w-xs mt-2"
              name="txtFile1"
            />
            <Input
              isClearable
              isRequired
              type="File"
              defaultValue=""
              className="max-w-xs mt-2"
              name="txtFile2"
            />
            <Input
              isClearable
              isRequired
              type="File"
              defaultValue=""
              className="max-w-xs mt-2"
              name="txtFile3"
            />
          </div>
          {/* fin de adjuntos */}

          <div className="m-4">
            <Button color="primary" name="btnRegistrar">Registrar</Button>
          </div>
        </div>
        {/* fin de cuadro del cuerpo */}
      </form>
    </DefaultLayout>
  );
}
