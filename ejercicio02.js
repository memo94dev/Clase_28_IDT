function calcular() {
    let lado = parseInt(document.getElementById("lado").value);
    let area = lado * lado;
    let perimetro = lado * 4;
    document.getElementById("resultado").innerHTML =
        "<strong>El area del cuadrado es: " + area + "</strong><br><br>" +
        "El perimetro del cuadrado es: " + perimetro;
}