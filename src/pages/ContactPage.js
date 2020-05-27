import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput,MDBView,MDBMask,MDBAnimation,MDBCard,MDBCardBody } from "mdbreact";
import './VideoBackground.css'

const ContactPage = () => {
  return (<>
    <div id='videobackground'>
    <MDBView>
       <MDBMask className='gradient'>
         <video
           className='video-intro'
           poster='https://mdbootstrap.com/img/Photos/Others/background.jpg'
           muted
           loop
           autoPlay
         >
           <source
             src='https://mdbootstrap.com/img/video/animation-intro.mp4'
             type='video/mp4'
           />
         </video>
       </MDBMask>{' '}
       <MDBContainer
         className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
         style={{ height: '50vh', width: '100%' }}
       >
         <MDBRow>
           <MDBCol md='12' className='mb-4 white-text text-center'>
             <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
             <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
               Contact us{' '}
             </h3>
             </MDBAnimation>

           </MDBCol>
         </MDBRow>
       </MDBContainer>
     </MDBView>
    </div>
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <hr></hr>
        <section className="contact-section my-5">
    <MDBCard>
      <MDBRow>
        <MDBCol lg="12">
          <MDBRow>
            <MDBCol lg="6" style={{padding:"0"}}>
              <MDBCardBody className="form" style={{backgroundColor:"#fffde7"}}>
                <h3 className="mt-4" style={{color:"#0395d1"}}>

                  ติดต่อเรา:
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
                      <MDBBtn rounded color="blue">
                        <MDBIcon icon="paper-plane" />
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="6" style={{padding:"0"}}>
              <MDBCardBody className="form" style={{backgroundColor:"#eceff1"}}>
                <h3 className="mt-4" style={{color:"#0395d1"}}>

                  ติดตามเพื่อรับข้อมูลข่าวสาร:
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
                      <MDBBtn rounded color="blue">
                        <MDBIcon icon="paper-plane" />
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
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
