import React from 'react';
import WaterButton from './WaterButton';

const quantitiesData = [
    {
        id: 'water_250_ml',
        value: 250,
        name: 'water_250_ml'
    },
    {
        id: 'water_500_ml',
        value: 500,
        name: 'water_500_ml'
    },
    {
        id: 'water_1000_ml',
        value: 1000,
        name: 'water_1000_ml'
    }
];

export default class WaterButtons extends React.Component {
    state = {
        waterQuantity: '250'
    };

    handleWaterQuantityChange = (e) => {
        const waterQuantity = e.target.value;
        this.setState({ 
            waterQuantity: waterQuantity
            }, () => console.log(this.state.waterQuantity)
        )
    }

    render () {
        return (
            <div>
                {
                    quantitiesData.map((quantity) => (
                        <WaterButton
                            key={quantity.id}
                            id={quantity.id}
                            value={quantity.value}
                            label={quantity.name}
                            // dataChecked={props.handleWaterQuantityChange === quantity.value}
                            checked={this.state.waterQuantity === quantity.value}
                            handleWaterQuantityChange={(e) => this.handleWaterQuantityChange(e)}
                        />
                    ))
                }
            </div>
        )
    }
}