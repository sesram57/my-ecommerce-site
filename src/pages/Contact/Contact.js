import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire soumis');
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center mb-5">
            <h1>Contact</h1>
            <div>admin@my.ecommerce.com</div>
            <div>123 Avenue de la Libération 75000 Paris</div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className=" mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" required />
            </Form.Group>

            <Form.Group controlId="formMessage" className=" mt-2">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Entrez votre message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-4">
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;