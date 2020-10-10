import React from 'react';
import styled from 'styled-components';
import {DangerStatus,MaxUseCalc} from './'

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
  overflow-x: hidden;
  overflow-y: scroll;
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
    color:lightblue;
  }
`
const Title=styled.h2`
  padding: 0;
  margin: 0;
  color: #000;
`
const SubTitle=styled.h5`
  padding: 0;
  margin: 0;
  color:lightgrey;
`
const ApplicationWrapper=styled.div`
  display: flex;
  flex-direction: row;
  min-height: 1em;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5em;
  @media (max-width:768px) {
    flex-direction: column;
  }
`
const Application=styled.div`
  background: radial-gradient(circle, rgba(11,106,156,1) 0%, rgba(0,224,255,1) 100%);
  color: #fff;
  font-size: 0.75em;
  border-radius: 6px;
  margin:0.2em ;
  padding: 0.34em;
  text-decoration: underline;
  &::before{
    content: "#";
  }
`
const CalcWrapper=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
  padding: 1em;
  margin: 0.5em;
  @media (max-width:768px) {
    flex-direction: column;
  }
`
function OnClickTab({handleOpenToggle,data}) {
  return(
    <>
      <Background>
        <Box>
          <CloseButtonWrapper><DeleteButton onClick={handleOpenToggle}>X</DeleteButton></CloseButtonWrapper>
          <Title>{data.name_pol}</Title>
          <SubTitle>{data.name_lat}</SubTitle>
          <p>{data.description}</p>
          <p>Podgrupa: {data.sub_group}</p>
          <ApplicationWrapper>
            {data.application.split(',').map(app=><Application key={app}>{app}</Application>)}
          </ApplicationWrapper>
          <CalcWrapper>
            <MaxUseCalc dosage={data.dosage}/>
            <DangerStatus importance={3}/>
          </CalcWrapper>
        </Box>
      </Background>
    </>
  );
}

export default OnClickTab;
