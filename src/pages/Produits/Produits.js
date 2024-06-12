import { Container, Stack, Pagination } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import MyProduct from "../../components/MyProduct/MyProduct";
function Produits() {
  const [status, setStatus] = useState('');
  const [itemList, setItemList] = useState([]);
  const [infoPage, setInfoPage] = useState({ current: 1, total: 0 });
  const itemsPerPage = 16;
  // Function to change the current page
  const changePage = (i) => {
    if (i > 0 && i <= Math.ceil(infoPage.total / itemsPerPage)) {
      setInfoPage({ ...infoPage, current: i });
    }
  };
  // Generate the list of page items for the pagination component
  const pagesList = [];
  for (let i = 1; i <= Math.ceil(infoPage.total / itemsPerPage); i++) {
    pagesList.push(
      <Pagination.Item key={i} active={i === infoPage.current} onClick={() => changePage(i)}>
        {i}
      </Pagination.Item>
    );
  }
  // Fetch the products from the API when the component mounts or the page changes
  useEffect(() => {
    setStatus('Loading');
    axios
      .get(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(infoPage.current - 1) * itemsPerPage}`)
      .then(res => {
        // Update the item list and the total number of items
        setItemList(res.data.products);
        setInfoPage(prevInfoPage => ({ ...prevInfoPage, total: res.data.total }));
        setStatus('Success');
      })
      .catch(() => setStatus('Error'));
  }, [infoPage.current]);
  return (
    <Container>
      <h1>Produits</h1>
      <Stack direction="horizontal" gap={5} className="justify-content-evenly flex-wrap">
        {/* Display loading message */}
        {status === 'Loading' && <div>Loading...</div>}
        {/* Display error message */}
        {status === 'Error' && <div>There was an error</div>}
        {/* Display the list of products */}
        {status === 'Success' && itemList.map(item => (
          <MyProduct item={item} />
        ))}
        {/* Display pagination component */}
        <div>
          <Pagination>{pagesList}</Pagination>
        </div>
      </Stack>
    </Container>
  );
}
export default Produits;