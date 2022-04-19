import {Fragment} from "react";
import Header from "./components/Header/Header";
import './App.css'
import CharacterHeader from "./components/Characters/CharacterHeader";
import Content from "./components/Characters/Content/Content";
import MarvelService from "./services/MarvelService";


function App() {
    return (
        <Fragment>
            <Header/>
            <CharacterHeader/>
            <Content/>
        </Fragment>
    )
}

export default App;
