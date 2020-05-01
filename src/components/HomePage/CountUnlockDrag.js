import React ,{useState}from "react";
import {
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBAnimation
} from "mdbreact";
import CountUp from 'react-countup';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const ContactUs = () => {
  const [letCount,setletCount] = useState(false);
  return (<MDBView src={'https://mdbootstrap.com/img/Photos/Others/images/76.jpg'} fixed="fixed">
    <MDBMask className='rgba-blue-strong'/>
    <MDBContainer className='justify-content-center align-items-center' style={{
        height: '100%',
        width: '100%'
      }}>
      <MDBCol md='12' className='mb-4 white-text text-center'>
        <h1 className='mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
          จำนวนผู้ลงชื่อสนับสนุนปลดล็อคสารไซโลไซบิน
        </h1>
        <hr className='hr-light my-4'/>
      </MDBCol>
      <ScrollAnimation
        animateIn='flipInX'
        afterAnimatedIn={()=> setletCount(true)}>
      <MDBRow>

        <MDBCol md="12" className="align-items-center text-center">
          <MDBIcon icon="user-edit" size="2x" className="white-text mt-4"/>
          <h4 className="font-weight-bold white-text mt-4">{letCount ? <CountUp start={0} end={800}/> : null}</h4>
          <p className="font-weight-bold white-text mt-2">Registed</p>
        </MDBCol>

      </MDBRow>
      </ScrollAnimation>
    </MDBContainer>
  </MDBView>);
}

export default ContactUs;
