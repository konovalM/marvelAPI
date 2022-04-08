import styled from 'styled-components'
import {Fragment} from "react";
import thor from '../images/thor.jpg'
import left from '../images/leftTriangle.svg'
import right from '../images/rightTriangle.svg'
import leftB from '../images/leftBlack.svg'
import rightB from '../images/rightBlack.svg'
import Button from "./Button";

const CharacterMainTag = styled.section`
  .container{
    max-width: 1100px;
    margin: 0 auto;
  }
  .wrapper{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .gridItem{
    padding: 40px 35px 35px;
  }
  .gridItem:first-child{
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    display: grid;
    grid-template-columns: 180px auto;
    column-gap: 30px;
  }
  .title{
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 13px;
  }
  .descr{
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-bottom: 23px;
  }
  .buttons{
    display: flex;
  }
  /*.characterBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 101px;
    height: 38px;
    border: none;
    margin-right: 30px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    transition: .3s transform;
  }
  .characterBtn:hover{
    transform: translateY(-5px);
  }
  .leftBtn{
    background: #9F0013;
    position: relative;
  }
  .characterBtn:before{
    content: '';
    position: absolute;
    left: -1px;
    top: -1px;
    width: 12px;
    height: 12px;
    background: url(${left})center center/cover no-repeat;
  }
  .characterBtn:after{
    content: '';
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 12px;
    height: 12px;
    background: url(${right})center center/cover no-repeat;
  }*/
  .rightBtn{
    position: relative;
    background: #5C5C5C;
  }
  .gridItem:last-child{
    background: #232222;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  }
  .textTop{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 41px;
  }
  .textBottom{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-bottom: 17px;
  }
  .btn{
    display: flex;
    width: 101px;
    height: 38px;
    align-items: center;
    justify-content: center;
    background-color: #9F0013;
    cursor: pointer;
    position: relative;
    transition: .3s transform;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
  }
  .btn:hover{
    transform: translateY(-5px);
  }
  .btn:before{
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: -1px;
    top: -1px;
    background: url(${leftB})center center/cover no-repeat;
  }
  .btn:after{
    content: '';
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 12px;
    height: 12px;
    background: url(${rightB})center center/cover no-repeat;
  }
`


const CharacterHeader = () => {
    return(
        <Fragment>
            <CharacterMainTag className="main">
                <div className="container">
                    <div className="wrapper">
                        <div className="gridItem">
                            <div className="imagePerson">
                                <img src={thor} alt="THOR"/>
                            </div>
                            <div className="about">
                                <h3 className="title">
                                    THOR
                                </h3>
                                <div className="descr">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
                                <div className="buttons">
                                    <Button text='HOMEPAGE' color='#9F0013' margin='0 30px 0 0'/>
                                    <Button text='WIKI' color='#5C5C5C'/>
                                </div>

                            </div>
                        </div>
                        <div className="gridItem">
                            <div className="textTop">Random character for today!<br/>
                                Do you want to get to know him better?</div>
                            <div className="textBottom">Or choose another one</div>
                            <a href='#' className="btn">TRY IT</a>
                        </div>
                    </div>
                </div>
            </CharacterMainTag>
        </Fragment>
    )
}

export default CharacterHeader