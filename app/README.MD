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

Nesse projeto o objetivo foi desenvolver um projeto FullStack onde foram consumidas 3 Apis externas e feito um CRUD.

Imagem de como ficou a página finalizada:

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

    - npm run start

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
