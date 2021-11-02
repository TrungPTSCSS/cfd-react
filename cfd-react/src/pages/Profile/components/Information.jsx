import React from 'react'
import { useState } from 'react';
import { Prompt } from 'react-router-dom';
import { useAuth } from '../../../hook/useAuth';
import { useForm } from '../../../hook/useForm';
import { useLocalStorage } from '../../../hook/useLocalStorage';
import authService from '../../../services/AuthService';

export function Information() {
    const { user } = useAuth()
    let [infoAccount, setInfoAccount] = useLocalStorage('infoAccount')

    let { register, form, handleSubmit, error } = useForm(infoAccount || user)


    const [submitForm, setSubmitForm] = useState(false);

    const submit = async (form) => {
        form.first_name = form.fullName.split(' ').slice(-1).join(' ');
        form.last_name = form.fullName.split(' ').slice(0, -1).join(' ');
        

        console.log('====================================');
        console.log(form);
        console.log('====================================');

        await authService.update(JSON.stringify(form));

        setInfoAccount(form)
        
        setSubmitForm(true);
    }

    return (
        <form className="tab1"
            onSubmit={handleSubmit(submit)}>
            <Prompt
                when={!submitForm}
                message={'Dữ liệu của bạn chưa được lưu bạn có chắc muốn thoát?'} />
            <label className="formInput">
                <p>Họ và tên<span>*</span></p>
                <div className="text-error">
                    <input className={error.fullName && 'login-error'} {...register('fullName', { required: true })} type="text" placeholder="Nguyễn Văn A" />
                    {
                        error.fullName && <p className="errorInput">{error.fullName}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Số điện thoại<span>*</span></p>
                <div className="text-error">
                    <input className={error.phone && 'login-error'} {...register('phone', { required: true, parttern: 'phone' })} type="text" placeholder="0949******" />
                    {
                        error.phone && <p className="errorInput">{error.phone}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Email<span>*</span></p>
                <div className="text-error">
                    <input className={error.email && 'login-error'} {...register('email', { required: true, parttern: 'email' })} defaultValue={form.email} disabled type="text" />
                    {
                        error.email && <p className="errorInput">{error.email}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Facebook<span>*</span></p>
                <div className="text-error">
                    <input className={error.urlFb && 'login-error'} {...register('urlFb', { required: true, parttern: 'url' })} type="text" placeholder="Facebook url" />
                    {
                        error.urlFb && <p className="errorInput">{error.urlFb}</p>
                    }
                </div>
            </label>
            <label className="formInput">
                <p>Skype<span>*</span></p>
                <div className="text-error">
                    <input className={error.urlSkype && 'login-error'} {...register('urlSkype', { required: true, parttern: 'url' })} type="text" placeholder="Skype url" />
                    {
                        error.urlSkype && <p className="errorInput">{error.urlSkype}</p>
                    }
                </div>
            </label>
            <button className="btn main rect" type="submit">LƯU LẠI</button>
        </form>
    )
}
