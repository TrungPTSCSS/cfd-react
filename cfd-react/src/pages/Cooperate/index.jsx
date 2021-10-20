import { useState } from "react"
export default function Cooperate() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    const regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    const handleChange = (ev) => {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value
        setForm({ ...form, [name]: value })
    }
    const submit = () => {
        let errorObject = {}
        if (!form.name) {
            errorObject.name = 'Vui lòng nhập họ tên'
        }
        if (!form.title) {
            errorObject.title = 'Vui lòng nhập tiêu đề'
        }
        if (!form.content) {
            errorObject.content = 'Vui lòng nhập nội dung'
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
        if(Object.keys(errorObject).length === 0){
            alert('Thành công')
        }
        setError(errorObject)
    }

    return (
        <main className="register-course" id="main">
            <section className="section-1 wrap container">
                {/* <div class="main-sub-title">liên hệ</div> */}
                <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
                <p className="top-des">
                    Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                    việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước.
                </p>
                <div className="form">
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <div className="text-error">
                            <input onChange={handleChange} className={error.name && "login-error"} type="text" name="name" value={form.name} placeholder="Họ và tên bạn" />
                            {
                                error.name && <p>{error.name}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <div className="text-error">
                            <input onChange={handleChange} className={error.phone && "login-error"} name="phone" value={form.phone} type="text" placeholder="Số điện thoại" />
                            {
                                error.phone && <p>{error.phone}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <div className="text-error">
                            <input onChange={handleChange} className={error.email && "login-error"} name="email" value={form.email} type="text" placeholder="Email của bạn" />
                            {
                                error.email && <p>{error.email}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Website</p>
                        <div className="text-error">
                            <input onChange={handleChange} className={error.url && "login-error"} name="url" value={form.url} type="text" placeholder="Đường dẫn website http://" />
                            {
                                error.url && <p>{error.url}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <div className="text-error">
                            <input onChange={handleChange} className={error.title && "login-error"} name="title" value={form.title} type="text" placeholder="Tiêu đề liên hệ" />
                            {
                                error.title && <p> {error.title}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <div className="text-error">
                            <textarea onChange={handleChange} className={error.content && "login-error"} name="content" value={form.content} cols={51} rows={10} />
                            {
                                error.content && <p> {error.content}</p>
                            }
                        </div>
                    </label>
                    <div className="btn main rect" onClick={submit}>đăng ký</div>
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