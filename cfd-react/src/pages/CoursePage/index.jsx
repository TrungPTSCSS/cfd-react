import { ListCourse } from "../../components";

export function CoursePage() {
    var listOnline = [
        {
            name: 'Front-end căn bản',
            people: 100,
            like: 100,
            status: "Đã kết thúc",
            mentor: "Trần Nghĩa"
        },
        {
            name: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            mentor: "Vương Đặng"
        },
        {
            name: "Animation",
            people: 100,
            like: 500,
            status: "Sắp khai giảng",
            mentor: "Trần Nghĩa"
        },
        {
            name: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            mentor: "Vương Đặng"
        },
        {
            name: "Animation",
            people: 100,
            like: 500,
            status: "Sắp khai giảng",
            mentor: "Trần Nghĩa"
        },
    ]
    var listOffline = [
        {
            name: 'Front-end căn bản',
            people: 100,
            like: 100,
            status: "Đã kết thúc",
            mentor: "Trần Nghĩa"
        },
        {
            name: 'React JS',
            people: 100,
            like: 98,
            status: "Đang diễn ra",
            mentor: "Vương Đặng"
        },
        {
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
                    {/* <div className="text-deco">C</div> */}
                </div>
            </section>
        </main>
    )
}