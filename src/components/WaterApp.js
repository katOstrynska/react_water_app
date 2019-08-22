import React from 'react';

import WaterButtons from './WaterButtons';

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

export default class WaterApp extends React.Component {
    state = {
        waterQuantity: '250'
    };

    handleWaterQuantityChange = (e) => {
        const waterQuantity = e.target.value;
        this.setState({ 
            waterQuantity: waterQuantity
        });
        console.log(this.state.waterQuantity);
    }

    handleCheckedWaterQuantity = (e) => {
        this.state.waterQuantity;
    }

    render() {
        return (
            <div>
                <form>
                    <WaterButtons
                        quantities={quantitiesData}
                        // checked={(e) => this.handleCheckedWaterQuantity(e)}
                        handleWaterQuantityChange={(e) => this.handleWaterQuantityChange(e)}
                    />
                </form>
            </div>
        )
    }
}