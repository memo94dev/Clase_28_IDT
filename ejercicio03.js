function calcular() {
    let capital = parseInt(document.getElementById("capital").value);
    let ganancia = capital * 2 / 100;
    document.getElementById("resultado").innerHTML =
        "La ganancia del 2% a partir del capital es: " + ganancia;
}
