import "./Home.css"
export default function Home() {
  return (
    <div>
        <video autoPlay muted loop id="background-video">
            <source src="public/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="home-container">
            <div className="home-box">
                <h1>Welcome to the Quiz</h1>
                <p>Test your knowledge with our exciting quiz!</p>
                <button className="start-btn" >
                    Start Quiz
            </button>
            </div>
        </div>
    </div>
  )
}
