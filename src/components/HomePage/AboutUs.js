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
    <h1 className="h1-responsive font-weight-bold my-5">
      เกี่ยวกับ
    </h1>
    <p className="lead w-responsive mx-auto mb-5">
      CONSCIOUS EDGE คือเว็บไซต์ที่รวบรวมทุกข้อมูลและอัพเดทข่าวสารใหม่ๆ เกี่ยวกับสาร ไซโลไซบิน (Psilocybin) จากทั่วทุกมุมโลก
    </p>

    <MDBBtn onClick={() => {
        history.push('/About')
        window.scrollTo(0, 0)
      }
} rounded="rounded"  outline="outline" color="primary" className="waves-effect zoom font-weight-bold">
      More about us
    </MDBBtn>
  </section>);
}

export default AboutUs;
