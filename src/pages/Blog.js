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
  MDBFooter

} from "mdbreact";
import {
  useHistory
} from 'react-router-dom'

const Blog = () => {
  return (<div>
    <div id='minimalistintro2'>

      <MDBView src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg">
        <MDBMask className='gradient'></MDBMask>{' '}
        <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
            height: '50vh',
            width: '100%'
          }}>
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
                <h1 className='display-3 font-weight-bold mb-0 pt-md-5'>
                  Blog{' '}
                </h1>
              </MDBAnimation>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
    <MDBContainer>
        <BlogPage/>

    </MDBContainer>
  </div>);
}

export default Blog;
