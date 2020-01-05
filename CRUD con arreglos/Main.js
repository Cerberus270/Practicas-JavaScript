function menu(){
    let opcion = prompt("1.Añadir\n2.Eliminar\n3.Buscar\n4.Ver lista\nIngrese la opcion: ");
    return opcion;
}
const lista = [];
let dato = "lista";
var objeto = document.querySelector('.contenedor');
// Template
function crear(){
    let nodo = [];
    objeto.innerHTML=`
        <p>
        Nombre: <input type="text" name="nombre" id="nombre"><br><br>
        Edad: <input type="text" id="edad"><br><br>
        Salario: <input type="text" id="salario"><br><br>
        <button id="aceptar">crear</button>
        </p>
    `;
    // Get elements of DOM
    let nombre= document.getElementById("nombre");
    let edad= document.getElementById("edad");
    let salario = document.getElementById("salario");
    let boton = document.getElementById('aceptar').addEventListener("click",function(){
        console.log(nombre.value);
        if(confirm("Desea Añadir a: "+nombre.value)){
            nodo.push(nombre.value);
            nodo.push(edad.value);
            nodo.push(salario.value);
            lista.push(nodo);
            //
            objeto.innerHTML="";
            for (let i=0;i<10;i++){
                objeto.innerHTML+=`
                    <ul>
                `;
                for (let j=0;j<nodo.length;j++){
                    objeto.innerHTML+=`
                        <li>${lista[i][j]}</li>
                    `;
                }
                objeto.innerHTML+="</u>";
            }
            
            
        }
    },false);
    
}
function leer(){
    objeto.innerHTML=`
        <p>
        Nombre: <input type="text" id="name"><br>
        <button id="buscar">buscar</button>
        </p>
    `;
    let busqueda = document.getElementById("name");
    let buscar = document.getElementById("buscar").addEventListener("click",function(){
        var comparador = 0;//comparar no existencia 
        for (let i=0;i<lista.length;i++){
            if (lista[i][0]==busqueda.value){
                comparador=1;
                console.log(comparador);
                objeto.innerHTML=`
                <p>
                Nombre: ${lista[i][0]}<br>
                Edad: ${lista[i][1]}<br>
                Salario: ${lista[i][2]}
                </p>
                `;
                
            }
            if (comparador==0){
                objeto.innerHTML=`
                    <p>Elemento no existente</p>
                `;
            }
        }
        
        
        console.log(comparador);
    });
    
}
function actualizar(){
    objeto.innerHTML=`
        <p>
        Nombre: <input type="text" id="name"><br>
        <button id="buscar">buscar</button>
        </p>
    `;
    let busqueda = document.getElementById("name");
    let buscar = document.getElementById("buscar").addEventListener("click",function(){
        var comparadorActualizar = 0;//comparar no existencia 
        for (let i=0;i<lista.length;i++){
            console.log(lista[i][0]);
            console.log(name.value);
            if (lista[i][0]==busqueda.value){
                comparadorActualizar+=1;
                objeto.innerHTML=`
                <p>
                Nombre: ${lista[i][0]}<br><br>
                Edad: <input type="text" id="edad"><br><br>
                Salario: <input type="text" id="salario"><br><br>
                <button id="Actualizar">Actualizar</button>
                </p>
                `;
                //fallo
                let edad= document.getElementById("edad");
                let salario = document.getElementById("salario");
                lista[i][1] = edad.value;
                lista[i][2] = salario.value;
                document.getElementById("Actualizar").addEventListener("click",function(){
                    alert("Actualizado"+edad.value+lista[i][1]);
                });
            }
        }
        if (comparadorActualizar==0){
            objeto.innerHTML=`
                    <p>Elemento no existente</p>
                `;
        }
        console.log(comparadorActualizar);
    },false);
}
function borrar(){
    objeto.innerHTML=`
        <p>
        Nombre: <input type="text" id="name"><br>
        <button id="buscar">buscar</button>
        </p>
    `;
    let busqueda = document.getElementById("name");
    let buscar = document.getElementById("buscar").addEventListener("click",function(){
        var comparador = 0;//comparar no existencia 
        for (let i=0;i<lista.length;i++){
            if (lista[i][0]==busqueda.value){
                comparador=1;
                console.log(comparador);
                objeto.innerHTML=`
                <p>
                Nombre: ${lista[i][0]}<br>
                Edad: ${lista[i][1]}<br>
                Salario: ${lista[i][2]}<br>
                <button id="Eliminar">Eliminar</button>
                </p>
                `;
                document.getElementById("Eliminar").addEventListener("click",function(){
                    lista.splice(i,1);
                    //alert("Eliminado");
                    objeto.innerHTML=("<p>Dato Eliminado.</p>");
                });
                
            }
            if (comparador==0){
                objeto.innerHTML=`
                    <p>Elemento no existente</p>
                `;
            }
        }
        
        
        console.log(comparador);
    });
}


//MODO PROMT Y CONSOLA
/*do{
    //var opcion = menu();
    switch (opcion) {
        case "1":
            var elemento= prompt("Ingrese el dato a añadir: ");
            lista.push(elemento);
            break;
        case "2":
            elemento=prompt("Ingrese el dato a eliminar");
            for (let i=0;i<lista.length;i++){
                if (lista[i]==elemento){
                    alert("Dato eliminado: "+lista[i]);
                    lista.splice(i,1);
                    break;
                }
                if(i==lista.length-1){
                    alert("El dato no existe");
                }
            }
            break;
        case "3":
            elemento=prompt("Ingrese el dato a buscar");
            for (let i=0;i<lista.length;i++){
                if (lista[i]==elemento){
                    alert("El elemento : "+lista[i]+" esta en la posicion: "+i);
                    break;
                }
                if(i==lista.length-1){
                    alert("El dato no existe");
                }
            }
            break;
        case "4":
            for (let i=0;i<lista.length;i++){
                alert(lista);
            }
        default:
            break;
    }
}while (opcion!=0);

console.log(lista);*/