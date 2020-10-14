import React from 'react';
import styled from 'styled-components';

const Foot=styled.div`
  font-family: acumin-pro, system-ui, sans-serif;
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  padding: 30px 30px 20px 30px;
  color: #2f2f2f;
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  & >*{
    flex:1 100%;
  }
  & ul{
    list-style: none;
    padding-left: 0;
  }
  & li{
    line-height: 2em;
  }
  & a{
    text-decoration: none;
  }
`
const FCreated=styled.div`
  margin-right: 1em;
  margin-bottom: 1em;
  & h2{
    margin-top: 1.3em;
   font-size: 15px;
   font-weight: 400;
  }
  @media(min-width: 40.375em){
    flex: 2 0px;
  }
`
const Title=styled.h2`
  font-weight: 700;
  font-size: 15px;
`
const FLogo=styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
`
const FNav=styled.ul`
  display: flex;
  flex-flow: row wrap;
  & >*{
    flex: 1 50%;
    margin-right: 1.25em;
    @media(min-width: 40.375em){
      flex:1;
    }
  }
`
const Nav_ul=styled.ul`
  font-size: 16px;
  line-height: 2em;
  & a{
    color: #999999;
  }
`
const Nav_ul_extra=styled.ul`
  column-count: 1;
  column-gap: 1.25em;
  font-size: 16px;
  & a{
    color: #999999;
  }
  @media(min-width: 40.375em){
    flex-grow:2;
  }
`
const Copyrights=styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #999;
  font-size: 16px;
  @media(min-width:24.375em){
    margin-left: auto;
  }
`
const Description=styled.div`
  font-size: 14px;
  color:#999;
`
function Footer() {
  return(
    <Foot>
      <FCreated>
        <FLogo>DrugApp</FLogo>
        <h2>Application created for Hackaton2020 competition by students of Maria Konopnicka high school in Legionowo(Poland).</h2>
      </FCreated>
      <FNav>
        <li>
          <Title>Purpose of the application</Title>
          <Description>The Purpose of the application is to show users which drugs/medicine they can mix and which mixed medicines can couse a health problems. I hope you enjoy this app!</Description>
        </li>
        <li>
          <Title>Things used to Create Project</Title>
          <Nav_ul_extra>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://styled-components.com/">Styled components</a>
            </li>
            <li>
              <a href="https://react-icons.github.io/react-icons/icons?name=ai">React Icons</a>
            </li>
          </Nav_ul_extra>
        </li>
        <li>
          <Title>Support</Title>
          <Description> For any Issues write an issue on GitHub. We will try to response as fast as we can!</Description>
        </li>
        <li>
          <Title>
            Authors of The Project
          </Title>
          <Description>
            <ul>
              <li>
                Dawid Szczepankowski - JavaScript & React
              </li>
              <li>
                Filip Małecki-Tepicht - Backend & Database
              </li>
              <li>
                Karol Muziński - HTML & CSS
              </li>
            </ul>
          </Description>
        </li>
        <li>
          <Title>Contact to School</Title>
          <Nav_ul>
            <li>
              <a href="http://www.lokonopnicka.pl/">Maria Konopnicka High School in Legionowo</a>
            </li>
          </Nav_ul>
        </li>
      </FNav>
      <Copyrights>
        <p>&copy; 2020 Liceum im. Marii Konopnickiej. Wszelkie prawa zastrzeżone</p>
      </Copyrights>
    </Foot>
  );
}
export default Footer;
