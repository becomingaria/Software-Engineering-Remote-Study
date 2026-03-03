import { useState, useEffect } from "react"
import { Planet } from "react-kawaii"

function App() {
    const [jokeData, setJokeData] = useState(null)
    const [dogData, setDogData] = useState(null)
    const [fetchCount, setFetchCount] = useState(0)

    const bothLoaded = jokeData !== null && dogData !== null

    useEffect(() => {
        setJokeData(null)
        setDogData(null)

        // Quadrant 1: Chuck Norris API
        fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => res.json())
            .then((data) => setJokeData(data.value))
            .catch(console.error)

        // Quadrant 2: Dog CEO API
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => setDogData(data.message))
            .catch(console.error)
    }, [fetchCount])

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "100vh",
            }}
        >
            {/* Quadrant 1 */}
            <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
                <h2>Chuck Norris Says...</h2>
                <p>{jokeData || "Loading..."}</p>
            </div>

            {/* Quadrant 2 */}
            <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
                <h2>Random Dog</h2>
                {dogData ? (
                    <img
                        src={dogData}
                        alt='random dog'
                        style={{ maxWidth: "100%" }}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            {/* Quadrant 3 — Kawaii */}
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    textAlign: "center",
                }}
            >
                <h2>API Mood</h2>
                <Planet
                    size={150}
                    mood={bothLoaded ? "happy" : "sad"}
                    color='#FDA7DC'
                />
                <p>
                    {bothLoaded ? "All APIs loaded! 🎉" : "Waiting for data..."}
                </p>
            </div>

            {/* Quadrant 4 — Re-fetch button */}
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <button
                    onClick={() => setFetchCount((c) => c + 1)}
                    style={{
                        fontSize: "1.2rem",
                        padding: "0.75rem 2rem",
                        cursor: "pointer",
                    }}
                >
                    🔄 Refresh Data
                </button>
            </div>
        </div>
    )
}

export default App
