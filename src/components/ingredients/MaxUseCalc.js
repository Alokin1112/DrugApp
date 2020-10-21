import React,{useState} from 'react';
import styled from 'styled-components';

const CalcWrapper=styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
  background-color: #fff;
  color: #4a4a4a;
  width:50%;
  margin:0.5em;
  border-radius: 6px;
  padding: 1.25em;
  min-height: 20vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  @media (max-width:768px) {
    width:100%;
  }
`
const Disabled=styled.button`
width: 4vh;
height: 4vh;
border: 1px solid #00B4CC;
background: #00B4CC;
text-align: center;
color: #fff;
border-radius: 0 5px 5px 0;
cursor: pointer;
font-size: 3vh;
display: flex;
justify-content: center;
align-items: center;
&:hover{
  cursor:default;
}
`
const CalcInput=styled.input`
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 0.5vh;
  height: 4vh;
  font-size: 2.5vh;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000;
  &:focus{
    color: #00B4CC;
  }
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
  margin:0.5em;
`
const Title=styled.h3`
  margin: 0.25em;
  padding: 0;
  font-size: 0.75em;
`
function MaxUseCalc({dosage,ld50}){

  const[weight,setWeight]=useState("");
  const handleChange=(e)=>{
    const{value}=e.target;
    setWeight(value);
  }
  return(
    <CalcWrapper>

      {(dosage!==0||ld50!==0)?<><Title>Dzienne spożycie</Title>
      <AlignLeft>
        <CalcInput type="number" min="1" max="660" placeholder="Wpisz Swoją Wagę" value={weight} onChange={handleChange} maxlength="4" aria-label="Write your Weight to check how mcuch medicine you can use"/>
        <Disabled disabled>Kg</Disabled>
      </AlignLeft>
      <Daily>{dosage===0?<>Brak Danych Odnośnie dziennego spożycia</>:<>Maksymalne dzienne spożycie:{weight*dosage>0?Math.round(weight*dosage*1000)/1000+"mg":null}</> }</Daily>
      <Daily>{ld50===0?<>Brak Danych Odnośnie dawki śmiertelnej</>:<>Śmiertelne dzienne spożycie:{weight*ld50>0?Math.round(weight*ld50*1000)/1000+"mg":null}</> }</Daily>
      </>:<p>Brak Danych</p>}

    </CalcWrapper>
  );
}

export default MaxUseCalc;
