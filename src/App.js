import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import {MaxUseCalc} from './components/ingredients'
import {MedicineTab} from './components';
const GlobalStyle=createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  body{
    margin:0;
    padding:0;
    background-color:#fff;
    color:#4a4a4a;
    overflow-x:hidden;
    font-size:1.5rem;
  }
`;
const Main=styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 3em;
  display: flex;
  justify-content: center;
  @media(max-width:768px){
    padding: 1em;
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <Main>
        <MedicineTab/>
      </Main>
    </>
  );
}

export default App;
