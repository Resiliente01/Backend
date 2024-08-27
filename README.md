# Dependencias
Instalar las siguientes dependecias:
- npm install
- npm i express
- npm i cors
- npm i nodemon -D
- npm i mysql2
- npm i body-parser
- npm i dotenv -save

# .env
Cambiar a sus necesidades
- PORT = 4000
- HOST_DB = localhost
- PORT_DB = 3306
- USER_DB = root
- PASSWORD_DB = ALANHUEVOs18
- NAME_DB = resiliente


# fly.io commands 
- flyctl machine start e784ee93f1e208 //encender máquina virtual
- flyctl pg connect -a resilientedb  // abrir entorno de la db
- flyctl deploy                       // hacer commit  
- flyctl status                       // ver el estado de la app
- flyctl logs                         // ver la consola de la app 