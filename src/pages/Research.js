import React , {useState,useEffect} from "react";
import {
  MDBNavItem,
  MDBNavLink,
  MDBNav,
  MDBTabPane,
  MDBTabContent,
  MDBScrollspyBox,
  MDBScrollspyText,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
  MDBTypography
} from "mdbreact";
import InformationResearch from '../components/Research/InformationResearch'
import Timonials from '../components/Research/Timeline/Timonials'
import Researcher from '../components/Research/Researcher/Researcher'
import ResearchCilnic from '../components/Research/ResearchCilnic/ResearchCilnic'

import image from '../assets/Research-Background.jpg'

const Research = () => {
  const [activeItem,setactiveItem] = useState("1");
  const [WordSearch,setWordSearch] = useState("");

  const toggle = tab => e => {
    if (activeItem !== tab) {
      setactiveItem(tab);
    }
  };

  const SearchResult = word => e => {
    setWordSearch(word);
    setactiveItem("4");
    window.scrollTo(0, 350)

    window.location.hash = "#tab4";

  }

  useEffect(()=>{

    switch (window.location.hash) {
      case "#tab1":
      setactiveItem("1")
        break;
      case "#tab2":
      setactiveItem("2")
        break;
      case "#tab3":
      setactiveItem("3")
        break;
      case "#tab4":
      setactiveItem("4")
        break;
      default:

    }

  },[window.location.hash])

    return (<>
      <div id='minimalistintro2' style={{paddingTop:"106px"}}>
        <MDBView src={image} >
      <MDBMask className='rgba-black-slight'/>
      <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
          height: '50vh',
          width: '100%'
        }}>
        <MDBRow>
          <MDBCol md='12' className='mb-4 white-text text-center'>
            <MDBAnimation type='fadeInUp' delay='.3s' align="middle" style={{paddingTop:"50px"}}>
              <MDBTypography tag="h4" className="white-text font-weight-bold" variant="display-4">Research{' '}</MDBTypography>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBView>
        </div>
  <MDBContainer>

    <MDBNav className="nav-tabs mt-5">
      <MDBNavItem>
        <MDBNavLink link="link" to="#tab1" active={activeItem === "1"} onClick={toggle("1")} role="tab">
          ความเป็นมา
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink link="link" to="#tab2" active={activeItem === "2"} onClick={toggle("2")} role="tab">
          นักวิจัย
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink link="link" to="#tab3" active={activeItem === "3"} onClick={toggle("3")} role="tab">
          งานวิจัยเชิงคลินิก
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink link="link" to="#tab4" active={activeItem === "4"} onClick={toggle("4")} role="tab">
          บรรณานุกรมงานวิจัยเชิงคลินิก
        </MDBNavLink>
      </MDBNavItem>
       </MDBNav>
<MDBTabContent activeItem={activeItem} >
  <MDBTabPane tabId="1" role="tabpanel">
     <Timonials/>
   </MDBTabPane>
    <MDBTabPane tabId="2" role="tabpanel">
      <Researcher/>
    </MDBTabPane>
    <MDBTabPane tabId="3" role="tabpanel">
    <ResearchCilnic SearchResult={SearchResult}/>
    </MDBTabPane>
    <MDBTabPane tabId="4" role="tabpanel">
     <InformationResearch WordSearch={WordSearch} setWordSearch={setWordSearch} activeItem={activeItem}/ >
    </MDBTabPane>

  </MDBTabContent>
</MDBContainer > </>);
  }


export default Research;
