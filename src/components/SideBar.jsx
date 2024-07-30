export default function SideBar(props) {
    const {handleToggleModel} = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModel} className="background-overlay"></div>
            <div className="sidebar-contents">
                <h2>THe Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>oijadfoijasdoifjasodfijocijvxcvxcvoij</p>
                </div>
                <button onClick={handleToggleModel}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    )
}