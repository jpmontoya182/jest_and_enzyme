import React from "react";
import PropTypes from "prop-types";

function ListItem(props) {
  const { item } = props;
  return (
    <li className="item" key={item}>
      {item}
    </li>
  );
}

ListItem.prototype = {
  item: PropTypes.string
};

export default ListItem;
