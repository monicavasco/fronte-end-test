import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ChartBar from '../../components/Chart/ChartBar';
import ChartPie from '../../components/Chart/ChartPie';

const Page1 = () => {
  return (
      <Container className="content">
        <h2 className="content__title">Page 1</h2>
        <Row className="pt-card">
          <Col lg={6} md={12}>
            <Card style={{ background: '#ffffff', width: '100%', height: '358px'}}>
              <Card.Body>
                <Card.Title className="card-title">Bars Chart</Card.Title>
                <ChartBar />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card style={{ background: '#ffffff', width: '100%', height: '358px'}}>
              <Card.Body>
                  <Card.Title className="card-title">Pie Chart</Card.Title>
                  <ChartPie />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    
  )
}

export default Page1;
