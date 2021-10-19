import { Course } from "../../../components/Course"

export function ListCourse(props) {
    return (
        <section className="section-courseoffline">
            <div className="container">
                {props.decription && <p className="top-des">
                    {props.decription}
                </p>}
                <div className="textbox">
                    <h2 className="main-title">{props.name}</h2>
                </div>
                <div className="list row">
                    {props.type === "online" &&
                        props.listCourse.map(function (o, i) {
                            return <Course key={i} people={o.people} like={o.like} name={o.name} status={o.status} mentor={o.mentor} />
                        })
                    }
                    {props.type === "offline" &&
                        props.listCourse.map(function (o, i) {
                            return <Course key={i} people={o.people} like={o.like} name={o.name} mentor={o.mentor} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}