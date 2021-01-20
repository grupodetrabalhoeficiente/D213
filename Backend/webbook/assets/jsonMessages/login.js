module.exports = {
    user: {
        duplicate: {
            msg: "DuplicateValues",
            message: {
                eng: "Email already registered!",
                pt: "O seu e-mail já se encontra registado!"
            },
            status: 409,
            success: false
        },
        invalid: {
            msg: "Invalid",
            message: {
                eng: "Invalid Login",
                pt: "Os dados que inseriu são inválidos!"
            },
            status: 400,
            success: false
        },
        unauthorized: {
            msg: "unauthorized",
            message: {
                eng: "You cannot access to this route",
                pt: "Não tens privilégios para aceder a esta rota"
            },
            status: 401,
            success: false
        },

        email: {
            msg: "Invalid",
            message: {
                eng: "Invalid email",
                pt: "O email que inseriu não se encontra registado"
            },
            status: 400,
            success: false
        },
        password: {
            msg: "Invalid",
            message: {
                eng: "Invalid password",
                pt: "A password que inseriu é inválida"
            },
            status: 400,
            success: false
        },
        signinSucces: {
            msg: "Success",
            message: {
                eng: "Login with sucess",
                pt: "Login com sucesso"
            },
            status: 200,
            success: true
        },
        signupSuccess: {
            msg: "Signup Success",
            message: {
                eng: "Signup with sucess",
                pt: "Registo efetuado com sucesso"
            },
            status: 200,
            success: true
        },
        logoutSuccess: {
            msg: "Logout Success",
            message: {
                eng: "Logout with sucess",
                pt: "Sessão terminada com sucesso"
            },
            status: 200,
            success: true
        },
        logoutError: {
            msg: "Logout Error",
            message: {
                eng: "You cannot logout. There is no active session",
                pt: "Não existe nenhuma sessão ativa"
            },
            status: 400,
            success: false
        },
        error: {
            msg: "Error",
            message: {
                eng: "Something went wrong with your Signin",
                pt: "Algo de errado aconteceu no processo de login"
            },
            status: 503,
            success: true
        }
    },
};