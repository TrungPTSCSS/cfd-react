export function Course(props) {
    let badgeClass = props.status == "Đã kết thúc" ? 'b1' : props.status === "Đang diễn ra" ? 'b2' : 'b3'
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src="img/img1.png" alt="" />
                    <span className={`badge ${badgeClass}`}>{props.status}</span>
                    {/* {props.status === "Đang diễn ra" && <span className="badge b2">{props.status}</span>} */}
                    {/* {props.status === "Sắp khai giảng" && <span className="badge b3">{props.status}</span>} */}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="img/icon-user-white.svg" alt="" />
                                {props.people}</div>
                            <div className="heart">
                                <img src="img/icon-heart.svg" alt="" />{props.like}
                            </div>
                        </div>
                        <div className="share">
                            <img src="img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {props.name}
                    </a>
                    <p className="des">
                        One of the best corporate fashion brands in Sydney
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="img/avt.png" alt="" />
                        </div>
                        <div className="name">{props.mentor}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}