import React from 'react';
import styled from 'styled-components';

const Foot=styled.footer`
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
const NavUl=styled.ul`
  font-size: 16px;
  line-height: 2em;
  & a{
    color: #737373;
  }
`
const NavUlExtra=styled.ul`
  column-count: 1;
  column-gap: 1.25em;
  font-size: 16px;
  & a{
    color: #737373;
  }
  @media(min-width: 40.375em){
    flex-grow:2;
  }
`
const Copyrights=styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #737373;
  font-size: 16px;
  @media(min-width:24.375em){
    margin-left: auto;
  }
`
const Description=styled.div`
  font-size: 14px;
  color:#737373;
`
function Footer() {
  return(
    <Foot>
      <FCreated>
        <FLogo>DrugApp</FLogo>
        <h2>Aplikacja stworzona na Konkurs Hackaton 2020 przez uczniów Liceum Ogólnokształcącego imienia Marii Konopnickiej w Legionowie.</h2>
      </FCreated>
      <FNav>
        <li>
          <Title>Cel Aplikacji</Title>
          <Description>Zadaniem Aplikacji jest ukazanie negatywnych skutków mieszania danych substancji występujących w lekach, w celu ostrzeżenia i uniknięcia uszczerbków na zdrowiu</Description>
        </li>
        <li>
          <Title>Narzędzia użyte w Projekcie</Title>
          <NavUlExtra>
            <li>
              <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              <a href="https://styled-components.com/">Styled components</a>
            </li>
            <li>
              <a href="https://react-icons.github.io/react-icons/icons?name=ai">React Icons</a>
            </li>
          </NavUlExtra>
        </li>
        <li>
          <Title>Wsparcie i Problemy</Title>
          <Description>W przypadku jakichkolwiek problemów prosimy o kontakt na repozytorium projektu. Zrobimy wszystko by jak najszybciej naprawić zainstniały problem.</Description>
        </li>
        <li>
          <Title>
            Autorzy Projektu
          </Title>
          <Description>
            <ul>
              <li>
                Jolanta Cieszkowska - Koordynator Zespołu
              </li>
              <li>
                Dawid Szczepankowski - JavaScript & React
              </li>
              <li>
                Filip Małecki-Tepicht - Backend & Bazy Danych
              </li>
              <li>
                Karol Muziński - HTML & CSS
              </li>
              <li>
                Piotr Radzikowski - Bazy Danych
              </li>
            </ul>
          </Description>
        </li>
        <li>
          <Title>Kontakt</Title>
          <NavUl>
            <li>
              <a href="http://www.lokonopnicka.pl/">Liceum Ogólnokształcące imienia Marii Konopnickiej w Legionowie</a>
            </li>
          </NavUl>
        </li>
      </FNav>
      <Copyrights>
        <p>&copy; 2020 Liceum im. Marii Konopnickiej. Wszelkie prawa zastrzeżone</p>
      </Copyrights>
    </Foot>
  );
}
export default Footer;
