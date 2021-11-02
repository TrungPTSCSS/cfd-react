import { api } from "./config";
import { apiServices } from './callApi'


const contactService = {
    contact(form){
        return apiServices.callApi(`${api}/elearning/v4/contact`,'POST',form)
    }
}
export default contactService