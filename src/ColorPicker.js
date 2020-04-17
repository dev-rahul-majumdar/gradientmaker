import React from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({bg,onChange}) => {
    return (
        <div>
            <SketchPicker 
                color={bg}
                onChange={onChange}
            />
        </div>
    )
}

export default ColorPicker;