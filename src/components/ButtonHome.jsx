import React from 'react';
import '../pages/Home/Home.css';

export default function ButtonHome(props) {

    return (
        <div>
            <a href='/Login' className='ButtomHome'>
                <img className='ImageButtomHome' src={props.img} alt={props.img}/>
                <span>{props.children}</span>
            </a>
        </div>
    )
}
