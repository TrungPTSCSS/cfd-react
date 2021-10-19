export function Member({name,decription}) {
    return (
        <div className="wrap">
            <div className="cover">
                <img src="img/thumb-member.jpg" alt="" />
            </div>
            <div className="info">
                <div className="name">
                    {name}
                </div>
                <p className="title">{decription}</p>
            </div>
        </div>
    )
}