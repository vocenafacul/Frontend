import React from "react";
import Carousel from "react-elastic-carousel";
import "./Home.css";

import CardsMembers from "../../components/HomeComponents/Cards_Members";
import Navbar from "../../components/HomeComponents/Navbar";
import Figure from "../../components/HomeComponents/figure";
import Circle from "../../components/HomeComponents/Circle";
import QuemSomos from "./QuemSomos";

import Tree from "../../image/Home/parque.svg";
import Gym from "../../image/Home/academia.svg";
import Teacher from "../../image/Home/professor.svg";
import Online from "../../image/Home/Page-1.svg";

import Bio from "../../image/Home/bio.svg";
import Geo from "../../image/Home/geografia.svg";
import Quim from "../../image/Home/ciencia.svg";
import Math from "../../image/Home/matematica.svg";
import Hist from "../../image/Home/hist.svg";
import Fis from "../../image/Home/fisica.svg";
import Port from "../../image/Home/escola.svg";

import Book from "../../image/Home/bookLover.svg";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 360, itemsToShow: 2, itemsToScroll: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
  { width: 745, itemsToShow: 4, itemsToScroll: 4 },
  { width: 950, itemsToShow: 5, itemsToScroll: 5 },
  { width: 1100, itemsToShow: 6, itemsToScroll: 6 },
  { width: 1500, itemsToShow: 7, itemsToScroll: 7 },
];

const Home = () => (
  <div className='BodyHome'>
    <Navbar />
  <div style={{width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    
    <div className="divPrimeira">
      <Figure img={Tree} text="Estude onde quiser" type="1" />
      <Figure img={Gym} text="Quando puder" type="2" />
      <Figure img={Teacher} text="Com os professores mais fofos" type="3" />
      <Figure img={Online} text="Totalmente Online" type="4" />
      <Circle img={Bio} type="1" />
      <Circle img={Geo} type="2" />
      <Circle img={Quim} type="3" />
      <Circle img={Math} type="4" />
      <Circle img={Hist} type="5" />
      <Circle img={Fis} type="6" />
      <Circle img={Port} type="7" />
      <div className="textHome1">
        <span>Um Cursinho Popular</span>
      </div>
      <div className="textHome1">
        <span>você na Facul trás uma forma diferente de você estudar.</span>
      </div>
    </div>
    <div className="divSegunda">
      <hr />
      <div className="textHome2">
        <span >
          você na Facul é um projeto social formado por pessoas interessadas em
          contribuir para a construção de uma sociedade menos desigual.
        </span>
      </div>
      <div className="textHome2">
        <span >
          Nosso principal objetivo é ajudar a você a encontrar o seu caminho...
        </span>
      </div>
    </div>
    <div className="divTerceira">
      <img className="bookLover" src={Book} alt="" />

      <div className="slide"></div>
      <div className="buttons"></div>
    </div>
    <div className="divQuarta">
      <QuemSomos />
    </div>

      <h3 style={{ color: "white", padding: "20px" }}>Nossos Colaboradores</h3>
      <Carousel
        breakPoints={breakPoints}
        showArrows={false}
        enableAutoPlay={false}
        pagination={false}
      >
        <CardsMembers page="" />
        <CardsMembers page="Exemplo 2" />
        <CardsMembers page="Exemplo 3" />
      </Carousel>
 
  </div>
  </div>
);

export default Home;
