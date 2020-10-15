import React,{useState} from 'react';
import styled from 'styled-components';

const Note=styled.aside`
  padding: 3vh;
  background-color: #f44336;
  color: white;
  border-radius: 360px;
  width:95vw;
  margin:2vh;
  display:flex;
  justify-content:space-between;
  align-items: center;
  flex-flow:row nowrap;
  @media(max-width:768px){
    border-radius:10px;
  }
`
const Close=styled.button`
    margin-right: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    border:none;
    font-size:1em;
    transition: 0.3s;
    &:hover{
    color: black;
    }
`
function Notification(){
    const[isOpen,setIsOpen]=useState(true);
    const handleClose=()=>{
        setIsOpen(false);
    }
    return(
        <>
       {isOpen ? <Note>
            Uwaga!!Aplikacja nie jest stworzona przez Lekarzy. Skonsultuj się z lekarzem/farmaceutą przed skorzystaniem z leku!
            <Close onClick={handleClose}>X</Close>
        </Note>:null}
        </>
    );
}

export default Notification;