import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainCenterBox from "./components/MainComponents/MainCenterBox";
import MenuBar from "./components/MainComponents/MenuBar";
import { SearchProvider } from "./components/MainComponents/SearchContext";

function App() {
    return (
        <BrowserRouter>
            <div className="mainApp">
                <MenuBar />
                <SearchProvider>
                    <MainCenterBox />
                </SearchProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
