import React, {Component} from 'react';
import tor from "../../../images/thor.jpg";
import Spinner from "../Spinner";
import Error from "../Error";
import Button from "../Button";
import Skeleton from "../Skeleton";
import MarvelService from "../../../services/MarvelService";
import content from "./Content";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char: null,
            loading: false,
            error: false
        }
        this.template = 'Sorry, this character hasn\'t description.'
    }

    marvelService = new MarvelService()

    onError = () => {
        this.setState({error: true})
    }

    onCharLoaded = (char) => {
        this.setState({char: char, loading: false, error: false})

        if (char.description == ''){
            this.setState(({char}) => {
                    return (char.description = this.template);
                }
            )
        }
    }

    getData = () => {
        const id = this.props.charId
        if (!id){
            return
        }
        this.setState({loading: true})
        this.marvelService.getCharacter(id)
            .then((res) => {
                this.onCharLoaded(res)
            })
            .catch(() => {
                this.onError()
            })
    }

    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.charId !== this.props.charId){
            this.getData()
        }

    }

    render() {
        const {char, loading, error} = this.state
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
}

const CharContent = ({char}) => {
    return (
        <div className="about">
            <div className="person">
                <div className="personImg">
                    <img src={char.thumbnail} alt={char.name}/>
                </div>
                <div className="personAbout">
                    <div className="name">{char.name}</div>
                    <Button color='#9F0013' text='HOMEPAGE' margin='0 0 10px 0'/>
                    <Button color='#5C5C5C' text='WIKI'/>
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
                'Sorry, this character hasn\'t comics.'}
            </ul>
        </div>
    )
}

export default AboutWrapper;