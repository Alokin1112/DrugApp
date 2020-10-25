import React,{useState} from 'react';
import styled from 'styled-components';
import {FaSearch,FaBackspace} from 'react-icons/fa';
import {DRUGS_TABLE} from './DRUGS_INFO';

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
    background-color: white;
    color:#00B4CC;
  }
`
const SubmitButton=styled(SearchButton)`
  border-radius:0;
`
const SearchForm=styled.form`
  display:flex;
  flex-flow:row nowrap;
  width:100%;
  margin:0;
  padding:0;
`
const InputWrapper=styled.div`
  display:flex;
  flex-flow:column nowrap;
  width:100%;
  position:relative;
`
const SuggestionList=styled.ul`
  list-style-type:none;
  position:absolute;
  left:0;
  top:1em ;
  padding:0;
  z-index:10;
  width:100%;
`
const SuggestionItem=styled.li`
  font-family:'Roboto' sans-serif;
  padding-left:0.2em;
  background-color: #fff;
  border:1px solid #786e6e;
  border-radius:2px;
  width:100%;
  padding:0.15em;
  &:hover{
    cursor:pointer;
    background-color: #e4e4e4;
  }
`
const DrugNames=DRUGS_TABLE.map(drug=>drug.name_pol);
function SearchInput({handleSearchSubmit,handleClearSearch}) {
    const[search,setSearch]=useState("");
    const[suggestions,setSuggestions]=useState(DrugNames);
    const handleChange=(e)=>{
      const{value}=e.target;
      setSearch(value);
      e.preventDefault();
      let re=new RegExp("^"+value,"i");
      setSuggestions(DrugNames.filter(val=>re.test(val)));
    }
    const Clear=()=>{
      handleClearSearch();
      setSearch("");
    }
    return(
      <>
        <SearchWrapper>
          <SearchForm onSubmit={e=>{e.preventDefault();setSearch("")}}>
          <InputWrapper>
            <SearchTerm onChange={handleChange} value={search} tabIndex="0" aria-label="Search input to filter Medicines" placeholder="Wyszukaj Lek"/>
            <SuggestionList>
              {search!==""?suggestions.map(name=><SuggestionItem tabIndex="0" key={name} onClick={()=>{handleSearchSubmit(name);setSearch("")}}>{name}</SuggestionItem>):null}
            </SuggestionList>
          </InputWrapper>
          <SubmitButton onClick={()=>handleSearchSubmit(search)} type="text" aria-label="Search Medicine"><FaSearch/></SubmitButton>
          </SearchForm>
          <SearchButton onClick={Clear} type="text" aria-label="Clear Searching"><FaBackspace/></SearchButton>
        </SearchWrapper>
      </>
    );
}

export default SearchInput;
