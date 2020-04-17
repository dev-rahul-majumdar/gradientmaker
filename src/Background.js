import React from 'react';
import './Background.css';

const BackGround = ({txt, bg1,bg2, children})=>{
    const bgString = `linear-gradient(to right, ${bg1}, ${bg2})`;
    return (
        <div className='main' style={{backgroundImage: bgString}}>
            {children}
        </div>        
    )
}

export default BackGround;