import React, { useState } from "react";
import "./Login.css";

import logo from "../../image/logo/logo.png";

import { connect } from "react-redux";

import * as UserActions from "../../store/actions/userAction";

const Login = ({login, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailErro] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validation() {
    if (!email.includes("@") || !email.includes(".com")) {
      setEmailErro("email inválido");
    } else {
      setEmailErro("");
    }

    if (password === "") {
      setPasswordError("password inválido");
    } else {
      setPasswordError("");
    }

    if (email.includes("@") && email.includes(".com") && password.length > 7) {
      login(email, password);
      if (user.token !== "") {
      }
    }
  }
  

  return (
  <div className="pageLogin">
  <div className="divLoginCadastro">
    <div className="LoginRouter">
      <div className="LoginSup">
        <img
          src={logo}
          alt="logo"
          style={{ width: "150px", marginTop: "10px" }}
        />
        <div className="divinputlogin LoginSup">
          <form>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="senha"
            />
          </form>
        </div>

        <div className="ForgotPassWord">
          <a href="/">Esqueci a minha senha</a>
        </div>
        <div className="buttonLogin">
          <button onClick={() => validation()}>Entrar</button>
        </div>
      </div>
      <div>
        <span style={{ color: "red", fontSize: "15px", marginRight: "15px" }}>
          {emailError}
        </span>
        <span style={{ color: "red", fontSize: "15px", margin: "0px" }}>
          {passwordError}
        </span>
      </div>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "black", marginRight: "10px" }}>
          Ainda não tenho uma conta
        </span>
        <div>
          <a href="/login/signup">Clique Aqui</a>
        </div>
      </div>
    </div>
  </div>
  <div className='colaborator' >
    Gostaria de ser tornar um Colaborador? Saiba mais <a style={{color: 'white'}} href="/">Clicando aqui</a>
  </div>
</div>

)
};


const mapDispatchToProps = (dispatch) => ({
  login: (email, password) =>
    dispatch(UserActions.login(email, password)),
});


export default connect(null, mapDispatchToProps)(Login);
