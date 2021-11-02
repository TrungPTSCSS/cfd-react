import { Link } from "react-router-dom"
export function Course({
    course_status = 'Đã kết thúc',
    slug = 'FE',
    title = 'FECB',
    like = 1,
    people = 500,
    teacher = {},
    short_description='',
    thumbnail = {}
}) {
    let badgeClass = course_status === "sap-khai-gian" ? 'b3' : course_status === "dang-dien-ra" ? 'b2' : 'b1'
    return (
        <Link to={{
            pathname: `/course-details/${slug}`
        }} className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={thumbnail?.link} alt="" />
                    <span className={`badge ${badgeClass}`}>{course_status === 'sap-khai-gian' ? 'Sắp khai giảng' : course_status === 'dang-dien-ra' ? 'Đang diễn ra' : 'Đã kết thúc' }</span>
                    {/* {status === "Đang diễn ra" && <span className="badge b2">{status}</span>} */}
                    {/* {status === "Sắp khai giảng" && <span className="badge b3">{status}</span>} */}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                {550}</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" />{500}
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {title}
                    </a>
                    <p className="des">
                        {short_description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher?.avatar?.link} alt="" />
                        </div>
                        <div className="name">{teacher?.title}</div>
                    </div>
                    <Link to={{
                        pathname: `/register/${slug}`
                    }} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </Link>
    )
}