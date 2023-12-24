import { createRoot } from "react-dom/client"
import Card from "./components/Card"

const App = () => {
    return (
        <div>
            <h1>1942 Flows</h1>
            <Card 
                song_image="album_cover_2.png"
                song_title="All I Need"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

