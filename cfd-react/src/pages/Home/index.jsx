import { Link } from "react-router-dom";
import courseService from "../../services/CourseService";
import { ListCourse } from "./components/ListCourse";
import { Testimonital } from "./components/Testimonital";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Gallery from "./components/Gallery";

export default function Home() {
    let [state, setState] = useState({
        data: {},
        loading: true,
    })

    useEffect(async () => {
        let data = await courseService.home();
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        setState({
            loading: false,
            data
        })
    }, [])
    let { loading, data } = state
    if (loading) return <Loading />
    return (
        <main className="homepage" id="main">
            <div className="banner jarallax">
                <div className="container">
                    <div className="content">
                        <h2 className="title">Thực Chiến</h2>
                        <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                        <Link to="/course-page" className="btn main round">KHÓA HỌC</Link>
                    </div>
                </div>
                <div className="jarallax-img">
                    <img data-src="/img/bg-cover.jpg" alt="" className="lazyload" />
                    <div className="video-bg lazyload" data-src="/video/CFD-video-bg2.mp4" />
                </div>
            </div>
            <ListCourse name="Khoá học Online" decription="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has
                    a more-or-less normal" type="online" listCourse={data.online} />
            <ListCourse name="Khoá học Offline" type="offline" listCourse={data.offline} />
            <section className="section-different">
                <div className="container">
                    <div className="row">
                        <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                            <h2 className="main-title white textleft">Những điều <br /><span>đặc biệt</span> tại CFD</h2>
                            <div className="videodif" data-src="video/CFD-video-intro.mp4">
                                <img src="img/img-cfd-dac-biet.jpg" alt="" />
                                <div className="play-btn btn-video-intro">
                                    <img src="img/play-icon.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                            <div className="item">
                                <h4>Không cam kết đầu ra</h4>
                                <p>Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như cả người hướng dẫn và
                                    người
                                    học không thật sự tâm huyết và cố gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các
                                    thành
                                    viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                                </p>
                            </div>
                            <div className="item">
                                <h4>Không chỉ là một lớp học</h4>
                                <p>CFD không phải một lớp học thuần túy, tất cả thành viên là một team, cùng hổ trợ, chia sẻ
                                    và
                                    giúp đỡ nhau trong suốt quá trình học và sau này, với sự hướng dẫn tận tâm của các thành
                                    viên đồng sáng lập.
                                </p>
                            </div>
                            <div className="item">
                                <h4>Không để ai bị bỏ lại phía sau</h4>
                                <p>Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ được đội ngũ CFD kèm cặp đặc
                                    biệt,
                                    cùng sự hổ trợ từ các thành viên khác. Vì mục tiêu cuối cùng là hoàn thành
                                    khóa
                                    học thật tốt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-testimonial">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
                    </div>
                    <Testimonital review={data.review} />
                </div>
            </section>
            <Gallery gallery = {data.gallery}/>
            <section className="section-action">
                <div className="container">
                    <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                    <Link to="/register" className="btn main round bg-white">Đăng ký</Link>
                </div>
            </section>
        </main>
    )
}