# Proyecto de equipo - Equipo C10-43-FT-MERN

Este proyecto es una Financial Wallet desarrollada por el equipo C10-43-FT-MERN, que utiliza Vite + React para construir el frontend y un backend construido con tecnología Mongo, ExpressJs, NodeJs.

Fue creada con la finalidad de que los usuarios puedan realizar sus transacciones financieras de manera facil y segura.

El equipo está compuesto por los siguientes miembros:

- Alvis Echeverria: Frontend Developer
- Daniel Villega: Frontend Developer
- Orlando Rodriguez: Backend Developer
- Julieta Visser: Diseño UI/UX
- Constanza Andrada: Diseño UI/UX

## Instalación

Para poder instalar y ejecutar el proyecto, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local:

   ```
   git clone https://github.com/TU_USUARIO/EL_REPO.git
   ```

   Nota: Recuerda reemplazar "TU_USUARIO" y "EL_REPO" con tu usuario de GitHub y el nombre de tu repositorio.

2. Navega al directorio del proyecto:

   ```
   cd EL_REPO
   ```

   Nota: Recuerda reemplazar "EL_REPO" con el nombre de tu repositorio.

3. Instala las dependencias:

   ```
   npm install
   ```

## Iniciar el Frontend

Para iniciar el frontend, sigue los siguientes pasos:

1. Navega al directorio del proyecto:

   ```
   cd EL_REPO/front-end
   ```

   Nota: Recuerda reemplazar "EL_REPO" con el nombre de tu repositorio.

2. Crea un archivo `.env` en el directorio `front-end` y añade lo siguiente:

   ```
   API_BASE_URL=URL Del backend
   ```

   Nota: Reemplaza "URL Del backend" con la dirección del servidor backend.

3. Inicia el servidor de desarrollo:

   ```
   npm run dev
   ```

4. Abre tu navegador web y visita la siguiente dirección:

   ```
   http://localhost:5173
   ```

   Nota: Si tienes algún problema con la dirección, revisa la salida del servidor de desarrollo para verificar la dirección correcta.

## Iniciar el Backend

Para iniciar el backend, sigue los siguientes pasos:

1. Navega al directorio del proyecto:

   ```
   cd EL_REPO/back-end
   ```

   Nota: Recuerda reemplazar "EL_REPO" con el nombre de tu repositorio.

2. Crea un archivo `.env` en el directorio `back-end` y añade lo siguiente:

   ```
   PORT_SERVER=3000
   JWT_SECRET=TU_KEY_JWT
   MONGODB_URL=TU_URL_MONGODB
   STRIPE_KEY=TU_CLAVE_PRIVADA_STRIPE
   ```

   Nota: Reemplaza "TU_KEY_JWT" con la clave secreta que quieras utilizar para firmar los tokens de autenticación JWT. Reemplaza "TU_URL_MONGODB" con la URL de tu base de datos MongoDB. Reemplaza "TU_CLAVE_PRIVADA_STRIPE" con la clave privada de tu cuenta Stripe.

3. Inicia el servidor:

   ```
   npm start
   ```

4. Verifica que el servidor esté corriendo visitando la siguiente dirección:

   ```
   http://localhost:3000
   ```

   ```
   Nota: Si tienes algún problema con la dirección, revisa la salida del servidor para verificar la dirección correcta.
   ```

Espero que estas instrucciones sean útiles para ti. Si tienes alguna pregunta o problema, no dudes en hacérmelo saber. ¡Buena suerte con tu proyecto!
