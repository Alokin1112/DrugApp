import React,{useState} from 'react';
import styled from 'styled-components';

const CalcWrapper=styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  background-color: #fff;
  color: #4a4a4a;
  min-width: 40%;
  max-width: 60%;
  border-radius: 6px;
  padding: 1.25em;
  min-height: 20vh;
  max-height: 25vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`
const CalcInput=styled.input`
  width: 70%;
  background-color: #fff;
  border-color: #dbdbdb;
  color: #363636;
  font-size: 1.1em;
}
`
const Disabled=styled.button`
  background-color: #f5f5f5;
  border-color: #dbdbdb;
  color: #7a7a7a;
  box-shadow: none;
  font-size: 1.1em;
  pointer-events: none;
`
const AlignLeft=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  width: 100%;
`
const Daily=styled.p`
  font-size: 0.75em;
  border: 1px solid #4a4a4a;
  padding: 0.1em;
  border-radius: 4px;
`
const Title=styled.h3`
  margin: 0.25em;
  padding: 0;
  font-size: 0.75em;
`
function MaxUseCalc({dailyUse}){

  const[weight,setWeight]=useState("");
  const handleChange=(e)=>{
    const{value}=e.target;
    setWeight(value);
  }
  return(
    <CalcWrapper>
      <Title>Dzienne zapotrzebowanie</Title>
      <AlignLeft>
        <CalcInput type="number" min="1" max="660" placeholder="Wpisz Swoją Wagę" value={weight} onChange={handleChange}/>
        <Disabled disabled>Kg</Disabled>
      </AlignLeft>
      {weight*dailyUse>0?<Daily>{weight*dailyUse} mg</Daily>:null}

    </CalcWrapper>
  );
}

export default MaxUseCalc;
