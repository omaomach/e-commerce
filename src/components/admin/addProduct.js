import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React, { useState } from 'react';
import fetch from 'unfetch';
const { Option } = Select;

export default function AddProduct () {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState({
    title: "", 
    price: "", 
    description:"", 
    image: "", 
    category:""
  })

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  function addNewProduct(){
    
    fetch('/products',{
            method:"POST",
            body:JSON.stringify(products)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

        console.log(products)
  }

  function handleOnChange(event){
    const key = event.target.id; 
    setProducts({...products, [key]:event.target.value})
    console.log(products)
  }


  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New Product
      </Button>
      <Drawer
        title="Submit A New Product"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={addNewProduct} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark onSubmit={addNewProduct}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Product Title"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Title',
                  },
                ]}
              >
                <Input 
                id ="title"
                onChange={handleOnChange}
                placeholder="Please enter Title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                
                rules={[
                  {
                    required: true,
                    message: 'Please enter image url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  id='image'
                  onChange={handleOnChange}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter image url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col span={12}>
              <Form.Item
                name="Price"
                label="Product Price"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Price',
                  },
                ]}
              >
                <Input 
                id='price'
                onChange={handleOnChange}
                placeholder="Please enter Price" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                    message: 'Please choose Category',
                  },
                ]}
              >
                <Select 
                id='category'
                onChange={handleOnChange}
                placeholder="Please choose Category">
                  <Option value="private">men's clothing</Option>
                  <Option value="public">jewelery</Option>
                  <Option value="public">electronics</Option>
                  <Option value="public">women's clothing</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                id='approver'
                onChange={handleOnChange}
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Omao</Option>
                  <Option value="tom">Dancun</Option>
                  <Option value="tom">Brian</Option>
                  <Option value="tom">Daisy</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                id='date'
                onChange={handleOnChange}
                label="Stock Period"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the Stock Timeline',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                id='description'
                onChange={handleOnChange}
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter product description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter product description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

