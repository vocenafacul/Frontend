import React from 'react'

export default function SocialMedia(props) {
    return (
        <div style={{backgroundColor: `${props.backgroundColor}`, width: '200px', height: '40px', borderRadius: '5px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
            <span>{props.children}</span>
        </div>
    )
}
