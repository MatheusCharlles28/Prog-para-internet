let terrenoValor1 = document.querySelector("#terrenoValor1");
let terrenoValor2 = document.querySelector("#terrenoValor2");
let enviarTerreno = document.querySelector("#enviarTerreno");
let resultadoTerreno = document.querySelector("#resultadoTerreno");
let quantidadeCavalo = document.querySelector("#quantidadeCavalo");
let enviarCavalo = document.querySelector("#enviarCavalo");
let resultadoCavalo = document.querySelector("#resultadoCavalo");
let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let enviarPadaria = document.querySelector("#enviarPadaria");
let resultadoPadaria = document.querySelector("#resultadoPadaria");
let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let enviarIdade = document.querySelector("#enviarIdade");
let resultadoIdade = document.querySelector("#resultadoIdade");
let gasolinaEnviar = document.querySelector("#gasolinaEnviar");
let valorGasolina = document.querySelector("#valorGasolina");
let quantidadeGasolina = document.querySelector("#quantidadeGasolina");
let gasolinaResultado = document.querySelector("#gasolinaResultado")
let enviarKG = document.querySelector("#enviarkG");
let quantidadeKG = document.querySelector("#quantidadeKG");
let resultadoKG = document.querySelector("#resultadoKG");
let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let enviarANO = document.querySelector("#enviarANO");
let resultadoANO = document.querySelector("#resultadoANO");
let p = document.querySelector("#p");
let m = document.querySelector("#m");
let g = document.querySelector("#g");
let resultadoCAMISAS = document.querySelector("#resultadoCAMISAS");
let enviarCAMISAS = document.querySelector("#enviarCAMISAS");
let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let enviarcartesiano = document.querySelector("#enviarcartesiano");
let resultadoCARTESIANO = document.querySelector("#resultadoCARTESIANO");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");
let dia_acidente = document.querySelector("#dia_acidente");
let mes_acidente = document.querySelector("#mes_acidente");
let ano_acidente = document.querySelector("#ano_acidente");
let dia_atual = document.querySelector("#dia_atual");
let mes_atual = document.querySelector("#mes_atual");
let ano_atual = document.querySelector("#ano_atual");
let enviar_acidente = document.querySelector("#enviar_acidente");
let resultado_acidente = document.querySelector("#resultado_acidente");
let salario = document.querySelector("#salario");
let enviarsalario = document.querySelector("#enviarsalario");
let resultadosalario = document.querySelector("#resultadosalario");
let resultado_centena = document.querySelector("#resultado_centena");
let enviar_centena = document.querySelector("#enviar_centena");
let numero_centena = document.querySelector("#numero_centena");
let area_pizza = document.querySelector("#area_pizza");
let enviar_pizza = document.querySelector("#enviar_pizza");
let resultado_pizza = document.querySelector("#resultado_pizza");
let valor_total = document.querySelector("#valor_total");
let enviar_conta = document.querySelector("#enviar_conta");
let carlos = document.querySelector("#carlos");
let andre = document.querySelector("#andre");
let felipe = document.querySelector("#felipe");

function calcularTerreno() {
    let terrenoInput1 = Number(terrenoValor1.value);
    let terrenoInput2 = Number(terrenoValor2.value);
    resultadoTerreno.textContent = ("A área do seu terreno é: " + terrenoInput1 * terrenoInput2);
}
enviarTerreno.onclick = function () {
    calcularTerreno()
}

function calcularCavalo() {
    let quantidadeCavalo1 = Number(quantidadeCavalo.value);
    resultadoCavalo.textContent = ("Você ira precisar de " + (quantidadeCavalo1 * 4) + " ferraduras");
}
enviarCavalo.onclick = function () {
    calcularCavalo()
}

function calcularPadaria() {
    let paesValor = Number(paes.value);
    let broasValor = Number(broas.value);
    let calcularPaes = paesValor * 0.12;
    let calcularBroas = broasValor * 1.50;
    resultadoPadaria.textContent = ("seu resultado total é " + (calcularPaes + calcularBroas) + " e o valor que você colocara na poupança é " + (calcularPaes + calcularBroas) * 10 / 100);
}

