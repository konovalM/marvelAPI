import React, {Component} from 'react';
import tor from "../../../images/thor.jpg";
import Spinner from "../Spinner";
import Error from "../Error";
import Button from "../Button";
import Skeleton from "../Skeleton";

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
        if (!this.props.charId){
            return
        }
        this.marvelService.getCharacter(this.props.charId)
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
            console.log(this.props.charId)
            this.getData()
        }

    }

    render() {
        const skelet = <Skeleton/>
        const {char, loading, error} = this.state
        return (
            <>
                {skelet}
            </>
        )
    }
}

const CharContent = () => {
    return (
        <div className="aboutWrapper">
            <div className="about">
                <div className="person">
                    <div className="personImg">
                        <img src={tor} alt="THOR"/>
                    </div>
                    <div className="personAbout">
                        <div className="name">TOR</div>
                        <Button color='#9F0013' text='HOMEPAGE' margin='0 0 10px 0'/>
                        <Button color='#5C5C5C' text='WIKI'/>
                    </div>
                </div>
                <div className="descr">
                    In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                </div>
                <div className="comics">Comics:</div>
                <ul className="list">
                    <li className="listItem">
                        All-Winners Squad: Band of Heroes (2011) #3
                    </li>
                    <li className="listItem">
                        Alpha Flight (1983) #50
                    </li>
                    <li className="listItem">
                        Amazing Spider-Man (1999) #503
                    </li>
                    <li className="listItem">
                        Amazing Spider-Man (1999) #504
                    </li>
                    <li className="listItem">
                        AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                    </li>
                    <li className="listItem">
                        Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                    </li>
                    <li className="listItem">
                        Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                    </li>
                    <li className="listItem">
                        Vengeance (2011) #4
                    </li>
                    <li className="listItem">
                        Avengers (1963) #1
                    </li>
                    <li className="listItem">
                        Avengers (1996) #1
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutWrapper;