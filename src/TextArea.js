import React from 'react';
import './TextArea.css';

const TextArea = ({txt}) => {
    return (
        <textarea className="showoutput" disabled='disabled' value={txt}></textarea>
    )
}

export default TextArea;