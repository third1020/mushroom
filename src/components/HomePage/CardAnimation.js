import React from "react";
import { MDBAnimation,MDBRow,MDBCol,MDBView,MDBMask } from "mdbreact";

const CardAnimation = () => {
    return (
      <div className="mt-5">
        <MDBRow>

  <MDBCol xl="3" md="3" className="mb-3 text-md-right text-center" style={{padding:'0px'}}>
    <MDBAnimation reveal type="fadeInLeft">
      <MDBView hover>
    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="img-fluid z-depth-1" alt="" />
      <MDBMask className="flex-center" overlay="blue-strong">
    <h3 className="white-text font-weight-bold">Healthy</h3>
  </MDBMask>
</MDBView>

    </MDBAnimation>
  </MDBCol>

  <MDBCol xl="3" md="3" className="mb-3 text-md-right text-center" style={{padding:'0px'}}>
    <MDBAnimation reveal type="fadeInUp">
      <MDBView hover>
    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" className="img-fluid z-depth-1" alt="" />
      <MDBMask className="flex-center" overlay="blue-strong">
    <h3 className="white-text font-weight-bold">Nature</h3>
  </MDBMask>
  </MDBView>
    </MDBAnimation>
  </MDBCol>
  <MDBCol xl="3" md="3" className="mb-3 text-md-right text-center" style={{padding:'0px'}}>
    <MDBAnimation reveal type="fadeInUp">
    <MDBView hover>
    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" className="img-fluid z-depth-1" alt="" />
      <MDBMask className="flex-center" overlay="blue-strong">
    <h3 className="white-text font-weight-bold">Cloud</h3>
  </MDBMask>
  </MDBView>
    </MDBAnimation>
  </MDBCol>
  <MDBCol xl="3" md="3" className="mb-3 text-md-right text-center" style={{padding:'0px'}}>
    <MDBAnimation reveal type="fadeInRight">
      <MDBView hover>
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" className="img-fluid z-depth-1" alt="" />
          <MDBMask className="flex-center" overlay="blue-strong">
        <h3 className="white-text font-weight-bold">MounTain</h3>
      </MDBMask>
      </MDBView>
    </MDBAnimation>
  </MDBCol>
</MDBRow>


        </div>
    );
};

export default CardAnimation;
