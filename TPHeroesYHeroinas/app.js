
// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');
const { get } = require('http');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', function(req,res){
	res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne yhueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan comoinspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer enti!.")
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req,res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroeID = req.params.id;
	heroes.forEach(function(heroe){
		if(heroe.id == heroeID){
			res.send("Hola mi nombre es " + heroe.nombre + " y mi profesion es " + heroe.profesion);
		}
	})
	res.end("No encontramos un heroe con ese ID")
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req,res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroeId = req.params.id;
	let ok = req.params.ok;
	res.set({'content-type':'text/plain; charset=utf-8'})

	heroes.forEach(heroe=>{
		if(heroe.id == heroeId){
			if(ok == "ok"){
				res.write("Hola, mi nombre es: " + heroe.nombre + "\n")
				res.write(heroe.resenia);
				res.end()
			}else{
				res.send(heroe.nombre + " dice: Lamento que no quieras saber mas de mi :(")
			}
		}
	})
res.end("No encontramos el id de heroe que buscabas")
	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
});
// Ruta Créditos
app.get('/creditos',function(req,res){
	res.send('este trabajo lo hicimos entre todos los del grupo 2 de la comision 3')
})

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});


