import authService from "../../services/AuthService";
import { CLOSE_LOGIN, OPEN_LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_FAILED } from "../type";


export const openLoginAction = () => {
    return ({ type: OPEN_LOGIN })
}
export const closeLoginAction = () => {
    return ({ type: CLOSE_LOGIN })
}
export const loginSuccessAction = (data) =>{
    return ({type:LOGIN_SUCCESS, payload:data })
}
export const logoutAction = () => {
    return ({ type: LOGOUT })
}
export const loginFailed = (error) =>{
    return ({type:LOGIN_FAILED,payload:error})
}

export const fetchLogin = (form) => {
    return async (dispatch) => {
        let res = await authService.login(form);
        if(res.data){
            dispatch(loginSuccessAction(res.data))
        }
        else{
            dispatch(loginFailed(res))
            // xử lý kh đăng nhập thành công
        }
    }
}