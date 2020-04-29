import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBNavbarToggler,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBBadge,
  MDBJumbotron,
  MDBAvatar,
  MDBFooter,
  MDBMask,
  MDBAnimation
} from 'mdbreact';
import {
  useParams
} from 'react-router-dom'
import News1 from '../components/ListNews/News1'

import "./SingleNews.css";


const SingleBlog = () => {
  let { id } = useParams()

    return (
        <div id="single">
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
                        Title of Blog{' '}
                      </h1>
                    </MDBAnimation>

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBView>
          </div>

            <MDBContainer>
              {
                id === "1" ? <News1/> : null
              }

            </MDBContainer>
            </div>
    )
  }


export default SingleBlog;
