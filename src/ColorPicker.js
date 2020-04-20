import React from 'react';
import { SketchPicker } from 'react-color';
import './ColorPicker.css';

const ColorPicker = ({bg,onChange}) => {
    return (
        <div className='picker-grid'>
            <SketchPicker 
                color={bg}
                onChange={onChange}
            />
        </div>
    )
}

export default ColorPicker;