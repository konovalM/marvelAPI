import React, {Component, useEffect, useState} from 'react';
import tor from "../../../images/thor.jpg";
import Spinner from "../Spinner";
import Error from "../Error";
import Button from "../Button";
import Skeleton from "../Skeleton";
import MarvelService from "../../../services/MarvelService";
import content from "./Content";
import PropTypes from 'prop-types'

const AboutWrapper = (props) => {
    const [char, setChar] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const template = 'Sorry, this character hasn\'t description.'

    const marvelService = new MarvelService()

    const onError = () => {
        setError(true)
    }

    const onCharLoaded = (char) => {
        setChar(char)
        setLoading(false)
        setError(false)

        if (char.description == ''){
            setChar(char => ({...char, description: template}))
        }
    }

    const getData = () => {
        const id = props.charId
        if (!id){
            return
        }
        setLoading(true)
        marvelService.getCharacter(id)
            .then((res) => {
                onCharLoaded(res)
            })
            .catch(() => {
                onError()
            })
    }

    useEffect(() => {
        getData()
    }, [props.charId])

    const skelet = <Skeleton/>;
    let content;
    if (loading){
        content = <Spinner/>
    } else if (error) {
        content = <Error/>
    } else if (char){
        content = <CharContent char={char}/>
    } else {content = null}

    return (
        <>
            <div className="aboutWrapper">
                {content || skelet}
            </div>
        </>
    )
}

const CharContent = ({char}) => {
    const template = 'Sorry, this character hasn\'t description.'
    return (
        <div className="about">
            <div className="person">
                <div className="personImg">
                    <img src={char.thumbnail} alt={char.name}/>
                </div>
                <div className="personAbout">
                    <div className="name">{char.name}</div>
                    <Button color='#9F0013' text='HOMEPAGE' margin='0 0 10px 0' link={char.homepage}/>
                    <Button color='#5C5C5C' text='WIKI' link={char.wiki}/>
                </div>
            </div>
            <div className="descr">
                {char.description}
            </div>
            <div className="comics">Comics:</div>
            <ul className="list">
                {char.comics.length ? char.comics.map((item, id) => {
                    if (id < 10){
                        return (
                            <li className="listItem" key={id}>
                                {item.name}
                            </li>
                        )
                    }
                    else {
                        return
                    }
                })
                :
                template}
            </ul>
        </div>
    )
}

AboutWrapper.propTypes = {
    charId: PropTypes.number
}

export default AboutWrapper;