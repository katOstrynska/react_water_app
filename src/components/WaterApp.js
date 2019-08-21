import React from 'react';
import AddWater from './AddWater';
import WaterElements from './WaterElements';

export default class WaterApp extends React.Component {
    state = {
        quantities: ['aaaaa', 'bbbbb', 'ccccc']
    };
    
    handleAddQuantity = (quantity) => {
        this.setState(() => ({
            quantities: [...this.state.quantities, quantity]
        }));

        console.log('works');
    }
    render() {
        return (
            <div>
                <WaterElements quantities={this.state.quantities} />
                <AddWater handleAddQuantity={this.handleAddQuantity} />
            </div>
        )
    }
}