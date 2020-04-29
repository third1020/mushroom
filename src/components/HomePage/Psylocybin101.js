import React from "react";
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
import mushroomImg from '../../assets/mushroom.png'
const Psylocybin101 = () => {
  let history = useHistory();

  return (<div className="container my-5 py-5 dark-grey-text">
    <h1 className="h1-responsive font-weight-bold my-5 text-center">
      สารไซโลไซบิน
    </h1>
    <section className="px-md-5 mx-md-5 dark-grey-text text-center text-lg-left">
      <div className="row">

        <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
          <MDBAnimation reveal="reveal" type="tada">
            <img src={mushroomImg} className="img-fluid" alt=""/>
          </MDBAnimation>
        </div>

        <div className="col-lg-6 mb-4 mb-lg-0">
          <h4 className="font-weight-bold">สารไซโลไซบิน จากเห็ดไซโลไซบ์</h4>
          <p className=" mb-md-0 mb-5">สารไซโลไซบิน (Psilocybin) เป็นสารที่พบในเห็ดสกุล Psilocybe มากกว่า 200 ชนิดมีสูตรทาง เคมีคือ C12H17N2O4P ละลายในนํ้า เมทานอลและเอทานอล ไม่ละลายในตัวทําละลายอินทรีย์ เช่น คลอโรฟอร์มและปิโตรเลียมอีเทอร์ไซโลไซบินบริสุทธิ์มีลักษณะเป็นผลึกรูปเข็มสีขาว กลิ่น คล้ายแอมโมเนียอ่อนๆ ซึ่งมีจุดหลอมเหลวประมาณ 220-228 °c ซึ่งเป็นสารออกฤทธิ์ต่อจิตและ ประสาท (Psychoactive Compound) พบได้ทั่วไปในเห็ดไซโลไซบ์</p>
          <div className="mt-3"></div>
        </div>
      </div>
    </section>
    <div className="mt-5 text-center">
      <MDBBtn onClick={() => {
          history.push('/Research')
          window.scrollTo(0,0);
        }}
        className="font-weight-bold" rounded outline color="primary" >Read More
      </MDBBtn>
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
