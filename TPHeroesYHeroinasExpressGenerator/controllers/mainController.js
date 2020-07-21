module.exports = main = {
    index:function(req,res){
        let text = "Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.";
        let title = "Digital Heroes";
        res.render('main', {title : title, text:text })
    },
    creditos:(req,res)=>{
        let autor = "COMISION 3 - FORMAR - DIGITAL HOUSE";
        let title = "Creditos - Digital Heroes"
        res.render('creditos',{autor:autor,title:title})
    }
}