import React from 'react';
import SVG from 'react-inlinesvg';

const WaterButton = (props) => (
    <div
        className="waterButton"
    >
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
            <SVG src={props.img} />
            <span>{props.label}</span>
        </label>
    </div>
);

export default WaterButton;