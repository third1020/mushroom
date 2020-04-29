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
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    id="contact-email"
                    label="Your email"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md">
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>San Francisco, CA 94126, USA</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+ 01 234 567 89</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>contact@example.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      <hr></hr>


        <center>
      <MDBCard className="font-weight-bold my-5 align-items-center" style={{width:"50%"}}>
  <MDBCardBody>
    <div className="form-header blue accent-1">
      <h3 className="mt-2">
        <MDBIcon icon="envelope" /> Sign up for our email updates:
      </h3>
    </div>
    <p className="dark-grey-text">
      We'll write rarely, but only the best content.
    </p>
    <div className="md-form">
      <MDBInput
        label="Your email"
        type="text"
        id="form-email"
      />
    </div>


    <div className="text-center">
      <MDBBtn color="light-blue">Submit</MDBBtn>
    </div>
  </MDBCardBody>
</MDBCard>
</center>



    </MDBContainer>
    </>
  );
}

export default ContactPage;
