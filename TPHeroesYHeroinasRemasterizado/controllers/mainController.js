const main = {
    index: function(req,res){
        res.send("Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti")
    },
    creditos:function(req,res){
        res.send("Esta pagina la hice yo");
    }
}

module.exports = main;