const express = require('express'); //requiero express
const app = express(); //requiero la funcion de express

app.listen(3030, ()=>console.log("El servidor esta funcionando en el puerto 3030")); //levanto el servidor

/* requiero las rutas */
const rutaMain = require('./routes/main');
const rutaHeroes = require('./routes/heroes');

/* uso las rutas */
app.use('/',rutaMain);
app.use('/heroes',rutaHeroes);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});