export default function SideBar(props) {
    const {handleToggleModel, data} = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModel} className="background-overlay"></div>
            <div className="sidebar-contents">
                <h2>{data?.title}</h2>
                <div className="description-container">
                    <p className="description-title">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModel}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}