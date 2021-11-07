import { ListCourse } from "../../components";
import { useEffect, useState } from "react";
import courseService from "../../services/CourseService";
import Loading from "../../components/Loading";
export default function CoursePage() {
    let [state, setState] = useState({
        data: {},
        loading: true,
    })
    useEffect(async () => {
        let data = await courseService.getCourse();
        console.log(data)
        setState({
            loading: false,
            data
        })
    }, [])
    let { loading, data } = state
    if (loading) return <Loading />
    return (
        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
                    </p>
                    <ListCourse title="ONLINE" sub="KHÓA HỌC" listCourse={data?.online} />
                    <ListCourse title="OFFLINE" sub="KHÓA HỌC" listCourse={data?.offline} />
                </div>
            </section>
        </main>
    )
}
