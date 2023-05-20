import React from 'react'

import Col from 'react-bootstrap/Col';
import  '../Singleimg/Singleimg.css'
const singleimg=({item}) =>{ 
    return (
       
       <Col lg={3}> 
          <div className='single-img'>  
              <img src={item.img} alt=""/>
          </div>
      </Col>
                 
       
      
    )
}

export default singleimg;
 