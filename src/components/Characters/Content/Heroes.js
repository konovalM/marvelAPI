import React, {Component} from 'react';
import Spinner from "../Spinner";
import MarvelService from "../../../services/MarvelService";
import PropTypes from "prop-types";

class Heroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: [],
            loading: true,
            error: false,
            newItemLoading: false,
            offset: 210,
            charEnded: false,
            activeChar: null
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

    getActiveChar = (id) => {
        this.setState({activeChar: id})
    }

    render() {
        const {loading, characters, error, offset, newItemLoading, charEnded, activeChar} = this.state
        return (
                <div className="heroes">
                    {loading ? <Spinner/> :
                        <div className="heroesWrapper">
                            {characters.map(obj => {
                                return (
                                    <div
                                        className={activeChar === obj.id ? 'hero hero_active' : 'hero'}
                                         key={obj.id}
                                         tabIndex={0}
                                         onClick={() => {
                                             this.props.getCharId(obj.id)
                                             this.getActiveChar(obj.id)
                                         }
                                    }>
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

Heroes.propTypes = {
    getCharId: PropTypes.func
}

export default Heroes;