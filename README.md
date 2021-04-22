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

```bash
curl --request POST \
  --url http://localhost:3000/sign-up \
  --header 'Content-Type: application/json' \
  --data '{ 
	"nome": "name", 
	"email": "email@gmail.com", 
	"senha": "password", 
	"telefones": [ 
		 { 
			 "numero": "123456789", 
			 "ddd": "11" 
		 }
	] 
} 
'
```

{POST} /sign-in

```bash
curl --request POST \
  --url http://localhost:3000/sign-in \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "email@email.com", 
	"senha": "password"
}'
```

{GET} /usuario/:id

```bash
curl --request GET \
  --url http://localhost:3000/usuario/12c2dda0-39fa-4797-b7f0-8574e8547879 \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluMmcyMjEyMzIiLCJzdWIiOiJlZTUzZjI1Yi1lZTExLTRiZTEtYmZmYy1hNTg0MzNlYjlkM2UiLCJpYXQiOjE2MTkwNjI1MzAsImV4cCI6MTYxOTA2NDMzMH0.pdtSL4041zLXoIm_4U5Z6qJktd3Xe6jlftlz2wj5U8k'
```

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
