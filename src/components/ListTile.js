import React from 'react';

const ListTile = (props) => {
    return (
        <div className="list-tile">
            <span className="item-text">
                {props.itemText}
            </span> 
            <button onClick={props.onClickEdit} className="edit btn">
              <i className="fa fa-edit"></i>
            </button>
            <button onClick={props.onClickDelete} className="delete btn">
              <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

export default ListTile;
