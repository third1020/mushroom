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
import News2 from '../components/ListNews/News2'
import News3 from '../components/ListNews/News3'
import News4 from '../components/ListNews/News4'
import News5 from '../components/ListNews/News5'
import News6 from '../components/ListNews/News6'
import News7 from '../components/ListNews/News7'
import "./SingleNews.css";
const SingleBlog = () => {
  let { id } = useParams()

    return (
        <div id="single">
            <MDBContainer>
              {
                id === "1" ? <News1/> : null
              }
              {
                id === "2" ? <News2/> : null
              }
              {
                id === "3" ? <News3/> : null
              }
              {
                id === "4" ? <News4/> : null
              }
              {
                id === "5" ? <News5/> : null
              }
              {
                id === "6" ? <News6/> : null
              }
              {
                id === "7" ? <News7/> : null
              }
            </MDBContainer>
            </div>
    )
  }


export default SingleBlog;
