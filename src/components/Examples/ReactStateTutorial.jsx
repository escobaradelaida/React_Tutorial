import React from 'react'

function ReactStateTutorial() {
    // declare all your state management stuff
    // array -- inital state or value
    // when i add new items to the array, i should be able to see or render the updated state of the array

    // declare the state itself
    const [items, setItems] = React.useState(["ArrItem 1", "ArrItem 2"]);

    // event listener function : add item
    function addItem(){
        const newItemText = 'ArrItem ${items.length +1}';
        setItems((prevState) => [...prevState, newItemText])
    }

    const newItemsElements = items.map((item) => <p key ={item}>{item}</p>);

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {/* updated state of the array */}
            {newItemsElements}
        </div>
    );
  
}

export default ReactStateTutorial