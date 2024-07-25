import {BrowseRouter,Routes,Route} from "react";
import DataFetching from "./datafetch";
import Reg from "./register";

function App(){
    return(
        <BrowseRouter>
        <Routes>
            <Route path ="/" element={<DataFetching/>}></Route>
            <Route path ="/" element={<Reg/>}></Route>
        </Routes>
        </BrowseRouter>
    )
}

export default App;