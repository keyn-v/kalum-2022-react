import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fgua1-3.fna.fbcdn.net/v/t1.6435-9/159527076_10159462721169740_5645546461248827823_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=VlGUrwv-ApEAX_YiRTF&_nc_ht=scontent.fgua1-3.fna&oh=00_AfDhF4_43T3zfKf-NU_VWo51kD1cVyrj9zXNIrlyy8e0ag&oe=63BDE38F"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fgua1-3.fna.fbcdn.net/v/t39.30808-6/279175000_10160304046854740_7459632566953855207_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=C9C9mysJKSIAX8-Vawj&_nc_ht=scontent.fgua1-3.fna&oh=00_AfBYWlVSkKMdd8yjFB1Z3nKfYz8i59BsjKN9lk99tgYSyA&oe=639AC0EE"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fgua1-2.fna.fbcdn.net/v/t39.30808-6/284385535_10160365594944740_8297941523016949829_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=19026a&_nc_ohc=eFNLg6rGDIgAX-Z6qrJ&_nc_ht=scontent.fgua1-2.fna&oh=00_AfApv3jtcLjRgs5vrkUwzhecvEcQV8wXCo3tZFu_W9jbgA&oe=639B3B93"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;