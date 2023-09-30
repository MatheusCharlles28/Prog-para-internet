let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");
let n5 = document.querySelector("#n5");
let enviar_01 = document.querySelector("#enviar_01");
let resultado_01 = document.querySelector("#resultado_01");
let x = document.querySelector("#x");
let y = document.querySelector("#y");
let z = document.querySelector("#z");
let resultadox = document.querySelector("#resultadox");
let enviarx = document.querySelector("#enviarx");
let valor_reais = document.querySelector("#valor_reais");
let enviar_reais = document.querySelector("#enviar_reais");
let resultado_reais = document.querySelector("#resultado_reais");
let anoCARRO = document.querySelector("#anoCARRO");
let fipeCARRO = document.querySelector("#fipeCARRO");
let enviarCARRO = document.querySelector("#enviarCARRO");
let resultadoCARRO = document.querySelector("#resultadoCARRO");
let salario = document.querySelector("#salario");
let cargo = document.querySelector("#cargo");
let enviarSALARIO = document.querySelector("#enviarSALARIO");
let resultadoSALARIO = document.querySelector("#resultadoSALARIO");
let saldoMEDIO = document.querySelector("#saldoMEDIO");
let enviarSALDO = document.querySelector("#enviarSALDO");
let resultadoSALDO = document.querySelector("#resultadoSALDO");
let altura = document.querySelector("#altura");
let enviarIMC = document.querySelector("#enviarIMC");
let resultadoIMC = document.querySelector("#resultadoIMC");
let sexo = document.querySelector("#sexo");
let formaPAGAMENTO = document.querySelector("#formaPAGAMENTO");
let enviarPAGAMENTO = document.querySelector("#enviarPAGAMENTO");
let resultadoPAGAMENTO = document.querySelector("#resultadoPAGAMENTO");
let resultado = document.querySelector ("#resultado");
let start = document.querySelector ("#start");
let inputResultado = document.querySelector ("#inputCodigo");
let inputQuantidade = document.querySelector ("#inputQuantidade");
let resultado1 = document.querySelector ("#resultado1");
let start1 = document.querySelector ("#start1");
let inputQuantidadeHoras = document.querySelector ("#inputQuantidadeHoras");
let inputNivel = document.querySelector ("#inputNivel");
function calcular01() {
    let n1_ = Number(n1.value);
    let n2_ = Number(n2.value);
    let n3_ = Number(n3.value);
    let n4_ = Number(n4.value);
    let n5_ = Number(n5.value);
  
    let vetor = [n1_, n2_, n3_, n4_, n5_];
  
    for (let i = 0; i < 5 - 1; i++) {
      let aux = i;
  
      for (let j = i + 1; j < 5; j++) {
        if (vetor[j] > vetor[aux]) {
          aux = j;
        }
      }
      [vetor[i], vetor[aux]] = [vetor[aux], vetor[i]];
    }
    resultado_01.textContent = (vetor);
  }
  function calcular_triangulo(){
    let x_ = Number (x.value);
    let y_ = Number (y.value);
    let z_ = Number (z.value);
    if (x_ < (y_ + z_) && y_ < (x_ + z_) && z_ < (x_ + y_)) {
      if (x_ == y_ && x_ == z_)
        resultadox.textContent = ("Formam um triângulo equilatreo");
      else if (x_ != z_ && x_ != z_ && y_ != z_)
        resultadox.textContent = ("Formam um triângulo escaleno");
      else 
        resultadox.textContent = ("Formam um triângulo isoceles");
    }
    else 
      resultadox.textContent = ("Não formam um triângulo");
  }
  function calcular_reais() {
    let valor_reais_ = Number (valor_reais.value);
    let notaCEM = Math.floor (valor_reais_ / 100); 
    valor_reais_ = valor_reais_ - (notaCEM * 100);
    let notaCINQUENTA = Math.floor (valor_reais_ / 50);
    valor_reais_ = valor_reais_ - (notaCINQUENTA * 50);
    let notaDEZ = Math.floor (valor_reais_ / 10);
    valor_reais_ = valor_reais_ - (notaDEZ * 10);
    let notaCINCO = Math.floor (valor_reais_ / 5);
    valor_reais_ = valor_reais_ - (notaCINCO * 5);
    let notaUM = Math.floor (valor_reais_ / 1);
    resultado_reais.textContent = ("Foi usado " +notaCEM + " notas de cem " +notaCINQUENTA + " notas de cinquenta " +notaDEZ + " notas de dez " +notaCINCO + " notas de cinco " +notaUM + " notas de um"); 
  }
  function calcularCARRO() {
    let anoCARRO_ = Number (anoCARRO.value);
    let fipeCARRO_ = Number (fipeCARRO.value);
    let calcularIMPOSTO_1 = fipeCARRO_ * 1.01;
    let calcularIMPOSTO_1_ =  calcularIMPOSTO_1 -fipeCARRO_;
    let calcularIMPOSTO_2 = fipeCARRO_ * 1.015;
    let calcularIMPOSTO_2_ = Math.ceil (calcularIMPOSTO_2 - fipeCARRO_);
    if (anoCARRO_ < 1990) {
      resultadoCARRO.textContent = ("Você ira pagar de impostos " +calcularIMPOSTO_1_ + " reais");
    }
    else 
    resultadoCARRO.textContent = ("Você ira pagar de impostos " +calcularIMPOSTO_2_ + " reais");
  }
  function calcularSALARIO() {
    let salario_ = Number (salario.value);
    let cargo_ = Number (cargo.value);
    let gerente = salario_ * 1.10;
    let gerente_ = gerente - salario_;
    let engenheiro = salario_ * 1.20;
    let engenheiro_ = engenheiro - salario_;
    let tecnico = salario_ * 1.30;
    let tecnico_ = tecnico - salario_;
    let cachorro = salario_ * 1.40;
    let cachorro_ = cachorro - salario_;
    if (cargo_ == 101) {
      resultadoSALARIO.textContent = ("Seu novo salario é de " +gerente + " reais e seu aumento foi de " +gerente_ + " reais e seu salario antigo era de " +salario_ + " reais");
    }
    else if (cargo_ == 102) {
      resultadoSALARIO.textContent = ("Seu novo salario é de " +engenheiro + " reais e seu aumento foi de " +engenheiro_ + " reais e seu salario antigo era de " +salario_);
    }
    else if (cargo_ == 103) {
      resultadoSALARIO.textContent = ("Seu novo salario é de " +tecnico + " reais e seu aumento foi de " +tecnico_ + " reais e seu salario antigo era de " +salario_);
    }
    else 
      resultadoSALARIO.textContent = ("Seu novo salário é de " +cachorro + " reais e seu aumento foi de " +cachorro_ + " reais e seu salario antigo era de " +salario_);
  }
  function calcularSALDO() {
    let saldoMEDIO_ = Number (saldoMEDIO.value);
    if (saldoMEDIO_ <= 200) {
        resultadoSALDO.textContent = ("seu saldo medio é de " +saldoMEDIO_ + " e você não tem direito a credito");
    }
    else if (saldoMEDIO_ >= 201 && saldoMEDIO_ <= 400) {
      resultadoSALDO.textContent = ("Seu saldo medio é de " +saldoMEDIO_ + " e você tem direito a 20% de credito");
    }
    else if (saldoMEDIO_ >= 401 && saldoMEDIO_ <= 600) {
      resultadoSALDO.textContent = ("seu saldo medio é de " +saldoMEDIO_  + " e você tem direito a 30% de credito");
    }
    else if (saldoMEDIO_ > 601) {
      resultadoSALDO.textContent = ("Seu saldo medio é de " +saldoMEDIO_ + " e você tem direito a 40% de credito");
    }
  }
  function calcularIMC() {
    let altura_ = Number (altura.value);
    let sexo_ = Number (sexo.value);
    let homem = Math.floor ((72.7 * altura_) - 58);
    let mulher = Math.floor ((62.1 * altura_) - 44.7);
    if (sexo_ == 1) {
      resultadoIMC.textContent = ("Seu peso ideal é de " +homem + " kg");
    }
    else if (sexo_ == 2) {
      resultadoIMC.textContent = ("Seu peso ideal é de " +mulher + " kg");
    }
  }
  function calcularPAGAMENTO() {
    let formaPAGAMENTO_ = Number (formaPAGAMENTO.value);
    let dinheiro = 37 * 1.10;
    let dinheiro_ = dinheiro - 37;
    let dinheiro__ = 37 - dinheiro_;
    let cartao = 37 * 1.15;
    let cartao_ = cartao - 37;
    let cartao__ = 37 - cartao_;
    let juros = 37 * 1.10;
    if (formaPAGAMENTO_ == 1) {
      resultadoPAGAMENTO.textContent = ("Você recebeu 10% de desconto e ira pagar R$: " +dinheiro__ +" reais");
    } 
    else if (formaPAGAMENTO_ == 2) {
      resultadoPAGAMENTO.textContent = ("Você recebeu 15% de desconto e ira pagar R$: " +cartao__ +" reais");
    }
    else if (formaPAGAMENTO_ == 3) {
      resultadoPAGAMENTO.textContent = ("Você ira pagar R$: 37 reais");
    }
    else if (formaPAGAMENTO_ == 4) {
      resultadoPAGAMENTO.textContent = ("Você ira pagar 10% de juros o valor a pagar é o seguinte R$: " +juros +" reais");
    }
  }
