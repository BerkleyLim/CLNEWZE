import React, { useState } from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';

const Right = ({ children, onClick }) => {
  const [show, setShow] = useState(false);
  return show ? (
    <Button onClick={onClick} onMouseLeave={setShow(false)}>
      {children}
    </Button>
  ) : (
    <Transparent onMouseEnter={() => {setShow(true)}} />
  )
}

const RightArrow = () => {
  const {scrollPrev} = React.useContext(VisibilityContext);
  return <Right onClick={() => scrollPrev()}>{"->"}</Right>
}

const Transparent = styled.div`
  width: 10rem;
  position: absolute;
  z-index: 999;
  height: 50rem;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  cursor: pointer;
`;


export default RightArrow