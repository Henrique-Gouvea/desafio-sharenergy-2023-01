<h1 align="center">
   Sharenergy-Fullstack
</h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-endpoints">BackEnd(EndPoints)</a> 
</p>

## 💻 Sobre o projeto


Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Aplicação

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.



## 🚀 Como executar o projeto

Clonar o repositorio.

<details>
<summary><strong>Rodando localmente:</strong></summary><br />

<strong>BackEnd(Porta 3001)</strong>

- Entrar na pasta server

- Criar um arquivo .env na raiz do projeto(passar as variaveis de ambiente especificadas em .env.example)

  Executar os comandos:

  - npm install

  - npm run start

  Caso Banco não esteja criado e alimentado pode utilizar o comando:

  - npm run prestart(Fara a criação do banco de dados,migrations e alimentação do banco)

<strong>FrontEnd(Porta 3000)</strong>

- Entrar na pasta client

Executar os comandos:

    - npm install

    - npm run start

</details>

<details>
<summary><strong>Rodando pelo Docker-compose:</strong></summary><br />
   Na pasta raiz executar o comando:
   
    - docker-compose up

Nesse momento tanto o front quanto o back devem estar rodando normalmente
Caso não ocorra de os seguintes comandos:

    - docker exec -it app_server bash

    - npm install

    - npm run dev

    Abra outro terminal e de os comandos:

    - docker exec -it app_client bash

    - npm install

    - npm run start

</details>

A aplicação será aberta na porta:3000 - acesse http://localhost:3000

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<details>
<summary><strong>Backend</strong></summary><br />

- **[TypeScript]**
- **[Node.js]**
- **[Sequelize]**
- **[EsLint]**
- **[Express]**
- **[MySQL]**
- **[CORS]**
- **[SINON]**
- **[HELMET]**
</details>

<details>
<summary><strong>Frontend</strong></summary><br />

- **[React]**
- **[React Router DOM]**
- **[EsLint]**
- **[Axios]**
- **[Material-UI V4]**
- **[Tailwind CSS]**

## </details>


