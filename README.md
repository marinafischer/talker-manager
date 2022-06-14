# Sobre o projeto Talker Manager!

Projeto feito durante o curso de desenvolvimento web da Trybe

Este é o meu primeiro projeto back-end utilizando node.js e express;

O projeto trata-se de uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes. 

Foram criados alguns endpoints que leem e escrevem em um arquivo utilizando o módulo `fs`.

Para o desenvolvimento desse projeto não foi utilizado nenhum banco de dados e sim uma simulação de um banco com o arquivo talker.json;

## Habilidades:

- Operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever APIs utilizando Node e Express;
- Estrutura uma aplicação Express.
- Criar rotas e aplicar middlewares.

## Para começar:

- Clone o repositório: git@github.com:marinafischer/talker-manager.git

- Para iniciar com node:
  - Instale as dependencias: npm install
  - Inicie a aplicação: npm start

- Para iniciar com docker:
  - Rode o comando: docker-compose up -d
  - Rode o comando: docker exec -it talker_manager bash
    Esse comando dará acesso ao terminal do container, a partir daqui é possível rodar os mesmos comandos usados com o node (descritos acima);

# Endpoints:

## GET `/talker`
- O endpoint consulta os dados;
- Retorna o status 200 e todos os palestrantes cadastrados, no caso de não haver palestrantes, retorna um array vazio;

## GET `/talker/:id`
- O endpoint consulta os dados;
- Retorna o status 200 e o palestrante referente ao id informado, no caso de não encontrar o id, retorna o status 404 e uma mensagem de erro;

##  POST `/login`
- O endpoint realiza o login;
- Deve receber no corpo da requisição um json com `email` e `password` e retornar o status 200 e um token aleatório de 16 caracteres;
- Caso algum campo for inválido retorna o status 400 e uma mensagem de erro. Regras:
  - o campo `email` é obrigatório;
  - o campo `email` deve ter um email válido;
  - o campo `password` é obrigatório;
  - o campo `password` deve ter pelo menos 6 caracteres.


##  POST `/talker`
- O endpoint cadastra uma nova pessoa;
- Deve receber no corpo da requisição um json com `name`, `age`, `talk` e retorna o status 201 e as informações de cadastro;
- Deve receber no cabeçalho da requisição o token de autenticação (gerado no endpoint /login), no campo `authorization`.
- Caso algum campo for inválido retorna o status 400 e uma mensagem de erro. Regras:
  - o campo `name` é obrigatório;
  - o campo `name` deve ter mais de 3 caracteres;
  - o campo `age` é obrigatório;
  - o campo `age` deve ser um inteiro maior de 18;
  - o campo `talk` é obrigatório, assim como suas chaves;
  - o campo `talk` é um objeto com chaves:
    - `watchedAt` deve ser uma data no formato `dd/mm/aaaa`;
    - `rate` deve ser um inteiro de 1 à 5.

##  PUT `/talker/:id`
- O endpoint altera os dados de uma pessoa com base no id informado na rota e retorna o status 200;
- Deve receber no cabeçalho da requisição o token de autenticação (gerado no endpoint /login), no campo `authorization`.
- Deve receber o mesmo formato de json informado na rota anterior;
- Caso algum campo for inválido retorna o status 400 e uma mensagem de erro.
 
##  DELETE `/talker/:id`
- O endpoint deleta uma pessoa com base no id informado na rota e retorna o status 204;
- Deve receber no cabeçalho da requisição o token de autenticação (gerado no endpoint /login), no campo `authorization`.

##  GET `/talker/search?q=searchTerm`
- O endpoint retorna o status 200 e um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. 
- Deve receber no cabeçalho da requisição o token de autenticação (gerado no endpoint /login), no campo `authorization`.
