import { createRoot } from "react-dom/client"
import Card from "./components/Card"

const App = () => {
    return (
        <div className="songs">
            <h1>1942 Flows</h1>
            <Card 
                song_image="album_cover_2.png"
                song_title="All I Need"
                album_icon="album_icon.png"
                album_name="My Beautiful Dark Twisted Fantasy"
                artist_icon="artist_icon.png"
                arist_name="Kanye West"
                genre_icon="genre_icon.png"
                genre_name="Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

