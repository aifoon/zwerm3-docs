---
sidebar_position: 1
---

# Introduction

The `zwerm3-api` is a RESTful API built on top of `zwerm3-jack` using the [NestJS framework](https://nestjs.com/). It runs as a background daemon on each bee. Detailed documentation for all endpoints is available in the docs.

## Source

- You can find the GitHub repository of `zwerm3-api` [here](https://github.com/aifoon/zwerm3-api).

## Installation

Install all the node modules

```
npm install
```

Start the NestJS project in development

```
npm run start:dev
```

Make a build with

```
npm run build
```

## Swagger

Once installed, you can access a Swagger GUI to test the API at `http://[IP-OF-THE-BEE]:3000/api`.
