import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { selectCars } from '../features/car/CarSlice';
import { useSelector } from 'react-redux';


const Header = () => {
  const [showBurgerNav,setShowBurgerNav] = useState(false);

const car = useSelector(selectCars);
  
  return (
    <Container>
        <a>
          <img src="/asset/logo.svg" alt="" />
        </a>
        <Menu>
          {car && car.map((val,index)=>(<a href="#" key={index}>{val}</a>))}
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <CustomMenuIcon onClick={()=>setShowBurgerNav(true)}></CustomMenuIcon>
        </RightMenu>
        <BurgerNav show={showBurgerNav}>
            <CloseWrapper>
            <CustomCloseIcon  onClick={()=>setShowBurgerNav(false)}/>
            </CloseWrapper>
            <li><a href="#">Exisiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Test drive</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width:100%;
  z-index:1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex:1;
    
    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;
    }

    @media (max-width: 768px){
      display:none;
    }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
    a{
      font-weight:600;
      text-transform:uppercase;
      margin-right:10px;
    }
`

const CustomMenuIcon = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`

position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props => props.show?'translateX(0%)':'translateX(100%)'};
transition:transform 0.2s ease-in-out;
li{
  padding:15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
  a{
    font-weight:600;
  }
}
`
const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`