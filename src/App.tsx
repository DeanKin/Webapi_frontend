import { Flex, Layout, Space } from 'antd';
import { Routes,Route, BrowserRouter, Link, } from "react-router-dom"
import Home from './components/Home';
import About from './components/Anout';
import Dashboard from './components/Dashboard';
import Article from './components/Article';
import DetailArticle from './components/DetailArticle';
import Login from './components/login';

const App = ()=> {
  return (
    <Layout style = {{ height: '100%'}}>

      <BrowserRouter>
        <Layout.Header style = {{display:`flex`, position: 'fixed', left:0, top: 0, width: '100%'}} >
          <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </Space>
          
          </nav>

        </Layout.Header>
        <Layout.Content style = {{padding:`0 48px`, display: "flex", position: "fixed", top: 60}}>
            <Routes>
              <Route index element={ <Article />} />
              <Route path="/about" element={ <About />} />
              <Route path="/dashboard" element={ <Dashboard /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/detail/:aid" element={ <DetailArticle /> } />
            </Routes>
        </Layout.Content>
        <Layout.Footer style={{position:"fixed", left:0, bottom:0, width:'100%'}}>
          <p>(c) 2025 Web API Development</p>
        </Layout.Footer>
      </BrowserRouter>
    
    </Layout>
  );
  
};
export default App;