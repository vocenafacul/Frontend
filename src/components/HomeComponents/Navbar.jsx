import React from "react";
import "../../pages/Home/Home.css";
import logofundo from "../../image/logo/pincel.png";
import logo from "../../image/logo/logo.png";

export default (props) => {
  return (
    <nav className="navbar menu_principal">
      <a className="navvbar--brand mb-0 h5" href="/">
        <img
          src={logofundo}
          alt="fundo do logo"
          className="imagelogofundo imagelogo"
        />{" "}
        <img
        src={logo} alt="logo"
        className="imagelogofront imagelogo" />
      </a>
      <div className="menu_itens">
        <a href="/">Início</a>
        <a href="/login">Entrar</a>
        <a style={{height: '50px', backgroundColor: '#f2af5c', borderRadius: '10px'}} href="/login/signup">Cadastro</a>
      </div>
    </nav>
  );
};
