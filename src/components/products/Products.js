import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import React from "react";
import { Avatar, Card } from "antd"
const { Meta } = Card



function Products({ category }) {
  return (
    <div>
      <li className="categories" style={{ listStyleType: "none", fontSize: "16px", fontStyle: "oblique"}}>
        <h3>{category}</h3>
      </li>
    </div>
    
  );
}

export default Products;
