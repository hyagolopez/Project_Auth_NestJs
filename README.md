## Description | Descrição

- Project started based on a challenge and demonstration for the community as an example and encouragement to use the framework.
- Projeto iniciado com base um desafio e demonstração para comunidade como exemplo  e insentivação para ultilizar o framework.

[Nest](https://github.com/nestjs/nest) Framework TypeScript starter repository.

## Reminder | Lembrete

- Before running the application, create a '.env' file to place the url of the mongoDb bank and the secret JWT password.
- Antes de rodar aplicação, crie uma arquivo '.env' para colocar a url  do banco mongoDb e a senha secreta do JWT.

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

/sign-up
/sign-in
/usuario/:id


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
