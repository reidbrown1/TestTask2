import React from 'react';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
                <p>
                    {item.text}
                    <button 
                    onClick={() => {props.deleteItem(item.key)}}>
                        delete   
                    </button>
                </p>     
            </div> // returning the map
    })
    return <div>
        <div>
            {listItems}
        </div>
    </div>; // returning the actual list on the page
  }

  export default ListItems;