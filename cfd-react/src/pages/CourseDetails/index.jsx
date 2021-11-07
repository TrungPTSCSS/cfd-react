import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ListCourse } from "../../components/ListCourse"
import Loading from "../../components/Loading";
import courseService from "../../services/CourseService";
export default function CourseDetails() {
    let [details, setDetails] = useState()
    let { tagname } = useParams();
    let [courseRelated , setCourseRelated] = useState();
    useEffect(
        () => {
            async function fetchData() {
                let response = await courseService.details(tagname);
                let res = await courseService.getCourseRelated(tagname);
                await setDetails(response.data);
                await setCourseRelated(res.data);
            }
            fetchData();
        }, [tagname])
    var list = [
        {
            tagName: 'Fe-can-ban',
            title: 'Front-end căn bản',
            people: 100,
            like: 100,
            status: "Đã kết thúc",
            teacher: "Trần Nghĩa"
        },
        {
            tagName: 'Fe-Reactjs',
            title: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            teacher: "Vương Đặng"
        },
        {
            tagName: 'FE-Animation',
            title: "Animation",
            people: 100,
            like: 500,
            status: "Sắp khai giảng",
            teacher: "Trần Nghĩa"
        },
    ]
    if (!details && !courseRelated) return <Loading />
    return (
        <main className="course-detail" id="main">
            <section className="banner style2" style={{ background: '#cde6fb' }}>
                <div className="container">
                    <div className="info">
                        <h1>{details.title}</h1>
                        <div className="row">
                            <div className="date"><strong>Khai giảng:</strong>{details.opening_time}</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                        </div>
                        <div className="btn white round" style={{ colorBtn: '#70b6f1' }}>đăng ký</div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="video">
                            <div className="icon">
                                <img src="img/play-icon-white.png" alt="" />
                            </div> <span>giới thiệu</span>
                        </div>
                        <div className="money">{details.money} VND</div>
                    </div>
                </div>
            </section>
            <section className="section-2">
                <div className="container">
                    <p className="des">{details.short_description}</p>
                    <h2 className="title">giới thiệu về khóa học</h2>
                    <p className="des">{details.long_description}</p>
                    <div className="cover">
                        <img src="img/course-detail-img.png" alt="" />
                    </div>
                    <h3 className="title">nội dung khóa học</h3>
                    {
                        details?.content?.map((e, i) => (
                            <div key={i} className="accordion">
                                <div className="accordion__title">
                                    <div className="date">Ngày {i + 1}</div>
                                    <h3>{e.title}</h3>
                                </div>
                                <div className="content">
                                    {e.content}
                                </div>
                            </div>
                        ))
                    }
                    <h3 className="title">yêu cầu cần có</h3>
                    <div className="row row-check">
                        {
                            details?.required?.map((e, i) => (
                                <div key={i} className="col-md-6">{e.content}</div>
                            ))
                        }
                    </div>
                    <h3 className="title">hình thức học</h3>
                    <div className="row row-check">
                        {
                            details?.benefits?.map((e, i) => (
                                <div key={i} className="col-md-6">{e.content}</div>
                            ))
                        }
                    </div>
                    <h3 className="title">
                        <div className="date-start">lịch học</div>
                        <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                    </h3>
                    <p>
                        <strong>Ngày bắt đầu: </strong> {details?.opening_time} <br />
                        <strong>Thời gian học: </strong>{details?.schedule}
                    </p>
                    <h3 className="title">Người dạy</h3>
                    <div className="teaches">
                        <div className="teacher">
                            <div className="avatar">
                                <img src={details?.teacher?.avatar?.link} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">{details?.teacher?.title}</div>
                                <div className="title">Founder CFD &amp; Creative Front-End Developer</div>
                                <p className="intro">
                                    {details?.teacher?.description}
                                </p>
                                <p><strong>Website:</strong> <a href="#">{details?.teacher?.website}</a></p>
                            </div>
                        </div>
                    </div>
                    <h3 className="title">Người hướng dẫn</h3>
                    {
                        details?.mentor?.map((e, i) => (
                            <div key={i} className="teaches">
                                <div className="teacher">
                                    <div className="avatar">
                                        <img src={e.avatar.link} alt="" />
                                    </div>
                                    <div className="info">
                                        <div className="name">{e.title}</div>
                                        <div className="title">Founder CFD &amp; Creative Front-End Developer</div>
                                        <p className="intro">
                                            {e.description}
                                        </p>
                                        <p><strong>Website:</strong> <a href="#">{e.website}</a></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="bottom">
                        <div className="user">
                            <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
                        </div>
                        <div className="btn main btn-register round">đăng ký</div>
                        <div className="btn-share btn overlay round btn-icon">
                            <img src="img/facebook.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <ListCourse title="THÀNH VIÊN" sub="DỰ ÁN" listCourse={courseRelated} />
            <ListCourse title="LIÊN QUAN" sub="KHÓA HỌC" listCourse={courseRelated} />
        </main>
    )
}