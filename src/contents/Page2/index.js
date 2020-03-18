import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ChartLine from '../../components/Chart/ChartLine';

const Page2 = () => {
  return (
    <Container className="content">
        <h2 className="content__title pt-40">Page 2</h2>
        <Row className="pt-card">
          <Col md={10}>
            <Card className="card-container pb-5" style={{ background: '#ffffff', width: '100%', height: '630px'}}>
              <Card.Body>
                <Card.Title className="card-title">Line Chart</Card.Title>
                <ChartLine/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
  )
}

export default Page2;
