import React from 'react';
import styled from 'styled-components';

const Background=styled.div`
  z-index: 10;
  background-color: rgba(54,53,55,0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box=styled.div`
  background-color: #fff;
  color: #4a4a4a;
  border-radius: 6px;
  height: 90%;
  width: 80%;
  padding: 1em;
  @media(max-width:768px){
    height: 95%;
    width: 90%;
    padding: 0.5em;
  }
`
const CloseButtonWrapper=styled.div`
  width: 100%;
  height: 10%;
  padding: 0.5em;
  display: flex;
  justify-content:flex-end;
  @media(max-width:768px){
    padding: 0.25em;
  }
`
const DeleteButton=styled.button`
  width: 3em;
  height: 3em;
  font-weight: bold;
  font-size: 0.75em;
  border: none;
  background-color: transparent;
  &:hover{
    cursor: pointer;
  }
`
function OnClickTab({handleOpenToggle}) {
  return(
    <>
      <Background>
        <Box>
          <CloseButtonWrapper><DeleteButton onClick={handleOpenToggle}>X</DeleteButton></CloseButtonWrapper>
        </Box>
      </Background>
    </>
  );
}

export default OnClickTab;
