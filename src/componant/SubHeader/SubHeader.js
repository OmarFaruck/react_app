import React from 'react';
import Subimgages from "../../images/subheader.jpg";
import "./SubHeader.css";
const SubHeader = () => {
    return (
        <section className='Sub-header'>
            <img src={Subimgages}  alt=''/>
        </section>
    );
};

export default SubHeader;