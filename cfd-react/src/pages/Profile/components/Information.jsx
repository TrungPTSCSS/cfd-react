import React from 'react'
import { useState } from 'react';
import { Prompt } from 'react-router-dom';

export function Information() {
    const [form, setForm] = useState({
        email: 'vuong.dang@dna.vn'
    })
    const [error, setError] = useState({})
    const [submitForm, setSubmitForm] = useState(true);
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    const handleChange = (ev) => {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value
        setForm({ ...form, [name]: value })
        setSubmitForm(false)
    };
    const submit = (event) => {
        console.log('====================================');
        console.log(form);
        console.log('====================================');
        let errorObject = {}
        if (!form.name) {
            errorObject.name = 'Vui lòng nhập họ tên'
        }
        if (!form.phone) {
            errorObject.phone = 'Vui lòng nhập số điện thoại'
        } else if (!regexPhone.test(form.phone)) {
            errorObject.phone = 'Vui lòng nhập đúng định dạng điện thoại'
        }
        if (!form.email) {
            errorObject.email = 'Vui lòng nhập email'
        } else if (!regexEmail.test(form.email)) {
            errorObject.email = 'Vui lòng nhập đúng định dạng email'
        }
        if (!form.urlFb) {
            errorObject.urlFb = 'Vui lòng nhập url Facebook'
        } else if (!regexUrl.test(form.urlFb)) {
            errorObject.urlFb = 'Vui lòng nhập đúng định dạng url'
        }
        if (!form.urlSkype) {
            errorObject.urlSkype = 'Vui lòng nhập url Skype'
        } else if (!regexUrl.test(form.urlSkype)) {
            errorObject.urlSkype = 'Vui lòng nhập đúng định dạng url'
        }
        if (Object.keys(errorObject).length === 0) {
            alert('Thành công')
            event.preventDefault();
            // event.target.reset();
            setSubmitForm(true);
        } else {
            setSubmitForm(false);
        }
        setError(errorObject)
    }
    return (
        <div className="tab1"
            onSubmit={event => {
                event.preventDefault();
                event.target.reset();
                setSubmitForm(true);
            }}>
            <Prompt
                when={!submitForm}
                message={'Dữ liệu của bạn chưa được lưu bạn có chắc muốn thoát?'} />
            <label className="formInput">
                <p>Họ và tên<span>*</span></p>
                <div className="text-error">
                    <input name="name" className={error.name && 'login-error'} value={form.name} onChange={handleChange} type="text" placeholder="Nguyễn Văn A" />
                    {
                        error.name && <p className="errorInput">{error.name}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Số điện thoại<span>*</span></p>
                <div className="text-error">
                    <input name="phone" className={error.phone && 'login-error'} value={form.phone} onChange={handleChange} type="text" placeholder="0949******" />
                    {
                        error.phone && <p className="errorInput">{error.phone}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Email<span>*</span></p>
                <div className="text-error">
                    <input name="email" className={error.email && 'login-error'} value={form.email} onChange={handleChange} defaultValue={form.email} disabled type="text" />
                    {
                        error.email && <p className="errorInput">{error.email}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Facebook<span>*</span></p>
                <div className="text-error">
                    <input name="urlFb" className={error.urlFb && 'login-error'} value={form.urlFb} onChange={handleChange} type="text" placeholder="Facebook url" />
                    {
                        error.urlFb && <p className="errorInput">{error.urlFb}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Skype<span>*</span></p>
                <div className="text-error">
                    <input name="urlSkype" className={error.urlSkype && 'login-error'} value={form.urlSkype} onChange={handleChange} type="text" placeholder="Skype url" />
                    {
                        error.urlSkype && <p className="errorInput">{error.urlSkype}</p>
                    }
                </div>
            </label>
            <div className="btn main rect" onClick={submit}>LƯU LẠI</div>
        </div>
    )
}
