 
import Image1 from '../../images/Jadoo.png'; 
import "../Footer/Footer.css"
const Footer = ()=>{
    return(
        <div className='container-fluid text-center pb-2'> 
            <img src={Image1} alt="" className='img-fluid mx-auto mt-5'/>
            <p className='All'>© 2022 Spotographer, All Rights Reserved.</p> 
        </div>
    );
}
export default Footer;