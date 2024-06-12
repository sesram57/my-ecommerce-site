import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Authentication()  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const seConnecter = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Identification échouée');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      setError('');
      navigate('/'); // Redirection après connexion réussie
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
    <Row className="w-100">
      <Col md={{ span: 6, offset: 3 }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Connexion</h2>
            <Form onSubmit={seConnecter}>
              <Form.Group controlId="formUsername">
                <Form.Label>Utilisateur</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Saisir le nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Mot de passe:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Saisir le mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Se connecter
              </Button>
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default Authentication;