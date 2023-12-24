const Card = (props) => {
    return (
        <div>
            <img src={`images/${props.song_image}`} />
            <h2>{props.song_title}</h2>
        </div>
    )
}

export default Card; 