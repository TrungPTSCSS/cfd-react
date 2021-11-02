import { apiServices } from "./callApi";
import { api } from "./config";
const authService = {
    login(user) {
        return apiServices.callApi(`${api}/elearning/v4/login`,'POST',JSON.stringify(user))
    },
    update(form) {
        return apiServices.callApiWithToken(`${api}/elearning/v4/profile/update`,'POST', form)
    }
}
export default authService