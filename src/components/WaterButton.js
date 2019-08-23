import React from 'react';

const WaterButton = (props) => (
    <div>
        <input
            type="radio"
            id={props.id}
            value={props.value}
            name="waterQuantity"
            data-checked={props.dataChecked}
            checked={props.checked}
            onChange={(e) => {props.handleWaterQuantityChange(e)}}
        />
        <label htmlFor={props.id}>
            {props.label}
        </label>
    </div>
);

export default WaterButton;