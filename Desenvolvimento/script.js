//criar uma variavel
//let nome = "Vitória";
//let nome = document.getElementById("txtNome").value;
//let idade =window.prompt( "Digite sua idade: ");
//frase
//console.log('Meu nome é '+nome+' e tenho '+idade);
const btnEscreve = document.getElementById("btnAlerta");
//evento de clique no botão, funcao - criando uma funcao
///btnEscreve.addEventListener("click", FUNCTION);
btnEscreve.addEventListener("click", () =>{
    let nome = document.getElementById("txtNome").value;
    document.getElementById("tituloNome").innerHTML = nome;
} );
/////////////////
const escreve = document.getElementById("btnA");

escreve.addEventListener("click", () =>{
    let peso = document.getElementById("txtPeso").value;
    let altura = document.getElementById("txtAltura").value;
    let imc = peso/(altura*altura);

    document.getElementById("p").innerHTML = peso;
    document.getElementById("a").innerHTML = altura;
    const titulo = document.getElementById("resultado");

    let result = titulo.textContent ="IMC: "+imc;

    if
});