import { Member } from "./components/Member"

export function Team() {
    var listMentor = [
        {
            name: 'Trần Nghĩa',
            decription: 'Founder &amp; Creative Front-End Developer'
        },
        {
            name: 'Đặng Thuyền Vương',
            decription: 'Co-Founder &amp & Fullstack Developer'
        },
        {
            name: 'Đặng Thuyền Quân',
            decription: 'Co-Founder &amp & Backend Developer'
        },
        {
            name: 'Nguyễn Đức Huy',
            decription: 'Co-Founder &amp & Front-End Developer'
        },
    ]
    var listStudent = [
        {
            name: 'Diệp Anh Thy',
            decription: 'CFD1-Offline'
        },
        {
            name: 'Huỳnh Tiến Tài',
            decription: 'CFD1-Offline'
        },
        {
            name: 'Ngô Thành Long',
            decription: 'CFD1-Offline'
        },
        {
            name: 'Trần Anh Tuấn',
            decription: 'CFD1-Offline'
        },
        {
            name: 'Nguyễn Thanh Tùng',
            decription: 'CFD1-Offline'
        },
        {
            name: 'Phạm Thành Trung',
            decription: 'CFD1-Offline'
        }
    ]
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                            elementum
                            sem non luctus
                        </p>
                    </div>
                    <div className="list row">
                        {listMentor.map(function (o, i) {
                            return <div className="item col-md-6 col-sm-6">
                                <Member name={o.name} decription={o.decription} key={i} />
                            </div>
                        })}
                        {
                            listStudent.map(function (o, i) {
                                return <div className="item col-md-3 col-sm-4 col-xs-6">
                                    <Member name={o.name} decription={o.decription} key={i} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}