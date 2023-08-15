const form = document.querySelector('#form'); /* puxando elemento do form */

form.addEventListener('submit', function(event) {    /* adiciona evento listado ( submit botão + criar funçaõ evento */
  event.preventDefault();  /* ao gerar o evento do botao previne para que ele nao recarregue a pagina*/
  const inputPeso = event.target.querySelector('#peso');  /* cria um constante e usara o evento do botao para capturar o formulario peso */
  const inputAltura = event.target.querySelector('#altura');  /* o mesmo acima so que agora o formulario de altura */

  const peso = Number(inputPeso.value);  /* faz com que a constante seja convertida em numero*/
  const altura = Number(inputAltura.value);   /* */

  if (!peso) {  /* tradução livre "se o nao for peso ou numeral*/
    setResultado('Peso invalido!', false);  /* o resultadado dara falso e exibirá uma msg de retorno para o usuario*/
    return;  /* return fara com que a função sera finalizada aqui*/
  }
  if (!altura) {  /* */
    setResultado('Altura invalida!', false);  /* */
    return;
  }

  const imc = getIMC(peso, altura);  /* criando constante que unira peso e altura */
  const nivelImc = getNivelImc(imc);  /* constante para exibir o resultado complementar da função  */

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;  /* resultado que sera exibido para o usuario no final de tudo*/

  setResultado(msg, true);  /* se o resultado estiver correto a função sera verdadeira e terminara aqui */
});

function getNivelImc (imc) {  /* criação da função que complementara o resultado de acordo com o mesmo*/
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3']; /* array com os indices que serao selecionados de acordo com resultado */

  if (imc >= 40) return nivel[5];  /* se imc for maior ou igual a 40 retornará que esta na obesidade grau 3 */
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18,5) return nivel[0];
};

function getIMC (peso, altura) {  /* criando função que calculara o imc */
  const imc = peso / altura ** 2;  /* calculo do imc peso dividido por altura elevada ao quadrado */
  return imc.toFixed(2);  /* resultado corrigindo 2 casas decimais  */

}

function criaP () {  /* função para criar tag <p>*/
  const p = document.createElement('p');  /* constante que cria a tag no html*/
  return p;  /* resultado quando função for utilizada*/
};

function setResultado (msg, isValid) {  /* função que captura msg que sera exibida se for valida */
  const resultado = document.querySelector('#resultado');  /* constante que seleciona a tag que exibira o resultado */
  resultado.innerHTML = '';  /* innerhtmml sera responsavel por escrever na tag html quando for acionada*/

  const p = criaP();  /* chamando tag p da função criada acima adicionando-a ao codigo*/
  
  if (isValid) {  /* se for valido... */
  p.classList.add('paragrafo-resultado');  /*adiciona classe a tag dita entre aspas  se for valida */
  } else {   /* se não... */
  p.classList.add('badResult');  /*se não for valida será adicionada essa class para resultado negativo */
  };
  p.innerHTML = msg;  /* dipara msg na tag p */
  resultado.appendChild(p);  /* vincula o resultado a tag filho p  */
};