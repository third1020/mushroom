import React from "react";
import { MDBScrollspyBox, MDBScrollspyText, MDBListGroup, MDBListGroupItem, MDBRow, MDBCol, MDBContainer,MDBView,MDBMask,MDBAnimation,MDBBtn,MDBIcon } from "mdbreact";

import InformationResearch from '../components/Research/InformationResearch'
class Research extends React.Component {

render() {
  return (
    <>
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
               src='https://mdbootstrap.com/img/video/Lines.mp4'
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
                 Our research{' '}
               </h3>
             </MDBAnimation>

             </MDBCol>
           </MDBRow>
         </MDBContainer>
       </MDBView>

<InformationResearch/>

  </>
    );
  }
}

export default Research;
