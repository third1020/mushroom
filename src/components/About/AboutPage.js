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
  return (<> <section className = "text-center my-5" >
  <h4 className="h4-responsive  my-5">
    CONSCIOUS FLOW คือเว็บไซต์ที่รวบรวมข้อมูลทั่วไป งานวิจัยทางคลีนิกและสถานการณ์ของสารไซโลไซบิน (Psilocybin) เพื่อเพิ่มความตระหนักรู้และสนับสนุนผู้ป่วยเพื่อการเข้าถึงนวัตกรรมการรักษาเชิงประจักษ์ทางด้านจิตเวชศาสตร์
  </h4>

</section>
<section className="text-center ">

  <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} multiItem="multiItem" testimonial="testimonial">
    <MDBCarouselInner>
      <MDBRow>
        <MDBCarouselItem itemId="1">
          <MDBCol md="12">
            <MDBTestimonial>
              <MDBAvatar src={require('../../assets/profile.png')} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>

              <h4 className="font-weight-normal grey-text mt-5">
                <MDBIcon icon="quote-left" className="pr-2"/>
                We bringing evidence-based methods of enhancing mental health to the world
                <MDBIcon icon="quote-right" className="mx-2"/>
              </h4>
              <h4 className="font-weight-bold  mt-4">
                Pep Ruckpanich
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Chief Executive Officer and Founder
              </h6>

            </MDBTestimonial>
          </MDBCol>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBTestimonial>
            <MDBAvatar src={require('../../assets/profile.png')} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>

            <h4 className="font-weight-normal grey-text mt-5">
              <MDBIcon icon="quote-left" className="pr-2"/>
             We bringing evidence-based methods of enhancing mental health to the world
              <MDBIcon icon="quote-right" className="mx-2"/>
            </h4>
            <h4 className="font-weight-bold  mt-4">
              Pep Ruckpanich
            </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Chief Executive Officer and Founder
            </h6>

          </MDBTestimonial>

        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBTestimonial>
            <MDBAvatar src={require('../../assets/profile.png')} className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid" tag="img" alt="Sample avatar"/>

            <h4 className="font-weight-normal grey-text mt-5">
              <MDBIcon icon="quote-left" className="pr-2"/>
               We bringing evidence-based methods of enhancing mental health to the world
              <MDBIcon icon="quote-right" className="mx-2"/>
            </h4>
            <h4 className="font-weight-bold  mt-4">
              Pep Ruckpanich
            </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Chief Executive Officer and Founder
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
