// Variables
logins = [{
    login: 'jonatas',
    password: '12345',
}];

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
        const { login, password } = request.body;
        let flag = false;

        for (user of logins) {
            if (user.login == login && user.password == password) {
                return response.status(200).json({ message: 'Sejá bem vindo!' });
            } else {
                flag = true;
            }
        }

        if (flag)
            return response.status(400).json({ message: 'Usuário não cadastrado, ou dados incorretos!' });
    });

    app.post('/cadastro', (request, response) => {
        const { login, password } = request.body;

        let flag = false;
        
        for (user of logins) {
            if (user.login == login) {
                return response.status(400).json({ message: 'Usuário já cadastrado!' });
            } else {
                flag = true;
            }
        }

        if (flag) {
            logins = [...logins, request.body];
            return response.status(201).json({ message: "cadastro realizado!", login: login });
        }
    });

    app.put('/restore', (request, response) => {
        return response.status(200).json({ message: "restore started!" });
    });

    app.use(function (request, response) {
        response.status(404);
    });
}