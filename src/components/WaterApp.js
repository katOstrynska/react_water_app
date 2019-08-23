import React from 'react';

import WaterButtons from './WaterButtons';

export default class WaterApp extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <WaterButtons/>
                </form>
            </div>
        )
    }
}