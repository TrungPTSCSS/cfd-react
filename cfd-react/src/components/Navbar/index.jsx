import { NavLink } from "react-router-dom"
export function Navbar() {
    const showMenu = () => {
        document.querySelector('body').classList.toggle('menu-is-show');
    }
    return (
        <nav className="nav">
            <ul>
                <li className="li_login">
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                </li>
                <li onClick={showMenu}>
                    <NavLink to="/" exact>Trang chủ</NavLink>
                </li>
                <li onClick={showMenu}>
                    <NavLink to="/team" exact>CFD Team</NavLink>
                </li>
                <li onClick={showMenu}>
                    <NavLink to="/course-page">Khóa Học</NavLink>
                </li>
                <li onClick={showMenu}>
                    <NavLink to="/project-page">Dự Án</NavLink>
                </li>
                <li onClick={showMenu}>
                    <NavLink to="/cooperate">Liên hệ</NavLink>
                </li>
            </ul>
        </nav>
    )
}