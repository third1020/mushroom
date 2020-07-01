
import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon,MDBContainer,MDBView,MDBMask,MDBAnimation,MDBBtn,MDBTimelineStep,MDBTimeline } from "mdbreact";
import HeaderAboutPage from '../assets/AboutPage.jpg'
import AboutPage from '../components/About/AboutPage'
import ScrollSpyPage from '../components/About/ScrollSpyPage'
import FeaturesPage from '../components/About/FeaturesPage'

const About = () => {
  return (
    <div>
      <div id='minimalistintro2'>

        <MDBView src={HeaderAboutPage}>
          <MDBMask className='gradient'></MDBMask>{' '}
          <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
              height: '50vh',
              width: '100%'
            }}>
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
                  <h1 className='display-3 font-weight-bold mb-0 pt-md-5'>
                    About{' '}
                  </h1>
                </MDBAnimation>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
      <MDBContainer>
          <AboutPage/>

      </MDBContainer>
      <ScrollSpyPage/>
      <MDBContainer>
      <FeaturesPage/>
      </MDBContainer>
    </div>
  );
}

export default About;
