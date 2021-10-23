import { ListCourse } from "../../components";

export default function CoursePage() {
    
    var listOnline = [
        {
            tagName:'Front-end',
            name: 'Front-end căn bản',
            people: 100,
            like: 100,
            status: "Đã kết thúc",
            mentor: "Trần Nghĩa"
        },
        {
            tagName:'React',
            name: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            mentor: "Vương Đặng"
        },
        {
            tagName:'Animation',
            name: "Animation",
            people: 100,
            like: 500,
            status: "Sắp khai giảng",
            mentor: "Trần Nghĩa"
        },
        {
            tagName:'Reactjs',
            name: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            mentor: "Vương Đặng"
        },
        {
            tagName:'Animation1',
            name: "Animation",
            people: 100,
            like: 500,
            status: "Sắp khai giảng",
            mentor: "Trần Nghĩa"
        },
    ]
    var listOffline = [
        {
            tagName:'FE-can-ban',
            name: 'Front-end căn bản',
            people: 100,
            like: 100,
            status: "Đã kết thúc",
            mentor: "Trần Nghĩa"
        },
        {
            tagName:'FE-Reactjs',
            name: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            mentor: "Vương Đặng"
        },
        {
            tagName:'FE-animation',
            name: "Animation",
            people: 100,
            like: 500,
            status: "Sắp khai giảng",
            mentor: "Trần Nghĩa"
        },
    ]
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
                    <ListCourse title="ONLINE" sub="KHÓA HỌC" listCourse={listOnline} />
                    <ListCourse title="OFFLINE" sub="KHÓA HỌC" listCourse={listOffline} />
                </div>
            </section>
        </main>
    )
}
