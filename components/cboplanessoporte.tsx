import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { planesCliente } from "@/data/dtInfoCliente";

const cboPlanesCliente: React.FC = () => {
    const variants = ["bordered"];
    return (
        <div className="w-full flex flex-col gap-4">
          {variants.map((variant) => (
            <div key={variant} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Select
                //variant={variant}
                label="Planes activos"
                placeholder="Seleccione un plan de soporte"
                className="max-w-xs"
                isMultiline={true}
              >
                {planesCliente.map((plan) => (
                  <SelectItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          ))}  
        </div>  
      );
};

export default cboPlanesCliente;
