import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fgua1-2.fna.fbcdn.net/v/t1.6435-9/173728758_10159552883664740_2539909988958249638_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=VejXCKQtEOEAX_IFjsY&_nc_ht=scontent.fgua1-2.fna&oh=00_AfACJr_an9k7DqZ36ADhw1JUZZcTkc9oyIVw5G2jOeBJzw&oe=638F9A2B"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fgua1-3.fna.fbcdn.net/v/t1.6435-9/159527076_10159462721169740_5645546461248827823_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=nac4Jzp6y_kAX_C8JxN&_nc_ht=scontent.fgua1-3.fna&oh=00_AfBkWygcLOnZ20J42vikdVarkPuwJCOzS38kD4wkvgtpuA&oe=638F86CF"
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fgua1-2.fna.fbcdn.net/v/t1.6435-9/149882038_10159399045124740_4654722978245466844_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=FrRsPP1p0mAAX9fVaYk&_nc_ht=scontent.fgua1-2.fna&oh=00_AfCCVxjURR01iF3Z3Gjw02yVkVSEGJywzDbphlnA2YnaJA&oe=638F6E32"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;