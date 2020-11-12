# Prueba Desarrollo CRUD

Repositorio que contiene la aplicación de desarrollo CRUD de prueba. El código esta dividido en 2 paquetes:

- **backend**: que contiene la funcionalidad del backend
- **frontend**: que contiene la funcionalidad del frontend

## Instalación

1. Copiar **backend/example.env** a **backend/.env** y configurar datos de acceso a BD, se realiza mediante archivo de configuración ya que no deben estar presentes en el código datos de conexión
2. Ejecutar `npm install` en la carpeta **backend**
3. Ejecutar `npm install` en la carpeta **frontend**
4. Ejecutar `npm install` en la carpeta **raíz**
5. Ejecutar `npm run build` en la carpeta **raíz**

Despues de realizar esos pasos se puede ejecutar `npm start` en la carpeta raíz para correr el proyecto.

## Uso

Después de terminar la instalación se pueden utilizar los scripts que se encuentran en la carpeta raíz:

- `npm start`: ejecuta el backend y frontend en modo desarrollo, el backend estará disponible en el puerto [8000](http://localhost:8000), el frontend en el puerto [4200](http://localhost:4200)
- `npm start:backend`: ejecuta el backend en modo desarrollo, el backend estará disponible en el puerto [8000](http://localhost:8000)
- `npm start:frontend`: ejecuta el frontend en modo desarrollo, el frontend estará disponible en el puerto [4200](http://localhost:4200)
- `npm run build`: que compilará los paquetes para el despliegue
- `npm run test`: que ejecuta las pruebas