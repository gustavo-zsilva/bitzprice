import React, {useState} from "react";

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        let list = '';

        if (this.state.currency === 'USD') {

        } else if(this.state.currency === 'GBP') {

        } else if(this.state.currency === 'EUR') {

        }

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {this.props.bpi.USD.description}
                        : <span className="badge badge-primary">
                            {this.props.bpi.USD}
                        </span>
                        <strong>{this.props.bpi.USD.rate}</strong>
                    </li>
                </ul>
            </div>
        )
    }
}

// const Prices = ({bpi}) => {
//     const [currency, setCurrency] = useState('USD');

//     return (
//         <div>
//             <ul className="list-group">
//                 <li className="list-group-item">
//                     Bitcoin rate for {bpi.USD.description}
//                     : <span className="badge badge-primary">
//                         {bpi.USD}
//                     </span>
//                     <strong>{bpi.USD.rate}</strong>
//                 </li>
//             </ul>
//         </div>
//     );
// };

export default Prices;