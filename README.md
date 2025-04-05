<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

API de Registro de Produtor Rural  
Esta é uma aplicação NestJS para gerenciar registros de produtores rurais. O sistema permite que os usuários registrem, editem e excluam produtores rurais, bem como visualizem dados agregados sobre as propriedades.

Características
  - Operações CRUD para produtores rurais
  - Validação de documentos (CPF/CNPJ)
  - Validação da área (cultivo + vegetação ≤ área total)
  - Painel com dados agregados:
  - Número total de fazendas
  - Área total de todas as fazendas
  - Distribuição de culturas por estado

## Tech Stack 
- NodeJS
- TypeScript
- NestJS
- PostgreSQL
- TypeORM
- Docker e Docker Compose

## Pré-requisitos

- Docker e Docker Compose
- Node.js 18+ (se estiver executando localmente)
- npm 8+ (se estiver rodando localmente)

## Compilar e rodar

```bash
# Git
$ git clone https://github.com/italocajado/rural-producer. git cd rural-producer

# Docker
$ docker-compose up -d

```
## Isso ira:
  Construir a aplicação Node.js    
  Iniciar um banco de dados PostgreSQL  
  Conecte o aplicativo ao banco de dados  
  Rodar a API na porta 3000  
