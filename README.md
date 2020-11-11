# test-dataCRUD

Pasos para correr correctamente en un ambiente local:

1. Clonar https://github.com/alonsodev/test-dataCRUD.git  (branch: alonso-palacios)

2. Backend

	2.1 ejecutar npm install
	2.2 ejecutar nodemon index
	2.3 Ir al navegador (chrome) http://localhost:8081/ esta url debe dar como resultado en pantalla "Welcome to Service" con esto se sabe que el API Restful está corriendo correctamente.
	
3. Frontend

	3.1 ejecutar npm install
	3.2 ejecutar npm start
	3.3 Ir al navegador (chrome deshabilitar CORS https://alfilatov.com/posts/run-chrome-without-cors/)
	3.4 Ir a la url http://localhost:4200/
	3.5 Deberá cargar un listado de usuarios con la posibilidad de editarlo, agregar, eliminar