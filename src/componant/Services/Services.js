import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Service from './Service';
import '../Services/Services.css'  
import { useEffect, useState } from 'react';

const Services = () => {
   const [Services, setService] = useState([]);
   useEffect(() => {
fetch('Services.json')
.then((res) => res.json())
.then((data) => setService(data));
   }, []); 

    return(   

       <Container className='services'> 
        <h1 className='text-center mt-5'>My Services</h1>
      <Row> 
   
      {Services.map((item) => (
         <Service key={item.id} item={item}></Service>
      ))}      
            
     
    
      </Row>
    </Container>
  );

     
};
export default Services;

