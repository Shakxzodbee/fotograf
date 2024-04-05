import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'
import brend from '../../assets/Logo.png'

function Headers() {
  return (
    <Container className='wrapper'>
      <Row>
        <Col>
        <img src={brend} alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default Headers;