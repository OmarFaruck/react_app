import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../images/slider-1.jpg'
import Image2 from '../../images/slider-2.jpg'
import Image3 from '../../images/slider-3.jpg'
import Button from 'react-bootstrap/Button';
import '../Slider/Slider.css' 

const Slider=()=>{
    return(
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>SPOTOGRAPHER</h3>
            <h4>Sports Photographer</h4>
            <p>I Capture Sports Moments and Actions.</p>
            <Button className='More' type="submit">More About Me</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
            <h4>Sports Photographer</h4>
            <p>I Capture Sports Moments and Actions.</p>
            <Button className='More' type="submit">
            More About Me
      </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
            <h4>Sports Photographer</h4>
            <p>I Capture Sports Moments and Actions.</p>
            <Button className='More' type="submit">
            More About Me
          </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
export default Slider;