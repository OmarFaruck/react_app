import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import aboutimg from "../../images/about.png";
import './AboutText.css';
const AboutText = () => {
    return (
        <section className='about-text'>
            <Container>
                <Row>
                    <Col lg={5}>
                         <div className='about-img'>
                           <img src={aboutimg} alt='' className='w-100'/>
                         </div>
                    </Col>
                    <Col lg={7}>
                    <div className='about-text'>
                    <h3>I'm Biswajit Adhikary</h3>
                    <h2>About My Goal</h2>
                    <p>Hi, I'm Biswajit Adhikary. I have completed my MBS Degree. Now I'm learning Web Development in Programming Hero. My Goal is become an expert Web Developer. For achieve my goal I'm doing very hard work. Everyday I spend minimum 10 hours for learning new technologies and practising it. I believe that I can do the best in this area. Hard work is the key and I'm doing the hard work now.</p>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutText;