import React from "react";
import {MDBBtn} from "mdbreact";
import {useHistory} from 'react-router-dom';
import './OurResearch.scss';

const OurResearch = () => {
  let history = useHistory();

  return (<div class="container">

    <section class="px-md-5 mx-md-5 dark-grey-text">

      <h1 className="h1-responsive font-weight-bold my-5 text-center">
        งานวิจัย
      </h1>

      <p className="lead mx-auto mb-3">
        ปัจจุบันสารไซโลไซบินได้ถูกนํามาศึกษาการทดลองทางคลินิกเพื่อการรักษาในผู้ป่วยหลากหลายกลุ่มและบุคคลทั่วไป ได้แก่
      </p>
      <div >
        <ol className="custom-counter" style={{
            marginLeft: "20px"
          }}>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>ผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา (Treatment Resistant Depression: TRD)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>กลุ่มผู้ป่วยระยะสุดท้ายที่ถูกคุกคามโดยภาวะซึมเศร้า และ/หรือภาวะวิตกกังวล (Life-threatening Distress in Palliative Diagnosis)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>ภาวะซึมเศร้า (Major Depressive Disorder: MDD)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>ภาวะวิตกกังวล (Generalized Anxiety Disorder: GAD)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>ผู้ป่วยโรคย้ำคิดย้ำทำ (Obsessive Compulsive Disorder: OCD)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>ผู้ป่วยโรค Post-Traumatic Stress Disorder (PTSD)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>การเลิกบุหรี่ (Smoking Cessation)</a>
          </li>
          <li className="text-primary mt-3">
            <a onClick={() => {
                history.push('/Research')
                window.scrollTo(0, 0)
              }}>บุคคลที่สุขภาพดี (Healthy Human)</a>
          </li>
        </ol>
      </div>
      <p className="lead mx-auto mb-5 mt-4">
        ซึ่ง ณ ปัจจุบัน ได้มีงานด้านวิจัยเชิงทดลองทางคลินิก (Clinical Trials) มากกว่า 38 ผลงานวิจัยเกี่ยวกับประสิทธิภาพในการรักษาโรคทางจิตเวชโดยใช้สารสกัดไซโลไซบิน (Psilocybin) ในปริมาณที่เหมาะสม
      </p>

      <center>
        <MDBBtn onClick={() => {
            history.push('/Research')
            window.scrollTo(0, 0)
          }} className="btn-mix font-weight-bold" rounded color="primary" style={{fontSize:"14px"}} data-text="งานวิจัยทั้งหมด">งานวิจัยทั้งหมด</MDBBtn>

      </center>
    </section>
  </div>)
}
export default OurResearch
