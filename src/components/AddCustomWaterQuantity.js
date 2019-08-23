import React from 'react';

export default class AddCustomWaterQuantity extends React.Component {
    render() {
        return (
            <input
                disabled={this.props.disabled ? 'disabled' : null}
                type="text"
                name="quantity"
            />
        )            
    }
}