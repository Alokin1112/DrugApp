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
  height: 25vh;
  width: 20vw;
  margin: 2em;
  transition: box-shadow .2s ease-in-out;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover{
    cursor: pointer;
    box-shadow: 0 0.5em 1em -0.125em rgba(25,25,25,.40), 0 0 0 1px rgba(25,25,25,.05);
    color:lightblue;
  }
  @media (max-width:768px) {
    width: 80vw;
    margin:1em auto;
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
const Image=styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
`
function MedicineTab({data}){
  const handleOpenToggle=()=>setIsTabOpen(state=>!state);
  const[isTabOpen,setIsTabOpen]=useState(false);
  return(
    <>
      {isTabOpen?<OnClickTab handleOpenToggle={handleOpenToggle} data={data}/>:null}
      <Tab onClick={handleOpenToggle}>
        <Image src={data.img_link}/>
        <Title>{data.name_pol}</Title>
        <SubTitle>{data.name_lat}</SubTitle>
      </Tab>
    </>
  );
}
export default MedicineTab;
