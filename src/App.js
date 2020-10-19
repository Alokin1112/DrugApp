import React,{useState} from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import {MedicineTab,SearchInput,Footer,Notification} from './components';
import {DRUGS_TABLE} from './components/DRUGS_INFO';
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
const MainWrapper=styled.main`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column nowrap;
`;
const SearchWrapper=styled.div`
  margin: 2vh auto 3vh;
  width: 65vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:768px){
    width: 90vw;
    margin: 2vh auto;
  }
`
const MedicineWrapper=styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 1em;
  display: flex;
  justify-content: center;
  flex-flow:row wrap;
  @media(max-width:768px){
    padding: 1em;
    flex-direction: column;
  }
`;

function App() {
  const[drugs,setDrugs]=useState(DRUGS_TABLE);
  const handleSearchSubmit=(val)=>{
    let re=new RegExp("^"+val,"i");
    setDrugs(DRUGS_TABLE.filter(val=>re.test(val.name_pol)));
  }
  const handleFilter=(val)=>{
    let re=new RegExp(val,"i");
    setDrugs(DRUGS_TABLE.filter(drug=>re.test(drug.application)));
  }
  const handleClearSearch=()=>{
    setDrugs(DRUGS_TABLE);
  }
  return (
    <>
      <GlobalStyle/>
      <MainWrapper>
        <Notification/>
        <SearchWrapper>
          <SearchInput handleSearchSubmit={handleSearchSubmit} handleClearSearch={handleClearSearch}/>
        </SearchWrapper>
        <MedicineWrapper>
          {drugs.map(drug=><MedicineTab data={drug} key={drug.id} handleFilter={handleFilter}/>)}
        </MedicineWrapper>
        <Footer/>
      </MainWrapper>
    </>
  );
}

export default App;
