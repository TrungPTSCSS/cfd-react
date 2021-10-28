import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
export function Header() {
    const { user, logout, togglePopupLogin } = useAuth()
    const showMenu = () => {
        document.querySelector('body').classList.toggle('menu-is-show');
    }
    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={showMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <a href="#" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </a>
                <div className="right">
                    {
                        user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user.name}</div>
                                        <div className="avatar">
                                            <img src={user?.avt} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/profile/course">Khóa học của tôi</Link>
                                    <Link to="/profile">Thông tin tài khoản</Link>
                                    <Link to="#" onClick={(ev) => { ev.preventDefault(); logout() }}>Đăng xuất</Link>
                                </div>
                            </div>
                        ) : (
                            <div class="not-login bg-none">
                                <Link to="#" class="btn-register" onClick={(ev) => { ev.preventDefault(); togglePopupLogin(true); }}>Đăng nhập</Link>
                                <Link to="/register" class="btn main btn-open-login">Đăng ký</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}