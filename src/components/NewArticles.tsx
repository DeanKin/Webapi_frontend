import { Button, Form, Input } from "antd";




const NewArticles = () => {
  const handleformSubmit = (values : any)=>{
    const title = values.title;
    const context = values.context;
    //const username = values.username;
    //const password = values.password;
    console.log(values, title, context);
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
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewArticles;
