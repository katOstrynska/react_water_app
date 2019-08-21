import React from 'react';

const WaterElements = (props) => (
    <div>
        <p>Water Quantity:</p>
        {
            props.quantities.map((quantity) => 
                <p key={quantity}>{quantity}</p>
            )
        }
    </div>
);

export default WaterElements;