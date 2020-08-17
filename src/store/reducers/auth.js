const initialstate = {
    email: '',
    isTeacher: '',
    token: ''
}

function reducer (state = initialstate, action) {

    switch(action.type){
        case 'LOGIN_USER':
            return {
                ...state,   email: action.email, token: action.token
                        }
        
        case 'REGISTER_USER':
            return state

        default:
            return state
    }
}

export default reducer;