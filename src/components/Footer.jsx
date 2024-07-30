export default function Footer(props) {
    const {handleToggleModel, data} = props
    return (
        <footer>
            <div className="background-gradient">

            </div>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModel}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}