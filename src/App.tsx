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
        <Col span={8}>
          <Card1 />
        </Col>

        <Col span={8}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://hk.on.cc/hk/bkn/cnt/entertainment/20250319/photo/bkn-20250319130130097-0319_00862_001_01b.jpg"
              />
            }
          >
            <Meta
              title="Europe Street beat 2"
              description="www.instagram.com"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://fs.mingpao.com/fin/20250319/s00011/b8bb1f9bff7f1a963e3440f75c58c713.jpg"
              />
            }
          >
            <Meta
              title="Europe Street beat 3"
              description="www.instagram.com"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://hk.on.cc/hk/bkn/cnt/entertainment/20250318/photo/bkn-20250318145549776-0318_00862_001_02b.jpg"
              />
            }
          >
            <Meta
              title="Europe Street beat 4"
              description="www.instagram.com"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt="example"
                src="https://hk.on.cc/hk/bkn/cnt/entertainment/20250318/photo/bkn-20250318145549776-0318_00862_001_03b.jpg"
              />
            }
          >
            <Meta
              title="Europe Street beat 5"
              description="www.instagram.com"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;
