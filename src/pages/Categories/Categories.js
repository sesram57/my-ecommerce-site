import { Container, ListGroup,  Row } from "react-bootstrap"
import { useState,useEffect, Link } from "react";

function Categories() {
    const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
    useEffect(()=>{
        setStatus('Loading');
      const data = fetch('https://dummyjson.com/products/categories')
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
                {status === 'Success'&& itemList.map(item => (
                  <ListGroup.Item key={item.slug} className="col-12">
                    <Link href="/catégories_details" categorie={item.url}>
                        {item.name}
                    </Link>
                  </ListGroup.Item>
         ))}

          </ListGroup>
        </Row>
  
          </Container>
  )}
  

export default Categories