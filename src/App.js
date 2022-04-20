import {Fragment} from "react";
import Header from "./components/Header/Header";
import './App.css'
import CharacterHeader from "./components/Characters/CharacterHeader";
import Content from "./components/Characters/Content/Content";
import MarvelService from "./services/MarvelService";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundary";


function App() {
    return (
        <Fragment>
            <div className="container">
                <Header/>
                <ErrorBoundary>
                    <CharacterHeader/>
                </ErrorBoundary>
                <Content/>
            </div>
        </Fragment>
    )
}

export default App;
