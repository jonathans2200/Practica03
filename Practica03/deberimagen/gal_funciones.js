var imagenes =
[{"id":1,"imagen":"https://robohash.org/ipsautsunt.bmp?size=50x50&set=set1"},
{"id":2,"imagen":"https://robohash.org/rerumnihila.png?size=50x50&set=set1"},
{"id":3,"imagen":"https://robohash.org/doloresimpeditfacere.jpg?size=50x50&set=set1"},
{"id":4,"imagen":"https://robohash.org/quoistenihil.jpg?size=50x50&set=set1"},
{"id":5,"imagen":"https://robohash.org/natussuntest.jpg?size=50x50&set=set1"},
{"id":6,"imagen":"https://robohash.org/utetfacilis.jpg?size=50x50&set=set1"},
{"id":7,"imagen":"https://robohash.org/voluptatesquiaofficiis.jpg?size=50x50&set=set1"},
{"id":8,"imagen":"https://robohash.org/harumetqui.bmp?size=50x50&set=set1"},
{"id":9,"imagen":"https://robohash.org/dignissimosadipisciut.bmp?size=50x50&set=set1"},
{"id":10,"imagen":"https://robohash.org/sederrorsunt.bmp?size=50x50&set=set1"}];
var num=1;
function siguiente1(){
 num++;
 if(num>3){
 num=1;
 var foto = document.getElementById("foto");
 foto.src = imagenes[2].imagen;
 }
}
function anterior1(){
 num--;
 if(num<1){
 num=3;
 var foto = document.getElementById("foto");
 foto.src = imagenes[1].imagen;;
 }
}
