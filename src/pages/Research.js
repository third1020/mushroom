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
  MDBIcon
} from "mdbreact";
import InformationResearch from '../components/Research/InformationResearch'
import Timonials from '../components/Research/Timeline/Timonials'
import Researcher from '../components/Research/Researcher/Researcher'
import ResearchCilnic from '../components/Research/ResearchCilnic/ResearchCilnic'

import image from '../assets/CF03.png'

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
      <div id='minimalistintro2'>
        <MDBView src={image}>
      <MDBMask className='rgba-black-slight'/>
      <MDBContainer style={{
          height: '100%',
          width: '100%',
          paddingTop: '15rem',
          right:"100px"
        }}>
        <MDBRow>
          <MDBCol md='12' className='mt-xl-5 '>
            <MDBAnimation type='fadeInUp' delay='.3s' align="right" >
              <h1 className="white-text font-weight-bold" style={{fontSize: "64px"}}>Research</h1>
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
          งานวิจัย
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
          บรรณานุกรมงานวิจัย
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
     <InformationResearch WordSearch={WordSearch} setWordSearch={setWordSearch}/ >
    </MDBTabPane>

  </MDBTabContent>
</MDBContainer > </>);
  }


export default Research;
