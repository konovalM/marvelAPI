import styled from 'styled-components'
import {Fragment} from "react";
import abyss from '../../../images/abys.jpg'
import Button from "../Button";
import left from '../../../images/leftTriangle.svg'
import right from '../../../images/rightTriangle.svg'
import tor from '../../../images/thor.jpg'
import asset from '../../../images/asset.png'
import {Component} from "react";
import MarvelService from "../../../services/MarvelService";
import Spinner from "../Spinner";
import Heroes from "./Heroes";
import AboutWrapper from "./AboutWrapper";
import ErrorBoundary from "../../ErrorBoundaries/ErrorBoundary";

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
    position: relative;
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
  .hero_active{
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

  .bg{
    height: 200px;
  }
  .heroImg{
    object-fit: cover;
    height: 200px;
  }
  .notFound{
    object-fit: contain;
  }
  .aboutWrapper{
    z-index: 1000;
    position: relative;
  }
`

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            charId: null
        }
    }

    getCharId = (id) => {
        this.setState({charId: id})
    }

    render() {
        const {charId} = this.state
        return(
            <Fragment>
                <SectionContent className="content">
                    <div className="container">
                        <div className="wrapper">
                            <ErrorBoundary>
                                <Heroes getCharId={this.getCharId}/>
                            </ErrorBoundary>
                            <ErrorBoundary>
                                <AboutWrapper charId={charId}/>
                            </ErrorBoundary>
                        </div>
                    </div>
                </SectionContent>
            </Fragment>
        )
    }
}

export default Content