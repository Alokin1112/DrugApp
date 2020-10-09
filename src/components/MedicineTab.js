import React,{useState} from 'react';
import styled from 'styled-components';
import {OnClickTab} from './ingredients';

const Tab=styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  background-color: #fff;
  color: #4a4a4a;
  border-radius: 6px;
  padding: 0.5em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 20vh;
  width: 20vw;
  transition: box-shadow .2s ease-in-out;
  &:hover{
    cursor: pointer;
    box-shadow: 0 0.5em 1em -0.125em rgba(25,25,25,.40), 0 0 0 1px rgba(25,25,25,.05);
    color:lightblue;
  }
  @media (max-width:768px) {
    width: 100vw;
  }
`
const Title=styled.p`
  font-weight: bold;
  font-size: 1.1em;
  margin: 0;
`
const SubTitle=styled.p`
  font-size: 0.5em;
  margin:0;
  font-family: 'Roboto';
  color: grey;
`
function MedicineTab(){
  const handleOpenToggle=()=>setIsTabOpen(state=>!state);
  const[isTabOpen,setIsTabOpen]=useState(false);
  return(
    <>
      {isTabOpen?<OnClickTab handleOpenToggle={handleOpenToggle}/>:null}
      <Tab onClick={handleOpenToggle}>
        <Title>Works</Title>
        <SubTitle>Latin</SubTitle>
      </Tab>
    </>
  );
}
export default MedicineTab;
