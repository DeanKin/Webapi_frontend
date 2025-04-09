import { Button } from 'antd';
import articles from './data/articles.json';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../common/http-common";


const DetailArticle = () => {
    const { aid } = useParams();
    const navigate = useNavigate();
    
    
    for(const article of articles) {
        if(article.id == Number(aid)) {
            return(
                <>
                    <h1>{article.title}</h1>
                    <img src={article.img}></img>
                    <p>{article.fullText}</p>
                    <Button type = "primary" onClick={()=>navigate(-1) } >Back</Button>
                </>
            )
        }
    }
}

export default DetailArticle;