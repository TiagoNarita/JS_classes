
var titulo = document.querySelector(".titulo");
titulo.textContent = "aparecida nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {


   var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;


    var tdImc = paciente.querySelector(".info-imc");

    pesoEhValido = true;
    alturaEhValida = true;

    if (peso <= 0 || peso > 400) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "peso inválido!";
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura > 3.00) {
        console.log("altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "altura inválida!";
        paciete.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

