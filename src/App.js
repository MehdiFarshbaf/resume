import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Service from "./components/Services";
import Skills from "./components/Skills/Skills";

const App = () => {
    return (
        <div className="appContainer">
            <Header/>
            <Banner/>
            <About/>
            <Service/>
            <Skills/>
        </div>
    )
}
export default App