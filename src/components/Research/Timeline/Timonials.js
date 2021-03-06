import React,{useState,useEffect} from "react";
import { MDBContainer, MDBScrollbar,MDBCard,MDBIcon,MDBCardUp,MDBAvatar,MDBCardBody,MDBRow } from "mdbreact";
import "./scrollbar.css";
import DataTimeline from './DataTimeline';

var image1 = require('../../../assets/Timeline/001.png');
var image2 = require('../../../assets/Timeline/002.png');
var image3 = require('../../../assets/Timeline/003.png');
var image4 = require('../../../assets/Timeline/004.png');
var image5 = require('../../../assets/Timeline/005.png');
var image6 = require('../../../assets/Timeline/006.png');
var image7 = require('../../../assets/Timeline/007.png');
var image8 = require('../../../assets/Timeline/008.png');

const Timonials = () => {
  const arrayimage = [image1,image2,image3,image4,image5,image6,image7,image8]
  const [Data,setData] = useState(DataTimeline);
  const scrollContainerStyle = { Width: "2400px" };
  useEffect(()=>{
    document.getElementById('content').scrollLeft += 20
  },[])
  return (
      <>
      <div style={{width:"100%",color:"#04a4cc"}}>
        <a onClick={()=> {document.getElementById('content').scrollLeft -= 350;}}><MDBIcon icon="arrow-circle-left" size="3x" /> </a>
      <a onClick={()=> {{document.getElementById('content').scrollLeft += 350;}}}><MDBIcon icon="arrow-circle-right" style={{float:"right"}} size="3x" /></a></div>
      <div id="content" className="scrollbar scrollbar-primary  mt-5" style={scrollContainerStyle}>
      <div className="d-flex flex-nowrap bd-highlight">

      {
        Data.map((items,index) => {
          return(
            <div className="bd-highlight col-example" id={"section" + index}>
            <MDBCard testimonial style={{width:"350px",boxShadow:"none"}}>
            <h3 className="text-center">{items.Year}</h3>
              <MDBCardUp style={{borderBottom:"3px solid #04a4cc"}}/>
              <center>
                {
                  items.link ?
                  <a href={items.link} target="_black">
                    <MDBAvatar style={{borderRadius:"50%",border:"1px solid #04a4cc",width:"125px",height:"125px"}} className='white'>
                      <img
                        src={arrayimage[index]}
                        alt=''
                      />
                    </MDBAvatar>
                  </a>

                   :
                   <MDBAvatar style={{borderRadius:"50%",border:"1px solid #04a4cc",width:"125px",height:"125px"}} className='white'>
                     <img
                       src={arrayimage[index]}
                       alt=''
                     />
                   </MDBAvatar>
                }

              </center>
              <MDBCardBody>
                <h4 className='card-title' style={{color:"#04a4cc"}}>{items.Title}</h4>
                <hr />
                <p>

                  {items.Description}

                </p>

              </MDBCardBody>

            </MDBCard>
            </div>
          )
        })
      }
      </div>
      </div>

</>
  );
}

export default Timonials;
