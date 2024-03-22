import React from "react";
import {Input} from "@nextui-org/react";

const lblMensajeSaldo: React.FC = () => {
  return (
    <Input
      isReadOnly
      type="Saldo de horas"
      label="Saldo actual de horas"
      variant="bordered"
      defaultValue="Horas contratadas: 20  Horas consumidas: 0"
      className="max-w-xs"
    />
  );
};

export default lblMensajeSaldo;