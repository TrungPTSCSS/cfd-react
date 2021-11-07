import { CLOSE_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, OPEN_LOGIN } from "../type"

const authStateInit = {
    user: JSON.parse(localStorage.getItem('infoAccount')),
    openLogin: false
}

export const authReducer = (state = authStateInit, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('infoAccount', JSON.stringify({ ...action.payload, fullName: action.payload?.last_name + ' ' + action.payload?.first_name }))
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            localStorage.removeItem('errorLogin')
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_FAILED:
            localStorage.setItem('errorLogin', JSON.stringify(action.payload.error))
            return {
                ...state,
            }
        case OPEN_LOGIN:
            return {
                ...state,
                openLogin: true
            }
        case CLOSE_LOGIN:
            return {
                ...state,
                openLogin: false
            }
        case LOGOUT:
            localStorage.removeItem('infoAccount')
            localStorage.removeItem('token')
            return {
                ...state,
                user:JSON.parse(localStorage.getItem('infoAccount')),
                openLogin:false
            }
        
    }
    return state
}