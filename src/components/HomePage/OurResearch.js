import React from "react";
import {MDBBtn} from "mdbreact";
import {useHistory} from 'react-router-dom'
const OurResearch = () => {
  let history = useHistory();

  return (<div class="container my-5 py-4 ">

    <section class="text-center px-md-5 mx-md-5 dark-grey-text">

      <h1 className="h1-responsive font-weight-bold my-5 text-center">
        งานวิจัย
      </h1>

      <p className="lead  mx-auto mb-5">
        ปัจจุบันสารสกัดไซโลไซบินได้ถูกนํามาศึกษาการวิจัยเชิงทดลองคลินิกเพื่อการรักษาโรค ทางจิตเวชในผู้ป่วยหลากหลายกลุ่มได้แก่ผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา (Treatment Resistant Depression: TRD), กลุ่มผู้ป่วยระยะสุดท้ายที่ถูกคุกคามโดยภาวะ ซึมเศร้า และ/หรือภาวะวิตกกังวล (Life-threatening Distress in Palliative Diagnosis), ภาวะ ซึมเศร้า (Major Depressive Disorder: MDD), ภาวะวิตกกังวล (Generalized Anxiety Disorder: GAD), ผู้ป่วยโรคยํ้าคิดยํ้าทํา (Obsessive Compulsive Disorder: OCD), ผู้ป่วยโรค Post-Traumatic Stress Disorder (PTSD) และการเลิกบุหรี่ (Smoking Cessation) ซึ่ง ณ ปัจจุบัน ได้มีงานด้านวิจัยเชิงทดลองทางคลินิก (Clinical Trials) มากกว่า 37 ผลงานวิจัยเกี่ยวกับ ประสิทธิภาพในการรักษาโรคทางจิตเวชโดยใช้สารสกัดไซโลไซบิน (Psilocybin) ในปริมาณที่ เหมาะสม
      </p>

      <MDBBtn onClick={() => {
          history.push('/Research')
          window.scrollTo(0,0);
        }}
        className="font-weight-bold" rounded outline color="primary" >Discover More
      </MDBBtn>


    </section>
  </div>)
}
export default OurResearch
