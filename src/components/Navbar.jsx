import React from 'react';
import './style.css';


export default props => {
    return (
        <nav className="navbar menu_principal">
        <a className="navvbar--brand mb-0 h5" href="#"><img src="" alt="vCnaFacul" style={{width: '80px', marginLeft: '40px'}}/> </a>
        <div className="menu_itens">
            <a href="/" >Home</a>
            <a href="/login">Sign In</a>
        </div>
    </nav>
    )
}