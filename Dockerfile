# Usar una imagen base oficial de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que la aplicación va a ejecutarse
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
