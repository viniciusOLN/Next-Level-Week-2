//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageGiveClasses, pageStudy, saveClasses} = require('./pages')

//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


server
//Receber os dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)

