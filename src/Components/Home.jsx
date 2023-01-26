import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section 
      title = "Model S"
      description = "Order Online For Touchless Delivery"
      backgroundImg = '/asset/model-s.jpg'
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      />
      <Section 
      title = "Model Y"
      description = "Order Online For Touchless Delivery"
      backgroundImg = '/asset/model-y.jpg'
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      />
      <Section 
      title = "Model 3"
      description = "Order Online For Touchless Delivery"
      backgroundImg = '/asset/model-3.jpg'
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      />
      <Section 
      title = "Model X"
      description = "Order Online For Touchless Delivery"
      backgroundImg = '/asset/model-x.jpg'
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      />
      <Section 
      title = "Lowest Cost Solar Panel in America"
      description = "Money Back guarantee"
      backgroundImg = '/asset/solar-panel.jpg'
      leftBtnText = "Order now"
      rightBtnText = "Learn more"
      />
      <Section 
      title = "Solar Roof"
      description = "Produce Clean Energy From Your Roof"
      backgroundImg = '/asset/solar-roof.jpg'
      leftBtnText = "Order now"
      rightBtnText = "Learn more"
      />
      <Section 
      title = "Accessories"
      description = ""
      backgroundImg = '/asset/accessories.jpg'
      leftBtnText = "Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
