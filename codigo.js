/* a - ai 
e - enter 
i - imes 
o - ober 
u - ufat */

//el orden para que no afecte a las otras vocales sería:

/* e - enter
o - ober //la e se mantiene porque ya se hizo el reemplazo de la e
i - imes //idem
a - ai // la a debe estar debajo porque lleva i
u - ufat // tiene que ir despues de la a */

function encriptar (){
    var texto = document.getElementById("txt-imput").value.toLowerCase();
    //i para mayusculas y minusculas
    // g para toda la oracion
    //m para multiples lineas
    var textoEncriptado = texto.replace(/e/igm, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

    document.getElementById("imagenNene").style.display = "none";
    document.getElementById("titulo-derecha").style.display = "none";
    document.getElementById("t-AreaDerecha").innerHTML = textoEncriptado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar (){
    var texto = document.getElementById("txt-imput").value.toLowerCase();
    var textoEncriptado = texto.replace(/enter/igm, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");

    document.getElementById("imagenNene").style.display = "none";
    document.getElementById("titulo-derecha").style.display = "none";
    document.getElementById("t-AreaDerecha").innerHTML = textoEncriptado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#t-AreaDerecha");
    contenido.select();
    document.execCommand("copy");
    alert("El mensaje está copiado");

}