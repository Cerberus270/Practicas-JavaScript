var documento= document,
    pantalla= documento.getElementById("pantalla"),
    teclas= documento.querySelectorAll(".tecla span");
console.log(teclas[1].innerHTML);
function procesar(entrada){
    console.log(entrada)
}
teclas.forEach(function(e){
    e.addEventListener("click",function(){
        var entrada=this.textContent;
        if (entrada!=""){
            procesar(entrada);
        }
    });
});