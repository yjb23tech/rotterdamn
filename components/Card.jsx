const Card = (props) => {
    return (
        <div>
            <img src={`images/${props.song_image}`} />
            <h2>{props.song_title}</h2>
            <div>
                <img src={`images/${props.album_icon}`} />
                <p>{props.album_name}</p>
            </div>
            <div>
                <img src={`images/${props.artist_icon}`} />
                <p>{props.artist_name}</p>
            </div>
            <div>
                <img src={`images/${props.genre_icon}`} />
                <p>{props.genre_name}</p>
            </div>
        </div>
    )
}

export default Card; 