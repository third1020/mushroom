import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput,MDBView,MDBMask,MDBAnimation,MDBCard,MDBCardBody } from "mdbreact";
import './VideoBackground.css'
import ContactUsPage from '../assets/ContactUsPage.jpg'
import './ContactPage.css'
const ContactPage = () => {
  return (<>
    <div id='minimalistintro2'>

      <MDBView src={ContactUsPage}>
        <MDBMask className='gradient'></MDBMask>{' '}
        <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
            height: '50vh',
            width: '100%'
          }}>
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
                <h1 className='display-3 font-weight-bold mb-0 pt-md-5'>
                  Contact Us{' '}
                </h1>
              </MDBAnimation>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
    <MDBContainer>
        <section className="contact-section my-5">
    <MDBCard>
      <MDBRow>
        <MDBCol lg="12">
          <MDBRow>
            <MDBCol lg="6" style={{padding:"0"}}>
              <MDBCardBody className="form" style={{backgroundColor:"#fffde7",height:"600px"}}>
                <h3 className="mt-4" style={{color:"#0395d1"}}>

                  ติดต่อเรา
                </h3>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-name"
                        label="ชื่อ"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-email"
                        label="อีเมล"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-title"
                        label="หัวข้อ"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="form-contact-message"
                        label="ข้อความ"
                      />
                    <div id="fontblue">
                      <button  className="font-weight-bold" style={{
                                    fontSize: "16px",
                                    textTransform: "capitalize",
                                    backgroundColor:"#0395d1",
                                    color:"white",
                                    width:"200px",
                                    padding:"10px"
                                  }}>Get it touch</button>
                              </div>

                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="6" style={{padding:"0"}}>
              <MDBCardBody className="form" style={{backgroundColor:"#eceff1",height:"600px"}}>
                <h3 className="mt-4" style={{color:"#0395d1"}}>
                  ติดตามเพื่อรับข้อมูลข่าวสาร
                </h3>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-email"
                        label="อีเมล"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBCol md="12" id="fontblue">
                  <button  className="font-weight-bold" style={{
                                fontSize: "16px",
                                textTransform: "capitalize",
                                backgroundColor:"#0395d1",
                                color:"white",
                                width:"200px",
                                padding:"10px"
                              }}>Subscribe</button>
                </MDBCol>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  </section>





    </MDBContainer>
    </>
  );
}

export default ContactPage;
