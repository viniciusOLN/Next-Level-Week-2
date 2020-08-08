const Database = require("./db")
const createProffy = require("./createProffy")

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name :"Vinicius Oliveira",
        avatar: "https://avatars2.githubusercontent.com/u/61924090?s=460&u=43bf06a554e58f0678c2d13414ff20653cffc035&v=4",
        whatsapp: "88994602521",
        bio: "Estudante de Ciência da Computação e jogador profissional de CS do Ouro I nas horas vagas :p. Testando novas tecnologias e dando tudo certo(até agora) nelas",
    }

    classValue = {
        subject: 1,
        cost: '20'
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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar dados inseridos
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* FROM
        proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 1300
        AND class_schedule.time_to > 1300
    `)

    console.log(selectClassesSchedules)
})