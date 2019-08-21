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
                    checked={props.handleCheckedWaterQuantity}
                    handleWaterQuantityChange={props.handleWaterQuantityChange}
                />
            ))
        }
    </div>
);

export default WaterButtons;