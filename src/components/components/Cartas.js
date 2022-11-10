import { Button,Card, Col, Row, Container } from 'react-bootstrap';

const Cartas = () => {
    return (
      <Container>
        <Row className='px-4 my-5'>
          <h1 className='text-center'>
            KALUM
          </h1>
          <p>
          Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </Row>
      <Row className='px-4 my-5'>
        <Card style={{ width: '30rem' }} >
        <Card.Img variant="center" src="https://pokerstarscareers.com/wp-content/uploads/2022/03/iStock-1254577026-400x400.jpg" />
        <Card.Body>
          <Card.Title>Electronica Industrial</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ir a Carrera</Button>
        </Card.Body>
      </Card>
      <Col sm={1}></Col>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://dynamicmedia.accenture.com/is/image/accenture/accenture-new-normal-400x400?qlt=85&ts=1666177479145&dpr=off" />
        <Card.Body>
          <Card.Title>Electricidad Industrial</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ir a Carrera</Button>
        </Card.Body>
      </Card>
      </Row>
      <Row className='px-4 my-5'>
        <Card style={{ width: '30rem' }} >
        <Card.Img variant="top" src="https://www.accenture.com/t20210506T084155Z__w___acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail400x400/18/Accenture-Reimagine-Work-400x400.jpg" />
        <Card.Body>
          <Card.Title>Mecanica Automotriz</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ir a Carrera</Button>
        </Card.Body>
      </Card>
      <Col sm={1}></Col>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="https://www.accenture.com/t20210915T105524Z__w___acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail400x400/20/Accenture-Supply-Chain-Workforce-Image-Resizing-Hero-400x400.jpeg" />
        <Card.Body>
          <Card.Title>Tic's</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Ir a Carrera</Button>
        </Card.Body>
      </Card>
      </Row> 
      <footer class="py-5 bg-dark">
        <p class="text-center text-white">
          Copyright &copy;Kalum 2022
        </p>
      </footer>
      </Container>
    )
}

export default Cartas;