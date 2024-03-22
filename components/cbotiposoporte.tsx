import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {pryTipoSoporte} from "@/data/dtTipoSoporte";

const cboTipoSoporte: React.FC = () => {
    const variants = ["bordered"];
    return (
        <div className="w-full flex flex-col gap-4">
          {variants.map((variant) => (
            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Select
                //variant={variant}
                label="Tipo de soporte"
                placeholder="Seleccione un tipo de soporte"
                className="max-w-xs"
                //isMultiline={true}
              >
                {pryTipoSoporte.map((tipo) => (
                  <SelectItem key={tipo.value} value={tipo.value}>
                    {tipo.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          ))}  
        </div>  
      );
  };
  
  export default cboTipoSoporte;