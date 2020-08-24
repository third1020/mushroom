
import React ,{useState}  from "react";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn
} from "mdbreact";
import axios from 'axios';
import Swal from 'sweetalert2'
const ContactUs = () => {
  const [ContactForm,setContactForm] = useState({
    name:"",
    email:"",
    title:"",
    description:"",
  });
  const handleChangeContactForm = (e) => {
    setContactForm({...ContactForm , [e.target.name] : e.target.value })

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
  return (

      <MDBCard className="contact-section my-5">
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" />
                ติดต่อเรา:
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
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">ข้อมูลการติดต่อ</h3>

                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    info@consciousflow.com
                  </p>


            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>


  );
}

export default ContactUs;
