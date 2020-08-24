import React from 'react'
import ReactDOM from 'react-dom'
import {useSpring, animated} from 'react-spring'
import {MDBContainer, MDBRow, MDBCol,MDBCardBody} from "mdbreact";
import emoji1 from '../../../assets/Emoji/RE01.png';
import {
  useHistory
} from 'react-router-dom'
const ResearchCilnic = (props) => {
  const history = useHistory();

  return (<MDBContainer>

    <p className="font-weight-bold">
      ปัจจุบันสารสกัดไซโลไซบินได้ถูกนำมาศึกษาการวิจัยเชิงทดลองคลินิกเพื่อการรักษาโรคทางจิตเวช ในผู้ป่วยหรือบุคคลที่มีสุขภาพดีอยู่แล้วหลากหลายกลุ่มได้แก่
    </p>
    <MDBRow>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("TRD")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/loudly-crying-face_1f62d.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            ผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา (Treatment Resistant Depression: TRD)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("Life-treatening Distress")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/pensive-face_1f614.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            กลุ่มผู้ป่วยระยะสุดท้ายที่ถูกคุกคามโดยภาวะซึมเศร้า และ/หรือภาวะวิตกกังวล
            (Life-threatening Distress in Palliative Diagnosis)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("GAD")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/crying-face_1f622.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            ภาวะซึมเศร้า (Major Depressive Disorder: MDD)
และ/หรือ ภาวะวิตกกังวล (Generalized Anxiety Disorder: GAD)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("OCD")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/thinking-face_1f914.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            ผู้ป่วยโรคย้ำคิดย้ำทำ (Obsessive Compulsive Disorder: OCD)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("Smoking Cessation")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/face-with-rolling-eyes_1f644.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            การเลิกบุหรี่ (Smoking Cessation) หรือการเลิกเหล้า (Alcohol Dependence)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("Other")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/heavy-black-heart_2764.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            อื่นๆ (Other)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>
      <MDBCol md="4">
        <MDBCardBody className="hoverable">
          <a onClick={props.SearchResult("Healthy Human")}>
          <center>
            <img width={125} src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/smiling-face-with-smiling-eyes_1f60a.png'} alt=""/>
          </center>
          <p className="mt-4 text-center">
            บุคคลที่สุขภาพดี (Healthy Human)
          </p>
          </a>
        </MDBCardBody>
      </MDBCol>

    </MDBRow>

  </MDBContainer>)
}
export default ResearchCilnic
