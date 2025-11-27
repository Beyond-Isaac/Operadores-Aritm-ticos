// Função principal que realiza o cálculo com base nos valores e operador escolhidos
function calcular() {
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const operador = document.getElementById("operador").value;
  const resultadoDiv = document.getElementById("resultado");

  // Verifica se os valores são válidos
  if (isNaN(valor1) || isNaN(valor2)) {
    resultadoDiv.innerText = "Por favor, insira dois números válidos.";
    return;
  }

  let resultado;

  // Realiza a operação com base no operador selecionado
  switch (operador) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = valor2 !== 0 ? valor1 / valor2 : "Erro: divisão por zero";
      break;
    case "%":
      resultado = valor1 % valor2;
      break;
    case "**":
      resultado = valor1 ** valor2;
      break;
    default:
      resultado = "Operador inválido";
  }

  resultadoDiv.innerText = `Resultado: ${resultado}`;
}