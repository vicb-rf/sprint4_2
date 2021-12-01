# ## Entrega 4.2: Node REST + DB + JWT

Instalar los paquetes npm:

	>npm install

Todas las pruebas son realizadas usando Postman


# Nivel 1
Modificar el archivo .env  de acuerdo a los parametros de tu base de datos Mongo.
Ejecutar la aplicacion con:

	>npm run mongo
	

# Nivel 2

Modificar el archivo config.json,  de acuerdo a los parametros de tu base de datos Mysql.
Ejecutar la aplicacion con:

	>npm run mysql


# Nivel 3

En el archivo config.json puedes modificar el usuario y contraseña para la autenticacion.
Acceder al endpoint:

	localhost:4000/login

En el Body pasar:

	{
	"username": "admin",
	"password": 1234
	}
	
Obtendremos el token.
Pasar el token en todas la URL como x-token en el apartado Headers.
