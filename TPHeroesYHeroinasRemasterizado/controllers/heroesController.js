let fs = require('fs');
let dbHeroes = JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'));

module.exports = heroes = {
    index:function(req,res){
        res.send(dbHeroes)
    },
    idHeroe:(req,res)=>{
        let idHeroe = req.params.id;
        dbHeroes.forEach(function(heroe){
            if(heroe.id == idHeroe){
                res.send("Hola mi nombre es " + heroe.nombre + " y mi profesión es " + heroe.profesion);
            }
        })
        res.end('No encontre a un heroe con ese ID')
    },
    bio:function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })

        let idHeroe = req.params.id;
        let ok = req.params.ok;

        dbHeroes.forEach(function(heroe){
            if(heroe.id == idHeroe){
                if(ok == 'ok'){
                    res.write(heroe.nombre + '\n');
                    res.write(heroe.resenia + '\n\n');
                    res.end();
                }else{
                    res.send(heroe.nombre + ' dice: Lamento que no quieras saber mas nada mí :(')
                }
            }
        })
        res.end('No encontre a un heroe con ese ID')
    }
}