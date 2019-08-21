import React from 'react';

export default class AddWater extends React.Component {
    handleAddQuantity = (e) => {
        e.preventDefault();
        const quantity = e.target.elements.quantity.value;
        console.log(quantity);
        this.props.handleAddQuantity(quantity);
    };
    render() {
        return (
            <form onSubmit={this.handleAddQuantity}>
                <input type="text" name="quantity" />
                <button>Submit</button>
            </form>
        )            
    }
}
