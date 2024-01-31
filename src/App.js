import Header from "./components/Header/Header";
import Banner from "./components/homePage/Banner/Banner";
import About from "./components/homePage/About/About";
import Service from "./components/homePage/Services";
import Skills from "./components/homePage/Skills/Skills";
import MyTeams from "./components/homePage/MyTeams/MyTeams";
import ContactMe from "./components/homePage/ContactMe/ContactMe";

const App = () => {
    return (
        <div className="appContainer">
            <Header/>
            <Banner/>
            <About/>
            <Service/>
            <Skills/>
            <MyTeams/>
            <ContactMe/>
        </div>
    )
}
export default App