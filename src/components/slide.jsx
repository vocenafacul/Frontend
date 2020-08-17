import React from 'react';
import './style.css';


export default function SlideShow() {

    return (
        <div style={{height: '300px', padding: '10px', display: 'flex', alignItems: 'center'}}>
            <span style={{fontFamily: 'Rubik', fontWeight: 'bold', fontSize: '50px', letterSpacing: '-3px'}}>Cursinho</span>
            <span style={{fontFamily: 'Rubik', fontWeight: 'bold', fontSize: '20px', verticalAlign:'super'}}>Online</span>
        </div>
    )
}