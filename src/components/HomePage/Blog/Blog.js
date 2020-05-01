import React, {Suspense, useState, useEffect} from "react";
import {compose, withProps, withStateHandlers} from "recompose";
import {
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCardBody
} from "mdbreact";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  Polygon
} from "react-google-maps";
import mapStyles from './mapStyles';

const Blog = props => {
  const [defaultCenter, setdefaultCenter] = useState({lat: 13.75398, lng: 100.50144});
  const [defaultZoom, setdefaultZoom] = useState(1.6);
  const [isOpenInfoMarker0, setisOpenInfoMarker0] = useState(false);
  const [isOpenInfoMarker1, setisOpenInfoMarker1] = useState(false);
  const [isOpenInfoMarker2, setisOpenInfoMarker2] = useState(false);
  const [isOpenInfoMarker3, setisOpenInfoMarker3] = useState(false);
  const [isOpenInfoMarker4, setisOpenInfoMarker4] = useState(false);
  const [isOpenInfoMarker5, setisOpenInfoMarker5] = useState(false);
  const [isOpenInfoMarker6, setisOpenInfoMarker6] = useState(false);
  const [reRender, setreRender] = useState(0);

  const [arrMarker, setarrMarker] = useState([
    {
      title: "ยกเลิกสถานะสารเสพติดของสารไซโลไซบิน",
      information: "(2019)ทำประชามติยกเลิกสถานะสารเสพติดของสารไซโลไซบิน (Psilocybin) และได้ผ่านการลงคะแนนเสียงโดยสภาเมืองเป็นที่เรียบร้อย",
      linkUrl: "https://www.usnews.com/news/best-states/articles/2019-06-14/states-consider-decriminalizing-magic-mushrooms",
      linkUrl2: "www.usnews.com",
      lat: 37.1931243,
      lng: -123.796161,
      isOpenInfoMarker: isOpenInfoMarker0
    }, {
      title: "รักษาผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยาซึ่งมีผู้เข้าร่วมงานวิจัยนี้ทั้งสิ้น 216 คนจากทั่วทุกมุมโลก",
      information: "(2020)บริษัทคอมแพส (COMPASS) ร่วมกับศูนย์วิจัยไซคีเดลิกและความตระหนักรู้มหาวิทยาลัยจอห์นฮอปกินส์ (John Hopkins) ได้เข้าสู่การวิจัยเชิงทดลองทางคลีนิคเกี่ยวกับประสิทธิภาพของสารไซโลไซบิน (Psilocybin) ในการรักษาผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยาซึ่งมีผู้เข้าร่วมงานวิจัยนี้ทั้งสิ้น 216 คนจากทั่วทุกมุมโลก",
      linkUrl: "https://www.fiercebiotech.com/biotech/compass-raises-80m-to-take-magic-mushroom-drug-toward-phase-3",
      linkUrl2: "www.fiercebiotech.com",
      lat: 45.0354272,
      lng: -93.8115284,
      isOpenInfoMarker: isOpenInfoMarker1
    }, {
      title: "สถาบันอูโซนา (Usona Institute) ได้รับการกำหนดให้เป็น “การค้นพบการบำบัดรักษาครั้งใหญ่” ",
      information: "(ไม่ระบุปี) 7 คนดังที่เคยใช้หรือมีประสบการณ์กับสารไซโลไซบิน (2019) สถาบันอูโซนา (Usona Institute) ได้รับการกำหนดให้เป็น “การค้นพบการบำบัดรักษาครั้งใหญ่” จากองค์การอาหารและยาแห่งชาติสหรัฐอเมริกาสำหรับงานวิจัยในการใช้สารไซโลไซบินรักษาภาวะซึมเศร้า ซึ่งเป็นแห่งที่ 2 แล้วต่อจากบริษัทคอมแพส (COMPASS)",
      linkUrl: "https://www.businesswire.com/news/home/20191122005452/en/FDA-grants-Breakthrough-Therapy-Designation-Usona-Institutes",
      linkUrl2: "www.businesswire.com",
      lat: 43.0067909,
      lng: -102.7499493,
      isOpenInfoMarker: isOpenInfoMarker2
    }, {
      title: "ศูนย์วิจัยไซคีเดลิกมหาวิทยาลัยอิมพีเรียล คอลเลจ ลอนดอน (Imperial College London) ี",
      information: "(2019) ศูนย์วิจัยไซคีเดลิกมหาวิทยาลัยอิมพีเรียล คอลเลจ ลอนดอน (Imperial College London) แถลงว่าสารสกัดไซโลไซบิน (Psilocybin) จะสามารถวิจัยและพัฒนายาที่สามารถทดแทนยาต้านเศร้าได้ภายใน 5 ปี",
      linkUrl: "https://www.independent.co.uk/news/health/magic-mushroom-depression-psychedelic-drug-mental-health-antidepressant-big-pharma-imperial-lsd-dmt-a8929796.html",
      linkUrl2: "www.independent.co.uk",
      lat: 41.40338,
      lng: 2.17403,
      isOpenInfoMarker: isOpenInfoMarker3
    }, {
      title: "สามารถซื้อ-ขาย แห้วเห็ดไซโลไซบ์ได้อย่างเสรี",
      information: "(2016) เมืองอัมสเตอร์ดัม ประเทศเนเธอแลนด์ สามารถซื้อ-ขาย แห้วเห็ดไซโลไซบ์ได้อย่างเสรี",
      linkUrl: "https://dutchreview.com/culture/society/truffles-in-the-netherlands-everything-you-need-to-know-for-a-psychedelic-trip-in-2020/",
      linkUrl2: "www.dutchreview.com",
      lat: 52.370216,
      lng: 4.895168,
      isOpenInfoMarker: isOpenInfoMarker4
    }, {
      title: "ผู้เชี่ยวชาญหลายฝ่ายเรียกร้องต่อรัฐบาลออสเตรเลีย",
      information: "ผู้เชี่ยวชาญหลายฝ่ายเรียกร้องให้รัฐบาลออสเตรเลียให้ใช้สารไซโลไซบินเพื่อการรักษาภาวะผิดปกติทางจิตเวชในช่วงการระบาดของ COVID-19",
      linkUrl: "https://www.ladbible.com/news/news-calls-for-australian-government-to-allow-mdma-for-mental-health-help-20200426",
      linkUrl2: "www.ladbible.com",
      lat: -33.865143,
      lng: 151.209900,
      isOpenInfoMarker: isOpenInfoMarker5
    }, {
      title: "ผลักดันกฎหมายให้สามารถใช้สารไซโลไซบิน (Psilocybin)",
      information: "ด็อกเตอร์บรูซ โทบิน นักจิตบำบัดและศาสตราจารย์มหาวิทยาลัยวิกตอเรีย (University of Victoria) กำลังผลักดันกฎหมายให้สามารถใช้สารไซโลไซบิน (Psilocybin) เพื่อการรักษาผู้ป่วยระยะสุดท้ายที่มีภาวะเครียด ภาวะซึมเศร้า หรือภาวะผิดปกติทางจิตเวชอื่นๆแทรกซ้อน (End of life distress) ซึ่งมีจำนวนผู้ป่วยมากกว่า 3,000 คนต่อปี",
      linkUrl: "https://globalnews.ca/news/6291447/medical-psychedelics-canada/",
      linkUrl2: "www.globalnews.ca",
      lat: 55.585901,
      lng: -105.750596,
      isOpenInfoMarker: isOpenInfoMarker6
    }
  ]);
  function onCloseMarker(index) {
    let Oldarr = arrMarker;
    Oldarr[0].isOpenInfoMarker = false;
    Oldarr[1].isOpenInfoMarker = false;
    Oldarr[2].isOpenInfoMarker = false;
    Oldarr[3].isOpenInfoMarker = false;
    Oldarr[4].isOpenInfoMarker = false;
    Oldarr[5].isOpenInfoMarker = false;
    Oldarr[6].isOpenInfoMarker = false;
  }

  function onToggleOpen(index) {

    let Oldarr = arrMarker;
    Oldarr[0].isOpenInfoMarker = false;
    Oldarr[1].isOpenInfoMarker = false;
    Oldarr[2].isOpenInfoMarker = false;
    Oldarr[3].isOpenInfoMarker = false;
    Oldarr[4].isOpenInfoMarker = false;
    Oldarr[5].isOpenInfoMarker = false;
    Oldarr[6].isOpenInfoMarker = false;

    switch (index) {
      case 0:
        Oldarr[0].isOpenInfoMarker = !Oldarr[0].isOpenInfoMarker

        setarrMarker(Oldarr);
        const objcenter = {
          lat: Oldarr[0].lat,
          lng: Oldarr[0].lng
        }
        setdefaultCenter(objcenter);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      case 1:
        Oldarr[1].isOpenInfoMarker = !Oldarr[1].isOpenInfoMarker
        setarrMarker(Oldarr);
        const objcenter1 = {
          lat: Oldarr[1].lat,
          lng: Oldarr[1].lng
        }
        setdefaultCenter(objcenter1);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      case 2:
        Oldarr[2].isOpenInfoMarker = !Oldarr[2].isOpenInfoMarker
        setarrMarker(Oldarr);
        const objcenter2 = {
          lat: Oldarr[2].lat,
          lng: Oldarr[2].lng
        }
        setdefaultCenter(objcenter2);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      case 3:
        Oldarr[3].isOpenInfoMarker = !Oldarr[3].isOpenInfoMarker
        setarrMarker(Oldarr);
        const objcenter3 = {
          lat: Oldarr[3].lat,
          lng: Oldarr[3].lng
        }
        setdefaultCenter(objcenter3);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      case 4:
        Oldarr[4].isOpenInfoMarker = !Oldarr[4].isOpenInfoMarker
        setarrMarker(Oldarr);
        const objcenter4 = {
          lat: Oldarr[4].lat,
          lng: Oldarr[4].lng
        }
        setdefaultCenter(objcenter4);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      case 5:
        Oldarr[5].isOpenInfoMarker = !Oldarr[5].isOpenInfoMarker
        setarrMarker(Oldarr);
        const objcenter5 = {
          lat: Oldarr[5].lat,
          lng: Oldarr[5].lng
        }
        setdefaultCenter(objcenter5);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      case 6:
        Oldarr[6].isOpenInfoMarker = !Oldarr[6].isOpenInfoMarker
        setarrMarker(Oldarr);
        const objcenter6 = {
          lat: Oldarr[6].lat,
          lng: Oldarr[6].lng
        }
        setdefaultCenter(objcenter6);
        setdefaultZoom(3);
        setreRender(reRender + 1);
        break;
      default:
    }
  }

  function changeBackground(e) {
    e.target.style.background = 'red';
  }

  function changeBackgroundWhite(e) {
    e.target.style.background = 'white';
  }

  const InfoMarker = props => {
    return <div style={{
        width: '200px'
      }}>
      <p className="font-weight-bold">
        {props.title}
      </p>
      <hr/>
      <p>
        {props.information}
      </p>
      <hr/>
      <a href={props.linkUrl} target="_black">
        {props.linkUrl2}
      </a>
    </div>;
  };

  const MapWithAMakredInfoWindow = compose(withStateHandlers(() => ({isOpen: true}), {}), withScriptjs, withGoogleMap)(props => (<GoogleMap defaultOptions={{
      styles: mapStyles
    }} defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
    {
      arrMarker.map((items, index) => {
        let checkstatus = "isOpenInfoMarker" + index;

        console.log(items);
        return (<Marker position={{
            lat: items.lat,
            lng: items.lng
          }} onClick={() => onToggleOpen(index)} icon={{
            url: require('./maps.png')
          }} name="marker name">
          {
            items.isOpenInfoMarker && (<InfoWindow onCloseClick={() => onCloseMarker(index)}>
              <InfoMarker title={items.title} linkUrl={items.linkUrl} linkUrl2={items.linkUrl2} information={items.information} id={index}/>
            </InfoWindow>)

          }
        </Marker>)
      })
    }
  </GoogleMap>));

  useEffect(() => {}, [reRender])

  return (<MDBContainer className="dark-grey-text mb-5">

    <h1 className="h1-responsive font-weight-bold my-5 text-center">
      สถานการณ์ปัจจุบันทั่วโลก
    </h1>

    <MDBRow>
      <MDBCol md="8" style={{
          padding: "0px",
          height: "500px"
        }}>
        <MapWithAMakredInfoWindow googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnmGzOiSJeXAFo2uFsEDOa92cYcT7waO0&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style = {{ height: `100%` }}/>} containerElement={<div style = {{ height: `500px` }}/>} mapElement={<div style = {{ height: `100%` }}/>}/>
      </MDBCol>

      <MDBCol md="4" style={{
          padding: "0px"
        }} className="border  border-grey">
        <div hidden="hidden" className="block-example border-bottom border-grey">
          <input className="form-control mt-3 mb-3" style={{
              margin: "10px",
              width: "90%"
            }} type="text" placeholder="Search" aria-label="Search"/>
        </div>

        <MDBContainer style={{
            backgroundColor: "white",
            height: "500px",
            overflowY: "scroll"
          }}>

          {
            arrMarker.map((items, index) => <MDBRow className="mb-3 mt-3 border-bottom border-grey">

              <MDBCol tag="a" onClick={() => {
                  onToggleOpen(index)
                }}>
                <h5 className="font-weight-bold mb-3">{items.title}</h5>
                <p className="grey-text">
                  {items.information}
                </p>
              </MDBCol>
            </MDBRow>)
          }

        </MDBContainer>
      </MDBCol>
    </MDBRow>

  </MDBContainer>);
}

export default Blog
