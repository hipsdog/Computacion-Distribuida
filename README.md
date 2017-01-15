# Trabajo de Computacion-Distribuida
Aplicación Web con Node.js y MongoDB, y acceso autenticado con facebook, twitter, google y localmente.

## Objetivos
Con este trabajo pretendo conseguir varios objetivos:
  1. Crear una aplicacion web utilizando Node.js en la parte servidora y MongoDB como base de datos
  2. Utilizar EJS para procesar las páginas HTML antes de enviarlas al cliente
  3. Utilizar passport.js para autenticar el acceso co las API de las grandes redes sociales
  4. Vincular la cuentas en una única cuenta para tenenr un perfil completo y único sea cual sea la red utilizada

## Tecnología empleada
De manera lógica, podemos dividir la aplicación en dos partes, Frontend y Backend:
* Frontend: HTML, EJS, CSS y Bootstrap.
* Backend: Node.js, Express.js y MongoDB.
Node.js soporta muchos módulos que implementan funcionalidades de un manera mas cómoda, uno de los módulos mas destacados es Passport.js que nos ayuda a implementar la autenticación tanto local como através de redes sociales. a continuación está la lista completa de los módulos:
      * express
      * ejs
      * mongoose
      * passport
      * passport-local
      * passport-facebook
      * passport-twitter
      * passport-google-oauth
      * connect-flash
      * bcrypt-nodejs
      * morgan
      * body-parser
      * cookie-parser
      * method-override
      * express-session

## Uso del software desarrollado
Para poder utilizar la aplicacion (en windows) tenemos que realizar los siguientes pasos:
  1. instalar Node.js
  2. instalar MongoDB
  4. instalar Git Bash
  5. iniciar MongoDB:
    * ir a **C:\Program Files\MongoDB\Server\3.2\bin**
    * ejecutar en Git Bash: **$ ./mongod**
  6. Descargar u clonar la aplicacion en un directorio
  7. Dentro del directorio y utlizando Git Bash:
    * Para instalar los módulos de **package.json** ejecutamos: **$ npm install**
    * Para lanzar la aplicacion en el servidor ejecutamos: **$ npm start**
  8. Abrimos en un navegador la dirección: **http://localhost:8080/**

## Resultados
El resultado de este trabajo es una aplicacion web sencilla en la que me he centrado en la parte de autenticación, el usuario puede acceder registrandose localmente, u utilizando una de las redes sociales. Más tarde, pude vincular los distintos métodos de autenticacion entre sí, así, en el futuro, sea cual sea su método de autenticación, toda su información será unificada bajo el mismo perfil.

## Conclusiones
Ha sido un trabajo gratificante en el que he aprendido muchas cosas, y he podido alcanzar un buen punto de partida para crear aplicaciones más complejas.
