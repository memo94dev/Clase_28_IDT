function promediar(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);
    let promedio = (numero1 + numero2 + numero3) / 3;
    document.getElementById("resultado").innerHTML="el promedio es: "+promedio;
    }