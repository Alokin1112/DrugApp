import React,{useState} from 'react';
import styled from 'styled-components';
import {FaSearch,FaBackspace} from 'react-icons/fa';

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
  font-size: 4.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    background-color: #000;
  }
`
const SubmitButton=styled(SearchButton)`
  border-radius:0;
`
const SearchForm=styled.form`
  display:flex;
  flex-flow:row nowrap;
  width:100%;
`
function SearchInput({handleSearchSubmit,handleClearSearch}) {
    const[search,setSearch]=useState("");
    const handleChange=(e)=>{
      const{value}=e.target;
      setSearch(value);
      e.preventDefault();
    }
    const Clear=()=>{
      handleClearSearch();
      setSearch("");
    }
    return(
      <>
        <SearchForm onSubmit={e=>{e.preventDefault();}}>
        <SearchTerm onChange={handleChange} value={search} tabIndex="2" aria-label="Search input to filter Medicines"/>
        <SubmitButton onClick={()=>handleSearchSubmit(search)} type="text"><FaSearch/></SubmitButton>
        </SearchForm>
        <SearchButton onClick={Clear} type="text"><FaBackspace/></SearchButton>
      </>
    );
}

export default SearchInput;
