import { useState } from "react"
import { Prompt } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { useLocalStorage } from "../../hook/useLocalStorage";
export default function Cooperate() {
    const [submitForm, setSubmitForm] = useState(false);
    let [Cooperate, setCooperateName] = useLocalStorage('Cooperate')

    let { register, form, handleSubmit, error } = useForm(Cooperate || {})

    console.log(Cooperate);
    const submit = (form) => {
        console.log('====================================');
        console.log(form);
        console.log('====================================');

        setSubmitForm(true);
        setCooperateName(form);
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
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <Prompt
                        when={!submitForm}
                        message={'Dữ liệu của bạn chưa được lưu bạn có chắc muốn thoát?'} />
                    <label>
                        <p>Họ và tên<span>*</span></p>
                        <div className="text-error">
                            <input className={error.fullName && "login-error"} type="text" {...register('fullName', { required: true })} placeholder="Họ và tên bạn" />
                            {
                                error.fullName && <p>{error.fullName}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Số điện thoại</p>
                        <div className="text-error">
                            <input className={error.phone && "login-error"} {...register('phone', { required: true, parttern: 'phone' })} type="text" placeholder="Số điện thoại" />
                            {
                                error.phone && <p>{error.phone}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Email<span>*</span></p>
                        <div className="text-error">
                            <input className={error.email && "login-error"} {...register('email', { required: true.valueOf, parttern: 'email' })} type="text" placeholder="Email của bạn" />
                            {
                                error.email && <p>{error.email}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Website</p>
                        <div className="text-error">
                            <input className={error.url && "login-error"} {...register('url', { required: true, parttern: 'url' })} type="text" placeholder="Đường dẫn website http://" />
                            {
                                error.url && <p>{error.url}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Tiêu đề<span>*</span></p>
                        <div className="text-error">
                            <input className={error.title && "login-error"} {...register('title', { required: true })} type="text" placeholder="Tiêu đề liên hệ" />
                            {
                                error.title && <p> {error.title}</p>
                            }
                        </div>
                    </label>
                    <label>
                        <p>Nội dung<span>*</span></p>
                        <div className="text-error">
                            <textarea className={error.content && "login-error"} {...register('content', { required: true })} cols={51} rows={10} />
                            {
                                error.content && <p> {error.content}</p>
                            }
                        </div>
                    </label>
                    <button className="btn main rect" type="submit">đăng ký</button>
                </form>
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