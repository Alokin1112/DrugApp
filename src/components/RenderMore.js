import React from 'react';
import styled from 'styled-components';

const LoadMore=styled.button`
    margin:1em;
    width:30%;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    border: 2px solid transparent;
    font-family:'Lato',sans-serif;
    transition: .3s;
    background-color:#00B4CC;
    font-size:1em;
    &:hover{
    color: #00B4CC;
    background-color: #fff;
    border: 2px solid #00B4CC;
    text-decoration: none;
    cursor:pointer;
    }
    @media(max-width:768px){
        width:70%;
    }
`
function RenderMore({handleRenderSize}){
    return(
        <>
        <LoadMore aria-label="Load More Drugs" onClick={handleRenderSize}>Załaduj więcej</LoadMore>
        </>
    )
} 
export default RenderMore;