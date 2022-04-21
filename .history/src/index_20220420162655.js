import React from "react";
import ReactDOM from "react-dom";
class ShoppingList extends React.Component {
    render(){
        return(
            <div className="shopping-list">
                <h1>Shopping List for</h1>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<ShoppingList/>)