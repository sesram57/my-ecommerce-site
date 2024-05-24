import { Container, ListGroup, Row } from "react-bootstrap"
import { useState,useEffect } from "react";

function DetailsCategorie({url}) {

  const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
  useEffect(()=>{
      setStatus('Loading');
      const data = fetch(`${url}?limit=1`)
      .then(res => res.json())
      .then( setItemList)
      .then(()=>setStatus('Success'))
        .catch(()=>setStatus('Error'));
    }, []);
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