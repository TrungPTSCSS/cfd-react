
import { useState } from "react";
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
export function useForm(initValue = {}) {
    const [form, setForm] = useState(initValue)
    
    const [error, setError] = useState({})

    const rules = {}

    const handleChange = (ev) => {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value
        setForm({ ...form, [name]: value })
    };
    const validator = () => {
        let errorObject = {}
        for (let i in rules) {
            let r = rules[i]
            if (r.parttern) {
                let parttern = r.parttern
                if (r.parttern === 'phone') parttern = regexPhone
                if (r.parttern === 'email') parttern = regexEmail
                if (r.parttern === 'url') parttern = regexUrl

                if (typeof parttern['test'] !== 'undefined' && !parttern?.test(form[i])) {
                    errorObject[i] = 'Gia tri khong dung dinh dang'
                }
            }
            if (r.required && !form[i]) {
                errorObject[i] = 'Gia tri khong duoc bo trong'
            }
            if (r.min && (typeof form[i] === 'undefined' || form[i].length < r.min)) {
                errorObject[i] = `Password khong duoc nho hon ${r.min} ky tu`
            }
            if (r.max && form[i].length > r.max) {
                errorObject[i] = `Password khong duoc lon hon ${r.max} ky tu`
            }
        }
        // if (Object.keys(errorObject).length === 0) {
        //     alert('Thành công')
        // }
        setError(errorObject)
        return errorObject
    }
    function register(name, rule) {
        if (rule) {
            rules[name] = rule
        }
        return {
            name: name,
            onChange: handleChange,
            value: form[name]
        }
    }
    function handleSubmit(callback) {
        return (event) => {
            event.preventDefault();
            let error = validator();
            if (Object.keys(error).length === 0) {
                callback(form)
            }
            setError(error)
        }
    }
    return {
        form,
        register,
        handleSubmit,
        error
    }
}