function calcularKG() {
    let = quantidade_KG = Number(quantidadeKG.value);
    resultadoKG.textContent = ("Você comprou " + quantidade_KG + " KG de alimento seu valor a pagar é " + (quantidade_KG * 12) + " REAIS");
}
function calcularANO() {
    let dia_ = Number(dia.value);
    let mes_ = Number(mes.value);
    let calcularMESES = (mes_ - 1) * 30;
    let calcularDIA = calcularMESES + dia_;
    resultadoANO.textContent = ("Se passaram " + calcularDIA + " Dias do ano");
}
function calcularCamisas() {
    let p_ = Number(p.value);
    let m_ = Number(m.value);
    let g_ = Number(g.value);
    let calcularP = p_ * 10;
    let calcularM = m_ * 12;
    let calcularG = g_ * 15;
    let calcularTOTAL = calcularP + calcularM + calcularG;
    resultadoCAMISAS.textContent = ("O total arrecado foi de R$: " + calcularTOTAL + " REAIS");
}
function calcularCARTESIANO() {
    let x1_ = Number(x1.value);
    let y1_ = Number(y1.value);
    let x2_ = Number(x2.value);
    let y2_ = Number(y2.value);
    let calcularCARTESIANO2 = Math.sqrt(Math.pow((x2_ - x1_), 2) + Math.pow((y2_ - y1_), 2));
    resultadoCARTESIANO.textContent = ("A distancia entre os dois pontos é " + calcularCARTESIANO2 + "  uA");
}
function calcularACIDENTE() {
    let diaACIDENTE = (dia_acidente.value);
    let mesACIDENTE = (mes_acidente.value);
    let anoACIDENTE = (ano_acidente.value);
    let diaATUAL = (dia_atual.value);
    let mesATUAL = (mes_atual.value);
    let anoATUAL = (ano_atual.value);
    let calcularANO = anoATUAL - anoACIDENTE;
    let calcularDIA = diaATUAL - diaACIDENTE;
    let calcularMES = mesATUAL - mesACIDENTE;
    if (calcularDIA < 0) {
        calcularMES = calcularMES - 1;
        calcularDIA = calcularDIA + 30;
    }
    if (calcularMES < 0) {
        calcularANO = calcularANO - 1;
        calcularMES = calcularMES + 12;
    }

    resultado_acidente.textContent = ("Ja se passaram desde o acidente " + calcularDIA + " dias e " + calcularMES + " mesês e " + calcularANO + " anos");
}
function calcularsalario() {
    let salario_ = Number(salario.value);
    let calcular_aumento = salario_ * 1.15;
    let calcular_desconto1 = (8 / 100) * calcular_aumento;
    let calcular_desconto2 = 8 * calcular_aumento / 100;
    let calcular_desconto3 = calcular_aumento - calcular_desconto2;
    resultadosalario.textContent = ("Seu salario inicial era de " + salario_ + " com o aumento de 15% foi para " + calcular_aumento + " e com os decontos foi para " + calcular_desconto3);
}
function calcular_centena() {
    let numeroCENTENA = Number(numero_centena.value)
    let calcularCCENTENA = Math.floor(numeroCENTENA / 100);
    let calcularDEZENA = Math.floor((numeroCENTENA % 100) / 10);
    let calcularUNIDADE = numeroCENTENA % 10;
    resultado_centena.textContent = ("Sua centena é " + calcularCCENTENA + " sua dezena é " + calcularDEZENA + " sua unidade é " + calcularUNIDADE);
}
function calcular_pizza() {
    let area_pizza_ = Number(area_pizza.value);
    let calcular_area_pizza = 3.14 * Math.pow(area_pizza_, 2);
    resultado_pizza.textContent = ("Sua área é " + calcular_area_pizza);
}
function calcular_bar() {
    let valor_total_ = Number(valor_total.value);
    let calcular_conta_bar_inteira = Math.floor(valor_total_ / 3);
    let calcular_conta_bar_real = valor_total_ - (calcular_conta_bar_inteira * 2);
    felipe.textContent = ("O valor que o Felipe ira pagar é de R$: " + calcular_conta_bar_real);
    carlos.textContent = ("O valor que o Carlos ira pagar é de R$: " + calcular_conta_bar_inteira);
    andre.textContent = ("O valor que o Andre ira pagar é de R$: " + calcular_conta_bar_inteira);
}
enviarPadaria.onclick = function () {
    calcularPadaria()
}
function calcularIdade() {
    let inputIdade = Number(idade.value);
    let inputNome = String(nome.value);
    let calcularIdades = inputIdade * 365;
    resultadoIdade.textContent = ((inputNome) + " ,sua idade em dias é " + (calcularIdades))
}

enviarIdade.onclick = function () {
    calcularIdade()
}
function calcularGasolina() {
    let quantidadeGasolinaa = Number(quantidadeGasolina.value);
    let valorGasolinaa = Number(valorGasolina.value);
    gasolinaResultado.textContent = ("Você colocou de gasolina: " + (quantidadeGasolinaa / valorGasolinaa) + " litros");
}
gasolinaEnviar.onclick = function () {
    calcularGasolina()
}
enviarKG.onclick = function () {
    calcularKG()
}
enviarANO.onclick = function () {
    calcularANO()
}
enviarCAMISAS.onclick = function () {
    calcularCamisas()
}
enviar_acidente.onclick = function () {
    calcularACIDENTE()
}
enviarsalario.onclick = function () {
    calcularsalario()
}
enviarcartesiano.onclick = function () {
    calcularCARTESIANO()
}
enviar_centena.onclick = function () {
    calcular_centena()
}
enviar_pizza.onclick = function () {
    calcular_pizza()
}
enviar_conta.onclick = function () {
    calcular_bar()
}