import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBBtn

} from "mdbreact";

import './aboutUs.css'
import {useHistory} from 'react-router-dom'

const AboutUs = () => {
  let history = useHistory();
  return (<section className="text-center my-5 dark-grey-text">
    <h1 className="h1-responsive font-weight-bold my-3">
      วิสัยทัศน์ของเราคือ
      <br/>
      การเปิดใจกับกระบวนการรักษาที่ดีกว่า เพื่อการมีสุขภาพจิตที่ดี
    </h1>
    <p className="lead w-responsive mx-auto mb-5">

      <br></br>
      CONSCIOUS FLOW คือเว็บไซต์ที่รวบรวมข้อมูลทั่วไป งานวิจัยและสถานการณ์ของสารไซโลไซบิน (Psilocybin)
    </p>


    <MDBBtn onClick={() => {
        history.push('/About')
        window.scrollTo(0, 0)
      }} className="btn-mix font-weight-bold" rounded color="primary" style={{fontSize:"14px"}} data-text="เกี่ยวกับเรา">เกี่ยวกับเรา</MDBBtn>

  </section>);
}

export default AboutUs;
