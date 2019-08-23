import React from 'react';
import WaterButton from './WaterButton';

const WaterButtons = (props) => (
    <div>
        {
            props.quantities.map((quantity) => (
                <WaterButton
                    key={quantity.id}
                    id={quantity.id}
                    value={quantity.value}
                    label={quantity.name}
                    dataChecked={props.handleWaterQuantityChange === quantity.value}
                    checked={props.handleWaterQuantityChange === quantity.value}
                    handleWaterQuantityChange={props.handleWaterQuantityChange}
                />
            ))
        }
    </div>
);

export default WaterButtons;