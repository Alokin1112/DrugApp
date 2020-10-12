import React,{useState} from 'react';
import styled from 'styled-components'

const SearchTerm=styled.input`
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 0.5vh;
  height: 6vh;
  font-size: 4vh;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000;
  &:focus{
    color: #00B4CC;
  }
`
const SearchButton=styled.button`
  width: 6vh;
  height: calc(6vh - 0px);
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 5vh;
`

function SearchInput({handleSearchSubmit}) {
    const[search,setSearch]=useState("");
    const handleChange=(e)=>{
      const{value}=e.target;
      setSearch(value);
    }
    return(
      <>

        <SearchTerm onChange={handleChange} value={search}/>
        <SearchButton onClick={()=>handleSearchSubmit(search)} type="text">S</SearchButton>
      </>
    );
}

export default SearchInput;
