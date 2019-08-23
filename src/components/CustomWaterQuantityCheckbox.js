import React from 'react';

const CustomWaterQuantityCheckbox = (props) => (
    <div>
        <input
            type="checkbox"
            id='custom_quantity_toggle'
            defaultChecked={false}
            onChange={props.disableWaterButtons}
        />
        <label htmlFor='custom_quantity_toggle'>
            Czy chcesz dodać swoją wartość?
        </label>
    </div>
)

export default CustomWaterQuantityCheckbox;