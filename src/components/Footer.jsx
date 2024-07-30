export default function Footer(props) {
    const {handleToggleModel} = props
    return (
        <footer>
            <div className="background-gradient">

            </div>
            <div>
                <h2>The Brutal Martian Landscape</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}