
import React  from "react";
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

const ContactUs = () => {
  return (

      <MDBCard className="contact-section my-5">
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" />
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
