import { Link } from "react-router-dom"
export function Course({
    status = 'Đã kết thúc',
    tagName = 'FE',
    name = 'FECB',
    like = 1,
    people = 500,
    mentor = ''
}) {
    let badgeClass = status == "Đã kết thúc" ? 'b1' : status === "Đang diễn ra" ? 'b2' : 'b3'
    return (
        <Link to={{
            pathname: `/course-details/${tagName}`,
            state: {
                status: status,
                tagName: tagName,
                name: name,
                like: like,
                people: people,
                mentor: mentor
            },
        }} className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src="/img/img1.png" alt="" />
                    <span className={`badge ${badgeClass}`}>{status}</span>
                    {/* {status === "Đang diễn ra" && <span className="badge b2">{status}</span>} */}
                    {/* {status === "Sắp khai giảng" && <span className="badge b3">{status}</span>} */}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                {people}</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" />{like}
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {name}
                    </a>
                    <p className="des">
                        One of the best corporate fashion brands in Sydney
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">{mentor}</div>
                    </div>
                    <Link to={{
                        pathname: `/register/${tagName}`,
                        state: {
                            status: status,
                            tagName: tagName,
                            name: name,
                            like: like,
                            people: people,
                            mentor: mentor
                        },
                    }} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </Link>
    )
}