import React, {useState,useEffect} from "react";
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
import axios from 'axios';
import HeaderAboutPage from '../../assets/countpsylocybin.jpg'
const CountUnlockDrag = () => {
  const [letCount, setletCount] = useState(false);
  const [End, setEnd] = useState(0);

  useEffect(()=>{
    axios.get(`${window.$URLbackend}/contact`)
    .then((data)=> {
      console.log(data.data.data.length);
      setEnd(data.data.data.length);
    })
    .catch((error)=>{
      console.log(error);
    });

  },[])

  return (<React.Fragment>
    <MDBView src={HeaderAboutPage}>
      <MDBMask className='rgba-black-light'>

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
                      ? <CountUp start={0} end={End}/>
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
