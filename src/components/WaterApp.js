import React from 'react';

import WaterButtons from './WaterButtons';
import CustomWaterQuantityCheckbox from './CustomWaterQuantityCheckbox';

export default class WaterApp extends React.Component {

    state = {
        waterButtonsDisabled: false
    }

    handleDisableWaterButtons = () => {
        this.setState({
            waterButtonsDisabled: !this.state.waterButtonsDisabled
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
                </form>
            </div>
        )
    }
}