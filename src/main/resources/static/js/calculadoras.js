//Calculadora de riesgo cardiaco
function calcularRiesgo() {
    let edad = parseInt(document.getElementById("edad").value);
    let presion = parseInt(document.getElementById("presion").value);
    let colesterol = parseInt(document.getElementById("colesterol").value);
    let diabetes = document.getElementById("diabetes").checked ? 1 : 0;
    let fumador = document.getElementById("fumador").checked ? 1 : 0;
    
    let riesgo = (edad * 0.2) + (presion * 0.3) + (colesterol * 0.4) + (diabetes * 5) + (fumador * 3);
    let mensaje = "Riesgo bajo";
    if (riesgo > 15) mensaje = "Riesgo moderado";
    if (riesgo > 25) mensaje = "Riesgo alto";
    
    document.getElementById("resultado").innerText = "Su riesgo cardiovascular es: " + mensaje;
}

//Calculadora de IMC
document.getElementById("formIMC").addEventListener("submit", function(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);
        let mensaje = "";

        if (imc < 18.5) {
            mensaje = "Bajo peso";
        } else if (imc < 24.9) {
            mensaje = "Peso normal";
        } else if (imc < 29.9) {
            mensaje = "Sobrepeso";
        } else {
            mensaje = "Obesidad";
        }

        document.getElementById("resultado").innerText = `Tu IMC es: ${imc.toFixed(2)} - ${mensaje}`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
    }
});

//Calculadora de consumo de agua
document.getElementById("formAgua").addEventListener("submit", function(event) {
    event.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let genero = document.getElementById("genero").value;

    if (peso > 0) {
        let litrosAgua = genero === "masculino" ? peso * 0.04 : peso * 0.03;
        document.getElementById("hidratacionResultado").innerText = `Debes beber aproximadamente ${litrosAgua.toFixed(2)} litros de agua al día.`;
    } else {
        document.getElementById("hidratacionResultado").innerText = "Por favor, ingresa un peso válido.";
    }
});
