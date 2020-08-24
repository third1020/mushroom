import React ,{useState,useEffect,useRef } from "react";
import { MDBScrollspyBox,MDBFormInline, MDBScrollspyText,MDBContainer, MDBListGroup, MDBListGroupItem, MDBRow, MDBCol,MDBTabContent,MDBAvatar,MDBIcon,MDBBtn,MDBMask,MDBView,MDBCard,MDBCardBody } from "mdbreact";
import './Timeline.css';
import logo1 from '../../assets/AboutAsset/AU01.png';
import logo2 from '../../assets/AboutAsset/AU02.png';
import logo3 from '../../assets/AboutAsset/AU03.png';
import logo4 from '../../assets/AboutAsset/AU04.png';
import logo5 from '../../assets/AboutAsset/AU05.png';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import disableScroll from 'disable-scroll';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
let title = [
  "Education",
  "Dedication",
  "Guide to research",
  "Establishment"
]
let paragraph = [
  "เสริมสร้างความรู้ความเข้าใจ และเพิ่มความตระหนักรู้ต่อบุคคลทั่วไป นักวิจัย และบุคลากรทางการแพทย์ต่อคุณประโยชน์และข้อจํากัดของการใช้สารไซโลไซบินเพื่อการวิจัยและการรักษาทางการแพทย์",
  "ช่วยเหลือและส่งเสริมด้านความปลอดภัยและการเข้าถึงด้านกฎหมายในผู้ป่วยที่มีความต้องการในการใช้สารไซโลไซบิน เพื่อการรักษาหรือตอบสนองความต้องการทางการแพทย์",
  "รวบรวมและสนับสนุนการเข้าถึงงานวิจัยทางคลินิกหรือวารสารวิชาการที่เกี่ยวข้องกับสารไซโลไซบิน",
  "สร้างระบบนิเวศการวิจัยและพัฒนายาจากสารไซโลไซบิน (Psilocybin R&D Ecosystem) ที่มีประสิทธิภาพ โดยความร่วมมือจากพันธมิตรทั้งในประเทศ และต่างประเทศ"

]
const ScrollSpyPage = () => {
  const [active,setactive] = useState(0);
  const [scrollTop,setscrollTop] = useState(0);
  const [targetElement ,settargetElement ] = useState(null);
  const targetRef = useRef();

const handleScroll = (e) => {
  setactive(active+1);
  alert(active);
    }

    const upHandler = () => {
      if(active <= 0){
        setactive(0)
        enableBodyScroll(targetElement);
      } else {
        setactive(active-1)
        disableBodyScroll(targetElement);
        setTimeout(function(){ clearAllBodyScrollLocks(); }, 2000);
      }
    }

    const downHandler = () => {
      if( active < 3){
        setactive(active+1)
        disableBodyScroll(targetElement);
        setTimeout(function(){ clearAllBodyScrollLocks(); }, 2000);
      } else {
        setactive(3)
        enableBodyScroll(targetElement);
      }
    }

    useEffect(()=>{
      settargetElement(targetRef);

    },[active])

  return (
    <ReactScrollWheelHandler
upHandler={upHandler}
downHandler={downHandler}
>
    <div style={{backgroundColor:'#c7d3d7'}}>
    <MDBContainer>
     <MDBRow>
    <MDBCol md="6">
    <h4 className="font-weight-bold my-5">
      {title[active]}
    </h4>
    <p className="lead w-responsive mb-5 text-monospace">
       {paragraph[active]}
    </p>

    </MDBCol>
    <MDBCol md="6">
      <div ref={targetRef}>
        <MDBFormInline>
          <ul className="timeline-light-v-2">
            <li className="timeline-light-v-2-item" onClick={()=>setactive(0)}>
              <div className="timeline-light-v-2-item-tail"></div>
              <div className="timeline-light-v-2-item-head" style={{backgroundColor:active >= 0 ? null : "white" }}></div>
              <div className="timeline-light-v-2-item-content">

              </div>
            </li>
            <li className="timeline-light-v-2-item" onClick={()=>setactive(1)}>
              <div className="timeline-light-v-2-item-tail"></div>
              <div className="timeline-light-v-2-item-head" style={{backgroundColor:active >= 1 ? null : "white" }}></div>
              <div className="timeline-light-v-2-item-content">

              </div>
            </li>
            <li className="timeline-light-v-2-item " onClick={()=>setactive(2)}>
              <div className="timeline-light-v-2-item-tail"></div>
              <div className="timeline-light-v-2-item-head" style={{backgroundColor:active >= 2 ? null : "white" }}></div>
              <div className="timeline-light-v-2-item-content">

              </div>
            </li>
            <li class="timeline-light-v-2-item " onClick={()=>setactive(3)}>
              <div class="timeline-light-v-2-item-tail"></div>
              <div class="timeline-light-v-2-item-head" style={{backgroundColor:active >= 3 ? null : "white" }}></div>
              <div class="timeline-light-v-2-item-content">

              </div>
            </li>
          </ul>
          <img
            width="275"
            height="275"
            src={active <= 0 ? logo1 : active === 1 ? logo2 : active === 2 ? logo3 : active >= 3 ? logo4 : null}
            className='rounded-circle img-fluid'
            alt=''
          />
        </MDBFormInline>

    </div>
    </MDBCol>
    </MDBRow>
    </MDBContainer>

    </div>
    </ReactScrollWheelHandler>
    );

}

export default ScrollSpyPage;
