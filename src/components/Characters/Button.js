import {Fragment} from "react";
import styled from 'styled-components'
import left from '../../images/leftTriangle.svg'
import right from '../../images/rightTriangle.svg'
import leftB from '../../images/leftBlack.svg'
import rightB from '../../images/rightBlack.svg'

const LinkA = styled.a`
      
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
    background-color: ${props => props.color};
    position: relative;
    margin: ${props => props.margin ? props.margin : '0'};
    :hover{
        transform: translateY(-5px);
    }
    :before{
        content: '';
        position: absolute;
        left: -1px;
        top: -1px;
        width: 12px;
        height: 12px;
        background: url(${left})center center/cover no-repeat;
    }
    :after{
        content: '';
        position: absolute;
        right: -1px;
        bottom: -1px;
        width: 12px;
        height: 12px;
        background: url(${right})center center/cover no-repeat;
    }
`


const Button = ({text, color, link=null, margin=null}) => {
    return(
        <Fragment>
            <LinkA href={link} color={color} margin={margin}>{text}</LinkA>
        </Fragment>
    )
}

export default Button