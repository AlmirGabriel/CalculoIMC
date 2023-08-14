function calcularIMC() {
    const peso = parseFloat(document.getElementById(peso).value);
    const altura = parseFloat(document.getElementById(altura).value);
  
    const resultado = calcularIMC(peso, altura);
    const resultadoElement = document.getElementById(resultado);
    resultadoElement.textContent = `Seu IMC é: ${resultado}`;
  }
  
  function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
      return "Peso e altura devem ser valores positivos maiores que zero.";
    }
  
    altura = altura / 100; // Convertendo altura de centímetros para metros
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
  
  const btConsultar = document.getElementById('btConsultar')
  btConsultar.addEventListener("click",calcularIMC)