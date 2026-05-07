const escreve = document.getElementById("btnA");

escreve.addEventListener("click", () =>{
    let peso = document.getElementById("txtPeso").value;
    let altura = document.getElementById("txtAltura").value;
    let imc = peso/(altura*altura);

    const titulo = document.getElementById("imc");

    //let result = titulo.textContent ="IMC: "+imc;(codigo que eu estava fazendo antes)
    titulo.textContent ="IMC: "+imc;

    let classificacao = "";
    const elemento = document.getElementById("classificacao_pessoas");
    if (imc < 18.5){
        classificacao = "Menor que 18.5, baixo peso!";
        
        // Altera a cor usando CSS style.color
        elemento.style.backgroundColor  = "forestgreen"; 
    }else if (18.5 < imc &&  imc  < 24.99){
        classificacao = "De 18.5 a 24.99, Normal!";
        
        elemento.style.backgroundColor  = "goldenrod"; 
    }else if (25 < imc && imc < 29.99){
        classificacao = "De 25 a 29.99, Sobrepeso!";
        
        elemento.style.backgroundColor  = "darkorange";
    }else {
        classificacao = "Maior de 30, Obesidade!";
       
        elemento.style.backgroundColor  = "red";
    }
    document.getElementById("classificacao_pessoas").innerHTML = classificacao;
});