enviar_01.onclick = function() {
    calcular01()
}
enviarx.onclick = function(){
  calcular_triangulo()
}
enviar_reais.onclick = function() {
  calcular_reais()
}
enviarCARRO.onclick = function() {
  calcularCARRO()
}
enviarSALARIO.onclick = function() {
  calcularSALARIO()
}
enviarSALDO.onclick = function() {
  calcularSALDO()
}
enviarIMC.onclick = function() {
  calcularIMC()
}
enviarPAGAMENTO.onclick = function() {
  calcularPAGAMENTO()
}
function operacoes() {
  let num1 = Number (inputResultado.value)
  let num2 = Number (inputQuantidade.value)
  if (num1 == 1) {
      resultado.textContent = "O valor do seu pedido é " + (11.00 * num2)+ " reais";
  } else if (num1 == 2) {
      resultado.textContent = "O valor do seu pedido é " + (8.50 * num2)+ " reais";
  } else if (num1 == 3) {
      resultado.textContent = "O valor do seu pedido é " + ( 8.00 * num2)+ " reais";
  } else if (num1 == 4) {
      resultado.textContent = "O valor do seu pedido é " + ( 9.00 * num2)+ " reais";
  } else if (num1 == 5) {
      resultado.textContent = "O valor do seu pedido é " + ( 10.00 * num2)+ " reais";
  } else if (num1 == 6) {
      resultado.textContent = "O valor do seu pedido é " + ( 4.50 * num2)+ " reais";
  }
}
start.onclick = function () {
  operacoes ();
}

function professor (){
  let num3 = Number (inputNivel.value);
  let num4 = Number (inputQuantidadeHoras.value);
   if (num3 == 1) {
      resultado1.textContent = "Este professor esta ganhando R$" + (12.00 * num4 * 4.5) +" reais";
   } else if (num3 == 2) {
      resultado1.textContent = "Este professor esta ganhando R$" + (17.00 * num4 * 4.5) +" reais";
   } else if (num3 == 3) {
      resultado1.textContent = "Este professor esta ganhando R$" + (25.00 * num4 * 4.5) + " reais";
   }
}

start1.onclick = function (){
  professor ();
}