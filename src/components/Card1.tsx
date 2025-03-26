import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const Card1: React.FC = () => (
  
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat HAHAHA" description="www.instagram.com" />
  </Card>
);


export default Card1;
