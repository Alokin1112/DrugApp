import React from 'react';
import styled from 'styled-components';

const HeaderWrapper=styled.header`
    width:100vw;
    background: linear-gradient(to bottom right, #00a2CC, #00ffff);
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    align-items:center;
    min-height:15vh;
    color:white;
    margin-bottom:1em;
`
const TitleWrapper=styled.button`
    width:100%;
    font-size:1.5em;
    font-weight:bold;
    font-family: 'Lato', sans-serif;
    text-align:center;
    background-color:transparent;
    color:white;
    border:none;
    padding:0.25em;
    border-bottom:2px solid #00ffff;
    &:hover{
        cursor:pointer;
        color:#ccc;
    }
`
const Description=styled.div`
    font-family: 'Lato', sans-serif;
    text-align: center;
    width:60%;
    padding:0.15em;
    @media(max-width:768px){
        width:90%;
    }
`
function TitleBar(){
    return(
        <>
            <HeaderWrapper>
                <TitleWrapper onClick={()=>window.location.reload()}>DrugApp</TitleWrapper>
                <Description>Aplikacja Stworzona do wyszukiwania negatywnych korelacji między substancjami znajdującymi się w lekach.</Description>
            </HeaderWrapper>
        </>
    )
}

export default TitleBar;