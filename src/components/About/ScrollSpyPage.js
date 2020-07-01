import React ,{useState,useEffect,useRef } from "react";
import { MDBScrollspyBox, MDBScrollspyText, MDBListGroup, MDBListGroupItem, MDBRow, MDBCol,MDBTabContent,MDBAvatar,MDBIcon,MDBBtn,MDBMask,MDBView,MDBCard,MDBCardBody } from "mdbreact";
import './Timeline.css';
import logo1 from '../../assets/AboutAsset/AU01.png';
import logo2 from '../../assets/AboutAsset/AU02.png';
import logo3 from '../../assets/AboutAsset/AU03.png';
import logo4 from '../../assets/AboutAsset/AU04.png';
import logo5 from '../../assets/AboutAsset/AU05.png';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const ScrollSpyPage = () => {
  const [active,setactive] = useState(1);
  const myRef = useRef(null)
const executeScroll = () => scrollToRef(myRef)

const handleScroll = (e) => {
  setactive(active+1);
  alert(active);
    }

  return (
    <div style={{backgroundColor:'#c7d3d7'}}>
    <MDBRow>
    <MDBCol md="6">
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Recent posts
    </h2>
    <p className="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.
    </p>
    <p className="text-center w-responsive mx-auto mb-5">
      Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.
    </p>

    </MDBCol>
    <MDBCol md="6">
    <MDBScrollspyBox>
      <MDBRow>
        <MDBCol md="3">
        <ul className="timeline-light-v-2">
          <li className="timeline-light-v-2-item" onClick={()=>setactive(1)}>
            <div className="timeline-light-v-2-item-tail"></div>
            <div className="timeline-light-v-2-item-head" style={{backgroundColor:active > 0 ? null : "white" }}></div>
            <div className="timeline-light-v-2-item-content">

            </div>
          </li>
          <li className="timeline-light-v-2-item" onClick={()=>setactive(2)}>
        		<div className="timeline-light-v-2-item-tail"></div>
            <div className="timeline-light-v-2-item-head" style={{backgroundColor:active > 1 ? null : "white" }}></div>
            <div className="timeline-light-v-2-item-content">

            </div>
          </li>
          <li className="timeline-light-v-2-item " onClick={()=>setactive(3)}>
        		<div className="timeline-light-v-2-item-tail"></div>
            <div className="timeline-light-v-2-item-head" style={{backgroundColor:active > 2 ? null : "white" }}></div>
            <div className="timeline-light-v-2-item-content">

            </div>
          </li>
          <li class="timeline-light-v-2-item " onClick={()=>setactive(4)}>
            <div class="timeline-light-v-2-item-tail"></div>
            <div class="timeline-light-v-2-item-head" style={{backgroundColor:active > 3 ? null : "white" }}></div>
            <div class="timeline-light-v-2-item-content">

            </div>
          </li>
        </ul>

        </MDBCol>
        <MDBCol>
              <div className="example">

                <img
                  width="300"
                  height="300"
                  src={active === 1 ? logo1 : active === 2 ? logo2 : active === 3 ? logo3 : active === 4 ? logo4 : null}
                  className='rounded-circle img-fluid'
                  alt=''
                />

              </div>
        </MDBCol>
      </MDBRow>
    </MDBScrollspyBox>
    </MDBCol>
    </MDBRow>

    </div>
    );

}

export default ScrollSpyPage;
