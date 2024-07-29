const prompt = require ('prompt-sync')({sigint: true});

let ultimoID = 1;

const cadastros = [];

const validarIndice = (indice) => indice >= 0 && indice < cadastros.length;

const modelo = () => { 
    const email = prompt("Digite seu e-mail: ");
    const nome = prompt("Digite seu nome");
    const contato = prompt("Digite um telefone para contato: ");

    if (
        email === email 
        console.log("E-mail duplicado! Favor inserir um novo.")

    


};



const create = () => {
    let cadastro = modelo();

    cadastros.push(cadastro)
};

const 