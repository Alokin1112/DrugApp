import React,{useState} from 'react';
import styled from 'styled-components';
const DropWrapper=styled.div`
    position:relative;

`
const DropActivateButton=styled.button`
    width:20vw;
    height:5vh;
    background-color:#00B4CC;
    border:none;
    color:white;
    border-radius:10px 10px 0 0;
    font-size:3vh;
    border:2px solid transparent;
    &:hover{
        border-color:#00B4CC;
        color:#00B4CC;
        background-color:white;
        cursor:pointer;
    }
    @media(max-width:768px){
        width:80vw;
    }
`
const DropList=styled.ul`
    list-style-type:none;
    position:absolute;
    top:5vh;
    left:0;
    z-index:10;
    width:100%;
    padding: 0;
    margin:0;
`
const DropElement=styled.li`
    background-color:#00B4CC;
    border:1px  solid #0084aa;
    &:last-child{
        border-radius:0 0 10px 10px;
    }
`
const DropButton=styled.button`
    width: 100%;
    color:white;
    height:100%;
    background-color:transparent;
    border:2px solid transparent;
    border:none;
    font-size:0.75em;
    padding:0.2em;
    &:hover{
        cursor:pointer;
        color:#565656;
    }
`
function DropDownFiltr({handleFilter,AplArr}){
    const[isOpen,setIsOpen]=useState(false);
    const handleOpen=()=>setIsOpen(state=>!state);
    return(
        <>
            <DropWrapper>
                <DropActivateButton onClick={handleOpen} aria-label="Aktivate Filtring">Filtruj</DropActivateButton>
                {isOpen?<DropList>
                {AplArr.map(app=><DropElement key={app.id_application}><DropButton onClick={()=>{handleFilter(app.name_application);handleOpen();}}>{app.name_application}</DropButton></DropElement>)}
                </DropList>:null}
            </DropWrapper>
        </>
    )
}

export default DropDownFiltr;