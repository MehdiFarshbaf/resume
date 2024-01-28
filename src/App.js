import Header from "./components/Header/Header";
import Banner from "./components/homePage/Banner/Banner";
import About from "./components/homePage/About/About";
import Service from "./components/homePage/Services";
import Skills from "./components/homePage/Skills/Skills";
import MyTeams from "./components/homePage/MyTeams/MyTeams";

const App = () => {
    return (
        <div className="appContainer">
            <Header/>
            <Banner/>
            <About/>
            <Service/>
            <Skills/>
            <MyTeams/>
        </div>
    )
}
export default App