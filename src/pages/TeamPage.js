import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon,MDBContainer,MDBView,MDBMask,MDBAnimation } from "mdbreact";

const TeamPage = () => {
  return (
    <>
    <div id='minimalistintro2'>
    <MDBView src='https://fresible.com/wp-content/uploads/2016/12/ourteam-bcg.jpg'>
  <MDBMask className='rgba-black-light'/>
  <MDBContainer className='d-flex justify-content-center align-items-center' style={{
      height: '100%',
      width: '100%',
      paddingTop: '15rem'
    }}>
    <MDBRow>
      <MDBCol md='12' className='mt-xl-5 '>
        <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
          <h1 className="white-text font-weight-bold" style={{fontSize: "64px"}}>Our Team</h1>
        </MDBAnimation>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</MDBView>
    </div>
    <MDBContainer>
    <div className="my-5 px-5 pb-1 text-center">

        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
          error amet numquam iure provident voluptate esse quasi, veritatis
          totam voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBAvatar
                src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.0-9/88116061_2501509616755818_1120635612672557056_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=5-9E_oLLbJ0AX9uF0r4&_nc_ht=scontent.fphs2-1.fna&oh=e479ef158bebc557d4049451dd47df06&oe=5EB44E89"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Chris Horwang </h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Project Manager
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="dribbble" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBAvatar
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Maria Kate</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Medical
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg yt-ic">
                <MDBIcon fab icon="youtube" />
              </a>
              <a href="#!" className="p-2 fa-lg ins-ic">
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBAvatar
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Anna Deynah</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Web Developer
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg github-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <MDBAvatar
                src="https://scontent.fphs2-1.fna.fbcdn.net/v/t1.0-9/58751267_1166762090164107_6493727922891784192_o.jpg?_nc_cat=107&_nc_sid=a4a2d7&_nc_ohc=Lz7LXyk9JhUAX-gl2kg&_nc_ht=scontent.fphs2-1.fna&oh=ab59d99bb66ad3b10b809822a30ebdef&oe=5EB48565"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                style={{height:"220px"}}
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Consultant
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg gplus-ic">
                <MDBIcon fab icon="google-plus-g" />
              </a>
              <a href="#!" className="p-2 fa-lg li-ic">
                <MDBIcon fab icon="linkedin-in" />
              </a>
              <a href="#!" className="p-2 fa-lg email-ic">
                <MDBIcon icon="envelope" />
              </a>
            </MDBCol>
          </MDBCol>
        </MDBRow>

    </div>
    </MDBContainer>
    </>
  );
}

export default TeamPage;
