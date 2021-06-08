// Routes
module.exports = function (app) {
    app.get('/main', (request, response) => {
        return response.status(200).json({ message: "main started!" });
    });

    app.get('/receitas', (request, response) => {
        return response.status(200).json({ message: "receitas started!" });
    });

    app.get('/dashboard', (request, response) => {
        return response.status(200).json({ message: "dashboard started!" });
    });

    app.get('/despesas', (request, response) => {
        return response.status(200).json({ message: "despesas started!" });
    });

    app.post('/login', (request, response) => {
        const { name, pass } = request.body;
        console.log("User: " + name + ", password: " + pass);
        return response.status(204).json({ message: "login started!", name: name, password: pass });
    });

    app.post('/cadastro', (request, response) => {
        const { login, password, university, student } = request.body;
        let db = app.get('database');
        let stmt = db.prepare("INSERT INTO users (login, password, university, student) VALUES (?,?,?,?)");
        stmt.run(login, password, university, student);
        stmt.finalize();
        return response.status(201).json({ message: "cadastro started!", login: login, password: password, universidade: university, student: student });
    
        /*
            {
                "nome": "jonatassilva",
                "password": "jesus",
                "university": "UFBA",
                "student": true
            }

            process.on('SIGINT', () => {
                db.close();
                server.close();
            });
        */
    });

    app.put('/restore', (request, response) => {
        return response.status(200).json({ message: "restore started!" });
    });

    app.use(function (request, response) {
        response.status(404);
    });
}