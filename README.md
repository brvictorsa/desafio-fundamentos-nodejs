## :rocket: DESAFIO DOS FUNDAMENTOS DE NODE.JS COM TYPESCRIPT

Foi implementada uma aplicação backend para armazenar transações financeiras de entrada e saída. A aplicação possibilita o cadastro e a listagem das transações cadastradas.

### Rotas da aplicação

Requisitos de implementação das rotas:

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saidas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o formato como o seguinte:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 750,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 2000,
    "outcome": 750,
    "total": 1250
  }
}
```
### Específicação dos testes

A aplicação conta com os seguintes testes:

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`

### Instalar e executar o projeto:

1. Clonar o projeto para seu local de trabalho (via HTTPS).

2. Executar o comando *yarn* no terminal para baixar as dependências do projeto.
```js
yarn //or npm install
```

3. Executar o backend na porta *3333*.
```js
yarn dev:server //or npm run dev:server
```

3. Executar os testes do backend utilizando o *jest* e o *react testing library*.
```js
yarn test  //or npm run test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Victor Santos - vSA 2020
