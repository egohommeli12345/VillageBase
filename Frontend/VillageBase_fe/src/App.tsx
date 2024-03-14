import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainCenterBox from "./components/MainComponents/MainCenterBox";
import MenuBar from "./components/MainComponents/MenuBar";
import { SearchProvider } from "./components/MainComponents/SearchContext";
import { ToolStateProvider } from "./components/MainComponents/ToolStateContext";
import { SortTypeProvider } from "./components/SortingComponents/SortTypeContext";

function App() {
    return (
        <BrowserRouter>
            <ToolStateProvider>
                <SortTypeProvider>
                    <SearchProvider>
                        <div className="mainApp">
                            <MenuBar />
                            <MainCenterBox />
                        </div>
                    </SearchProvider>
                </SortTypeProvider>
            </ToolStateProvider>
        </BrowserRouter>
    );
}

export default App;
