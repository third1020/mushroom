import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBAvatar,
  MDBCarouselItem,
  MDBTestimonial,
  MDBCarousel,
  MDBCarouselInner
} from "mdbreact";
import './styles.css'
import {useHistory} from 'react-router-dom';

const AboutPage = () => {
  let history = useHistory();
  return (<> < section className = "text-center my-5" > <h4 className="h4-responsive  my-5 text-monospace">
    CONSCIOUS FLOW คือเว็บไซต์ที่รวบรวมข้อมูลทั่วไป งานวิจัยทางคลีนิกและสถานการณ์ของสารไซโลไซบิน (Psilocybin) เพื่อเพิ่มความตระหนักรู้และสนับสนุนผู้ป่วยเพื่อการเข้าถึงนวัตกรรมการรักษาเชิงประจักษ์ทางด้านจิตเวชศาสตร์
  </h4>
  <MDBRow className="text-center text-justify my-5">
    <MDBCol md="8" lg="6" className="float-right">
      <h4 className="font-weight-bold mb-3">Name</h4>
      <h6 className="font-weight-bold grey-text mb-3">
        position
      </h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing eliLorem ipsum dolor sit amet, consectetur adipisicing elit. Quod Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod t. Quod eos id officiis hic tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.
      </p>

    </MDBCol>
    <MDBCol md="4" lg="6" className="float-left">
      <MDBAvatar src={require('../../assets/profile.png')} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>
    </MDBCol>

  </MDBRow>
</section>
<section className="text-center my-5">

  <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} multiItem="multiItem" testimonial="testimonial">
    <MDBCarouselInner>
      <MDBRow>
        <MDBCarouselItem itemId="1">
          <MDBCol md="12">
            <MDBTestimonial>

              <h4 className="font-weight-normal grey-text">
                <MDBIcon icon="quote-left" className="pr-2"/>
                We bringing evidence-based methods of enhancing mental health to the world
                <MDBIcon icon="quote-right" className="mx-2"/>
              </h4>
              <h6 className="blue-text font-weight-bold my-3">
                Pep Ruckpanich
              </h6>

            </MDBTestimonial>
          </MDBCol>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBTestimonial>

            <h4 className="font-weight-normal grey-text">
              <MDBIcon icon="quote-left" className="pr-2"/>
              คือเว็บไซต์ที่รวบรวมข้อมูลทั่วไป งานวิจัยทางคลีนิกและสถานการณ์ของสารไซโลไซบิน
              <MDBIcon icon="quote-right" className="mx-2"/>
            </h4>
            <h6 className="blue-text font-weight-bold my-3">
              Pep Ruckpanich
            </h6>

          </MDBTestimonial>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBTestimonial>

            <h4 className="font-weight-normal grey-text">
              <MDBIcon icon="quote-left" className="pr-2"/>
              ectetur adipisicing elit. Quod Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod Lorem ipsum dolor sit amet, consec
              <MDBIcon icon="quote-right" className="mx-2"/>
            </h4>
            <h6 className="blue-text font-weight-bold my-3">
              Pep Ruckpanich
            </h6>

          </MDBTestimonial>

        </MDBCarouselItem>
      </MDBRow>
    </MDBCarouselInner>
  </MDBCarousel>
</section>
</>);
}

export default AboutPage;
