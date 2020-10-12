import React,{useState} from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import {MaxUseCalc} from './components/ingredients'
import {MedicineTab,SearchInput} from './components';
const GlobalStyle=createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  body{
    margin:0;
    padding:0;
    background-color:#fff;
    color:#4a4a4a;
    overflow-x:hidden;
    font-size:1.5rem;
  }
`;
const MainWrapper=styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column nowrap;
`;
const SearchWrapper=styled.div`
  margin: 4vh;
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
const MedicineWrapper=styled.div`
  width: 100vw;
  min-height: 80vh;
  padding: 1em;
  display: flex;
  justify-content: center;
  @media(max-width:768px){
    padding: 1em;
    flex-direction: column;
  }
`;
const Drugs=[
{"id":0,"name_pol":"Paracetamol","name_lat":"Paracetamolum","dosage":30,"img_link":"https:\/\/www.i-apteka.pl\/data\/include\/img\/news\/1425908509.jpg","description":"Lek z grupy niesteroidowych leków przeciwzapalnych (NLPZ) głównie używany przeciwbólowo. Osiąga maksymalne stężenie we krwi w 30-60 minut. Czas działania wynosi około 4 godziny.","application":"Przeciwbólowe,Stany Gorączkowe","sub_group":"NLPZ","lethal_dose":338},
{"id":1,"name_pol":"Ibuprofen","name_lat":"Ibuprofenum","dosage":40,"img_link":"https:\/\/www.researchgate.net\/profile\/Murad_Abualhasan\/publication\/270283844\/figure\/fig1\/AS:613968762642434@1523392968418\/Chemical-structure-of-Ibuprofen.png","description":"Lek z grupy niesteroidowych leków przeciwzapalnych (NLPZ) używany przeciwbólowo, przeciwzapalnie oraz przeciwgorączkowo. Maksymalne stężenie we krwi osiąga po około 1-2h. Efekt przeciwbólowy utrzymuję się przez 6h a przeciwgorączkowy ok. 8h.","application":"Przeciwbólowe,Stany gorączkowe,Przeciw zapalne","sub_group":"NLPZ","lethal_dose":636},
{"id":2,"name_pol":"Pseudoefedryna","name_lat":"Pseudoephedrini","dosage":1.7,"img_link":"https://www.assignmentpoint.com/wp-content/uploads/2020/08/Pseudoephedrine-PSE.jpg","description":"Lek z grupy amin sympatykomimetycznych, użyany w \r\ncelach łagodzenia objawów grypy, niedrożności zatok, \r\nkataru, bólu głowy oraz gorączki. Działanie rozpoczyna się po \r\nokoło 30 minutach od przyjęcia pierwszej dawki i utrzymuję się przez 4h.","application":"Grypa,Niedrożność zatok, Gorączka,Katar","sub_group":"Fenyloetyloaminy,Sympatykomimetyki","lethal_dose":660},
{"id":3,"name_pol":"Ketoprofen","name_lat":"Ketoprofenum","dosage":0,"img_link":"https:\/\/www.researchgate.net\/publication\/321206110\/figure\/fig2\/AS:563333200072704@1511320509273\/Chemical-structure-of-ketoprofen.png","description":"Lek z grupy niesteroidowych leków przeciwbólowych (NLPZ) \r\nwykazuje silne działanie przeciwzapalne, przeciwgorączkowe\r\noraz przeciwbólowe. Pierwsze efekty pojawiają się po 30 minutach \r\nod przyjęcia pierwszej dawki leku, maksymalne stężenie osiąga po 80 minutach.","application":"Przeciwbólowe,Przeciwzapalne,Przeciwgorączkowe","sub_group":"NLPZ","lethal_dose":360}
];
function App() {
  const[search,setSearch]=useState("");
  const handleSearchSubmit=(val)=>{
    setSearch(val);
  }
  return (
    <>
      <GlobalStyle/>
      <MainWrapper>
        <SearchWrapper>
          <SearchInput handleSearchSubmit={handleSearchSubmit}/>
        </SearchWrapper>
        <MedicineWrapper>
          {Drugs.map(drug=><MedicineTab data={drug} key={drug.id}/>)}
        </MedicineWrapper>
      </MainWrapper>
    </>
  );
}

export default App;
