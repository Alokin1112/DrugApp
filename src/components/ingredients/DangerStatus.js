import React from 'react';
import styled from 'styled-components';

const DangerStatusWrapper=styled.div`
  background-color:white;
  padding: 0.25em;
  color:  #4a4a4a;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  width: 25%;
  height: 15%;
  border-radius: 6px;
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
function DangerStatus({importance}) {
    const content=()=>(<>ss</>)
    return(
      <>
        {importance==0?<YellowDanger>{content()}</YellowDanger>:importance==1?<RedDanger>{content()}</RedDanger>:<BlackDanger>{content}</BlackDanger>}
      </>
    );
}

export default DangerStatus;
