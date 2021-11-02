import { apiServices } from "./callApi";
import { api } from "./config";

const courseService = {
    home() {
        return apiServices.callApi(`${api}/elearning/v4/home`, 'GET', null)
    },
    details(slug) {
        return apiServices.callApi(`${api}/elearning/v4/course/${slug}`, 'GET', null)
    },
    registerCourse(slug, form) {
        return apiServices.callApiWithToken(`${api}/elearning/v4/course-register/${slug}`, 'POST', (form))
    },

}
export default courseService