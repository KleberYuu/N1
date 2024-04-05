document.addEventListener("DOMContentLoaded", function () {
  function calcularSalario() {
    var valorDaHora = parseFloat(
      document.getElementById("valorDaHora").value.replace(",", ".")
    );
    var horaTrab = parseFloat(
      document.getElementById("horaTrab").value.replace(",", ".")
    );

    var salarioB = valorDaHora * horaTrab;

    var irrf;
    if (salarioB <= 2112.0) {
      irrf = 0;
    } else if (salarioB <= 2640.0) {
      irrf = 528.0;
    } else if (salarioB <= 2826.65) {
      irrf = salarioB * 0.075;
    } else if (salarioB <= 3751.05) {
      irrf = salarioB * 0.15;
    } else if (salarioB <= 4664.68) {
      irrf = salarioB * 0.225;
    } else {
      irrf = salarioB * 0.275;
    }

    var inss;
    if (salarioB <= 1412.0) {
      inss = salarioB * 0.075;
    } else if (salarioB <= 2666.68) {
      inss = salarioB * 0.09;
    } else if (salarioB <= 4000.03) {
      inss = salarioB * 0.12;
    } else {
      inss = salarioB * 0.14;
    }

    var salarioL = salarioB - irrf - inss;

    document.getElementById("salarioB").value = salarioB.toFixed(2);
    document.getElementById("irrf").value = irrf.toFixed(2);
    document.getElementById("inss").value = inss.toFixed(2);
    document.getElementById("salarioL").value = salarioL.toFixed(2);
  }

  document.getElementById("cal").addEventListener("click", function () {
    calcularSalario();
  });

  function limparInputs() {
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function (input) {
      input.value = "";
    });
  }

  document.getElementById("limp").addEventListener("click", function () {
    limparInputs();
  });
});
