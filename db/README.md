|   _  \      /   \     /      ||  |/  / |  |  |  | |   _  \  
|  |_)  |    /  ^  \   |  ,----'|  '  /  |  |  |  | |  |_)  | 
|   _  <    /  /_\  \  |  |     |    <   |  |  |  | |   ___/  
|  |_)  |  /  _____  \ |  `----.|  .  \  |  `--'  | |  |      
|______/  /__/     \__\ \______||__|\__\  \______/  | _|      


Si necesitan instalar mongo pueden hacerlo por medio de homebrew
	
	$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Despues de haber instalado homebrew se les habilita un nuevo commando llamado brew.
Para instalar mongo solo corran:

	$ brew install mongodb

                   _  _     _            __  _         _       _     
  __      __ __ _ (_)| |_  | |_  ___    / _|(_) _ __  (_) ___ | |__  
  \ \ /\ / // _` || || __| | __|/ _ \  | |_ | || '_ \ | |/ __|| '_ \ 
   \ V  V /| (_| || || |_  | |_| (_) | |  _|| || | | || |\__ \| | | |
    \_/\_/  \__,_||_| \__|  \__|\___/  |_|  |_||_| |_||_||___/|_| |_|
                                                                     


Iniciar instacia de mongod:

	$ mongod

Para restaurar la base de datos:

	$ mongorestore backend/db/library



Si necesitan borrar la base de datos de books que se llama library.
Desde la terminal:

  	$ mongo < backend/db/dropdb.js 

O 

tambien se pueden conectar con el cliente de mongo y correr los commandos separados:

 	$ mongo
 	> use library
 	> db.dropDatabase();