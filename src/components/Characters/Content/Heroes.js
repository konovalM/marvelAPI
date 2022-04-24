import React, {Component, useEffect, useState} from 'react';
import Spinner from "../Spinner";
import MarvelService from "../../../services/MarvelService";
import PropTypes from "prop-types";

const Heroes = (props) => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(210)
    const [charEnded, setCharEnded] = useState(false)
    const [activeChar, setActiveChar] = useState(null)
    const imageNotFound = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'

    const marvelService = new MarvelService()

    useEffect(() => {
        loadChars()
    }, [])


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

    const onError = () => {
        setError(true)
        setLoading(false)
    }

    const loadChars = (offset) => {
        onCharListLoading()
        marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }
    const onCharListLoading = () => {
        setNewItemLoading(true)
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        setCharacters(characters => ([...characters, ...newCharList]))
        setLoading(false)
        setNewItemLoading(false)
        setOffset(offset => (offset + 9))
        setCharEnded(ended)
    }

    const getActiveChar = (id) => {
        setActiveChar(id)
        window.scroll(0, 400)
    }

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
                                         props.getCharId(obj.id)
                                         getActiveChar(obj.id)
                                     }
                                }>
                                    <div className="bg">
                                        {obj.thumbnail == imageNotFound
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
                <button className="btnMore" disabled={newItemLoading} onClick={() => loadChars(offset)}>LOAD MORE</button>
            </div>
    );
}

Heroes.propTypes = {
    getCharId: PropTypes.func
}

export default Heroes;