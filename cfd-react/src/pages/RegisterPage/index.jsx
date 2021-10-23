import { useState } from "react"
import { Prompt } from "react-router-dom";

export default function Register(props) {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const [submitForm, setSubmitForm] = useState(true);

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

    const course = props.location.state;
    console.log(course);

    function handleChange(ev) {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value
        setForm({ ...form, [name]: value })
        setSubmitForm(false)

    }
    function submit(event) {
        let errorObject = {}
        if (!form.name) {
            errorObject.name = 'Vui lòng nhập tên'
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
        if (!form.url) {
            errorObject.url = 'Vui lòng nhập url'
        } else if (!regexUrl.test(form.url)) {
            errorObject.url = 'Vui lòng nhập đúng định dạng url'
        }

        if (Object.keys(errorObject).length === 0) {
            alert('Success')
            event.preventDefault();
            setSubmitForm(true);
        }
        setError(errorObject);
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
                        <div className="form">
                            <Prompt
                                when={!submitForm}
                                message={'Dữ liệu của bạn chưa được lưu bạn có chắc muốn thoát?'} />
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.name && 'login-error'} value={form.name} name="name" onChange={handleChange} type="text" placeholder="Họ và tên bạn" />
                                    {
                                        error.name && <p className="errorInput">{error.name}</p>
                                    }
                                </div>
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.phone && 'login-error'} value={form.phone} name="phone" onChange={handleChange} type="text" placeholder="Số điện thoại" />
                                    {
                                        error.phone && <p className="errorInput">{error.phone}</p>
                                    }
                                </div>
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.email && 'login-error'} value={form.email} name="email" onChange={handleChange} type="text" placeholder="Email của bạn" />
                                    {
                                        error.email && <p className="errorInput">{error.email}</p>
                                    }
                                </div>
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <div className="text-error">
                                    <input className={error.url && 'login-error'} value={form.url} name="url" onChange={handleChange} type="text" placeholder="https://facebook.com" />
                                    {
                                        error.url && <p className="errorInput">{error.url}</p>
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
                            <div className="btn main rect" onClick={submit}>đăng ký</div>
                        </div>
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