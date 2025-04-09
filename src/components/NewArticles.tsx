import React from "react"; 
import { Button, Form, Input, notification } from "antd";
import axios from "axios";
import { Buffer } from "buffer";
//import Article from "./Article";
import { api } from "../common/http-common";


const NewArticles = () => {

  const [showMessage, setShowMessage] = React.useState(false);
  const [message, setMessage] = React.useState('');

  //const [success, contextHolder]=notification.useNotification();
  //const [error, errorContextHolder]=notification.useNotification();
  

  const handleformSubmit = (values : any)=>{
    const articleBody = {
      title: values.title,
      allText: values.context,
      authorid: 1,
    }

  //call API
  //const access_token = Buffer.from(`${values.username}:${values.password}`,'utf8').toString('base64');
  //console.log(articleBody, access_token);
  //React.useEffect(()=>{
    axios.post(`${api.url}/articles` ,articleBody,
    {
      auth:{
        username: values.username,
        password: values.password
      }
    }).then((res :any)=>{
      console.log("POST");
      setShowMessage(true);
      setMessage(res.status);
      // success.open({
      //   message: 'System Response',
      //   description:' Article Created',
      //});
      
    }).catch((res)=>{
      console.log("Error");
      // let detail = "Unknow Error";
      // if(res.status == 401)
      //   detail=""
      // error.open({
      //   message: 'Error',
      //   description: detail
      // });
       setShowMessage(true);
      setMessage(res.status);
    })

  }

  return (
    <>
      <Form name="article" onFinish= {(values) => handleformSubmit(values)}>
        <Form.Item name="title" label="Title">
          <Input  />
        </Form.Item>

        <Form.Item name="context" label="context">
          <Input.TextArea rows={4} />
        </Form.Item>
        
        <Form.Item name="username" label="Username">
          <Input  />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
      {showMessage && <p> {message}</p>}
    </>
  );
};

export default NewArticles;
