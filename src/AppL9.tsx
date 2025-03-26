// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  DatePickerProps,
  Row,
  Space,
} from "antd";
import {
  SearchOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";
import Card1 from "./components/Card1";

const { Meta } = Card;

function App() {
  //const [count, setCount] = useState(0)
  let counter = 0;

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onClick = (event: any) => {
    console.log(counter++);
  };

  return (
    <>
      <Hello name="KK" />
      <div>
        <Card title="Default card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
        <br />
        <Button type="primary" icon={<SearchOutlined />} onClick={onClick}>
          Button
        </Button>
        <Button type="primary" danger>
          Button
        </Button>
        <br />
        <DatePicker onChange={onChange} />
      </div>
      <Goodbye name="BYE" />


      
      <Row type="flex" justify="space-around">
        <Col span={6}>
          <Card1  />
        </Col>
        <Space>
        <Col span={6}>
        <Card1  />
        </Col>
   
        <Col span={6}>
        <Card1  />
        </Col>
        <Col span={6}>
        <Card1  />
        </Col>
        </Space>
        <Col span={6}>
        <Card1  />
        </Col>
        <Col span={6}>
        <Card1  />
        </Col>
      </Row>
    </>
  );
}

export default App;
