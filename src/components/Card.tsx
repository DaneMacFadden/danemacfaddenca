interface CardProps {
    img: string       // The location of the image
    text: string      // The text the card will contain
}

function Card({ img, text }: CardProps) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default Card