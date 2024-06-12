import React, { useState } from 'react';
import { Button, Card, Toast, ToastContainer } from 'react-bootstrap';

const MyProduct = ({item}) => {
  const [showToast, setShowToast] = useState(false);
    const ajoutPanier = () => {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      setShowToast(true);
    };
    return (<>
        <Card style={{ width: '18rem'}} border='primary' className='h-100'>
      <Card.Img variant="top" src={item.thumbnail} back/>
      <Card.Body  className='h-auto'>
        <Card.Title style={{ 'min-height': '15vh !important'}}>{item.title}</Card.Title>
        <Card.Text className='d-flex justify-content-end h-auto'>
          {item.price} €
        </Card.Text>
        <div className='d-flex justify-content-end'><Button variant="primary" onClick={ajoutPanier}>Ajouter au panier</Button></div>
      </Card.Body>
    </Card>
    <ToastContainer position="top-end" className="p-3">
    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg='primary'>
      <Toast.Header>
        <strong className="me-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body className='text-white'>Item ajouté au panier: {item.name}</Toast.Body>
    </Toast>
  </ToastContainer>
  </>
    );
};

export default MyProduct;