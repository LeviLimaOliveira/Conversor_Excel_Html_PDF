# Coversor de tabela Excel para HTML e PDF

Este projeto em Node.js converte arquivos Excel (formato CSV) em arquivos HTML e PDF, utilizando conceitos de Programação Orientada a Objetos (POO).

## Tecnologias Utilizadas

- Node.js
- EJS
- html-pdf

## Funcionalidades

- Leitura de arquivos CSV
- Processamento e estruturação dos dados
- Conversão dos dados para HTML
- Geração de arquivos PDF a partir do HTML

## Estrutura do Projeto

- `Reader`: Lê arquivos CSV do disco.
- `Processor`: Processa e estrutura os dados do CSV.
- `Table`: Organiza os dados em uma tabela com cabeçalhos e linhas.
- `HtmlParser`: Gera um arquivo HTML a partir dos dados estruturados.
- `Writer`: Escreve o arquivo HTML no disco.
- `PDFWriter`: Converte o HTML gerado em um arquivo PDF.

## Como Usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Coloque o arquivo CSV que deseja converter na raiz do projeto e execute:
    ```bash
    node app.js
    ```
4. O HTML e o PDF gerados serão salvos na raiz do projeto.

## Exemplo de Uso

No arquivo `app.js`:

```javascript
var Reader = require('./Reader');
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
  var dados = await leitor.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Write(Date.now() + ".html", html);
  PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();
