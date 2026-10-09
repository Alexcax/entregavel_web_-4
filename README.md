# Desenvolvimento Web – Semana 04

## Arrays, DOM e Eventos com JavaScript

### Sobre o projeto

Este projeto foi desenvolvido como parte das atividades práticas da disciplina de Desenvolvimento Web, com o objetivo de aplicar os conceitos de Arrays, Manipulação do DOM e Eventos utilizando JavaScript.

A atividade está dividida em três blocos, abordando métodos de arrays, criação e modificação de elementos HTML e interação com o usuário por meio de eventos.

## Tecnologias utilizadas

- HTML5 – Estrutura da página.
- CSS3 – Estilização dos elementos.
- JavaScript (ES6+) – Manipulação de arrays, DOM e eventos.
- Visual Studio Code – Ambiente de desenvolvimento.

## Bloco 1 – Arrays e Métodos

Neste bloco, foram desenvolvidos exercícios utilizando arrays de nomes, preços e objetos de produtos.

Os principais métodos utilizados foram:

**forEach():** percorre os elementos de um array e executa uma função para cada um deles, sem criar um novo array como resultado.

**map():** percorre um array e retorna um novo array contendo os elementos transformados, sem modificar o array original.

**filter():** cria um novo array contendo apenas os elementos que atendem a uma condição definida.

**reduce():** percorre os elementos de um array e acumula seus valores, produzindo um único resultado, como a soma dos preços de produtos.

## Bloco 2 – Manipulação do DOM

Neste bloco, foram realizados exercícios de manipulação dos elementos HTML por meio do JavaScript.

O DOM (Document Object Model) representa a estrutura de uma página HTML e permite acessar, modificar, criar e remover elementos dinamicamente.

Os principais recursos utilizados foram:

- **querySelector():** seleciona o primeiro elemento que corresponde a um seletor CSS.
- **querySelectorAll():** seleciona todos os elementos correspondentes a um seletor CSS.
- **textContent:** permite acessar ou modificar o conteúdo textual de um elemento.
- **innerHTML:** permite inserir ou modificar conteúdo HTML.
- **createElement():** cria novos elementos HTML.
- **append():** adiciona elementos ao final de outro elemento.
- **classList.add():** adiciona uma classe CSS a um elemento.
- **classList.contains():** verifica se um elemento possui determinada classe.
- **classList.toggle():** adiciona ou remove uma classe CSS.

Esses recursos foram utilizados para modificar o título de uma página, acessar parágrafos, criar listas de tarefas e aplicar estilos aos elementos.

## Bloco 3 – Eventos e Event Delegation

Neste bloco, foram desenvolvidas funcionalidades que permitem a interação do usuário com a página.

O método addEventListener() foi utilizado para registrar eventos nos elementos HTML.

Os principais eventos trabalhados foram:

- **click:** executa uma ação quando o usuário clica em um elemento.
- **mouseover:** executa uma ação quando o ponteiro do mouse passa sobre um elemento.
- **keyup:** identifica quando uma tecla é solta.
- **submit:** identifica o envio de um formulário.

Também foi utilizado o método preventDefault() para impedir o recarregamento da página durante o envio do formulário.

O método trim() foi aplicado para remover espaços em branco no início e no final das tarefas digitadas, impedindo o cadastro de tarefas vazias.

### Event Delegation

Event Delegation, ou delegação de eventos, é uma técnica que permite controlar os eventos de vários elementos filhos utilizando um único listener no elemento pai.

Neste projeto, foi utilizado um evento de clique na lista principal para identificar os itens selecionados por meio de e.target.

Essa abordagem é importante porque reduz a necessidade de registrar vários listeners individuais, contribuindo para a eficiência do código.

Além disso, permite que elementos criados dinamicamente pelo JavaScript também respondam aos eventos, sem a necessidade de adicionar novos listeners.

## Funcionalidades do projeto

- Manipulação de arrays com diferentes métodos.
- Alteração dinâmica de textos HTML.
- Criação de elementos e listas.
- Aplicação de classes CSS.
- Identificação de cliques e interações do usuário.
- Marcação de tarefas como concluídas.
- Adição de tarefas por meio de formulário.
- Validação de campos vazios.
- Utilização de Event Delegation.

## Estrutura do projeto

```text
desenvolvimento-web-semana04/
├── index.html
├── app.js
└── README.md
```

## Como executar

1. Faça o download ou clone o repositório do GitHub.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o arquivo `index.html` em um navegador.
4. Pressione F12 e acesse a aba Console.
5. Interaja com os elementos da página para visualizar os resultados dos exercícios.

Os códigos JavaScript são carregados automaticamente pelo arquivo `index.html`, por meio da referência ao arquivo `app.js`.

## Conclusão

O desenvolvimento desta atividade permitiu colocar em prática os principais conceitos de Arrays, DOM e Eventos em JavaScript.

Os exercícios demonstraram como percorrer, transformar, filtrar e acumular dados em arrays, além de modificar elementos HTML e criar funcionalidades interativas.

A utilização de Event Delegation também demonstrou uma maneira eficiente de trabalhar com eventos em elementos criados dinamicamente.

Esses conhecimentos representam uma base importante para o desenvolvimento de aplicações web mais completas e interativas.
