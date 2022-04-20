import React, {Component} from 'react';
import Spinner from "../Spinner";
import MarvelService from "../../../services/MarvelService";

class Heroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            loading: true,
            error: false,
            newItemLoading: false,
            offset: 210,
            charEnded: false
        }
        this.imageNotFound = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    }


    marvelService = new MarvelService()

    componentDidMount() {
        this.loadChars()
    }

    /*onLoadedCharacters = (chars) => {
        this.setState({characters: chars, loading: false})
    }*/

   /* getData = () => {
        this.marvelService.getAllCharacters()
            .then((res) => {
                this.onLoadedCharacters(res)
            })
            .catch(this.onError)
    }*/

    onError = () => {
        this.setState({error: true, loading: false})
    }

    loadChars = (offset) => {
        this.onCharListLoading()
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }
    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }
    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        this.setState(({offset, characters}) => ({
            characters: [...characters, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }


    render() {
        const {loading, characters, error, offset, newItemLoading, charEnded} = this.state
        return (
                <div className="heroes">
                    {loading ? <Spinner/> :
                        <div className="heroesWrapper">
                            {characters.map(obj => {
                                return (
                                    <div className="hero" key={obj.id} onClick={() => this.props.getCharId(obj.id)}>
                                        <div className="bg">
                                            {obj.thumbnail == this.imageNotFound
                                                ?
                                                <img src={obj.thumbnail} alt="" className='notFound'/>
                                                :
                                                <img src={obj.thumbnail} alt="" className='heroImg'/>}
                                        </div>
                                        <h4 className="title">{obj.name}</h4>
                                    </div>
                                )
                            })}
                        </div>}
                    <button className="btnMore" disabled={newItemLoading} onClick={() => this.loadChars(offset)}>LOAD MORE</button>
                </div>
        );
    }
}

export default Heroes;