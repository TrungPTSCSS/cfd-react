import { api } from "./config"
export const apiServices = {
    callApi(url, method, params) {
       return fetch(url, {
            method:method,
            headers:{
                'Content-Type': 'application/json',
            },
            body: params
        }).then(res => res.json())
    },
    callApiWithToken(url, method, params) {
        let token = JSON.parse(localStorage.getItem('token'))?.accessToken
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: params
        }).then(async (res) => {
            if (res.status === 403) {
                let refreshToken = JSON.parse(localStorage.getItem('token'))?.refreshToken;
                let newToken = await this.refreshToken(token, refreshToken);
                localStorage.setItem('token', JSON.stringify(newToken.data))
                return this.callApiWithToken(url, method, params)
            }
            if (res.status === 200) {
                alert('Thành công!')
            }
        })
    },
    refreshToken(accessToken, refreshToken) {
        return fetch(`${api}/elearning/v4/refresh-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            body: JSON.stringify({ 'refreshToken': refreshToken })
        }).then(res => res.json())
    }
}