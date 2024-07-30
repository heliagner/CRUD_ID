const prompt = require ('prompt-sync')({sigint: true});

let ultimoId = 1;

const cadastros = [];

const validarIndice = (indice) => indice >= 0 && indice < cadastros.length;

const emailNaoDuplicado = (email) => {
    if (cadastros.find(cadastro => cadastro.email = email)) {
        console.log("Email duplicado.");
        return false;
    } 
    return true;
};

const modelo = (id = ultimoId++) => {
    const email = prompt("Digite seu e-mail: ");
    const nome = prompt("Digite seu nome: ");
    const telefones = [];
    
    while(true){
        const telefone = prompt("Digite seus telefones para contato ou 0 para sair: ");
        if (telefone == 0){
            break;
        };
        telefones.push(telefone); 
    };

    if (emailNaoDuplicado(email)){
        return {
            email, 
            nome, 
            telefones, 
            id
        }
    };
    console.log("E-mail já utilizado.")
};

const create = () => {
    const cadastro = modelo();

    if (cadastro){
        cadastros.push(cadastro);
        console.log("Usuário cadastrado com sucesso!");
    }

    cadastros.push(cadastro)
};

const read = () => {
    if(cadastros.length == 0){
        console.log("Lista de usuários vazia.");
        return false
    } else {
    cadastros.forEach(cadastro => {
        console.log(`
        ID: ${cadastro.id},
        Nome: ${cadastro.nome},
        Email: ${cadastro.email}`);

        cadastro.telefones.forEach((telefone, indice) => {
            console.log(`Telefone ${indice +1}: ${telefone}`);
        });
    });
    return true;
    };
};

const update = () => {
    if (read()){
        const id = prompt("Qual o ID do usuario  que voCê deseja atualizar?");

        const cadastro = modelo(id);
        
        const indice = cadastros.findIndex(cadastro => id == cadastro.id);

        if (indice != -1){
            cadastros[indice] = cadastro
        } else {
            console.log("ID inexistente.");
        };
    };
};

const remove = () => {
    if (read()) {
        const id = prompt("Qual o ID do usuario  que voCê deseja atualizar?");

        const indice = cadastros.findIndex(cadastro => id == cadastro.id);

        if(indice != -1) {
            cadastros.splice(indice, 1)
        } else {
            console.log("ID inexistente.")
        };
    };
};

module.exports = {
    create,
    read,
    update,
    remove
};