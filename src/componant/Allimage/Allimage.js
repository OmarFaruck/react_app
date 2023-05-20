import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Singleimg from "../Singleimg/Singleimg"
// import Image1 from "../../images/moment1.jpg";
// import Image2 from "../../images/moment2.jpg";
// import Image3 from "../../images/moment3.jpg";
// import Image4 from "../../images/moment3.jpg";
// import Image5 from "../../images/moment5.jpg";
// import Image6 from "../../images/moment6.jpg";
// import Image7 from "../../images/moment7.jpg";
// import Image8 from "../../images/moment8.jpg";
const Allimage = ()=>{

    const [Images , setImages] = useState([]);

   useEffect(() => {
     fetch('Moment.json')
     .then((res) => res.json())
      .then((data) => setImages(data));
       }, []);  

 
    return(
        <div className="container">
            <Row> 
                {
                    Images.map((item)=>
                       <Singleimg key={item.id} item={item}></Singleimg> 
                     
                    )}
 
               
            </Row>
        </div>
    );
}
export default Allimage;