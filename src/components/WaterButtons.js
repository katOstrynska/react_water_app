import React from 'react';
import WaterButton from './WaterButton';

import smallWaterIcon from '../img/water_small.svg';
import mediumWaterIcon from '../img/water_medium.svg';
import bigWaterIcon from '../img/water_big.svg';

const quantitiesData = [
    {
        id: 'water_250_ml',
        value: 250,
        name: '250 ml',
        img: smallWaterIcon
    },
    {
        id: 'water_500_ml',
        value: 500,
        name: '500 ml',
        img: mediumWaterIcon
    },
    {
        id: 'water_1000_ml',
        value: 1000,
        name: '1000 ml',
        img: bigWaterIcon
    }
];

export default class WaterButtons extends React.Component {
    state = {
        waterQuantity: 250
    };

    handleWaterQuantityChange = (e) => {
        const waterQuantity = parseFloat(e.target.value);
        this.setState({ 
            waterQuantity: waterQuantity
            }, () => this.state.waterQuantity
        )
    }

    render () {
        return (
            <div
                className={this.props.disabled ? 'waterButtons disabled' : 'waterButtons'}
            >
                {
                    quantitiesData.map((quantity) => (
                        <WaterButton
                            key={quantity.id}
                            id={quantity.id}
                            value={quantity.value}
                            label={quantity.name}
                            img={quantity.img}
                            dataChecked={this.state.waterQuantity === quantity.value}
                            checked={this.state.waterQuantity === quantity.value}
                            handleWaterQuantityChange={(e) => this.handleWaterQuantityChange(e)}
                        />
                    ))
                }
            </div>
        )
    }
}