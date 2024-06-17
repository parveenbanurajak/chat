import './App.css'
import Application from "./components/Application"
import CTA from "./components/CTA"
import Cards from "./components/Cards"
import End from "./components/End"
import Feature from "./components/Feature"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Header />
      <CTA />
      <Feature />
      <Application />
      <Cards />
      <End />
    </div>
  )
}

export default App
