import { Card, Container,  Stack, Pagination } from "react-bootstrap"
import { useState,useEffect } from "react";
import axios from "axios";

function Produits() {

  const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
  const [infoPage, setInfoPage]= useState({current:1,total:0});
  const itemsPerPage = 10;
  const changePage = (i) => {
    if (i>0 && i<infoPage.total) {
      const newPage ={...infoPage, current:i}
      //setInfoPage(newPage)
    }
  }
  let pagesList =[];
  for (let i =1; i<=Math.ceil(infoPage.total/itemsPerPage); i++) {
    pagesList.push(
    <Pagination.Item key={i} active={i === infoPage.current} onClick={changePage(i)}>
      {i}
    </Pagination.Item>
    );
  }
  
  useEffect(()=>{
      setStatus('Loading');
      
      axios.get(`https://dummyjson.com/products?limit=${infoPage.current*itemsPerPage}&skip=${(infoPage.current-1)*itemsPerPage}`)
      // .then(res => res.json())
      .then(res=> {setItemList(res.data);setInfoPage({...infoPage, total:res.data.total})})
      .then(()=>setStatus('Success'))
      .catch(()=>setStatus('Error'));
    }, []);

    
    return (
    <Container>
        <h1>
            Produits
            </h1>
            <Stack direction="horizontal" gap={5} className="justify-content-evenly flex-wrap">
            {console.log(itemList)}
            {console.log(infoPage.total)}
                          
            {status === 'Loading' && <div>Loading...</div>}
      {status === 'Error' && <div>There was an error</div>}
      {status === 'Success'&& itemList.products.map(item => (

                
                  <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
      </Card.Body>
    </Card> 
               ))}
       <div>
                  <Pagination>{pagesList}</Pagination>
               </div>
      </Stack>
               
        </Container>
)}



export default Produits