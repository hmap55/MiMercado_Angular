



// boton aumentar


function aumentar(){
    let cuadro_texto = document.getElementById("producto-cantidad");
    let valor_actual = parseInt(cuadro_texto.value);
    

    valor_actual = valor_actual +=1;
    cuadro_texto.value = valor_actual;
    console.log(valor_actual);

}


//boton disminuir

function disminuir(){
    let cuadro_texto = document.getElementById("producto-cantidad");
    let valor_actual = parseInt(cuadro_texto.value);

    if (valor_actual == 0){
        cuadro_texto.value = 0;
    }
    else{

        valor_actual = valor_actual -=1;
        cuadro_texto.value = valor_actual;
    }
    
    console.log(valor_actual);

}

function agregarProducto(){

    let item = sessionStorage.getItem("producto");

}


