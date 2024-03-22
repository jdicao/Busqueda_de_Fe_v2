import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {pryCliente} from "@/data/dtInfoCliente";

const cboProyectos: React.FC = () => {
  const variants = ["bordered"];
  return (
      <div className="w-full flex flex-col gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select
              //variant={variant}
              label="Proyectos del cliente"
              placeholder="Seleccione un proyecto"
              className="max-w-xs"
              //isMultiline={true}
            >
              {pryCliente.map((pry) => (
                <SelectItem key={pry.value} value={pry.value}>
                  {pry.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        ))}  
      </div>  
    );
  };
  
  export default cboProyectos;