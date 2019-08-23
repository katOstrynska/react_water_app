import React from 'react';

import WaterButtons from './WaterButtons';
import CustomWaterQuantityCheckbox from './CustomWaterQuantityCheckbox';
import AddCustomWaterQuantity from './AddCustomWaterQuantity';

export default class WaterApp extends React.Component {

    state = {
        waterButtonsDisabled: false,
        customWaterQuantityDisabled: true
    }

    handleDisableWaterButtons = () => {
        this.setState({
            waterButtonsDisabled: !this.state.waterButtonsDisabled,
            customWaterQuantityDisabled: !this.state.customWaterQuantityDisabled
        })
    }

    render() {
        return (
            <div>
                <form>
                    <WaterButtons
                        disabled={this.state.waterButtonsDisabled}
                    />
                    <CustomWaterQuantityCheckbox
                        disableWaterButtons={this.handleDisableWaterButtons}
                    />
                    <AddCustomWaterQuantity
                        disabled={this.state.customWaterQuantityDisabled}
                    />
                </form>
            </div>
        )
    }
}