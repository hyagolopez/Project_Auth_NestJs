## Description | Descrição

- Project started based on a challenge and demonstration for the community as an example and encouragement to use the framework.
- Projeto iniciado com base um desafio e demonstração para comunidade como exemplo  e insentivação para ultilizar o framework.

[Nest](https://github.com/nestjs/nest) Framework TypeScript starter repository.

## Reminder | Lembrete

- Before running the application, create a '.env' file to place the url of the mongoDb bank and the secret JWT password. Because without the information from the database, the application cannot run.
- Antes de rodar aplicação, crie uma arquivo '.env' para colocar a url  do banco mongoDb e a senha secreta do JWT. Pois, sem a informação do banco de dados a aplicação não pode rodar.

- Name of the environment variables.
- Nome das variável de ambiente.

```bash
URL_MONGODB_CLOUD
```
```bash
SECRET_AUTH_INTERNAL
```

## Installation | Installation

- If you don't have NestJs on your machine, run this command: npm i -g @nestjs/cli
- Caso não tenha NestJs na sua máquina, roda este comando: npm i -g @nestjs/cli

```bash
$ npm install
```
- Ou
- Or

```bash
$ yarn
```

## Running the app | Executando o aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- Ou
- Or

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
- Routes for execution.
- Rotas para execução.

{POST} /sign-up
{POST} /sign-in
{GET} /usuario/:id

- At the root of the project there is a file called "sign-Up.json" containing the body structure of the json type to perform the request on the route "/sign-up".
- Na raiz do projeto existe um arquivo chamado "sign-Up.json" contendo a estrutura do body do tipo json para realizar a requisição na rota "/sign-up".

## Test | Teste

- Don't forget to change the test values ​​to perform various tests
- Don't forget to change the test values ​​to perform various tests

```bash
# unit tests
$ npm run test:test

# e2e tests
$ npm run test:e2e
```

- Ou
- Or

```bash
# unit tests
$ yarn test:test

# e2e tests
$ yarn test:e2e
```
