import { Course } from ".."
import Loading from "../Loading"

export function ListCourse({ sub, title, listCourse }) {
    if (!listCourse) return <Loading/>
    return (
        <section className="section-3">
            <div className="container">
                <div className="textbox">
                    <h3 className="sub-title">{sub}</h3>
                    <h2 className="main-title">{title}</h2>
                </div>
                <div className="list row">
                    {listCourse.map(function (o, i) {
                        return <Course key={i} {...o} />
                    })}
                </div>
            </div>
        </section>
    )
}