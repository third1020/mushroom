import React, {Component} from 'react';
import {
  MDBLightbox,
  MDBContainer,
  MDBMask,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBView,
  MDBModalBody,
  MDBIframe,
  MDBModalFooter,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBCardBody
} from 'mdbreact';

import image1 from '../../../assets/griffiths.jpeg';
import image2 from '../../../assets/Robin.jpg';
import image3 from '../../../assets/katerina.jpg';

import './Research.css'

class Researcher extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    presentation: [
      {
        src: image1,
        name: "ด็อกเตอร์ โรแลนด์ อาร์ กริฟฟริท์ส (Roland R. Griffiths, Ph.D.)",
        title: 'ด็อกเตอร์ โรแลนด์ อาร์ กริฟฟริท์ส (Roland R. Griffiths, Ph.D.) – นักเภสัชวิทยาคลีนิกและประธานศูนย์วิจัยไซคีเดลิกและความตระหนักรู้ แห่งมหาวิทยาลัยจอห์น ฮอปกินส์, สหรัฐอเมริกา',
        description: 'Explanation of the psilocybin eduction mystical experience seem to provided a modal systems to regular and prospective investigation of these awakening experiences, further research we surely reviewed underline by logical mechanism compassion … and more importantly because such as experiences are found rational relative to moral and the understanding for the research may altimetry prove to be crucial to the very survival of our species',
        linkVideo: "81-v8ePXPd4",
        descriptionVideo: 'ด็อกเตอร์ โรแลนด์ อาร์ กริฟฟริท์ส ได้รับเชิญให้เป็นผู้พูด ในหัวข้อ The science of psilocybin and its use to relieve suffering ในงาน MEDTED 2015 ณ เมืองแคลิฟอร์เนีย, สหรัฐอเมริกา ด็อกเตอร์ วิลเลียม ริชาร์ดได้เปิดเผยถึงแนวทางการใช้ยาไซคีเดลิก ในการสร้างคุณค่าทางจิตใจ อารมณ์ ความรู้สึก และถ่ายทอดประสบการณ์ที่ได้จากการศึกษาความเปลี่ยนแปลงโดยตรงจากผู้ป่วย โดยเฉพาะอย่างยิ่งผู้ในป่วยระยะสุดท้าย',
        Ref: "https://www.imperial.ac.uk/psychedelic-research-centre"
      }, {
        src: image2,
        name: "ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริส (Robin Carhart-Harris, Ph.D.)",
        title: 'ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริส (Robin Carhart-Harris, Ph.D.) ศาสตราจารย์ประจำภาควิชาวิทยาศาสตร์สมองและประธานศูนย์วิจัยไซคีเดลิก แห่งมหาวิทยาลัยอิมพีเรียล คอลเลจ ลอนดอน, สหราชอาณาจักร',
        description: 'The launch of our new Centre for Psychedelic Research is a watershed moment in the renaissance of psychedelic research.',
        linkVideo: "MZIaTaNR3gk",
        descriptionVideo: 'ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริส ได้รับเชิญให้เป็นผู้พูด ในหัวข้อ Psychedelic: Lifting the veil ในงาน TEDxWarwick 2016 ณ เมืองวอร์ริค, สหราชอาณาจักร ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริสได้เปิดเผยภาพการทำงานของสมอง ในระหว่างที่ศึกษาการใช้ยาไซคีเดลิก ซึ่งเขาผ่านการทดสอบประสิทธิภาพของยาใหม่ทางคลินิกระยะที่ 1 ในการศึกษาประสิทธิภาพของสารไซโลไซบินในการรักษาภาวะซึมเศร้า ทั้งนี้ศูนย์วิจัยไซคีเดลิกฯ ได้รับการสนับสนุนการวิจัยจากบริษัท COMPASS Pathways อีกด้วย',
        Ref: "https://www.imperial.ac.uk/psychedelic-research-centre"
      }, {
        src: image3,
        name: "ด็อกเตอร์ แคทเธอรินา มาลีเอสเกีย (Ekaterina Malievskaia, MD. MScPH.)",
        title: 'ด็อกเตอร์ แคทเธอรินา มาลีเอสเกีย (Ekaterina Malievskaia, MD. MScPH.) Chief Innovation Officer และผู้ร่วมก่อตั้งบริษัท COMPASS Pathways',
        description: 'We have created COMPASS to improve patients’ access to innovation in mental health. Through our personal experiences, we have learned how challenging it could be to find the right treatment and right expertise in time. We also learned that it could make all the difference in the outcomes. We walked that path so others don’t have to.',
        linkVideo: "JMRGiAdLQBs",
        descriptionVideo: 'บริษัท COMPASS Pathways ได้ร่วมมือกับมหาวิทยาลัยคิงส์ คอลเลจ ลอนดอน ในการศึกษาการใช้ยาไซคีเดลิก ซึ่งผ่านการทดลองทางคลินิกระยะที่ 1 ในการศึกษาประสิทธิภาพของสารไซโลไซบินในการรักษาผู้ป่วยภาวะซึมเศร้า',
        Ref: "https://compasspathways.com"
      }

    ]
  };

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render() {
    return (<MDBContainer>
      <h2 className='h1 text-center text-uppercase font-weight-bold mt-5 mb-3 mt-5'>
        นักวิจัยที่กล่าวถึงความเป็นไปได้ของสารไซโลไซบิน
      </h2>
      <div id="setimage">

          {
            this.state.presentation.map((items, index) => {
              return (
                <div className="mt-5">
                <MDBRow>
                <MDBCol md="12">
                <a onClick={this.toggle(index + 1)}>
                  <div className="mb-4">
                    <center>

                    <MDBView hover="hover" rounded="rounded">

                      <img className="img-fluid" src={items.src} alt=""/>

                        <MDBMask overlay="white-slight" className="waves-light"/>

                    </MDBView>
                    </center>
                  </div>
                  </a>
                  </MDBCol>
                  <MDBCol md="12">

                  <h4 className="font-weight-bold dark-grey-text mb-3 p-0">
                    {items.name}
                  </h4>

                    <p className="font-weight-bold text-primary mb-3">"{items.description}"</p>

                     <MDBIframe src={`https://www.youtube.com/embed/${items.linkVideo}`}/>

                   <p className="font-weight-bold mt-3">{items.descriptionVideo}</p>


<div>อ้างอิง : <a href={items.Ref} target="_black">{items.Ref} </a></div>

              </MDBCol>
              </MDBRow>
              <hr></hr>
              </div>
            )
            })
          }

      </div>

    </MDBContainer>);
  }
}

export default Researcher;
