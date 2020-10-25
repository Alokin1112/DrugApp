(this.webpackJsonpDrugApp=this.webpackJsonpDrugApp||[]).push([[0],{15:function(n,e,a){n.exports=a(23)},20:function(n,e,a){},23:function(n,e,a){"use strict";a.r(e);var i=a(1),t=a.n(i),r=a(11),o=a.n(r),l=(a(20),a(4)),c=a(2),u=a(3);function d(){var n=Object(c.a)(["\n  margin: 0.25em;\n  padding: 0;\n  font-size: 0.75em;\n"]);return d=function(){return n},n}function p(){var n=Object(c.a)(["\n  font-size: 0.75em;\n  border: 1px solid #4a4a4a;\n  padding: 0.1em;\n  border-radius: 4px;\n  margin:0.5em;\n"]);return p=function(){return n},n}function m(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction:row;\n  width: 100%;\n"]);return m=function(){return n},n}function s(){var n=Object(c.a)(["\n  width: 100%;\n  border: 3px solid #00B4CC;\n  border-right: none;\n  padding: 0.5vh;\n  height: 4vh;\n  font-size: 2.5vh;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: #000;\n  &:focus{\n    color: #00B4CC;\n  }\n  @media(max-width:768px){\n    font-size:1em;\n  }\n"]);return s=function(){return n},n}function w(){var n=Object(c.a)(["\nwidth: 4vh;\nheight: 4vh;\nborder: 1px solid #00B4CC;\nbackground: #00B4CC;\ntext-align: center;\ncolor: #fff;\nborder-radius: 0 5px 5px 0;\ncursor: pointer;\nfont-size: 3vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n&:hover{\n  cursor:default;\n}\n"]);return w=function(){return n},n}function f(){var n=Object(c.a)(["\n  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);\n  background-color: #fff;\n  color: #4a4a4a;\n  width:50%;\n  margin:0.5em;\n  border-radius: 6px;\n  padding: 1.25em;\n  min-height: 20vh;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  @media (max-width:768px) {\n    width:100%;\n    margin:0.2em;\n  }\n"]);return f=function(){return n},n}var z=u.b.div(f()),b=u.b.button(w()),y=u.b.input(s()),h=u.b.div(m()),g=u.b.p(p()),k=u.b.h3(d());var j=function(n){var e=n.dosage,a=n.ld50,r=Object(i.useState)(""),o=Object(l.a)(r,2),c=o[0],u=o[1];return t.a.createElement(z,null,0!==e||0!==a?t.a.createElement(t.a.Fragment,null,t.a.createElement(k,null,"Dzienne spo\u017cycie"),t.a.createElement(h,null,t.a.createElement(y,{type:"number",min:"1",max:"660",placeholder:"Wpisz Swoj\u0105 Wag\u0119",value:c,onChange:function(n){var e=n.target.value;u(e)},maxlength:"4","aria-label":"Write your Weight to check how mcuch medicine you can use"}),t.a.createElement(b,{disabled:!0},"Kg")),t.a.createElement(g,null,0===e?t.a.createElement(t.a.Fragment,null,"Brak Danych Odno\u015bnie dziennego spo\u017cycia"):t.a.createElement(t.a.Fragment,null,"Maksymalne dzienne spo\u017cycie:",c*e>0?Math.round(c*e*1e3)/1e3+"mg":null)),t.a.createElement(g,null,0===a?t.a.createElement(t.a.Fragment,null,"Brak Danych Odno\u015bnie dawki \u015bmiertelnej"):t.a.createElement(t.a.Fragment,null,"\u015amiertelne dzienne spo\u017cycie:",c*a>0?Math.round(c*a*1e3)/1e3+"mg":null))):t.a.createElement("p",null,"Brak Danych"))},v=[{id:0,name_pol:"Paracetamol",name_lat:"Paracetamolum",dosage:30,img_link:"https://upload.wikimedia.org/wikipedia/commons/2/29/Paracetamol-skeletal.svg",description:"Lek z grupy niesteroidowych lek\xf3w przeciwzapalnych (NLPZ) g\u0142\xf3wnie u\u017cywany przeciwb\xf3lowo. Osi\u0105ga maksymalne st\u0119\u017cenie we krwi w 30-60 minut. Czas dzia\u0142ania wynosi oko\u0142o 4 godziny.",application:"Przeciwb\xf3lowe,Przeciwgor\u0105czkowe",sub_group:"NLPZ",lethal_dose:"338"},{id:1,name_pol:"Ibuprofen",name_lat:"Ibuprofenum",dosage:40,img_link:"https://upload.wikimedia.org/wikipedia/commons/5/51/Ibuprofen.svg",description:"Lek z grupy niesteroidowych lek\xf3w przeciwzapalnych (NLPZ) u\u017cywany przeciwb\xf3lowo, przeciwzapalnie oraz przeciwgor\u0105czkowo. Maksymalne st\u0119\u017cenie we krwi osi\u0105ga po oko\u0142o 1-2h. Efekt przeciwb\xf3lowy utrzymuj\u0119 si\u0119 przez 6h a przeciwgor\u0105czkowy ok. 8h.",application:"Przeciwb\xf3lowe,Przeciwgor\u0105czkowe,Przeciwzapalne",sub_group:"NLPZ",lethal_dose:636},{id:2,name_pol:"Pseudoefedryna",name_lat:"Pseudoephedrini",dosage:1.7,img_link:"https://upload.wikimedia.org/wikipedia/commons/e/e5/%28%2B%29-Pseudoephedrin.svg",description:"Lek z grupy amin sympatykomimetycznych, u\u017cyany w \r\ncelach \u0142agodzenia objaw\xf3w grypy, niedro\u017cno\u015bci zatok, \r\nkataru, b\xf3lu g\u0142owy oraz gor\u0105czki. Dzia\u0142anie rozpoczyna si\u0119 po \r\noko\u0142o 30 minutach od przyj\u0119cia pierwszej dawki i utrzymuj\u0119 si\u0119 przez 4h.",application:"Grypa,Niedro\u017cno\u015b\u0107 zatok,Przeciwgor\u0105czkowe,Katar",sub_group:"Fenyloetyloaminy, Sympatykomimetyki",lethal_dose:660},{id:3,name_pol:"Ketoprofen",name_lat:"Ketoprofenum",dosage:0,img_link:"https://upload.wikimedia.org/wikipedia/commons/4/45/Ketoprofen.svg",description:"Lek z grupy niesteroidowych lek\xf3w przeciwb\xf3lowych (NLPZ) \r\nwykazuje silne dzia\u0142anie przeciwzapalne, przeciwgor\u0105czkowe\r\noraz przeciwb\xf3lowe. Pierwsze efekty pojawiaj\u0105 si\u0119 po 30 minutach \r\nod przyj\u0119cia pierwszej dawki leku, maksymalne st\u0119\u017cenie osi\u0105ga po 80 minutach.",application:"Przeciwb\xf3lowe,Przeciwzapalne,Przeciwgor\u0105czkowe",sub_group:"NLPZ",lethal_dose:360},{id:4,name_pol:"Cetyryzyna",name_lat:"Cetirizinum",dosage:0,img_link:"https://upload.wikimedia.org/wikipedia/commons/archive/c/c5/20180218161224%21Cetirizine_structure.svg",description:"Lek przeciwhistaminowy drugiej generacji, antagonista receptor\xf3w H1. \r\nStosowany przy alergicznym zapaleniu spoj\xf3wek, pokrzywce i katarze siennym.\r\nCzas po\u0142owicznego rozpadu wacha si\u0119 mi\u0119dzy 6.5h - 10h.",application:"Katar sienny,Zapalenie Spoj\xf3wek,Alergia,Pokrzywka",sub_group:"Antyhistamina",lethal_dose:365},{id:5,name_pol:"Loratadyna",name_lat:"Loratadine",dosage:.175,img_link:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Loratadin.svg",description:"Lek przeciwhistaminowy drugiej generacji, antagonista obwodowych receptor\xf3w H1.\r\nStosowana przy alergicznym zapaleniu b\u0142ony \u015bluzowej nosa, pokrzywce i katarze siennym.\r\nMaksymalne st\u0119\u017cenie we krwi wyst\u0119puje po 1h - 1.5h. \u015aredni czas rozpadu po\u0142owicznego\r\nwynosi ok 8.5h, ale czas dzia\u0142ania aktywnych metabolit\xf3w mo\u017ce  osi\u0105ga\u0107 nawet 28h.",application:"Alergia,Zapalenie b\u0142ony \u015bluzowej,Pokrzywka,Katar sienny",sub_group:"Antyhistamina",lethal_dose:0},{id:6,name_pol:"Tramadol",name_lat:"Tramadoli",dosage:1,img_link:"https://upload.wikimedia.org/wikipedia/commons/a/a7/Tramadol.svg",description:"Silnie dzia\u0142aj\u0105cy lek przeciwb\xf3lowy z grupy opioid\xf3w.\r\nOpr\xf3cz dzia\u0142ania przeciwb\xf3lowego wykazuje r\xf3wnie\u017c silne dzia\u0142anie przeciwkaszlowe.\r\nPrzy podaniu doustnym dzia\u0142a ok. 5 razy s\u0142abiej od morfiny.\r\nDzia\u0142anie przeciwb\xf3lowe rozpoczyna si\u0119 po 15-30min i trwa 3-4h.",application:"Przeciwb\xf3lowe,Premedykacja,Przeciwkaszlowe",sub_group:"Opioid",lethal_dose:145},{id:7,name_pol:"Morfina",name_lat:"Morphinum",dosage:0,img_link:"https://upload.wikimedia.org/wikipedia/commons/3/33/Morphin_-_Morphine.svg",description:"Bardzo silny lek narkotyczny, z grupy opiat\xf3w.\r\nStosowany przeciwb\xf3lowo w silnych b\xf3lach np. nowotworowych.\r\n\u015aredni czas rozpadu po\u0142owicznego wynosi ok 3h, ale zosta\u0142y opracowane tabletki\r\no spowolnionym uwalnianiu przy kt\xf3rych efekt przeciwb\xf3lowy mo\u017ce utrzymywa\u0107 si\u0119 nawet 12h.",application:"Przeciwb\xf3lowe,Przeciwkaszlowe",sub_group:"Opiat,Opioid",lethal_dose:0},{id:8,name_pol:"Metamizol",name_lat:"Metamizolum",dosage:500,img_link:"https://upload.wikimedia.org/wikipedia/commons/8/82/Strukturformel_Metamizol_V1.svg",description:"Lek z grupy Pirazolon\xf3w, nale\u017cy do niesteroidowych lek\xf3w przeciwzapalnych, ma silne dzia\u0142anie przeciwgor\u0105czkowe oraz przeciwb\xf3lowe za to s\u0142abe przeciwzapalne. Dodatkowo wykazuje niewielkie dzia\u0142anie uspokajaj\u0105ce i zwiotczaj\u0105ce dla mi\u0119\u015bni g\u0142adkich. Mechanizm jego dzia\u0142ania polega na hamowaniu aktywno\u015bci enzymu \u2013 cyklooksygenazy w o\u015brodkowym uk\u0142adzie nerwowym. Jego przyjmowanie niesie ze sob\u0105 ryzko wyst\u0105pienia agranulocytozy, czyli bardzo niebezpiecznej i potencjalnie \u015bmiertelnej choroby krwi. Nie ma konsensusu co do poziomu ryzyka. W wielu krajach metamizol zosta\u0142 albo wycofany ca\u0142kowicie, albo ograniczono jego dost\u0119pno\u015b\u0107. Przyk\u0142adem preparatu prostego zawieraj\u0105cego metamizol jest Pyralgina.",application:"Przeciwb\xf3lowe,Przeciwgor\u0105czkowe,Przeciwzapalne",sub_group:"NLPZ",lethal_dose:0},{id:9,name_pol:"Sulfatiazol",name_lat:"Sulfathiazolum",dosage:50,img_link:"https://upload.wikimedia.org/wikipedia/commons/d/d2/Sulfathiazole_skeletal.svg",description:"Lek z grupy sulfonamid\xf3w, posiada bardzo silne dzia\u0142anie bakteriostatyczne, ze wzgl\u0119du na swoj\u0105 stosunkowo wysok\u0105 toksyczno\u015b\u0107 aktualnie wykorzystywany jest g\u0142\xf3wnie w formie ma\u015bci",application:"Zaka\u017cenia bakteryjne, Stany zapalne",sub_group:"Sulfonamid",lethal_dose:4500},{id:10,name_pol:"Propranolol",name_lat:"Propranololi",dosage:40,img_link:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Propranolol.svg",description:"Nieselektywny lek \u03b2-adrenolityczny (\u03b2-bloker), bez wewn\u0119trznej aktywno\u015bci sympatykomimetycznej, maj\u0105cy dzia\u0142anie stabilizuj\u0105ce b\u0142on\u0119 kom\xf3rkow\u0105. Blokuje dzia\u0142anie amin katecholowych (a konkretnie adrenaliny i noradrenaliny) na serce, powoduj\u0105c spadek zapotrzebowania serca na tlen oraz zwolnienie cz\u0119sto\u015bci jego pracy i w konsekwencji spadek ci\u015bnienia krwi (zw\u0142aszcza skurczowego). Ze wzgl\u0119du na blokowanie r\xf3wnie\u017c receptor\xf3w B-2 propranolol powoduje obkurczenie naczy\u0144, a tym samym szybszy zanik naczyniak\xf3w",application:"Nadci\u015bnienie t\u0119tnicze, Tachykardia, Zaburzenia rytmu serca, Hipertyreoza, Dr\u017cenie samoistne, Akatyzja",sub_group:"\u03b2-bloker",lethal_dose:565},{id:11,name_pol:"Karbamazepina",name_lat:"Carbamazepinum",dosage:200,img_link:"https://upload.wikimedia.org/wikipedia/commons/3/35/Carbamazepine.svg",description:"Pochodna dibenzoazepiny, stosowana jako lek psychotropowy, przeciwdrgawkowy i stabilizuj\u0105cy nastr\xf3j, u\u017cywany g\u0142\xf3wnie do leczenia padaczki i choroby afektywnej dwubiegunowej. Znajduje r\xf3wnie\u017c zastosowanie w leczeniu nerwob\xf3li oraz w leczeniu schizofrenii i innych psychoz jako lek potencjalizuj\u0105cy dzia\u0142anie lek\xf3w przeciwpsychotycznych.",application:"Padaczka,Zaburzenia afektywne dwubiegunowe,Nerwob\xf3le",sub_group:"Dibenzoazepiny",lethal_dose:114},{id:12,name_pol:"Kwetiapina",name_lat:"Quetiapinum",dosage:25,img_link:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Quetiapine.svg",description:"Lek z grupy dibenzotiazepin, lek przeciwpsychotyczny atypowy (drugiej generacji) stosowany w leczeniu r\xf3\u017cnych zaburze\u0144 psychicznych, zw\u0142aszcza schizofrenii, zaburze\u0144 afektywnych dwubiegunowych i ci\u0119\u017ckich epizod\xf3w depresji. Nierzadko kwetiapina stosowana jest tak\u017ce w leczeniu bezsenno\u015bci, zaburze\u0144 zachowania zwi\u0105zanych z chorobami ot\u0119piennymi, zaburze\u0144 l\u0119kowych, a tak\u017ce zespo\u0142u Tourette\u2019a i zaburze\u0144 obsesyjno-kompulsyjnych (OCD, nerwica natr\u0119ctw).",application:"Schizofrenia, Zaburzenia afektywne dwubiegunowe, Depresja, Choroby ot\u0119pienne",sub_group:"Dibenzotiazepiny",lethal_dose:70},{id:13,name_pol:"Benzylopenicylina",name_lat:"Benzylpenicillium",dosage:12e3,img_link:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Penicillin-G.png",description:"Lek z grupy penicylin, antybiotyk \u03b2-laktamowy wytwarzany przez p\u0119dzlaki Penicillium chrysogenum (syn. Penicillium notatum) wra\u017cliwy na \u03b2-laktamazy. Ze wzgl\u0119du na strukturalne podobie\u0144stwo do alaniny, kt\xf3ra jest sk\u0142adnikiem mureiny, benzylopenicylina blokuje aktywno\u015b\u0107 transpeptydaz bior\u0105cych udzia\u0142 w tworzeniu wi\u0105za\u0144 pomi\u0119dzy pentapeptydami mukopolisacharydu \u015bciany kom\xf3rkowej bakterii. W dalszym etapie, na skutek aktywacji hydrolaz kom\xf3rkowych, zachodzi liza kom\xf3rki bakteryjnej.",application:"Zaka\u017cenia bakteryjne, Stany zapalne",sub_group:"Penicyliny",lethal_dose:24},{id:14,name_pol:"Chloropromazyna",name_lat:"Chlorpromazinum",dosage:25,img_link:"https://upload.wikimedia.org/wikipedia/commons/4/47/Chlorpromazine.svg",description:"Lek psychotropowy o dzia\u0142aniu przeciwpsychotycznym, przeciwautystycznym i uspokajaj\u0105cym. Lek zaliczany do lek\xf3w typowych dzia\u0142aj\u0105cych g\u0142\xf3wnie na receptory dopaminergiczne, pochodna fenotiazyny o budowie zbli\u017conej do chlorprotiksenu. Jest pierwszym skutecznym neuroleptykiem wprowadzonym do lecznictwa.",application:"Schizofrenia,Stany maniakalne,Psychozy",sub_group:"Psychotropy",lethal_dose:14}],_=[{id_interaction:0,id_primary:3,id_secondary:1,danger_scale:2,side_effects:"Wrzody"},{id_interaction:1,id_primary:7,id_secondary:6,danger_scale:3,side_effects:"Depresja uk\u0142adu oddechowego"},{id_interaction:2,id_primary:8,id_secondary:9,danger_scale:1,side_effects:"Metamizol nasila dzia\u0142anie sulfonamid\xf3w"},{id_interaction:3,id_primary:8,id_secondary:14,danger_scale:3,side_effects:"Ci\u0119\u017cka hipotermia"},{id_interaction:4,id_primary:6,id_secondary:12,danger_scale:2,side_effects:"Drgawki"},{id_interaction:5,id_primary:6,id_secondary:14,danger_scale:2,side_effects:"Drgawki"},{id_interaction:6,id_primary:2,id_secondary:10,danger_scale:2,side_effects:"Pseudoefedryna mo\u017ce odwraca\u0107 dzia\u0142anie \u03b2-bloker\xf3w i powodowa\u0107 wzrost ci\u015bnienia"},{id_interaction:7,id_primary:11,id_secondary:14,danger_scale:3,side_effects:"Agranulocytoza"}],x=[{id_application:0,name_application:"Przeciwb\xf3lowe"},{id_application:1,name_application:"Przeciwgor\u0105czkowe"},{id_application:2,name_application:"Przecwizapalne"},{id_application:3,name_application:"Grypa"},{id_application:4,name_application:"Niedro\u017cno\u015b\u0107 zatok"},{id_application:5,name_application:"Katar"},{id_application:6,name_application:"Katar sienny"},{id_application:7,name_application:"Zapalenie spoj\xf3wek"},{id_application:8,name_application:"Alergia"},{id_application:9,name_application:"Pokrzywka"},{id_application:10,name_application:"Premedykacja"},{id_application:11,name_application:"Zapalenie b\u0142ony \u015bluzowej"},{id_application:12,name_application:"Przeciwkaszlowe"},{id_application:13,name_application:"Zaka\u017cenia bakteryjne"},{id_application:14,name_application:"Nadci\u015bnienie t\u0119tnicze"},{id_application:15,name_application:"Tachykardia"},{id_application:16,name_application:"Zaburzenia rytmu serca"},{id_application:17,name_application:"Padaczka"},{id_application:18,name_application:"Zaburzenia afektywne dwubiegunowe"},{id_application:19,name_application:"Nerwob\xf3le"},{id_application:20,name_application:"Schizofrenia"},{id_application:21,name_application:"Stany maniakalne"},{id_application:22,name_application:"Psychozy"}];function E(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  padding: 1em;\n  margin: 0.5em;\n  flex-flow:row wrap;\n  @media(max-width:768px){\n    flex-direction:column;\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 1em;\n  margin: 0.5em;\n"]);return O=function(){return n},n}function C(){var n=Object(c.a)(['\n  background: linear-gradient(to bottom right, #0092bb, #00ffff);\n  color: #fff;\n  font-size: 0.75em;\n  border-radius: 6px;\n  margin:0.2em ;\n  padding: 0.34em;\n  text-decoration: underline;\n  &::before{\n    content: "#";\n  }\n']);return C=function(){return n},n}function P(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  min-height: 1em;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0.5em;\n  @media (max-width:768px) {\n    flex-direction: column;\n  }\n"]);return P=function(){return n},n}function S(){var n=Object(c.a)(["\n  padding: 0;\n  margin: 0;\n  color:#786e6e;\n"]);return S=function(){return n},n}function L(){var n=Object(c.a)(["\n  padding: 0;\n  margin: 0;\n  color: #000;\n"]);return L=function(){return n},n}function B(){var n=Object(c.a)(["\n  width: 3em;\n  height: 3em;\n  font-weight: bold;\n  font-size: 0.75em;\n  border: none;\n  background-color: transparent;\n  &:hover{\n    cursor: pointer;\n    color:lightblue;\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(c.a)(["\n  width: 100%;\n  height: 10%;\n  padding: 0.5em;\n  display: flex;\n  justify-content:flex-end;\n  @media(max-width:768px){\n    padding: 0.25em;\n  }\n"]);return F=function(){return n},n}function Z(){var n=Object(c.a)(["\n  background-color: #fff;\n  color: #4a4a4a;\n  border-radius: 6px;\n  height: 90%;\n  width: 80%;\n  padding: 1em;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  @media(max-width:768px){\n    height: 95%;\n    width: 90%;\n    padding: 0.5em;\n  }\n"]);return Z=function(){return n},n}function D(){var n=Object(c.a)(["\n  z-index: 10;\n  background-color: rgba(54,53,55,0.8);\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return n},n}var M=u.b.div(D()),A=u.b.div(Z()),K=u.b.div(F()),N=u.b.button(B()),W=u.b.h2(L()),R=u.b.h5(S()),T=u.b.div(P()),I=u.b.a(C()),J=u.b.div(O()),H=u.b.div(E());var G=function(n){var e=n.handleOpenToggle,a=n.data,i=n.handleFilter;return t.a.createElement(t.a.Fragment,null,t.a.createElement(M,null,t.a.createElement(A,{tabIndex:"10"},t.a.createElement(K,null,t.a.createElement(N,{onClick:e,autoFocus:!0},"X")),t.a.createElement(W,null,a.name_pol),t.a.createElement(R,null,a.name_lat),t.a.createElement("p",null,a.description),t.a.createElement("p",null,"Podgrupa: ",a.sub_group),t.a.createElement(T,null,a.application.split(",").map((function(n){return t.a.createElement(I,{href:"#",key:n,onClick:function(){return a=n,e(),void i(a);var a}},n)}))),t.a.createElement(J,null,t.a.createElement(j,{dosage:a.dosage,ld50:a.lethal_dose})),t.a.createElement(H,null,_.filter((function(n){return n.id_primary===a.id||n.id_secondary===a.id})).map((function(n){return t.a.createElement(cn,{messege:n.side_effects,importance:n.danger_scale,drug:a.id===n.id_primary?v[n.id_secondary].name_pol:v[n.id_primary].name_pol,key:n.id_interaction})}))))))},Q=a(5),X=a(8);function $(){var n=Object(c.a)(["\n  background-color:hsl(0, 0%, 21%);\n  color:white;\n  &:hover{\n    border-left: 8px solid #000000;\n  }\n"]);return $=function(){return n},n}function U(){var n=Object(c.a)(["\n  background-color:hsl(0, 100%, 50%);\n  color:white;\n  &:hover{\n    border-left: 8px solid #d40202;\n  }\n\n"]);return U=function(){return n},n}function V(){var n=Object(c.a)(["\n  background-color:hsl(48, 100%, 67%);\n  &:hover{\n    border-left: 8px solid #e6d40b;\n  }\n"]);return V=function(){return n},n}function q(){var n=Object(c.a)(["\n  \n"]);return q=function(){return n},n}function Y(){var n=Object(c.a)(["\n  font-size:3vh;\n"]);return Y=function(){return n},n}function nn(){var n=Object(c.a)(["\n  background-color:white;\n  padding: 0.25em;\n  color:  #4a4a4a;\n  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);\n  width: 22%;\n  margin:2vh auto;\n  border-radius: 6px;\n  min-height:8vh;\n  font-family: 'Lato', sans-serif;\n  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n  &:hover{\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    animation-duration: 0.25s;\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  }\n  @media(max-width:768px){\n    width:90%;\n  }\n"]);return nn=function(){return n},n}var en=u.b.div(nn()),an=u.b.h2(Y()),tn=u.b.p(q()),rn=Object(u.b)(en)(V()),on=Object(u.b)(en)(U()),ln=Object(u.b)(en)($());var cn=function(n){var e=n.importance,a=n.messege,i=n.drug,r=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(an,null,i),t.a.createElement(tn,null,a))};return t.a.createElement(t.a.Fragment,null,1===e?t.a.createElement(rn,null,r(),t.a.createElement(X.b,null)):2===e?t.a.createElement(on,null,r(),t.a.createElement(X.a,null)):t.a.createElement(ln,null,r(),t.a.createElement(Q.c,null)))};function un(){var n=Object(c.a)(["\n  width: 100%;\n  height: auto;\n  max-height:80%;\n  margin: 0;\n  padding: 0;\n"]);return un=function(){return n},n}function dn(){var n=Object(c.a)(["\n  font-size: 0.5em;\n  margin:0;\n  font-family: 'Roboto';\n  color: #786e6e;\n"]);return dn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  font-weight: bold;\n  font-size: 1.1em;\n  margin: 0;\n"]);return pn=function(){return n},n}function mn(){var n=Object(c.a)(["\n  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.15), 0 0 0 1px rgba(10,10,10,.12);\n  background-color: #fff;\n  color: #4a4a4a;\n  border-radius: 6px;\n  padding: 0.5em;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  height: 25vh;\n  width: 20vw;\n  margin: 1em;\n  transition: box-shadow .2s ease-in-out;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border:none;\n  font-size:1em;\n  &:hover{\n    cursor: pointer;\n    box-shadow: 0 0.5em 1em -0.125em rgba(25,25,25,.44), 0 0 0 1px rgba(25,25,25,.25);\n    color:#00B4CC;\n  }\n  &:focus{\n    outline:none;\n    box-shadow: 0 0.5em 1em -0.125em rgba(26,156,232,.60), 0 0 0 1px rgba(26,156,232,.2);\n  }\n  @media (max-width:768px) {\n    width: 80vw;\n    margin:1em auto;\n    height:30vh;\n  }\n"]);return mn=function(){return n},n}var sn=u.b.button(mn()),wn=u.b.p(pn()),fn=u.b.p(dn()),zn=u.b.img(un());var bn=function(n){var e=n.data,a=n.handleFilter,r=function(){return d((function(n){return!n}))},o=Object(i.useState)(!1),c=Object(l.a)(o,2),u=c[0],d=c[1];return t.a.createElement(t.a.Fragment,null,u?t.a.createElement(G,{handleOpenToggle:r,data:e,handleFilter:a}):null,t.a.createElement(sn,{onClick:r,tabIndex:"0","aria-label":"Opens "+e.name_pol+" informations"},t.a.createElement(zn,{src:e.img_link,alt:"zdj\u0119cie "+e.name_pol,rel:"preconnect"}),t.a.createElement(wn,null,e.name_pol),t.a.createElement(fn,null,e.name_lat)))};function yn(){var n=Object(c.a)(["\n  font-family:'Roboto' sans-serif;\n  padding-left:0.2em;\n  background-color: #fff;\n  border:1px solid #786e6e;\n  border-radius:2px;\n  width:100%;\n  padding:0.15em;\n  &:hover{\n    cursor:pointer;\n    background-color: #e4e4e4;\n  }\n"]);return yn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  list-style-type:none;\n  position:absolute;\n  left:0;\n  top:1em ;\n  padding:0;\n  z-index:10;\n  width:100%;\n"]);return hn=function(){return n},n}function gn(){var n=Object(c.a)(["\n  display:flex;\n  flex-flow:column nowrap;\n  width:100%;\n  position:relative;\n"]);return gn=function(){return n},n}function kn(){var n=Object(c.a)(["\n  display:flex;\n  flex-flow:row nowrap;\n  width:100%;\n  margin:0;\n  padding:0;\n"]);return kn=function(){return n},n}function jn(){var n=Object(c.a)(["\n  border-radius:0;\n"]);return jn=function(){return n},n}function vn(){var n=Object(c.a)(["\n  width: 6vh;\n  height: calc(6vh - 0px);\n  border: 1px solid #00B4CC;\n  background: #00B4CC;\n  text-align: center;\n  color: #fff;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n  font-size: 4.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover{\n    background-color: white;\n    color:#00B4CC;\n  }\n"]);return vn=function(){return n},n}function _n(){var n=Object(c.a)(["\n  width: 100%;\n  border: 3px solid #00B4CC;\n  border-right: none;\n  padding: 0.5vh;\n  height: 6vh;\n  font-size: 4vh;\n  border-radius: 5px 0 0 5px;\n  outline: none;\n  color: #000;\n  &:focus{\n    color: #00B4CC;\n  }\n"]);return _n=function(){return n},n}function xn(){var n=Object(c.a)(["\n  margin: 2vh auto 3vh;\n  width: 65vw;\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media(max-width:768px){\n    width: 90vw;\n    margin: 2vh auto;\n  }\n"]);return xn=function(){return n},n}var En=u.b.div(xn()),On=u.b.input(_n()),Cn=u.b.button(vn()),Pn=Object(u.b)(Cn)(jn()),Sn=u.b.form(kn()),Ln=u.b.div(gn()),Bn=u.b.ul(hn()),Fn=u.b.li(yn()),Zn=v.map((function(n){return n.name_pol}));var Dn=function(n){var e=n.handleSearchSubmit,a=n.handleClearSearch,r=Object(i.useState)(""),o=Object(l.a)(r,2),c=o[0],u=o[1],d=Object(i.useState)(Zn),p=Object(l.a)(d,2),m=p[0],s=p[1];return t.a.createElement(t.a.Fragment,null,t.a.createElement(En,null,t.a.createElement(Sn,{onSubmit:function(n){n.preventDefault(),u("")}},t.a.createElement(Ln,null,t.a.createElement(On,{onChange:function(n){var e=n.target.value;u(e),n.preventDefault();var a=new RegExp("^"+e,"i");s(Zn.filter((function(n){return a.test(n)})))},value:c,tabIndex:"0","aria-label":"Search input to filter Medicines",placeholder:"Wyszukaj Lek"}),t.a.createElement(Bn,null,""!==c?m.map((function(n){return t.a.createElement(Fn,{tabIndex:"0",key:n,onClick:function(){e(n),u("")}},n)})):null)),t.a.createElement(Pn,{onClick:function(){return e(c)},type:"text","aria-label":"Search Medicine"},t.a.createElement(Q.b,null))),t.a.createElement(Cn,{onClick:function(){a(),u("")},type:"text","aria-label":"Clear Searching"},t.a.createElement(Q.a,null))))};function Mn(){var n=Object(c.a)(["\n  font-size: 14px;\n  color:#737373;\n"]);return Mn=function(){return n},n}function An(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  color: #737373;\n  font-size: 16px;\n  @media(min-width:24.375em){\n    margin-left: auto;\n  }\n"]);return An=function(){return n},n}function Kn(){var n=Object(c.a)(["\n  column-count: 1;\n  column-gap: 1.25em;\n  font-size: 16px;\n  & a{\n    color: #737373;\n  }\n  @media(min-width: 40.375em){\n    flex-grow:2;\n  }\n"]);return Kn=function(){return n},n}function Nn(){var n=Object(c.a)(["\n  font-size: 16px;\n  line-height: 2em;\n  & a{\n    color: #737373;\n  }\n"]);return Nn=function(){return n},n}function Wn(){var n=Object(c.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  & >*{\n    flex: 1 50%;\n    margin-right: 1.25em;\n    @media(min-width: 40.375em){\n      flex:1;\n    }\n  }\n"]);return Wn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n  font-family: 'Lato', sans-serif;\n  font-weight: bold;\n  font-size: 1.5rem;\n"]);return Rn=function(){return n},n}function Tn(){var n=Object(c.a)(["\n  font-weight: 700;\n  font-size: 15px;\n"]);return Tn=function(){return n},n}function In(){var n=Object(c.a)(["\n  margin-right: 1em;\n  margin-bottom: 1em;\n  & h2{\n    margin-top: 1.3em;\n   font-size: 15px;\n   font-weight: 400;\n  }\n  @media(min-width: 40.375em){\n    flex: 2 0px;\n  }\n"]);return In=function(){return n},n}function Jn(){var n=Object(c.a)(["\n  font-family: acumin-pro, system-ui, sans-serif;\n  display: flex;\n  flex-flow: row wrap;\n  width: 100vw;\n  padding: 30px 30px 20px 30px;\n  color: #2f2f2f;\n  background-color: #fff;\n  border-top: 1px solid #e5e5e5;\n  & >*{\n    flex:1 100%;\n  }\n  & ul{\n    list-style: none;\n    padding-left: 0;\n  }\n  & li{\n    line-height: 2em;\n  }\n  & a{\n    text-decoration: none;\n  }\n"]);return Jn=function(){return n},n}var Hn=u.b.footer(Jn()),Gn=u.b.div(In()),Qn=u.b.h2(Tn()),Xn=u.b.h1(Rn()),$n=u.b.ul(Wn()),Un=u.b.ul(Nn()),Vn=u.b.ul(Kn()),qn=u.b.div(An()),Yn=u.b.div(Mn());var ne=function(){return t.a.createElement(Hn,null,t.a.createElement(Gn,null,t.a.createElement(Xn,null,"DrugApp"),t.a.createElement("h2",null,"Aplikacja stworzona na Konkurs Hackaton 2020 przez uczni\xf3w Liceum Og\xf3lnokszta\u0142c\u0105cego imienia Marii Konopnickiej w Legionowie.")),t.a.createElement($n,null,t.a.createElement("li",null,t.a.createElement(Qn,null,"Cel Aplikacji"),t.a.createElement(Yn,null,"Zadaniem Aplikacji jest ukazanie negatywnych skutk\xf3w mieszania danych substancji wyst\u0119puj\u0105cych w lekach, w celu ostrze\u017cenia i unikni\u0119cia uszczerbk\xf3w na zdrowiu")),t.a.createElement("li",null,t.a.createElement(Qn,null,"Narz\u0119dzia u\u017cyte w Projekcie"),t.a.createElement(Vn,null,t.a.createElement("li",null,t.a.createElement("a",{href:"https://reactjs.org/"},"React")),t.a.createElement("li",null,t.a.createElement("a",{href:"https://styled-components.com/"},"Styled components")),t.a.createElement("li",null,t.a.createElement("a",{href:"https://react-icons.github.io/react-icons/icons?name=ai"},"React Icons")))),t.a.createElement("li",null,t.a.createElement(Qn,null,"Wsparcie i Problemy"),t.a.createElement(Yn,null,"W przypadku jakichkolwiek problem\xf3w prosimy o kontakt na repozytorium projektu. Zrobimy wszystko by jak najszybciej naprawi\u0107 zainstnia\u0142y problem.")),t.a.createElement("li",null,t.a.createElement(Qn,null,"Autorzy Projektu"),t.a.createElement(Yn,null,t.a.createElement("ul",null,t.a.createElement("li",null,"Jolanta Cieszkowska - Koordynator Zespo\u0142u"),t.a.createElement("li",null,"Dawid Szczepankowski - JavaScript & React"),t.a.createElement("li",null,"Filip Ma\u0142ecki-Tepicht - Backend & Bazy Danych"),t.a.createElement("li",null,"Karol Muzi\u0144ski - HTML & CSS"),t.a.createElement("li",null,"Piotr Radzikowski - Bazy Danych")))),t.a.createElement("li",null,t.a.createElement(Qn,null,"Kontakt"),t.a.createElement(Un,null,t.a.createElement("li",null,t.a.createElement("a",{href:"http://www.lokonopnicka.pl/"},"Liceum Og\xf3lnokszta\u0142c\u0105ce imienia Marii Konopnickiej w Legionowie"))))),t.a.createElement(qn,null,t.a.createElement("p",null,"\xa9 2020 Liceum im. Marii Konopnickiej. Wszelkie prawa zastrze\u017cone")))};function ee(){var n=Object(c.a)(["\n    margin-right: 15px;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    background-color: transparent;\n    border:none;\n    font-size:1em;\n    transition: 0.3s;\n    &:hover{\n    color: black;\n    }\n"]);return ee=function(){return n},n}function ae(){var n=Object(c.a)(["\n  padding: 3vh;\n  background-color: #f44336;\n  color: white;\n  border-radius: 360px;\n  width:95vw;\n  margin:2vh;\n  display:flex;\n  justify-content:space-between;\n  align-items: center;\n  flex-flow:row nowrap;\n  @media(max-width:768px){\n    border-radius:10px;\n  }\n"]);return ae=function(){return n},n}var ie=u.b.aside(ae()),te=u.b.button(ee());var re=function(){var n=Object(i.useState)(!0),e=Object(l.a)(n,2),a=e[0],r=e[1];return t.a.createElement(t.a.Fragment,null,a?t.a.createElement(ie,null,"Uwaga!!! Aplikacja nie jest stworzona przez Lekarzy. Skonsultuj si\u0119 z lekarzem/farmaceut\u0105 przed skorzystaniem z leku!",t.a.createElement(te,{onClick:function(){r(!1)},"aria-label":"Close Notification"},"X")):null)};function oe(){var n=Object(c.a)(["\n    margin:1em;\n    width:30%;\n    color: #fff;\n    text-align: center;\n    border-radius: 10px;\n    border: 2px solid transparent;\n    font-family:'Lato',sans-serif;\n    transition: .3s;\n    background-color:#00B4CC;\n    font-size:1em;\n    &:hover{\n    color: #00B4CC;\n    background-color: #fff;\n    border: 2px solid #00B4CC;\n    text-decoration: none;\n    cursor:pointer;\n    }\n    @media(max-width:768px){\n        width:70%;\n    }\n"]);return oe=function(){return n},n}var le=u.b.button(oe());var ce=function(n){var e=n.handleRenderSize;return t.a.createElement(t.a.Fragment,null,t.a.createElement(le,{"aria-label":"Load More Drugs",onClick:e},"Za\u0142aduj wi\u0119cej"))};function ue(){var n=Object(c.a)(["\n    width: 100%;\n    color:white;\n    height:100%;\n    background-color:transparent;\n    border:2px solid transparent;\n    border:none;\n    font-size:0.75em;\n    padding:0.2em;\n    &:hover{\n        cursor:pointer;\n        color:#565656;\n    }\n"]);return ue=function(){return n},n}function de(){var n=Object(c.a)(["\n    background-color:#00B4CC;\n    border:1px  solid #0084aa;\n    &:last-child{\n        border-radius:0 0 10px 10px;\n    }\n"]);return de=function(){return n},n}function pe(){var n=Object(c.a)(["\n    list-style-type:none;\n    position:absolute;\n    top:5vh;\n    left:0;\n    z-index:10;\n    width:100%;\n    padding: 0;\n    margin:0;\n"]);return pe=function(){return n},n}function me(){var n=Object(c.a)(["\n    width:20vw;\n    height:5vh;\n    background-color:#00B4CC;\n    border:none;\n    color:white;\n    border-radius:10px 10px 0 0;\n    font-size:3vh;\n    border:2px solid transparent;\n    &:hover{\n        border-color:#00B4CC;\n        color:#00B4CC;\n        background-color:white;\n        cursor:pointer;\n    }\n    @media(max-width:768px){\n        width:80vw;\n    }\n"]);return me=function(){return n},n}function se(){var n=Object(c.a)(["\n    position:relative;\n\n"]);return se=function(){return n},n}var we=u.b.div(se()),fe=u.b.button(me()),ze=u.b.ul(pe()),be=u.b.li(de()),ye=u.b.button(ue());var he=function(n){var e=n.handleFilter,a=n.AplArr,r=Object(i.useState)(!1),o=Object(l.a)(r,2),c=o[0],u=o[1],d=function(){return u((function(n){return!n}))};return t.a.createElement(t.a.Fragment,null,t.a.createElement(we,null,t.a.createElement(fe,{onClick:d,"aria-label":"Aktivate Filtring"},"Filtruj"),c?t.a.createElement(ze,null,a.map((function(n){return t.a.createElement(be,{key:n.id_application},t.a.createElement(ye,{onClick:function(){e(n.name_application),d()}},n.name_application))}))):null))};function ge(){var n=Object(c.a)(["\n    font-family: 'Lato', sans-serif;\n    text-align: center;\n    width:60%;\n    padding:0.15em;\n    @media(max-width:768px){\n        width:90%;\n    }\n"]);return ge=function(){return n},n}function ke(){var n=Object(c.a)(["\n    width:100%;\n    font-size:1.5em;\n    font-weight:bold;\n    font-family: 'Lato', sans-serif;\n    text-align:center;\n    background-color:transparent;\n    color:white;\n    border:none;\n    padding:0.25em;\n    border-bottom:2px solid #00ffff;\n    &:hover{\n        cursor:pointer;\n        color:#ccc;\n    }\n"]);return ke=function(){return n},n}function je(){var n=Object(c.a)(["\n    width:100vw;\n    background: linear-gradient(to bottom right, #00a2CC, #00ffff);\n    display:flex;\n    flex-flow:column nowrap;\n    justify-content:flex-start;\n    align-items:center;\n    min-height:15vh;\n    color:white;\n    margin-bottom:1em;\n"]);return je=function(){return n},n}var ve=u.b.header(je()),_e=u.b.button(ke()),xe=u.b.div(ge());var Ee=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(ve,null,t.a.createElement(_e,{onClick:function(){return window.location.reload()}},"DrugApp"),t.a.createElement(xe,null,"Aplikacja Stworzona do wyszukiwania negatywnych korelacji mi\u0119dzy substancjami znajduj\u0105cymi si\u0119 w lekach.")))};function Oe(){var n=Object(c.a)(["\n  width: 100vw;\n  min-height: 80vh;\n  padding: 1em;\n  display: flex;\n  justify-content: center;\n  flex-flow:row wrap;\n  @media(max-width:768px){\n    padding: 1em;\n    flex-direction: column;\n  }\n"]);return Oe=function(){return n},n}function Ce(){var n=Object(c.a)(["\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-flow:column nowrap;\n"]);return Ce=function(){return n},n}function Pe(){var n=Object(c.a)(["\n  *{\n    box-sizing:border-box;\n  }\n  body{\n    margin:0;\n    padding:0;\n    background-color:#fff;\n    color:#4a4a4a;\n    overflow-x:hidden;\n    font-size:1.5rem;\n  }\n"]);return Pe=function(){return n},n}var Se=Object(u.a)(Pe()),Le=u.b.main(Ce()),Be=u.b.div(Oe());var Fe=function(){var n=Object(i.useState)(v),e=Object(l.a)(n,2),a=e[0],r=e[1],o=Object(i.useState)(8),c=Object(l.a)(o,2),u=c[0],d=c[1],p=function(n){var e=new RegExp(n+"(,|$)","i");r(v.filter((function(n){return e.test(n.application)})))};return t.a.createElement(t.a.Fragment,null,t.a.createElement(Se,null),t.a.createElement(Le,null,t.a.createElement(Ee,null),t.a.createElement(re,null),t.a.createElement(Dn,{handleSearchSubmit:function(n){var e=new RegExp("^"+n,"i");r(v.filter((function(n){return e.test(n.name_pol)})))},handleClearSearch:function(){r(v)}}),t.a.createElement(he,{handleFilter:p,AplArr:x}),t.a.createElement(Be,null,a.slice(0,u).map((function(n){return t.a.createElement(bn,{data:n,key:n.id,handleFilter:p})}))),u<a.length?t.a.createElement(ce,{handleRenderSize:function(){d(u+12)}}):null,t.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.655b1110.chunk.js.map