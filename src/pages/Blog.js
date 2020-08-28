import React from "react";
import BlogPage from '../components/Blog/BlogPage'
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBAnimation,
  MDBPageNavm,
  MDBPageItem,
  MDBPageNav,
  MDBPagination,
  MDBFooter,
  MDBTypography

} from "mdbreact";
import {
  useHistory
} from 'react-router-dom'
import ContactUsPage from '../assets/ContactUsPage.jpg'
const Blog = () => {
  return (<>
    <div id='minimalistintro2' style={{paddingTop:"106px"}}>

      <MDBView src={ContactUsPage}>
        <MDBMask className='gradient'></MDBMask>{' '}
        <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
            height: '50vh',
            width: '100%'
          }}>
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation type='fadeInUp' delay='.3s' align="middle" style={{paddingTop:"50px"}}>
                <MDBTypography tag="h4" className="white-text font-weight-bold" variant="display-4">Blog{' '}</MDBTypography>
              </MDBAnimation>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
    <MDBContainer>
        <BlogPage/>

    </MDBContainer>
  </>);
}

export default Blog;
