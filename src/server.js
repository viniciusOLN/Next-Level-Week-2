//Dados
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "88994602521", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Vinicius Oliveira", 
        avatar: "https://avatars2.githubusercontent.com/u/61924090?s=460&u=43bf06a554e58f0678c2d13414ff20653cffc035&v=4", 
        whatsapp: "88994602521", 
        bio: "Estudante de Ciência da Computação e jogador profissional de CS do Ouro I nas horas vagas :p. Testando novas tecnologias e dando tudo certo(até agora) nelas", 
        subject: "Informática", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubjects(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const dados = req.query
    
    const isNotEmpty = Object.keys(dados).length > 0

    if(isNotEmpty){
        //Adicionar os dados a lista de proffys
        dados.subject = getSubjects(dados.subject)
        proffys.push(dados)

        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//Configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start do servidor
.listen(5500)

