import React , {useState} from "react";
import {
  MDBBtn,
  MDBAnimation,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBView,
  MDBMask
} from "mdbreact";
import {useHistory} from 'react-router-dom';
import mushroomImg from '../../assets/mushroom.png';
import mushroomImg2 from '../../assets/mushroom-2.png';
import ReactHover from 'react-hover'
import './Psylocybin101.css'
const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0
}
const Psylocybin101 = () => {
  let history = useHistory();
  const [IsShownImage,setIsShownImage] = useState(false);

  return (<div className="container dark-grey-text">
    <h1 className="h1-responsive font-weight-bold my-5 text-center">
      สารไซโลไซบิน
    </h1>
    <p className="lead w-responsive mx-auto mb-5">
     เป็นสารที่พบในเห็ดสกุล Psilocybe มากกว่า 200 ชนิด ซึ่งเป็นสารออกฤทธิ์ต่อจิตและประสาท (Psychoactive Compound) พบได้ทั่วไปในเห็ดไซโลไซบ์
    </p>

    <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div className="row">

        <div className="col-lg-12 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
          {
            IsShownImage ?
          <MDBAnimation reveal="reveal" type="tada" onMouseOver={()=> setIsShownImage(true)} onMouseLeave={() => setIsShownImage(false)}>
            <MDBRow>
              <MDBCol md="2"></MDBCol>
              <MDBCol md="4">
                <img src={mushroomImg2} width={300} height={300} className="img-fluid" alt=""  />
              </MDBCol>
              <MDBCol md="4">
                <MDBCardBody>
                  สารไซโลไซบิน (Psilocybin) มีสูตรทางเคมี คือ C12H17N2O4P ละลายในน้ำเมทานอลและเอทานอล ไม่ละลายในตัวทำละลายอินทรีย์ ไซโลไซบินบริสุทธิ์มีลักษณะเป็นผลึกรูปเข็มสีขาว กลิ่นคล้ายแอมโมเนียอ่อนๆ ซึ่งมีจุดหลอมเหลวประมาณ 220-228 °c
                </MDBCardBody>
              </MDBCol>
              <MDBCol md="2"></MDBCol>
            </MDBRow>
          </MDBAnimation>
          :
          <MDBAnimation reveal="reveal" type="tada">
              <img src={mushroomImg} width={250} height={250} className="img-fluid" alt="" onMouseOver={()=> setIsShownImage(true)} onMouseLeave={() => setIsShownImage(false)} />
          </MDBAnimation>

          }
        </div>

      </div>
    </section>
    <div className="mt-5 text-center">
      <MDBBtn onClick={() => {
          history.push('/Research')
          window.scrollTo(0, 0)
        }} className="btn-mix font-weight-bold" rounded color="primary" style={{fontSize:"14px"}} data-text="อ่านเพิ่มเติม...">อ่านเพิ่มเติม...</MDBBtn>

    </div>

    {/**
      <MDBRow>
        <MDBCol md="4" style={{
            paddingTop: "20px"
          }}>
          <MDBAnimation reveal="reveal" type="tada">
            <MDBCard className="hoverable">
              <MDBCardBody>
                <MDBIcon icon="heart" size="3x" className="red-text"/>
                <h5 className="font-weight-bold my-4">Healthy</h5>
                <p className="grey-text mb-md-0 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol md="4" style={{
            paddingTop: "20px"
          }}>
          <MDBAnimation reveal="reveal" type="tada">
            <MDBCard className="hoverable">
              <MDBCardBody>
                <MDBIcon icon="eye" size="3x" className="cyan-text"/>
                <h5 className="font-weight-bold my-4">Protection</h5>
                <p className="grey-text mb-md-0 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
        <MDBCol md="4" style={{
            paddingTop: "20px"
          }}>
          <MDBAnimation reveal="reveal" type="tada">
            <MDBCard className="hoverable">
              <MDBCardBody>
                <MDBIcon icon="briefcase-medical" size="3x" className="blue-text"/>
                <h5 className="font-weight-bold my-4">Qualifications</h5>
                <p className="grey-text mb-md-0 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
      **/}

  </div>)
}
export default Psylocybin101
