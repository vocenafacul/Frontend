import React, { Component } from "react";
import "../Login.css";

import logo from "../../../image/logo/logo.png";

import { connect } from "react-redux";

import * as UserActions from "../../../store/actions/userAction";

class SignUpTeacher extends Component {
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
      curriculum: "file",
      nameOfCourse: "",
      statusGraduation: "Graduando",
      kindOfUniversity: "Publica",
      universityName: "",
      linkedin: "",
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
      var str = this.state.phone;
      var res = str.substr(1, 2) + str.substr(4, 12);
      this.setState({
        page: 2,
        phone: res,
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
    if (this.state.lastSchool === "") {
      window.alert("Por Favor");
    } else if (this.state.nameOfLittleCourse === "") {
      window.alert("Por Favor");
    } else {
      let stateSend = this.state;
      delete stateSend.page
      delete stateSend.CEP

      if (this.state.linkedin === "") {
        delete stateSend.linkedin
      }

      Object.assign(stateSend, {"isTeacher": true})

      this.props.register(stateSend);
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

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
                name="curriculum"
                value={this.state.curriculum}
                type="file"
                onChange={this.handleChange}
                placeholder="Histórico ou Diploma (PDF)"
              />

              <input
                name="universityName*"
                value={this.state.universityName}
                onChange={this.handleChange}
                placeholder="Nome da Universidade"
              />

              <input
                name="nameOfCourse*"
                value={this.state.nameOfCourse}
                onChange={this.handleChange}
                placeholder="Qual curso fez ou está fazendo?"
              />

              <div className="selectPers">
                <label>Escolaridade</label>
                <select
                  name="statusGraduation"
                  value={this.state.statusGraduation}
                  onChange={this.handleChange}
                >
                  <option value="Graduando">Graduando</option>
                  <option value="Graduado">Graduado</option>
                  <option value="Mestrando">Mestrando</option>
                  <option value="Mestrado">Mestrado</option>
                  <option value="Doutorando">Doutorando</option>
                  <option value="Doutorado">Doutorado</option>
                </select>
              </div>

              <div className="selectPers">
                <label>A Universidade é/foi</label>
                <select
                  name="littleCourse"
                  value={this.state.littleCourse}
                  onChange={this.handleChange}
                >
                  <option value="Publica">Publica</option>
                  <option value="Privada">Privada</option>
                </select>
              </div>
              <input
                name="linkedin"
                value={this.state.linkedin}
                onChange={this.handleChange}
                placeholder="Nome da Universidade"
              />
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

export default connect(null, mapDispatchToProps)(SignUpTeacher);
