import React from 'react';

// export default class CustomWaterQuantityCheckbox extends React.Component {
//     // handleDisableWaterButtons = (e) => {
//     //     this.props.handleDisableWaterButtons(e);
//     // };
//     render () {
//         return (
//             <div>
//                 <input
//                     type="checkbox"
//                     id='custom_quantity_toggle'
//                     defaultChecked={false}
//                     onChange={props.disableWaterButtons}
//                 />
//                 <label htmlFor='custom_quantity_toggle'>
//                     Czy chcesz dodać swoją wartość?
//                 </label>
//             </div>
//         )
//     }
// }

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