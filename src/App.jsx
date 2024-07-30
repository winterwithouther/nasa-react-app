import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [showModel, setModel] = useState(false)

  function handleToggleModel() {
    setModel(!showModel)
  }
  return (
    <>
      <Main/>
      {showModel && (<SideBar handleToggleModel={handleToggleModel}/>)}
      <Footer handleToggleModel={handleToggleModel}/>
    </>
  )
}

export default App
