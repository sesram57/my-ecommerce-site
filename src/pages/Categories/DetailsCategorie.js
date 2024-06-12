import { Col, Container, ListGroup, Row } from "react-bootstrap"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyProduct from "../../components/MyProduct/MyProduct";

function DetailsCategorie() {

  const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
  const {slug} = useParams();
  console.log(slug);
  useEffect(()=>{
      setStatus('Loading');
      axios.get(`https://dummyjson.com/products/category/${slug}`)
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
            
            {console.log(itemList)}
            <Row className="d-flex flex-wrap align-item-between">
              
            {status === 'Loading' && <div>Loading...</div>}
      {status === 'Error' && <div>There was an error</div>}
      {status === 'Success'&& itemList.products.map(item => (
        <Col xs={12} sm={6} md={6} lg={4} className="mb-3 d-flex">
                <ListGroup.Item  className="flex-fill col-xs-12 col-sm-6 col-md-6 col-lg-4 mb-3">
                  <MyProduct item={item} className="h-100"/>
                </ListGroup.Item>
                </Col>
       ))}
        </Row>

        </Container>
)}



export default DetailsCategorie