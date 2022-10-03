import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import React from "react";
import { Avatar, Card } from "antd"
const { Meta } = Card


function ProductsCard() {
  return (
    <div className="products_card">
      <Card
        style={{
          width: 300,
        }}
        cover={<img alt="example" style={{ height: "300px" }} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta avatar={<Avatar />} title="Products" description="description" />
        <button>Add to Cart</button>
      </Card>
    </div>
  );
}

export default ProductsCard;
