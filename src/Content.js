import React from 'react';
import './Content.css';

const Content =()=>{
    return (
        <div className='content'>
            <h2>About this website</h2>
            <h4>This website was created as a free-to-use tool so that you can create the css gradient for your website based on your needs. Just pick the colors, 
                copy the css code and start using in your website. <br/><br/>
                If you want to try something fun, click on the button above and start the groove!
            </h4>
            <h5 class="about-me">Made with <span class="heart">&#9829;</span> by <a rel="noopener noreferrer" target="_blank" href="https://dev-rahul-majumdar.github.io">Rahul Majumdar</a></h5>
        </div>
    )
}

export default Content;