// importamos express
import express from "express";
// creamos una instancia de express
const app = express();
// importaamos path
var path = require('path');
// guardamos las rutas de la vistas
app.set('views', path.join( __dirname , '../views'));
// establecer el motor de vista en ejs
app.set('view engine', 'ejs');
export default app;
