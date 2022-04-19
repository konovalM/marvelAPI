import React, {Fragment} from 'react';
import styled from "styled-components";

const SkeletonTag = styled.div`
  .skeleton__header {
      display: grid;
      grid-template-columns: 40px auto;
      column-gap: 10px;
      align-items: center;
    }
  .skeleton__circle {
      width: 40px;
      height: 40px;
      background-color: #C4C4C4;
      border-radius: 100%;
    }
  .skeleton__mini {
      width: 100%;
      height: 16px;
      background-color: #C4C4C4;
    }
  .skeleton__block {
      height: 35px;
      width: 100%;
      background-color: #C4C4C4;
      margin-top: 15px;
    }
  .pulse {
    animation: pulse 1.5s ease-in-out .5s infinite
  }

  @keyframes pulse {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }
`

const Skeleton = () => {
    return (
        <SkeletonTag>
            <p className="char__select">Please select a character to see information</p>
            <div className="skeleton">
                <div className="pulse skeleton__header">
                    <div className="pulse skeleton__circle"></div>
                    <div className="pulse skeleton__mini"></div>
                </div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
            </div>
        </SkeletonTag>
    );
};

export default Skeleton;