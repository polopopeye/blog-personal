<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">

</h1>
<p>Primero verifica que este instalaso node -v y npm -v y esta actualizado 
<br>
asegurate de instalar las dependencias con npm install
<br>
asegurarte que esta gatsby instalado : npm install -g gatsby-cli
<br>
asegurate de tener el firebase instalado y configurado correctametne CLI : npm install -g firebase-tools
para poder hacer el deploy correctamente
<br>

`Only windows`
para configurar tienes que asegurarte que tengas la execution activada... Set-ExecutionPolicy Unrestricted despues puesde hacer
firebase login

<br>

</p>

Is important to keep the browserlist updated: `npx browserslist@latest --update-db`

# dev

`npm run start` will start dev mode server in http://localhost:3500/

# Deploy

```
first : create bundle
gatsby clean
npm run build
second: check your bundle
gatsby serve
third: commit and save data
fourth:
firebase deploy --only hosting
```
