# 20 (E mais) Tags HTML para você usar no seu projeto Front-end

![image-20230527054244457](/Users/pablonascimento/Library/Application Support/typora-user-images/image-20230527054244457.png)

Uma das coisas que sempre me vem a cabeça antes de começar um projeto é quais as tags irei usar para arquiteturar o front-end. Acessibilidade, performance, formas de escrever menos css, tudo isso vem a cabeça quando estou pensando na ideia, mas nunca consigo chegar numa resposta definitiva de forma fácil. 

Pensando nisso, decidi fazer uma tour pela doc do MDN e entender as tags de uma vez por todas. E uma das coisas mais interessantes que descobri é que existem tags atualmente que já resolvem muitos problemas sem termos que depender de CSS e Javascript. Hoje vamos ver algumas delas e como podemos tirar proveito nas próximas vezes que formos escrever um front-end. 

Você pode conferir o resultado final aqui. O código está hospedado nesse repositório do Github.

## Apêndice

- <u>0 - Atributos Globais</u>

- <u>1 - HTML</u>

- <u>2 - Head</u>

  - <u>2.1 - Title</u>
  - <u>2.2 - Base</u>
  - <u>2.3 - Link</u>
  - <u>2.4 - Style</u>
  - <u>2.5 - Meta</u>
  - <u>2.6 - Script</u>
  - <u>2.7 - NoScript</u>
  - <u>2.8 - Template</u>

  

## 0 - Atributos globais

Atributos globais são as propriedades que podemos informar para cada uma das tags HTML e editar algumas informações. Por exemplo, o atributo `class ` é um atributo global. Uma coisa interessante é que, além das tags existentes, isto funciona também para tags que o HTML ainda não implementou. 

Caso você queira escrever uma estrutura customizada de HTML, como a abaixo, é possível informar os atributos globais para as tags e irá funcionar normalmente. 

```html
<html>
  <head>
    <title>Sample Page</title>
    <style>
      container {
        display: block;
        max-width: 780px;
        margin: 32px auto;
        width: 100%;
      }
      
      grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      
      column {
        display: flex;
        border: 1px solid #a5b4fc;
				justify-content: center;
        align-items: center;
        border-radius: 8px;
        font-size: 24px;
        font-weight: 700;
        color: #555;
        padding: 8px;
        aspect-ratio: 1;
      }
      
      .title {
        font-weight: 800;
        font-size: 32px;
        margin-bottom: 24px;
      }
    </style>
  </head>
  <body>
    <container>
      <h1 class="title">Custom tags</h1>
      <grid>
        <column>Column A</column>
        <column>Column B</column>
        <column>Column C</column>
      </grid>
    </container>
  </body>
</html>
```

O código acima irá gerar o seguinte resultado

![image-20230527063838098](/Users/pablonascimento/Library/Application Support/typora-user-images/image-20230527063838098.png)

Dito isto, agora podemos seguir para os elementos HTML. Você pode ver [a lista dos atributos globais aqui](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## 1 - `<html>`

Essa talvez seja a principal tag do HTML, pois ela simbolizará que sua página é um documento HTML. Geralmente ela está no top level do seu HTML, e podemos configurar algumas coisas interessantes a respeito do nosso documento usando os atributos globais. Vamos dar uma olhada em alguns interessantes que podemos usar aqui: 

Atributo | Descrição | Valores aceitos | Exemplo
--- | --- | ---- | ----
`lang` | Define  qual é a linguagem do documento | [Lista completa](https://www.w3schools.com/tags/ref_country_codes.asp) | `lang="en"` 
`class` | A classe CSS do seu HTML | Qualquer string | `class="root"` 
`contenteditable` | Define a página como editável, permitindo alterar o conteúdo de qualquer elemento. | `"true"` ou  `"false"` | `contenteditable="true"` 
`spellcheck` | Habilita ou desabilita a verificação de erros ortográficos para os inputs da sua página. | `"true"` ou  `"false"` | `spellcheck="false"` 
`translate` | informa para as ferramentas de tradução quais partes da página não serão traduzidas Se incluída no HTML, desabilitará para toda a página. | `"yes"` ou `"no"` | `translate="no"` 

Você pode ver [a lista completa aqui](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)

## 2 - `<head>`

Essa tag contém metadados a respeito da página, isso é, ela armazena informações que não são necessáriamente visíveis pela pessoa usuária, mas importantes para o browser entender sua página. Alguns exemplos são a tag `<title>`, onde você pode informar ao browser qual é o titulo da sua página e ele usará essa informação para adicionar no topo da página:

![image-20230527051533948](/Users/pablonascimento/Library/Application Support/typora-user-images/image-20230527051533948.png)

Vamos ver as tags que podemos incluir dentro da tag `<head>`

### 2.1 - `<title>`

Nessa tag, basicamente você informa qual é o titulo da sua página. O valor incluso é importante para as ferramentas de SEO e será utilizado na página, como no exemplo acima.

### 2.2 - `<base> `

Define a URL base para todos os links relativos da página. Vamos ver alguns exemplos de atributos:

**Atributo `href`**

Se sua página possuir um `<a href="/page">` e um `<base href="/initial">` na sua tag `<head>`, ele irá redirecionar para a url `/initial/page`

**Atributo `target`**

Se sua página possuir um `<a href="/page">` e um `<base target="_blank">` na sua tag `<head>`, isso fará que todos os links da sua página sejam abertos numa nova aba. Você também pode informar qual é o `href` desse base, o que fará ele incluir esse valor antes do valor do link e abrir em uma nova aba.

### 2.3 - `<link>`

Informa para o seu browser sobre recursos externos. Por exemplo, você pode usar para carregar seus estilos ou suas fontes usando `<link href="/app.css" rel="stylesheet">`.  Vamos ver alguns exemplos de atributos:

**Atributo `rel="stylesheet"`**

Essa opção irá carregar suas folhas de estilo para a página. Você pode informar o seu 

**Atributo `rel="preload"`**

Essa opção pré carrega recursos em background, muito útil para recursos que serão usados após alguma interação da pessoa usuária. Por exemplo, podemos pré carregar uma imagem que será exibida quando a pessoa usuária interagir na página, e nenhum carregamento será necessário após essa interação. Você pode observar que na imagem abaixo, o segundo carregamento foi realizado através do cache de disco, e ele foi carregado logo após a interação na página.

![image-20230527063107858](/Users/pablonascimento/Library/Application Support/typora-user-images/image-20230527063107858.png)



### 2.4 - `<style>`

Essa tag armazena informações de estilo e envia diretamente para o browser. Você pode escrever seu CSS dentro dela e ela irá refletir na página.

### 2.5 - `<meta>`

A tag meta serve para você adicionar informações da sua página que não pode ser representada com nenhuma outras tags, como o `charset` e  informações para os motores de busca. Você também pode explorar outras propriedades, como a `<meta name="color-scheme" content="dark light">` , onde você controla o modo de cor da sua página, muito útil para criar dark mode.

### 2.6 - `<script>`

### 2.7 - `<noscript>`

### 2.8 - `<template>`

