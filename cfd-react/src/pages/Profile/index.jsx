import { NavLink, Switch, Route } from "react-router-dom";
import { Coin, Course, Information, Payment, Project } from "./components";

import { useRouteMatch } from "react-router-dom";
export default function Profile() {
    const { url } = useRouteMatch()
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="/img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink to={`${url}`} exact>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/course`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/payment`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>
                                <Route path={`${url}`} exact component={Information} />
                                <Route path={`${url}/course`} component={Course} />
                                <Route path={`${url}/project`} component={Project} />
                                <Route path={`${url}/payment`} component={Payment} />
                                <Route path={`${url}/coin`} component={Coin} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}