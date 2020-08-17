import React, { Component, useState } from "react";
import "../Login.css";

import logo from "../../../image/logo/logo.png";

import { connect } from "react-redux";

import * as UserActions from "../../../store/actions/userAction";

class SignUpStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phone: "",
      password: "",
      confiPassword: "",
      firstName: "",
      lastName: "",
      gender: "Masc",
      birthday: "",
      street: "5 de Julho",
      neighborhood: "Ipiranga",
      city: "São Paulo",
      state: "SP",
      schooling: "1EM",
      endOfStudies: "",
      littleCourse: "Nao",
      typeLittleCourse: "Publico",
      nameOfLittleCourse: "",
      lastSchool: "",
      page: 1,
      CEP: "",
    };
  }

  validation1() {
    if (!this.state.email.includes("@", ".com")) {
      window.alert("Email Inválido");
    } else if (this.state.password === "" || this.state.password.length < 7) {
      window.alert("Password inválido");
    } else if (
      this.state.phone.length !== 13 &&
      this.state.phone.includes("(", ")")
    ) {
      window.alert("Telefone inválido");
    } else if (this.state.password !== this.state.confiPassword) {
      window.alert("Senha não confere");
    } else {
      var str = this.state.phone
      var res = str.substr(1,2) + str.substr(4,12)
      this.setState({
        page: 2,
        phone: res
      });
    }
  }

  validation2() {
    if (this.state.firstName === "") {
      window.alert("Por favor, insira seu nome");
    } else if (this.state.lastName === "") {
      window.alert("Por favor, insira seu Sobrenome");
    } else if (!this.state.birthday.includes("/")) {
      window.alert("Data inválido");
    } else if (this.state.CEP.length !== 8) {
      window.alert("CEP inválido");
    } else {
      this.setState({
        page: 3,
      });
    }
  }

  validation3() {
    if (this.state.lastSchool === "" && this.state.littleCourse === "Sim"){
        window.alert("Por Favor")
    }

    else if(this.state.nameOfLittleCourse === "" && this.state.littleCourse === "Sim") {
        window.alert("Por Favor")
    }

    else {

      let stateSend = this.state;
      delete stateSend.page
      delete stateSend.CEP

      if (this.state.lastSchool === "") {
        delete stateSend.lastSchool
      }
      
      if (this.state.nameOfLittleCourse === "") {
        delete stateSend.nameOfLittleCourse
      }

      if (
        this.state.schooling !== "Completo" ||
        this.state.schooling !== "Incompleto"
      ) {
        delete stateSend.endOfStudies
      }

      Object.assign(stateSend, {"isTeacher": false})

        this.props.register(stateSend)
    }


  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  Scholling() {
    if (
      this.state.schooling === "Completo" ||
      this.state.schooling === "Incompleto"
    )
      return (
        <input
          type="month"
          name="endOfStudies"
          onChange={this.handleChange}
          value={this.state.endOfStudies}
          placeholder="Quando Parou de Estudar"
        />
      );
  }

  LittleCourse() {
    if (this.state.littleCourse === "Sim") {
      return (
        <div>
          <div className="selectPers">
            <label>Tipo de Cursinho</label>
            <select
              name="typeLittleCourse"
              value={this.state.typeLittleCourse}
              onChange={this.handleChange}
            >
              <option value="Publico">Público</option>
              <option value="Particular">Privado</option>
            </select>
          </div>
          <input
            name="nameOfLittleCourse"
            value={this.state.nameOfLittleCourse}
            onChange={this.handleChange}
            placeholder="nome do cursinho"
          />
        </div>
      );
    }
  }

  CadastroAluno() {
    if (this.state.page === 1) {
      return (
        <div className="LoginRouter">
          <div className="LoginSup">
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", marginTop: "10px" }}
            />
            <div className="divinputCadastro LoginSup">
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="email"
              />
              <input
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="celular (whatsapp)"
              />
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="senha"
              />
              <input
                name="confiPassword"
                type="password"
                value={this.state.confiPassword}
                onChange={this.handleChange}
                placeholder="confirmar senha"
              />
            </div>
          </div>
          <div className="buttonCadastro">
            <button type="submit" onClick={() => this.validation1()}>
              Continuar Cadastro
            </button>
          </div>
        </div>
      );
    }

    if (this.state.page === 2) {
      return (
        <div className="LoginRouter">
          <div className="LoginSup">
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", marginTop: "10px" }}
            />
            <div className="divinputCadastro LoginSup">
              <input
                name="firstName"
                value={this.state.firstName}
                type="text"
                onChange={this.handleChange}
                placeholder="nome"
              />
              <input
                name="lastName"
                value={this.state.lastName}
                type="text"
                onChange={this.handleChange}
                placeholder="sobrenome"
              />

              <div className="selectPers">
                <label>Gênero</label>
                <select
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                >
                  <option value="Masc">Masculino</option>
                  <option value="Fem">Feminino</option>
                  <option value="Others">Outros</option>
                </select>
              </div>

              <input
                name="birthday"
                value={this.state.birthday}
                type="text"
                onChange={this.handleChange}
                placeholder="data de nascimento"
              />
              <input
                name="CEP"
                value={this.state.CEP}
                type="text"
                onChange={this.handleChange}
                placeholder="CEP"
              />
            </div>
          </div>
          <div className="buttonCadastro">
            <button onClick={() => this.validation2()}>
              Continuar Cadastro
            </button>
          </div>
        </div>
      );
    }

    if (this.state.page === 3) {
      return (
        <div className="LoginRouter">
          <div className="LoginSup">
            <img
              src={logo}
              alt="logo"
              style={{ width: "150px", marginTop: "10px" }}
            />
            <div className="divinputCadastro LoginSup">
              <input
                name="lastSchool"
                value={this.state.lastSchool}
                type="text"
                onChange={this.handleChange}
                placeholder="nome da ultima escola"
              />

              <div className="selectPers">
                <label>Escolaridade</label>
                <select
                  name="schooling"
                  value={this.state.schooling}
                  onChange={this.handleChange}
                >
                  <option value="1EM">1ºEns Médio</option>
                  <option value="2EM">2ºEns Médio</option>
                  <option value="3EM">3ºEns Médio</option>
                  <option value="Completo">Completo</option>
                  <option value="Incompleto">Abandonei</option>
                </select>
              </div>

              <div className="selectPers">
                <label>Já Fez Cursinho?</label>
                <select
                  name="littleCourse"
                  value={this.state.littleCourse}
                  onChange={this.handleChange}
                >
                  <option value="Sim">Sim</option>
                  <option value="Nao">Não</option>
                </select>
              </div>
              {this.Scholling()}
              {this.LittleCourse()}
            </div>
          </div>
          <div className="buttonCadastro">
            <button onClick={() => this.validation3()}>
              Finalizar Cadastro
            </button>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="pageLogin">
        <div className="divLoginCadastro">
          {this.CadastroAluno()}
          <div
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (state) => dispatch(UserActions.register(state)),
});

const mapStateToProps = (state) => ({ user: state.userReducer });

export default connect(mapStateToProps, mapDispatchToProps)(SignUpStudent);
