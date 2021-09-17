# Setup inicial para API em Node.js <img align="center" alt="Nodejs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">

## Template TypeScript <img align="center" alt="Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">

## Configurações

* Jest para testes
* Eslint para padronização do código
* TypeScript
* Babel para transpilação de JavaScript para TypeScript
* Husky para preparar o código antes de efetuar um commit
* Diferentes ambientes (desenvolvimento, teste/homolog e produção)

## Path Mapping

Ferramenta criada pelo TypeScript que permite mapear os módulos da aplicação de maneira escalável, ou seja, criando "atalhos".

* Sem path mapping

```typescript
  import { User } from "../../../../../models/User";
```

* Com path mapping

```typescript
  import { User } from "@models/User";
```

* Para utilizar essa ferramenta, é necessário alterar as propriedades:

1. **paths**, no arquivo ***tsconfig.json***; e
2. **module-resolver**, no arquivo ***babel.config.js***

## Scripts importantes

| Script          | Descrição                              |
|---              |---                                     |
| yarn dev:server | Inicializa o servidor localmente       |
| yarn build      | Realiza processo de build da aplicação |
| yarn start      | Inicializa o servidor após build       |
| yarn test       | Executa os testes                      |
| yarn commit     | Processo de commit com husky           |

## Exemplo de uso

* Clonar repositório

```
  mkdir nome-seu-projeto
  cd nome-seu-projeto
  git clone https://github.com/MarcosKrul/nodejs-initial-setup.git .
```

* Alterar referência do repositório remoto

```
  git remote rm origin
  git remote add origin <link>
```

* Criar arquivo de variáveis de ambiente (o mesmo pode ser feito para ***production*** e ***test***)

```
  echo "PORT=3333" > .env.development
```

* Instalar dependências

```
  yarn
```

ou

```
  npm i
```
