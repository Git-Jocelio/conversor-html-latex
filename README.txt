PROJETO: CONVERSOR HTML PARA LATEX

Este projeto faz uma conversao simples de marcacoes HTML para LaTeX.
Ele foi feito sem bibliotecas externas.

ARQUIVOS:

index.html
Tela do sistema.

style.css
Estilo simples da tela.

src/stack.ts
Classe Stack, usada como pilha.

src/parser.ts
Arquivo principal da conversao de HTML para LaTeX.

src/main.ts
Liga a tela HTML com a funcao converter.

tsconfig.json
Configuracao do TypeScript.

COMO RODAR:

1) Instale o TypeScript, se ainda nao tiver:

npm install -g typescript

2) Abra o terminal dentro da pasta do projeto.

3) Compile o projeto:

tsc

4) Depois disso sera criada a pasta dist.

5) Abra o arquivo index.html no navegador.

6) Digite ou cole um HTML simples e clique em Converter.

TAGS SUPORTADAS:

<p>     paragrafo
<b>     negrito
<strong> negrito
<i>     italico
<em>    italico
<ul>    lista nao ordenada
<ol>    lista ordenada
<li>    item de lista
<br>    quebra de linha
<h1>    section
<h2>    subsection

EXEMPLO DE ENTRADA:

<p>Ola <b>mundo</b></p>

EXEMPLO DE SAIDA:

Ola \textbf{mundo}

OBSERVACAO:

Este projeto nao usa parser pronto de HTML e nao usa bibliotecas externas.
A conversao e feita percorrendo a string caractere por caractere.
