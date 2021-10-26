import { useState } from "react"
import { Prompt } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { useLocalStorage } from "../../hook/useLocalStorage";

export default function Register(props) {
    const course = props.location.state;
    console.log(course);
    let [InfoRegister, setRegister] = useLocalStorage('InfoRegister')

    const [submitForm, setSubmitForm] = useState(false);
    let { register, form, handleSubmit, error } = useForm(InfoRegister || {})

    const submit = (form) => {
        console.log('====================================');
        console.log(form);
        setRegister(form);
        setSubmitForm(true);
        console.log('====================================');
    }
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        {!course?.name && <h1 className="main-title">Khóa học ở CFD</h1>}
                        <h1 className="main-title">{course?.name}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <form className="form" onSubmit={handleSubmit(submit)}>
                            <Prompt
                                when={!submitForm}
                                message={'Dữ liệu của bạn chưa được lưu bạn có chắc muốn thoát?'} />
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.fullName && 'login-error'} {...register('fullName', { required: true })} type="text" placeholder="Họ và tên bạn" />
                                    {
                                        error.fullName && <p className="errorInput">{error.fullName}</p>
                                    }
                                </div>
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.phone && 'login-error'}  {...register('phone', { required: true, parttern: 'phone' })} type="text" placeholder="Số điện thoại" />
                                    {
                                        error.phone && <p className="errorInput">{error.phone}</p>
                                    }
                                </div>
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.email && 'login-error'} {...register('email', { required: true, parttern: 'email' })} type="text" placeholder="Email của bạn" />
                                    {
                                        error.email && <p className="errorInput">{error.email}</p>
                                    }
                                </div>
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.urlFb && 'login-error'} {...register('urlFb', { required: true, parttern: 'url' })} type="text" placeholder="Facebook url" />
                                    {
                                        error.urlFb && <p className="errorInput">{error.urlFb}</p>
                                    }
                                </div>
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <button className="btn main rect" type='submit'>đăng ký</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}