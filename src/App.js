import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";

const App = () => {
    return (
        <div className="appContainer">
            <Header/>
            <Banner/>
            <About/>
        </div>
    )
}
export default App