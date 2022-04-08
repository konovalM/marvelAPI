import {Fragment} from "react";
import Header from "./Header/Header";
import './App.css'
import CharacterHeader from "./Characters/CharacterHeader";
import Content from "./Characters/Content";

function App() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    function sendRequest(url){
        return fetch(url).then(response => {
            return response.json()
        })

    }

    sendRequest(url).then(response => {
        console.log(response[0].title)
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
