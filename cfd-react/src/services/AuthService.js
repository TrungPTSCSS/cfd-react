const authService = {
    login(user) {
        return fetch('https://cfd-reactjs.herokuapp.com/elearning/v4/login', {method:'POST',body:JSON.stringify(user)});
    }
}
export default authService