# Personal Timer

## Descrição

O Timer App é uma aplicação web simples com inspiração de estilo retrô, que permite aos usuários definir um tempo, iniciar, pausar e resetar uma contagem regressiva. Quando o tempo se esgota, um som de alarme é tocado para notificar o usuário. Este aplicativo é útil para tarefas de gerenciamento de tempo, como sessões de estudo, cozinhar, exercícios físicos e outras atividades que requerem monitoramento de tempo.

## Estrutura do Projeto

A estrutura do projeto é organizada em componentes e estilos, garantindo uma manutenção fácil e uma compreensão clara do design e da lógica da aplicação.

### Componentes

- Timer: Componente principal que gerencia o estado e a lógica do cronômetro.
- useTimer: Hook personalizado que encapsula toda a lógica necessária para o funcionamento do cronômetro.

### Timer

O componente Timer é responsável pela interface e funcionalidades do cronômetro, incluindo a exibição do tempo, botões de controle e o campo de entrada para definir o tempo inicial.

#### Funcionalidades

- Definir o tempo: Permite ao usuário definir o tempo inicial através de um campo de entrada.
- Iniciar/Pausar: Inicia ou pausa a contagem regressiva.
- Resetar: Reseta o cronômetro ao tempo inicial definido.
- Alarme: Toca um som quando o tempo se esgota.

### UserTimer

O hook useTimer gerencia a lógica do cronômetro, incluindo o estado do tempo, se está rodando, se está pausado, e as funções para iniciar/parar, resetar e alterar o valor de entrada.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)

## Tecnologias Usadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/): Uma biblioteca JavaScript para construir interfaces de usuário.
- [Styled-components](https://styled-components.com/): Biblioteca para estilização de componentes em React.

## Instruções de Execução

1. Clone o repositório: `git clone https://github.com/luccas-santos01/personal-cd.git`
2. Instale as dependências: `npm install`
3. Inicie o aplicativo: `npm run dev`

## Deploy

Você pode acessar a aplicação implantada [aqui](https://luccas-santos01.github.io/personal-cd/).
