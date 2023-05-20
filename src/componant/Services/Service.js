import Container from 'react-bootstrap/Container'; 
import Col from 'react-bootstrap/Col';
// import Image1 from '../../images/Services1.jpg'; 
import Button from 'react-bootstrap/Button';

const Service = ({item})=>{
    return(
        <Col lg="4" md="4" xl="4" xxl="4" col="12">
        <img src={item.img} alt="" className='img-fluid mx-auto mt-5'/>
        <Container className='service'> 
        <h4>{item.subtext}</h4> 
        <h5>{item.price}</h5>
        <p>{item.maintext}</p>
        <Button className='More' type="submit">Book now</Button>
        </Container>
    </Col> 
    );
 }
 export default Service;