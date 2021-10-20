import { Project } from "./components/Project"

export default function ProjectPage() {
    var listProject = [
        {
            name: 'Furnitown',
            makeBy: 'Trần Nghĩa',
            img: 'img/project/project (1).jpg'
        },
        {
            name: 'kymco',
            makeBy: 'Huỳnh Tiến Tài',
            img: 'img/project/project (2).jpg'
        },
        {
            name: 'gboxmb',
            makeBy: 'Nguyễn Văn Tuấn',
            img: 'img/project/project (3).jpg'
        },
        {
            name: 'Wooder',
            makeBy: 'Nguyễn Đức Huy',
            img: 'img/project/project (4).jpg'
        },
    ]
    return (
        <main className="projectpage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">dự án</h2>
                    <p className="top-des">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                        luctus
                    </p>
                    <div className="list row">
                        {listProject.map(function (object, i) {
                            return <Project name={object.name} makeBy={object.makeBy} img={object.img} key={i} />
                        })}
                    </div>
                    <div className="bottom">
                        <div className="btn overlay round btn-more">
                            tải thêm
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}