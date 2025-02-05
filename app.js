//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirTextoNaTela() {
    let campo = document.querySelector("#listaAmigos");
    campo.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        campo.appendChild(li);
    });
}

function adicionarAmigo() {
    let amigo = document.querySelector('input').value.trim();
    if (amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo);
        //console.log(amigos);
        exibirTextoNaTela();
        document.querySelector('input').value = "";
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("A lista está vazia. Favor inserir nomes para sorteio");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    amigos.splice(indiceSorteado, 1);
    exibirTextoNaTela(); 

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
