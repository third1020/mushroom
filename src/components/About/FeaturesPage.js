import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import logo5 from '../../assets/AboutAsset/AU05.png';
import './About.css';
const FeaturesPage = () => {
  return (
      <section className="text-center mb-5">
        <img
          width="275"
          height="275"
          src={logo5}
          className='rounded-circle img-fluid'
          alt=''
        />
      <p className="lead w-responsive mx-auto mb-5 text-monospace">
          “เรานําหลักฐานเชิงประจักษ์ของการช่วยให้มีสุขภาพจิตที่ดีออกมาสู่สายตาโลก”
        </p>
        <p className="lead w-responsive mx-auto mb-5">
          “We bringing evidence-based methods of enhancing mental health to the world”
        </p>

        <div id="fontblue">
                  <button  className="font-weight-bold" style={{
                                fontSize: "16px",
                                textTransform: "capitalize",
                                backgroundColor:"#0395d1",
                                color:"white",
                                width:"200px",
                                padding:"10px"
                              }}>เรียนรู้เพิ่มเติม</button>
        </div>
      </section>
  );
}

export default FeaturesPage;
