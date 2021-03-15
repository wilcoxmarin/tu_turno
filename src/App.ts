// importamos express
import express from 'express'
// importamos path
var path = require('path');
// creamos instancia de express
const app = express()
// asignamos el puerto a trabajar
const port = 4000
// guardamos las rutas de la vistas
app.set('views', path.join(__dirname, 'views'));
// establecer el motor de vista en ejs
app.set('view engine', 'ejs');
app.get('/', (req: any, res: any) => {
    res.render('page/home')
})
app.listen(port, () => console.log(`Running on port ${port}`))
