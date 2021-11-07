import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hook/useAuth';
import { useForm } from '../../hook/useForm'
import { closeLoginAction, fetchLogin } from '../../store/action/authAction';
export function PopupModal() {
    let [resquestError, setResquestError] = useState();
    let { register, handleSubmit, error } = useForm();
    let { openLogin } = useAuth()
    const dispatch = useDispatch();

    const submit = async (form) => {
        console.log(form);
        // let res = await login(form);
        // let res = await authService.login(form);
        await dispatch(fetchLogin(form));
        // login(form).then(res => {
        //     if (res) {
        //         setResquestError(res)
        //     } else {
        //         togglePopupLogin(false)
        //     }
        // })
        await setResquestError(localStorage.getItem('errorLogin') || null)
    }

    return ReactDOM.createPortal(
        <div className="popup-form popup-login" style={{ display: openLogin ? 'flex' : 'none' }} onClick={() => dispatch(closeLoginAction())}>
            <div className="wrap" onClick={(ev) => { ev.stopPropagation(); }}>
                {/* login-form */}
                <form onSubmit={handleSubmit(submit)} className="ct_login">
                    <h2 className="title">Đăng nhập</h2>
                    <div className="text-error" style={{ marginBottom: 15, width: '100%' }} >
                        <input className={error.username && "login-error"} style={{ marginBottom: 0 }} {...register('username', { required: true, parttern: 'email' })} type="text" placeholder="Username / Số điện thoại" />
                        {
                            error.username && <p> {error.username}</p>
                        }
                    </div>
                    <div className="text-error" style={{ marginBottom: 15, width: '100%' }}>
                        <input className={error.password && "login-error"} style={{ marginBottom: 0 }} {...register('password', { min: 6, max: 32 })} type="password" placeholder="Mật khẩu" />
                        {
                            error.password && <p> {error.password}</p>
                        }
                    </div>
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <button type="submit" className="btn rect main btn-login">đăng nhập</button>
                    {
                        resquestError &&
                        <div className="text-error">
                            <p> {resquestError}</p>
                        </div>
                    }
                    {/* <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="img/google.svg" alt="" />
                            Google
                        </div>
                    </div>
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div> */}
                </form>
                {/* email form */}
                {/* <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close">
                        <img src="img/close-icon.png" alt="" />
                    </div>
                </div> */}
            </div>
        </div>,
        document.body
    )
}
