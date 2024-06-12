import { Col, Container, Image, Ratio, Row } from "react-bootstrap"
import logo from "../../assets/close-up-composition-four-smartphones.jpg"
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";

function Accueil() {
    const [status, setStatus] = useState('');
    const [itemList, setItemList] = useState([]);
    useEffect(()=>{
        setStatus('Loading');
        const token = JSON.parse(localStorage.getItem('loginToken')) || [];
        axios.get('https://dummyjson.com/products?limit=6')
    // .then(res => res.json())
    .then(res=> setItemList(res.data))
    .then(()=>setStatus('Success'))
      .catch(()=>setStatus('Error'));
    }, []);
    return (
    <Container>
        <h1>
            Accueil
        </h1>
        <Row>
        <Col xs={12}>
        <Ratio aspectRatio="21x9">
          <Image src={logo} fluid />
        </Ratio>
        </Col>
      </Row>
      <Row className="pt-3">
        <h2>Nos derniers produits</h2>
        <Row xs={1} md={2} lg={3} xl={6} className="g-4">
        {status === 'Loading' && <div>Loading...</div>}
      {status === 'Error' && <div>There was an error</div>}
      {status === 'Success'&& itemList.products.map(item => (
                <Col key={item.id}>
                <Card>
                  <Card.Img variant="top" src={item.thumbnail} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
       ))}
        </Row>
      </Row>
    </Container>
)
}

export default Accueil
