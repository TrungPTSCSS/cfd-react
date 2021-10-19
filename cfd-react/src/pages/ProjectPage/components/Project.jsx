export function Project({img,name,makeBy}) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="makeby">Hoàn thành với {makeBy} </div>
                </div>
            </div>
        </a>
    )
}