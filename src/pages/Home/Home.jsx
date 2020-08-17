import React from "react";
import Carousel from "react-elastic-carousel";
import "./Home.css";

import SlideShow from "../../components/slide";
import QuemSomos from "../../components/QuemSomos";
import CardsMembers from "../../components/Cards_Members";
import ButtonHome from "../../components/ButtonHome";
import Navbar from "../../components/Navbar";


import LocCurs from "../../image/ButtonHome/undraw_map_1r69.svg";
import Simulado from "../../image/ButtonHome/undraw_Organizing_projects_0p9a.svg";
import Calend from "../../image/ButtonHome/undraw_schedule_pnbk.svg";

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
  <div>
    <Navbar />
    <div
      style={{
        backgroundColor: "#6ddbaa",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SlideShow />
    </div>
    <div className="Container2">
      <ButtonHome img={LocCurs}>Localiza Cursinho</ButtonHome>
      <ButtonHome img={Simulado}>Simulados</ButtonHome>
      <ButtonHome img={Calend}>Calendário de Eventos</ButtonHome>
    </div>
    <div style={{ backgroundColor: "#4d4b4c", padding: "10px" }}>
      <QuemSomos />
    </div>
    <div style={{ backgroundColor: "#4d4b4c" }}>
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
