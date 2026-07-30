interface CardProps {
    img: string       // The location of the image
    children: string      // The text the card will contain
}

function Card({ img, children }: CardProps) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">{ children }</p>
            </div>
        </div>
    )
}

export default Card