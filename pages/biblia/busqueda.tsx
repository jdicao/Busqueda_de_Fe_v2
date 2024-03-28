import { useRouter } from "next/router";
import dotenv from "dotenv";
dotenv.config();
import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React, { useState } from "react";
import { SearchIcon } from "@/components/icons";
import {
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Avatar,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";

export default function Buscapasajes() {
  const router = useRouter();
  const openAiApiKey = router.query;
  const [searchTerm, setSearchTerm] = useState("");
  const [responseText, setResponseText] = useState(""); // Estado para almacenar la respuesta del API
  const [text, setText] = useState<string>("");

  console.log("leinda inicial", openAiApiKey);
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Realiza la llamada a la API aquí con el término de búsqueda
      console.log("Llamada a la API con el término de búsqueda:", searchTerm);
      callOpenAIAPI(searchTerm);
    }
  };

  const callOpenAIAPI = (prompt: string) => {
    const apiKey = openAiApiKey.openAiApiKey;
    console.log("Clave", apiKey);

    prompt = "De la biblica catolica: " + prompt;
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
      .then((response) => {
        const responseData = response.data.choices[0].message.content;
        console.log(responseData);
        setResponseText(responseData);
        setText(responseData);
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };
  const searchInput = (
    <Input
      aria-label="Buscar"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Buscar pasaje..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );

  const speakText = () => {
    if ("speechSynthesis" in window) {
      const speechSynthesis = window.speechSynthesis;
      const speechText = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(speechText);
    } else {
      console.error("La API de Web Speech no es compatible con este navegador");
    }
  };

  return (
    <DefaultLayout>
      <section className="sm:basis-full border-1 border-current rounded-lg flex flex-col items-center justify-center gap-4 py-0 md:py-0 mt-0">
        <div className="inline-block font-bold text-center justify-center ">
          <h4 className={subtitle({ class: "mt-2 text-orange-500" })}>
            Búsqueda de Pasajes
          </h4>
        </div>
      </section>
      <section>
        <div className="m-4 columns-1 text-center justify-center">
          <h2 className="underline decoration-solid font-bold m-4">
            Pasaje a buscar
          </h2>
          {searchInput}
        </div>
        <div className="m-4 columns-1 text-center justify-center">
          <div className="w-full text-center justify-center">
            <Textarea
              fullWidth
              label="Respuesta"
              variant="bordered"
              placeholder="Buscando respuesta"
              disableAnimation
              name="txtRespuesta"
              classNames={{
                base: "max-w-xs",
                input: "resize-y min-h-[40px]",
              }}
              value={responseText} // Mostrar la respuesta del API en el Textarea
              onChange={(e) => setResponseText(e.target.value)} // No permitir la edición del Textarea
              //onChange={(e) => speakText(e.target.value)} // No permitir la edición del Textarea
            />
          </div>
        </div>

        <div>
          <h1>Text to Speech</h1>
          <p>Ingresa el texto que deseas que se lea en voz alta:</p>
          <textarea
            rows={4}
            cols={50}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={speakText}>Leer Texto</button>
        </div>
      </section>
    </DefaultLayout>
  );
}
