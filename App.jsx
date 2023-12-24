import { createRoot } from "react-dom/client"
import Card from "./components/Card"

const App = () => {
    return (
        <div className="songs">
            <Card 
                song_image="album_cover_2.png"
                song_title="POWER"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Sophisticated Ignorance"
            />
            <Card
                song_image="album_cover_6.png"
                song_title="Gorgeous"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Sophisticated Ignorance"
            />
            <Card 
                song_image="album_cover_7.png"
                song_title="POWER REMIX"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Sophisticated Ignorance"
            />
            <Card 
                song_image="album_cover_8.png"
                song_title="Hell Of A Life"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                artist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Sophisticated Ignorance"
            />

        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

