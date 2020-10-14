import React from 'react';
import styled from 'styled-components';

const DangerStatusWrapper=styled.div`
  background-color:white;
  padding: 0.25em;
  color:  #4a4a4a;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  width: 22%;
  margin:2vh auto;
  border-radius: 6px;
  min-height:8vh;
`
const DrugName=styled.h2`
  font-size:2vh;
`
const DrugDescription=styled.p`
  
`
const YellowDanger=styled(DangerStatusWrapper)`
  background-color:hsl(48, 100%, 67%);
`
const RedDanger=styled(DangerStatusWrapper)`
  background-color:hsl(348, 100%, 61%);
  color:white;
`
const BlackDanger=styled(DangerStatusWrapper)`
  background-color:hsl(0, 0%, 21%);
  color:white;
`
function DangerStatus({importance,messege,drug}) {
const content=()=>(<><DrugName>{drug}</DrugName><DrugDescription>{messege}</DrugDescription></>)
    
    return(
      <>
        {importance===1?<YellowDanger>{content()}</YellowDanger>:importance===1?<RedDanger>{content()}</RedDanger>:<BlackDanger>{content()}</BlackDanger>}
      </>
    );
}

export default DangerStatus;
