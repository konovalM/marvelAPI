import styled from 'styled-components'
import {Fragment} from "react";

const HeaderTag = styled.header`
  padding: 50px 0;
  .container{
    max-width: 1100px;
    margin: 0 auto;
  }
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title{
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
    span{
      color: #9F0013;
    }
  }
  .nav{
    display: flex;
  }
  .link{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
  .first{
    color: #9F0013;
  }
  .separator{
    margin: 0 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
`

const Header = () => {
    return (
        <Fragment>
            <HeaderTag>
                <div className="container">
                    <div className="wrapper">
                        <h1 className="title">
                            <span>Marvel</span> information portal
                        </h1>
                        <div className="nav">
                            <a href="#" className="link first">Characters</a>
                            <span className='separator'>/</span>
                            <a href="#" className="link">Comics</a>
                        </div>
                    </div>
                </div>
            </HeaderTag>
        </Fragment>
    )
}

export default Header