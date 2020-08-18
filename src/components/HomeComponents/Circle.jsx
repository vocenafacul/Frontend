import React from 'react'

export default (props) => (
    <div className={`circle${props.type} circle`} >
        <img src={props.img} alt={props.text} className='circlefigure'/>
    </div>
)