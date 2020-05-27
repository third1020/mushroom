import React, {useState} from "react";
import {bindAll} from "lodash";
import "./CountUnlockDrag.css";
import {
  MDBScrollspyBox,
  MDBScrollspyText,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBBtn,
  MDBIcon
} from "mdbreact";
import CountUp from 'react-countup';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
const CountUnlockDrag = () => {
  const [letCount, setletCount] = useState(false);

  return (<React.Fragment>
    <MDBView>
      <MDBMask className='gradient'>
        <video className='video-intro' poster='https://mdbootstrap.com/img/Photos/Others/background.jpg' muted="muted" loop="loop" autoPlay="autoPlay">
          <source src={'https://firebasestorage.googleapis.com/v0/b/mushroom-275912.appspot.com/o/Glowing%20-%2026797.mp4?alt=media&token=08957a6d-bb6c-4be9-9bdc-109d93fe58b2'} type='video/mp4'/>
        </video>
      </MDBMask>{' '}
      <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
          height: '50vh',
          width: '100%'
        }}>
        <MDBRow>
          <MDBCol md='12' className='mb-4 white-text text-center'>
            <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
              <h1 className='mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
                จำนวนผู้ลงชื่อสนับสนุน
                <br/>
                การใช้สารไซโลไซบินเพื่อการวิจัยและการรักษาทางการแพทย์
              </h1>
              <ScrollAnimation animateIn='flipInX' afterAnimatedIn={() => setletCount(true)}>

                <h2 className="font-weight-bold white-text mt-4">{
                    letCount
                      ? <CountUp start={0} end={0}/>
                      : null
                  }</h2>
                <br/>

              </ScrollAnimation>

            </MDBAnimation>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBView>
  </React.Fragment>);
}

export default CountUnlockDrag;
