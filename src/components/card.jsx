import "./card.css"

const Card = ({ title, pic, description }) => {
    return (
        <>


            <div className="card">

                <h2>{title}</h2>
                <img
                    src={pic} height="300" width={340} style={{ borderRadius: "50px" }}
                />
                <p className="des">{description}</p>

            </div>
        </>
    )
}

export default Card