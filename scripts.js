var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var number = document.getElementById("number");
var complex = document.getElementById("complex");
var bairro = document.getElementById("bairro");
var city = document.getElementById("city");
var state = document.getElementById("state");

function alertar(event){
    if(true){
        //alert("Você clicou no botão!!!" + "" + event);


        //validação
        if(cep.value.length < 8){
            alert("Entre com um CEP Válido!");
        }

        const url = `https://viacep.com.br/ws/${cep.value}/json/`;

        fetch(url)
        .then(resposta =>resposta.json())

        .then(function (dados){
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            city.value = dados.localidade;
            complex.value = dados.complemento;
            state.value = dados.uf;
        })

        .catch(function (error){
            alert("ação não realizada, Verifique o URL: "+  error.message());
        });

        saida.innerText = "Nome: " + nome.value+
        "\n Email: "+ email.value +"\n Telefone: "+ telefone.value + "\n CEP: " +cep.value+
        "\n Logradouro: "+logradouro.value +"\nNúmero: "+number.value+ "\nComplexo: "+ complex.value +
         "\n Bairro: "+ bairro.value+ "\n Cidade: "+city.value+ "\nEstado: "+state.value
    }
}