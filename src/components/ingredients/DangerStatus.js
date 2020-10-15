import React from 'react';
import styled from 'styled-components';
import {FaSkullCrossbones} from 'react-icons/fa';
import {BsExclamationOctagonFill,BsExclamationTriangle} from 'react-icons/bs';
const DangerStatusWrapper=styled.div`
  background-color:white;
  padding: 0.25em;
  color:  #4a4a4a;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  width: 22%;
  margin:2vh auto;
  border-radius: 6px;
  min-height:8vh;
  font-family: 'Lato', sans-serif;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    animation-duration: 0.25s;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`
const DrugName=styled.h2`
  font-size:3vh;
`
const DrugDescription=styled.p`
  
`
const YellowDanger=styled(DangerStatusWrapper)`
  background-color:hsl(48, 100%, 67%);
  &:hover{
    border-left: 8px solid #e6d40b;
  }
`
const RedDanger=styled(DangerStatusWrapper)`
  background-color:hsl(0, 100%, 50%);
  color:white;
  &:hover{
    border-left: 8px solid #d40202;
  }

`
const BlackDanger=styled(DangerStatusWrapper)`
  background-color:hsl(0, 0%, 21%);
  color:white;
  &:hover{
    border-left: 8px solid #000000;
  }
`
function DangerStatus({importance,messege,drug}) {
const content=()=>(<><DrugName>{drug}</DrugName><DrugDescription>{messege}</DrugDescription></>)
    
    return(
      <>
        {importance===1?<YellowDanger>{content()}<BsExclamationTriangle/></YellowDanger>:importance===1?<RedDanger>{content()}<BsExclamationOctagonFill/></RedDanger>:<BlackDanger>{content()}<FaSkullCrossbones/></BlackDanger>}
      </>
    );
}

export default DangerStatus;
