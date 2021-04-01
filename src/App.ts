// importamos el modulo de las variables de entorno 
const enviroment = require('./config/enviroment')
// importamos express
import server from "./config/server";
// iniciamos el servidor
server.listen(enviroment.PORT, () => console.log(`Running on port ${enviroment.PORT}`))
