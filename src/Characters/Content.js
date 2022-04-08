import styled from 'styled-components'
import {Fragment} from "react";
import abyss from '../images/abys.jpg'
import Button from "./Button";
import left from '../images/leftTriangle.svg'
import right from '../images/rightTriangle.svg'
import tor from '../images/thor.jpg'
import asset from '../images/asset.png'

const SectionContent = styled.section`
  padding: 50px 0 45px;
  position: relative;
  .container{
    max-width: 1100px;
    margin: 0 auto;
  }
  .wrapper{
    display: grid;
    grid-template-columns: 650px 425px;
    grid-column-gap: 25px;

  }
  .heroesWrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 30px;
    grid-column-gap: 25px;
    grid-template-rows: minmax(318px, auto);
    grid-auto-rows: minmax(318px, auto);
  }
  .hero{
    background-color: #232222;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    transition: .3s all;
    cursor: pointer;
  }
  .hero:hover{
    filter: drop-shadow(0px 5px 20px #9F0013);
    transform: translateY(-8px);
  }
  .title{
    margin: 15px 0 0 15px;
  }
  .btnMore{
    display: block;
    margin: 45px auto 0;
    width: 170px;
    height: 38px;
    background: #9F0013;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    border: none;
    position: relative;
    cursor: pointer;
    transition: transform .3s;
  }
  .btnMore:hover{
    transform: translateY(-5px);
  }
  .btnMore:before{
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      width: 12px;
      height: 12px;
      background: url(${left})center center/cover no-repeat;
  }
  .btnMore:after{
        content: '';
        position: absolute;
        right: -1px;
        bottom: -1px;
        width: 12px;
        height: 12px;
        background: url(${right})center center/cover no-repeat;
  }
  .about{
    padding: 25px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  }
  .person{
    display: grid;
    grid-template-columns: 150px auto;
    grid-column-gap: 25px;
  }
  .name{
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 35px;
  }
  .descr{
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin: 15px 0 25px;
  }
  .comics{
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 13px;
  }
  .listItem{
    margin-top: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    padding: 5px;
  }
  .asset{
    position: absolute;
    right: 0;
    bottom: 0;
  }
`

const Content = () => {
    return(
        <Fragment>
            <SectionContent className="content">
                <div className="container">
                    <div className="wrapper">
                        <div className="heroes">
                            <div className="heroesWrapper">
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                                <div className="hero">
                                    <div className="bg">
                                        <img src={abyss} alt=""/>
                                    </div>
                                    <h4 className="title">ABYSS</h4>
                                </div>
                            </div>
                            <button className="btnMore">LOAD MORE</button>
                        </div>
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
                    </div>
                </div>
                <img src={asset} alt="" className='asset'/>
            </SectionContent>
        </Fragment>
    )
}

export default Content