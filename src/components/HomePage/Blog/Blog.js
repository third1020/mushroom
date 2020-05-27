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
  MDBCardBody,
  MDBAnimation
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
  const [isOpenInfoMarker7, setisOpenInfoMarker7] = useState(false);
  const [reRender, setreRender] = useState(0);

  const [arrMarker, setarrMarker] = useState([
    {
      title: "3 เมืองในสหรัฐอเมริกาทำประชามติยกเลิกสถานะสารเสพติดของสารไซโลไซบิน (Psilocybin)",
      information: `3 เมือง 2 รัฐในสหรัฐอเมริกาได้แก่เดนเวอร์ รัฐโคโลราโด, โอ๊คแลนด์และซานตาครูซ รัฐแคลิฟอร์เนียได้ผ่านการทำประชามติยกเลิกสถานะสารเสพติดของสารไซโลไซบิน (Psilocybin) และได้ผ่านการลงคะแนนเสียงโดยสภาเมืองแล้ว`,
      information2: `เดนเวอร์ (รัฐโคโลราโด), โอ๊คแลนด์และซานตาครูซ (รัฐแคลิฟอร์เนีย)`,
      linkUrl: "https://edition.cnn.com/2020/01/30/us/santa-cruz-mushrooms-psychedelics-trnd/index.html?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
      linkUrl2: "www.edition.cnn.com",
      lat: 37.1931243,
      lng: -123.796161,
      isOpenInfoMarker: isOpenInfoMarker0
    }, {
      title: "บริษัทคอมแพสและศูนย์วิจัยฯ มหาวิทยาลัยจอห์นฮอปกินส์แถลงเข้าสู่ระยะที่ 2 ของการทดลองทางคลีนิคสารไซโลไซบิน ในผู้ป่วยภาวะซึมเศร้า",
      information: "บริษัทคอมแพส (COMPASS) ร่วมกับศูนย์วิจัยไซคีเดลิกและความตระหนักรู้แห่งมหาวิทยาลัยจอห์นฮอปกินส์ (John Hopkins) ได้เข้าสู่ระยะที่ 2 การวิจัยเชิงทดลองทางคลีนิคเกี่ยวกับประสิทธิภาพของสารไซโลไซบิน (Psilocybin) ในการรักษาผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา ซึ่งมีผู้เข้าร่วม 216 คน จากทั่วทุกมุมโลก",
      information2: "มหาวิทยาลัยจอห์นฮอปกินส์",
      linkUrl: "https://www.fiercebiotech.com/biotech/compass-raises-80m-to-take-magic-mushroom-drug-toward-phase-3",
      linkUrl2: "www.fiercebiotech.com",
      lat: 39.3299013,
      lng: -76.6380272,
      isOpenInfoMarker: isOpenInfoMarker1
    }, {
      title: "7 คนดังที่เคยใช้หรือมีประสบการณ์กับสารไซโลไซบิน (Psilocybin)",
      information: "CONSCIOUS FLOW ได้รวบรวมบทสัมภาษณ์และข้อมูลของ 7 บุคคลผู้มีชื่อเสียงไม่ว่าจะเป็นศิลปิน นักแสดง นักวิทยาศาสตร์หรือแม้แต่นักนวัตกรในสหรัฐอเมริกา ที่เคยใช้หรือมีประสบการณ์กับสารไซโลไซบิน (Psilocybin) หรือเห็ดไซโลไซบ์ (Psilocybe Mushroom) ไว้ที่นี่ ที่เดียว",
      information2: "ประเทศสหรัฐอเมริกา",
      linkUrl: "https://www.businesswire.com/news/home/20191122005452/en/FDA-grants-Breakthrough-Therapy-Designation-Usona-Institutes",
      linkUrl2: "www.businesswire.com",
      lat: 43.0067909,
      lng: -102.7499493,
      isOpenInfoMarker: isOpenInfoMarker2
    }, {
      title: "สถาบันอูโซนาได้รับการรับรองจากองค์การอาหารและยาแห่งชาติสหรัฐอเมริกาสำหรับ “การค้นพบครั้งใหญ่” โดยงานวิจัยการใช้สารไซโลไซบิน (Psilocybin) ในการรักษาภาวะซึมเศร้า",
      information: "สถาบันอูโซนา (Usona Institute) ได้รับการรับรองสำหรับ “การค้นพบการบำบัดรักษาครั้งใหญ่” จากองค์การอาหารและยาแห่งชาติสหรัฐอเมริกาโดยงานวิจัยการใช้สารไซโลไซบิน (Psilocybin) ในการรักษาภาวะซึมเศร้า ซึ่งเป็นแห่งที่ 2 ต่อจากบริษัทคอมแพส (COMPASS)",
      information2: "สถาบันอูโซนา",
      linkUrl: "https://www.businesswire.com/news/home/20191122005452/en/FDA-grants-Breakthrough-Therapy-Designation-Usona-Institutes",
      linkUrl2: "www.businesswire.com",
      lat: 43.006787,
      lng: -89.4201122,
      isOpenInfoMarker: isOpenInfoMarker3
    }, {
      title: "ศูนย์วิจัยฯ ราชวิทยาลัยลอนดอนแถลงว่าสารไซโลไซบิน (Psilocybin) จะสามารถนำไปใช้เพื่อทดแทนยาต้านเศร้าได้ภายใน 5 ปี",
      information: "ศูนย์วิจัยไซคีเดลิแห่งราชวิทยาลัยลอนดอน (Imperial College London) แถลงว่าสารไซโลไซบิน (Psilocybin) จะสามารถวิจัยและพัฒนายาที่สามารถทดแทนยาต้านเศร้า (Antidepressant) ซึ่งปัจจุบันใช้ในการรักษาภาวะซึมเศร้าและภาวะที่ผิดปกติทางจิตเวชอื่นๆ ได้ภายใน 5 ปี",
      information2: "ราชวิทยาลัยลอนดอน",
      linkUrl: "https://www.independent.co.uk/news/health/magic-mushroom-depression-psychedelic-drug-mental-health-antidepressant-big-pharma-imperial-lsd-dmt-a8929796.html",
      linkUrl2: "www.independent.co.uk",
      lat: 51.4987997,
      lng: 0.1748772,
      isOpenInfoMarker: isOpenInfoMarker4
    }, {
      title: "ทุกสิ่งที่คุณควรรู้เกี่ยวกับประสบการณ์กับเห็ดไซโลไซบ์",
      information: "CONSCIOUS FLOW ได้รวบรวมข้อมูลเบื้องต้นเกี่ยวกับการมีประสบการณ์กับเห็ดไซโลไซบ์ (Psilocybe Mushroom) ณ เมืองอัมสเตอร์ดัม ประเนเธอแลนด์ ซึ่งเป็นเมืองที่สามารถซื้อและขาย แห้วเห็ดไซโลไซบ์ได้อย่างเสรี และไม่ผิดกฎหมาย",
      information2: "เมืองอัมสเตอร์ดัม",
      linkUrl: "https://dutchreview.com/culture/society/truffles-in-the-netherlands-everything-you-need-to-know-for-a-psychedelic-trip-in-2020/",
      linkUrl2: "www.dutchreview.com",
      lat: 52.3547498,
      lng: 4.8339211,
      isOpenInfoMarker: isOpenInfoMarker5
    }, {
      title: "อนาคตของเห็ดไซโลไซบ์สำหรับการบำบัดรักษาทางการแพทย์ ในแคนาดา",
      information: "ด็อกเตอร์บรูซ โทบิน นักจิตบำบัดและศาสตราจารย์มหาวิทยาลัยวิกตอเรีย (University of Victoria) กำลังผลักดันกฎหมายให้สามารถใช้สารไซโลไซบิน (Psilocybin) เพื่อการรักษาผู้ป่วยระยะสุดท้ายที่มีภาวะเครียด ภาวะซึมเศร้า หรือภาวะผิดปกติทางจิตเวชอื่นๆแทรกซ้อน (End of life distress) ซึ่งมีจำนวนผู้ป่วยมากกว่า 3,000 คนต่อปี",
      information2: "มหาวิทยาลัยวิกตอเรีย",
      linkUrl: "https://globalnews.ca/news/6291447/medical-psychedelics-canada/",
      linkUrl2: "www.globalnews.ca",
      lat: 48.4634067,
      lng: -123.3116935,
      isOpenInfoMarker: isOpenInfoMarker6
    }, {
      title: "ผู้เชี่ยวชาญหลายฝ่ายเรียกร้องให้รัฐบาลออสเตรเลียอนุญาตให้ใช้สารไซโลไซบินเพื่อการบรรเทาปัญหาสุขภาพจิตในช่วงการระบาดของ COVID-19",
      information: "องค์กร Mind Medicine Australia ลงความเห็นว่ายาไซคีเดลิกจากสารไซโลไซบิน (Psilocybin) จะสามารถช่วยในการบรรเทาปัญหาทางด้านสุขภาพจิตของประชาชนที่กำลังแยกตัว (Isolation) เพื่อยับยั้งหรือป้องกันการแพร่ระบาดของไวรัสโคโรน่าสายพันธุ์ใหม่ (COVID-19) ที่กำลังแพร่ระบาดอยู่ทั่วโลก",
      information2: "ประเทศออสเตรเลีย",
      linkUrl: "https://www.ladbible.com/news/news-calls-for-australian-government-to-allow-mdma-for-mental-health-help-20200426",
      linkUrl2: "www.ladbible.com",
      lat: -33.8473567,
      lng: 150.6517965,
      isOpenInfoMarker: isOpenInfoMarker7
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
    Oldarr[7].isOpenInfoMarker = false;
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
    Oldarr[7].isOpenInfoMarker = false;

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
        case 7:
          Oldarr[7].isOpenInfoMarker = !Oldarr[7].isOpenInfoMarker
          setarrMarker(Oldarr);
          const objcenter7 = {
            lat: Oldarr[7].lat,
            lng: Oldarr[7].lng
          }
          setdefaultCenter(objcenter7);
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
      <p>
        <MDBIcon icon="map-marker-alt grey-text mr-2" />{props.information2}
      </p>
      <hr/>
      <MDBIcon icon="globe grey-text mr-2" /><a href={props.linkUrl} target="_black">
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
        return (
          <MDBAnimation reveal type="tada">
          <Marker position={{
            lat: items.lat,
            lng: items.lng
          }} onClick={() => onToggleOpen(index)} icon={{
            url: require('./maps.png')
          }} name="marker name">
          {
            items.isOpenInfoMarker && (<InfoWindow onCloseClick={() => onCloseMarker(index)}>
              <InfoMarker title={items.title} linkUrl={items.linkUrl} linkUrl2={items.linkUrl2} information={items.information} information2={items.information2} id={index}/>
            </InfoWindow>)

          }
        </Marker>
        </MDBAnimation>
      )
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
                <p className="grey-text">
                  <MDBIcon icon="map-marker-alt grey-text mr-2" />{items.information2}
                </p>
                <MDBIcon icon="globe grey-text mr-2" /><a href={items.linkUrl} target="_black">
                  {items.linkUrl2}
                </a>
              </MDBCol>
            </MDBRow>)
          }

        </MDBContainer>
      </MDBCol>
    </MDBRow>

  </MDBContainer>);
}

export default Blog
