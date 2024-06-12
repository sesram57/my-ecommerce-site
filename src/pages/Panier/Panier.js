import { Container, Button, ListGroup, ListGroupItem, Badge, Alert } from "react-bootstrap"
import React, { useState, useEffect } from 'react';

const Panier = () => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        // Charger les items du localStorage
        const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
        setItems(storedItems);
        calculateTotal(storedItems);
    }, []);

    const handleDelete = (index) => {
        const newItems = items.filter((item, i) => i !== index);
        setItems(newItems);
        localStorage.setItem('cart', JSON.stringify(newItems));
        calculateTotal(newItems);
    };

    const calculateTotal = (items) => {
        const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
        setTotal(totalPrice);
    };

    const handleClearCart = () => {
        setItems([]);
        localStorage.removeItem('cart');
        setTotal(0);
    };

    const handleValidateOrder = () => {
        setShowAlert(true);
    };

    return (
        <Container>
            <h1>Panier</h1>
            <ListGroup>
                {console.log(items[0])}
                {items.map((item,index) => (
                    <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                        {item.title}
                        <div><Badge bg="primary" className="mx-5">
                            {item.price} €
                        </Badge>
                        <Button variant="danger" onClick={() => handleDelete(index)}>Supprimer</Button></div>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h4>Total : {total} €</h4>
                <div>
                    <Button variant="secondary" className="mx-3" onClick={handleClearCart}>Effacer le panier</Button>
                    <Button variant="success" onClick={handleValidateOrder}>Valider la commande</Button>
                </div>
            </div>
            {showAlert && (
                <Alert variant="success" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
                    Commande validée !
                </Alert>
            )}
        </Container>
    );
};

export default Panier;