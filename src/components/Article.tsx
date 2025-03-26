import { Card, Col, Row } from 'antd';
import articles from './data/articles.json'
import { Link } from 'react-router-dom';

const Article = () => {
    return (
        <Row justify="space-around">
            {
                articles && articles.map(({id, title, fullText})=> (
                    <Col span={8} key={id} >
                        <Card style={{ width: 300 }} >
                            <p>{title} </p>
                            <Link to={`detail/${id}`}>Details</Link>
                        </Card>
                    </Col>

                ))
            }
        </Row>
    );
}

export default Article;