import {Fragment} from "react";
import Header from "./components/Header/Header";
import './App.css'
import CharacterHeader from "./components/Characters/CharacterHeader";
import Content from "./components/Characters/Content";
import MarvelService from "./services/MarvelService";





function App() {
    const instance = new MarvelService();

    instance.getAllCharacters().then((res) => {
        res.data.results.forEach(item => console.log(item.name))
    })
    return (
        <Fragment>
            <Header/>
            <CharacterHeader/>
            <Content/>
        </Fragment>
    );
}

export default App;
