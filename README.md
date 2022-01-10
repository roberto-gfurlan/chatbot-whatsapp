<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./images/banner.png" />
</h1>

<h4 align="center"> 
Desafio pair programming - Zenvia Whatsapp
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-rodando-a-aplicacao">Como executar</a> • 
 <a href="#-sugestao-de-melhorias">Melhorias</a> • 
</p>


## 💻 Sobre o projeto

O desafio proposto em realizar uma integração da API da Zenvia utilizando de seu Broker no Whatsapp, para que fosse feito melhorias ou outras abordagens. O projeto base possui uma funcionalidade de ao enviar um arquivo de audio contendo música, este deve retornar o artista com o nome de sua música, e uma prévia da música descoberta.

---

## ⚙️ Funcionalidades

- Ao enviar um arquivo de áudio, deve retornar: nome da música, imagem do albúm e prévia da música.
- Também é retornado a letra da música encontrada.
- Integração de backend com a Estrutra do Builder no ALTU.

---

## 🧭 Rodando a aplicação

```bash

# Abra um novo terminal dentro do diretório atual
# Acesse a pasta do projeto no seu terminal/cmd
$ cd frontend

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

##✨ Sugestão de Melhorias

Ao longo do desenvolvimento foi notado alguns pontos que podem auxiliar em melhorias futuras:

- A **[SDK Zenvia](https://www.npmjs.com/package/@zenvia/sdk )** possui suporte a botões.
- Os botões presentes na **[documentação](https://zenvia.github.io/zenvia-openapi-spec/v2/#tag/Content-types )** terem suporte para acesso a URLs externas.


## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
