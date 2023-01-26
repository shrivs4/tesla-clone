import React from 'react';
import styled from 'styled-components';
import Fade from "react-reveal/Fade";
import { useState } from 'react';


const Section = ({title,description,backgroundImg,leftBtnText,rightBtnText}) => {
  

  return (
    <Wrap bgImage = {backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
            {leftBtnText}
        </LeftButton>
        { rightBtnText && 
          <RightButton>
              {rightBtnText}
          </RightButton>
        }
      </ButtonGroup>
      </Fade>
      <DownArrow src='/asset/down-arrow.svg' />
      </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width:100vw;
  height:100vh;
  background-size:cover;
  background-position:center;
  background-image: url('/asset/model-s.jpg');
  background-repeat: no-repeat;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("${props.bgImage}")`}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display:flex;
  margin-bottom:30px;
  @media (max-width: 768px) {
    flex-direction:column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity: 0.85;
  font-size: 12px;
  text-transform: uppercase;
  cursor:pointer;
  margin: 8px;
`

const RightButton = styled(LeftButton)`
background-color: white;
color: black;
opacity:0.65;
`


const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`

const Button = styled.div``