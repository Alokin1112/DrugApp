import React,{useState} from 'react';
import styled from 'styled-components';
import {OnClickTab} from './ingredients';

const Tab=styled.button`
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.08);
  background-color: #fff;
  color: #4a4a4a;
  border-radius: 6px;
  padding: 0.5em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 25vh;
  width: 20vw;
  margin: 1em;
  transition: box-shadow .2s ease-in-out;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border:none;
  font-size:1em;
  &:hover{
    cursor: pointer;
    box-shadow: 0 0.5em 1em -0.125em rgba(25,25,25,.40), 0 0 0 1px rgba(25,25,25,.2);
    color:lightblue;
  }
  &:focus{
    outline:none;
    box-shadow: 0 0.5em 1em -0.125em rgba(26,156,232,.60), 0 0 0 1px rgba(26,156,232,.2);
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
  max-height:80%;
  margin: 0;
  padding: 0;
`
function MedicineTab({data,handleFilter}){
  const handleOpenToggle=()=>setIsTabOpen(state=>!state);
  const[isTabOpen,setIsTabOpen]=useState(false);
  return(
    <>
      {isTabOpen?<OnClickTab handleOpenToggle={handleOpenToggle} data={data} handleFilter={handleFilter}/>:null}
      <Tab onClick={handleOpenToggle}  tabIndex="0">
        <Image src={data.img_link} alt={"zdjęcie "+data.name_pol}/>
        <Title>{data.name_pol}</Title>
        <SubTitle>{data.name_lat}</SubTitle>
      </Tab>
    </>
  );
}
export default MedicineTab;
