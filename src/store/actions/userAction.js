import api from '../../api';


export async function login(email, password){

    try {
        const user = await api.post('/login', {
            "email": email,
            "password": password
        })
        return {
            type: "LOGIN_USER",
            email: email,
            token: user.data.token.token
        }

    } catch {

        return {
            type: "LOGIN_USER",
            email: "",
            token: "",
        }
}
}

export async function register(state){

    try {
        const user = await api.post('/register', state)
        console.log(user)
        return ({
            type: "REGISTER_USER",
        })

    } catch {
        console.log("Não foi possível cadastrar")

        return ({
            type: "REGISTER_USER",

        })
    }
}