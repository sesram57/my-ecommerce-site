import { Container, Row, Badge, Stack } from "react-bootstrap"
import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Categories() {
  const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
  useEffect(()=>{
    setStatus('Loading');
    axios.get('https://dummyjson.com/products/categories')
      // .then(res => res.json())
      .then(res=> setItemList(res.data))
      .then(()=>{setStatus('Success');console.log('success')})
      .catch((e)=>{setStatus('Error');console.log(e)});
      },
    []
  );
  return (
  <Container>
      <h1>
          Catégories
      </h1>
      <Row className="pt-3">
        {console.log('itemList:')}
        {console.log(itemList)}

          <h2>
          <Stack direction="horizontal" gap={5} className="justify-content-evenly flex-wrap">
            {status === 'Loading' && <div>Loading...</div>}
            {status === 'Error' && <div>There was an error</div>}
            {status === 'Success'&& itemList.map(item => (
              <Link to={`/categories_details/${item.slug}`}  key={item.slug}>
                <Badge bg="primary">
                  {item.name}
                </Badge>
              </Link>
            ))}
            </Stack>
          </h2>

      </Row>
    </Container>
  )
}


export default Categories