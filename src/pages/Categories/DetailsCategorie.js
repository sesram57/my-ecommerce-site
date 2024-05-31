import { Container, ListGroup, Row } from "react-bootstrap"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsCategorie() {

  const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
  const {slug} = useParams();
  console.log(slug);
  useEffect(()=>{
      setStatus('Loading');
      axios.get(`https://dummyjson.com/products/category/${slug}?limit=1`)
      // .then(res => res.json())
      .then(res=> setItemList(res.data))
      .then(()=>setStatus('Success'))
        .catch(()=>setStatus('Error'));
    }, [slug]);
    return (
    <Container>
        <h1>
            Produits
            </h1>
            <Row className="pt-3">
            {console.log(itemList)}
            <ListGroup>
              
            {status === 'Loading' && <div>Loading...</div>}
      {status === 'Error' && <div>There was an error</div>}
      {status === 'Success'&& itemList.products.map(item => (
                <ListGroup.Item key={item.id} className="col-12">{item.title} - {item.description}
                </ListGroup.Item>
       ))}
        </ListGroup>
      </Row>

        </Container>
)}



export default DetailsCategorie