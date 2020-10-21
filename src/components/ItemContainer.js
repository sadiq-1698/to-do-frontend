import React from 'react';
import ListTile from './ListTile';

const ItemContainer = (props) => {
    const listOfItems = props.listOfItems;
    return (
      <div className="items-container">
        {
          listOfItems.map((item, index) =>
            <ListTile key={index}             
              itemText={item.item}
              onClickEdit={props.onClickEdit}
              onClickDelete={props.onClickDelete}>
            </ListTile>
          )
        }
      </div>
    );
}

export default ItemContainer;
