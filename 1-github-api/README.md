# Proyecto API Github
Este proyecto consume la API de Github para retornar los 10 repositorios más populares de una cuenta. El proyecto está hecho en NestJS.

## Instalación
Asegúrate de tener Node Version Manager (nvm) instalado en tu sistema. Puedes instalarlo desde https://github.com/nvm-sh/nvm.

```bash
# Selecciona la versión de Node.js recomendada para el proyecto
nvm use

# Instala las dependencias del proyecto
npm i
```

## Ejecución
En modo desarrollo:

```bash
npm run start:dev
```
En modo producción:
```bash
npm run start:prod
```

## Comandos
| Comando   | Descripción |
| --------- | ----------- |
| build     | Compila el proyecto para producción. |
| format    | Formatea el código fuente con Prettier. |
| start     | Inicia el servidor en modo desarrollo. |
| start:dev | Inicia el servidor en modo desarrollo con supervisión. |
| start:debug | Inicia el servidor en modo desarrollo con depuración. |
| start:prod | Inicia el servidor en modo producción. |
| lint      | Ejecuta ESLint para encontrar errores de sintaxis y estilo. |
| test      | Ejecuta Jest para realizar pruebas unitarias. |
| test:watch | Ejecuta Jest para realizar pruebas unitarias de forma continua. |
| test:cov  | Ejecuta Jest para realizar pruebas unitarias y generar una cobertura de código. |
| test:debug | Ejecuta Jest para realizar pruebas unitarias con depuración. |
| test:e2e  | Ejecuta Jest para realizar pruebas de extremo a extremo. |


## Configuración
El proyecto utiliza un archivo de configuración llamado example.env. Este archivo contiene las siguientes variables:

| Variable          | Valor |
| ----------------- | ----- |
| PORT              | 3000 |
| GITHUB_API_URL    | https://api.github.com |
| HTTP_TIMEOUT      | 5000 |
| HTTP_MAX_REDIRECTS| 5 |

Debes copiar el archivo y renombrarlo como .env

## Docker
El proyecto incluye un archivo Dockerfile para crear un contenedor Docker. Para crear el contenedor, ejecuta el siguiente comando:

```bash
docker build -t github-api:latest .
```

Para iniciar el contenedor, ejecuta el siguiente comando:

```bash
docker run -p 3000:3000 github-api:latest
```

## Uso
Para usar la API, envía una solicitud GET a la siguiente URL:

```bash
http://localhost:3000/api/github/:user
```
Donde ```:user``` es el nombre de usuario de la cuenta de Github.

Por ejemplo, para obtener los 10 repositorios más populares de la cuenta de google, envía la siguiente solicitud:

```bash
curl http://localhost:3000/api/github/google
```
