import React, {Component} from 'react';
import Spinner from "../Spinner";
import MarvelService from "../../../services/MarvelService";

class Heroes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            characters: null,
            loading: true
        }
        this.imageNotFound = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    }


    marvelService = new MarvelService()

    componentDidMount() {
        this.getData()
        console.log(this.state.characters)
    }

    onLoadedCharacters = (chars) => {
        this.setState({characters: chars, loading: false})
    }

    getData = () => {
        this.marvelService.getAllCharacters()
            .then((res) => {
                this.onLoadedCharacters(res)
            })
    }


    render() {
        const {loading, characters} = this.state
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
                    <button className="btnMore">LOAD MORE</button>
                </div>
        );
    }
}

export default Heroes;