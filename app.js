
 // Cria um array contendo três nomes
const nomes = ["Alexsander", "Carlos", "Mariana"];

// Percorre o array e exibe uma saudação para cada nome
nomes.forEach(function(nome) {
    console.log(`Olá, ${nome}!`);
});

// Cria um novo array com todos os nomes em maiúsculas
const nomesMaiusculos = nomes.map(function(nome) {
    return nome.toUpperCase();
});

// Exibe o novo array no console
console.log("Nomes em maiúsculas:", nomesMaiusculos);


// Cria um array contendo cinco preços
const precos = [10, 25, 40, 5, 60];

// Filtra os preços que são maiores que 20
const precosFiltrados = precos.filter(function(preco) {
    return preco > 20;
});

// Soma todos os preços utilizando reduce
const somaPrecos = precos.reduce(function(acumulador, preco) {
    return acumulador + preco;
}, 0);

// Exibe os preços filtrados no console
console.log("Preços acima de 20:", precosFiltrados);

// Exibe a soma total dos preços no console
console.log("Soma de todos os preços:", somaPrecos);


 // Cria um array contendo objetos de produtos
const produtos = [
    { nome: "Caderno", preco: 15 },
    { nome: "Mochila", preco: 120 },
    { nome: "Caneta", preco: 5 },
    { nome: "Estojo", preco: 35 }
];

// Cria um novo array contendo apenas os nomes dos produtos
const nomesProdutos = produtos.map(function(produto) {
    return produto.nome;
});

// Filtra os produtos que custam menos de 50 reais
const produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 50;
});

// Soma os preços de todos os produtos
const totalProdutos = produtos.reduce(function(acumulador, produto) {
    return acumulador + produto.preco;
}, 0);

// Percorre o array e exibe o nome e preço de cada produto
produtos.forEach(function(produto) {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});

// Exibe os resultados no console
console.log("Nomes dos produtos:", nomesProdutos);
console.log("Produtos abaixo de R$ 50:", produtosBaratos);
console.log("Valor total dos produtos: R$", totalProdutos);



// Seleciona o elemento h1 pelo seu identificador
const titulo = document.querySelector("#titulo");

// Altera o texto do título da página
titulo.textContent = "Blog do Alexsander";

// Exibe o novo título no console
console.log("Título atualizado:", titulo.textContent);


// Seleciona todos os parágrafos que possuem a classe texto
const paragrafos = document.querySelectorAll(".texto");

// Percorre todos os parágrafos encontrados
paragrafos.forEach(function(paragrafo) {
    // Exibe o conteúdo de cada parágrafo no console
    console.log(paragrafo.textContent);
});


// Seleciona a lista pelo seu identificador
const lista = document.querySelector("#lista");

// Adiciona dois itens à lista utilizando innerHTML
lista.innerHTML += `
    <li>Primeiro item</li>
    <li>Segundo item</li>
`;

// Exibe o conteúdo da lista no console
console.log("Itens adicionados à lista:", lista.innerHTML);


// Cria um novo elemento li
const terceiroItem = document.createElement("li");

// Define o texto do novo elemento
terceiroItem.textContent = "Terceiro item";

// Adiciona o novo elemento ao final da lista
lista.append(terceiroItem);

// Exibe o texto do elemento criado no console
console.log("Item adicionado:", terceiroItem.textContent);

// Adiciona a classe destaque ao terceiro item
terceiroItem.classList.add("destaque");

// Verifica se o terceiro item possui a classe destaque
const possuiDestaque = terceiroItem.classList.contains("destaque");

// Exibe o resultado da verificação no console
console.log("Possui a classe destaque?", possuiDestaque);


// Cria um array contendo três tarefas
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

// Percorre o array e cria um item para cada tarefa
tarefas.forEach(function(tarefa) {
    // Cria um novo elemento li
    const item = document.createElement("li");

    // Define o texto do item com o nome da tarefa
    item.textContent = tarefa;

    // Adiciona o item ao final da lista
    lista.append(item);
});

// Seleciona o primeiro item da lista
const primeiroItem = lista.querySelector("li");

// Adiciona a classe feito ao primeiro item
primeiroItem.classList.add("feito");

// Conta a quantidade total de itens da lista
const quantidadeItens = lista.querySelectorAll("li").length;

// Exibe a quantidade de itens no console
console.log("Quantidade total de itens:", quantidadeItens);


// Seleciona o botão pelo seu identificador
const botao = document.querySelector("#botao");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function() {
    // Exibe uma mensagem sempre que o botão for clicado
    console.log("Clicou!");
});


// Adiciona um evento quando o mouse passa sobre o botão
botao.addEventListener("mouseover", function() {
    // Altera o texto do botão
    botao.textContent = "Pode clicar!";
});


// Seleciona o campo de texto pelo seu identificador
const campoNome = document.querySelector("#nome");

// Adiciona um evento quando uma tecla é solta
campoNome.addEventListener("keyup", function() {
    // Captura o valor atual do campo
    const nomeDigitado = campoNome.value;

    // Exibe o valor digitado no console
    console.log("Nome digitado:", nomeDigitado);
});

// Adiciona um único evento de clique à lista
lista.addEventListener("click", function(e) {
    // Verifica se o elemento clicado é um li
    if (e.target.tagName === "LI") {
        // Adiciona ou remove a classe feito
        e.target.classList.toggle("feito");

        // Exibe o texto do item clicado no console
        console.log("Item clicado:", e.target.textContent);
    }
});

// Cria um novo item dinamicamente
const novoItem = document.createElement("li");

// Define o texto do novo item
novoItem.textContent = "Nova tarefa dinâmica";

// Adiciona o novo item à lista
lista.append(novoItem);

// Confirma a criação do novo item
console.log("Novo item criado:", novoItem.textContent);

// Seleciona o formulário pelo seu identificador
const formulario = document.querySelector("#formulario");

// Seleciona o campo utilizado para digitar tarefas
const campoTarefa = document.querySelector("#tarefa");

// Adiciona um evento de envio ao formulário
formulario.addEventListener("submit", function(e) {
    // Impede o recarregamento da página
    e.preventDefault();

    // Captura o texto digitado e remove espaços extras
    const tarefa = campoTarefa.value.trim();

    // Verifica se o campo não está vazio
    if (tarefa !== "") {
        // Cria um novo elemento li
        const novoItem = document.createElement("li");

        // Define o texto do novo item
        novoItem.textContent = tarefa;

        // Adiciona a tarefa à lista
        lista.append(novoItem);

        // Exibe a tarefa adicionada no console
        console.log("Tarefa adicionada:", tarefa);

        // Limpa o campo após adicionar a tarefa
        campoTarefa.value = "";
    }
});
