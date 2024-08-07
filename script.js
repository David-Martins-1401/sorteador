function sorteador() {
  const numerosInput = document.getElementById('numeros').value;
  const numerosArray = numerosInput.split(',').map(num => parseInt(num.trim()));
  
  console.log(numerosArray);

  const numeroGerado = Math.floor(Math.random() * numerosArray.length);

  console.log("Número gerado foi: " + numerosArray[numeroGerado]);

  document.getElementById('resultado').innerText = "Número gerado foi: " + numerosArray[numeroGerado];
}
