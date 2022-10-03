import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Electronics', 'sub1', <MailOutlined />, [
    getItem('Office Electronics', '1'),
    getItem('Phones', '2'),
  ]),
  getItem('Jewellery', 'sub2', <AppstoreOutlined />, [
    getItem('Exclusive', '5'),
    getItem('Limited Option', '6'),
  ]),
  getItem('Clothes', 'sub4', <SettingOutlined />, [
    getItem('Women Wear', '9'),
    getItem('Men Wear', '10'),
  ]),
];

export default function ProductNav() {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};