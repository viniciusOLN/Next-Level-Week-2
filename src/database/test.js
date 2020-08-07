const Database = require("./db")
const createProffy = require("./createProffy")

Database.then((db) => {
    //Inserir dados

    proffyValue = {
        name :'Vinicius Oliveira',
        avatar: 'https://avatars2.githubusercontent.com/u/61924090?s=460&u=43bf06a554e58f0678c2d13414ff20653cffc035&v=4',
        whatsapp: '88994602521',
        bio: 'Estudante de Ciência da Computação e jogador profissional de CS do Ouro I nas horas vagas :p. Testando novas tecnologias e dando tudo certo(até agora) nelas'
    }

    classValue = {
        subject: 'Informática',
        cost: '20',
        // proffy_id: 
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1320
        }
    ]


    //Consultar dados inseridos
})