import React , {useState,useEffect} from "react";
import {  MDBContainer,MDBTypography, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput,MDBView,MDBMask,MDBAnimation,MDBCard,MDBCardBody } from "mdbreact";
import './VideoBackground.css'
import ContactUsPage from '../assets/sd.jpg'
import './ContactPage.css'
import axios from 'axios';
import Swal from 'sweetalert2'
const ContactPage = () => {
  const [SubScribeForm,setSubScribeForm] = useState("");
  const [ContactForm,setContactForm] = useState({
    name:"",
    email:"",
    title:"",
    description:"",
  });

  const handleChangeContactForm = (e) => {
    setContactForm({...ContactForm , [e.target.name] : e.target.value })

  }

  const SubmitSubScribeForm = async (e) => {
    e.preventDefault();
    let createdSubScribe = await axios.post(`${window.$URLbackend}/subscribe`,{email:SubScribeForm});
    console.log(createdSubScribe);
    Swal.fire(
  'Successfully',
  '',
  'success'
)
  }

  const SubmitContactForm = async (e) => {
    e.preventDefault();
    let createdContactForm = await axios.post(`${window.$URLbackend}/contact`,ContactForm);
    console.log(createdContactForm);
    console.log(ContactForm);
    Swal.fire(
  'Successfully',
  '',
  'success'
)
  }
  return (<>
    <div id='minimalistintro2' style={{paddingTop:"25px"}}>

      <MDBView src={ContactUsPage}>
        <MDBMask className='gradient'></MDBMask>{' '}
        <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
            height: '50vh',
            width: '100%'
          }}>
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation type='fadeInUp' delay='.3s' align="middle" style={{paddingTop:"50px"}}>
                <MDBTypography tag="h4" className="white-text font-weight-bold" variant="display-4">Contact Us{' '}</MDBTypography>
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
                <form onSubmit={SubmitContactForm}>
                <MDBRow>
                  <MDBCol md="6">

                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-name"
                        label="ชื่อ"
                        name="name"
                        value={ContactForm.name}
                        onChange={handleChangeContactForm}
                        required
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="email"
                        id="form-contact-email"
                        label="อีเมล"
                        name="email"
                        value={ContactForm.email}
                        onChange={handleChangeContactForm}
                        required
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
                        name="title"
                        value={ContactForm.title}
                        onChange={handleChangeContactForm}
                        required
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
                        name="description"
                        value={ContactForm.description}
                        onChange={handleChangeContactForm}
                        required
                      />
                    <div id="fontblue">
                      <button type="summit"  className="font-weight-bold" style={{
                                    fontSize: "16px",
                                    textTransform: "capitalize",
                                    backgroundColor:"#0395d1",
                                    color:"white",
                                    width:"200px",
                                    padding:"10px"
                                  }}><MDBIcon icon="paper-plane" /></button>
                              </div>

                    </div>

                  </MDBCol>

                </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCol>
            <MDBCol lg="6" style={{padding:"0"}}>
              <MDBCardBody className="form" style={{backgroundColor:"#eceff1",height:"600px"}}>
                <h3 className="mt-4" style={{color:"#0395d1"}}>
                  ติดตามเพื่อรับข้อมูลข่าวสาร
                </h3>
                <MDBRow>
                  <MDBCol md="12">
                    <form onSubmit={SubmitSubScribeForm}>
                    <div className="md-form mb-0">
                      <MDBInput
                        type="email"
                        id="form-contact-email"
                        label="อีเมล"
                        required
                        value={SubScribeForm}
                        onChange={(e)=> setSubScribeForm(e.target.value)}
                      />
                    </div>
                    <div id="fontblue">
                      <button type="summit"  className="font-weight-bold" style={{
                                    fontSize: "16px",
                                    textTransform: "capitalize",
                                    backgroundColor:"#0395d1",
                                    color:"white",
                                    width:"200px",
                                    padding:"10px"
                                  }}>Subscribe</button>
                    </div>
                    </form>
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
