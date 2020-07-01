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
        name: "Roland R. Griffiths, PhD.",
        title: 'ด็อกเตอร์ โรแลนด์ อาร์ กริฟฟริท์ส (Roland R. Griffiths, PhD.) – นักเภสัชวิทยาคลีนิกและประธานศูนย์วิจัยไซคีเดลิกและความตระหนักรู้ แห่งมหาวิทยาลัยจอห์น ฮอปกินส์, สหรัฐอเมริกา',
        description: 'ด็อกเตอร์ โรแลนด์ อาร์ กริฟฟริท์ส ได้รับเชิญให้เป็นผู้พูด ในหัวข้อ The science of psilocybin and its use to relieve suffering ในงาน MEDTED 2015 ณ เมืองแคลิฟอร์เนีย, สหรัฐอเมริกา ด็อกเตอร์ วิลเลียม ริชาร์ดได้เปิดเผยถึงแนวทางการใช้ยาไซคีเดลิก ในการสร้างคุณค่าทางจิตใจ อารมณ์ ความรู้สึก และถ่ายทอดประสบการณ์ที่ได้จากการศึกษาความเปลี่ยนแปลงโดยตรงจากผู้ป่วย โดยเฉพาะอย่างยิ่งผู้ในป่วยระยะสุดท้าย',
        linkVideo: "81-v8ePXPd4",
        Ref: "https://www.imperial.ac.uk/psychedelic-research-centre"
      }, {
        src: image2,
        name: "Robin Carhart-Harris, PhD.",
        title: 'ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริส (Robin Carhart-Harris, PhD.) ศาสตราจารย์ประจำภาควิชาวิทยาศาสตร์สมองและประธานศูนย์วิจัยไซคีเดลิก แห่งมหาวิทยาลัยอิมพีเรียล คอลเลจ ลอนดอน, สหราชอาณาจักร',
        description: 'ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริส ได้รับเชิญให้เป็นผู้พูด ในหัวข้อ Psychedelic: Lifting the veil ในงาน TEDxWarwick 2016 ณ เมืองวอร์ริค, สหราชอาณาจักร ด็อกเตอร์ โรบิน คาร์ฮาร์ท-แฮริสได้เปิดเผยภาพการทำงานของสมอง ในระหว่างที่ศึกษาการใช้ยาไซคีเดลิก ซึ่งเขาผ่านการทดสอบประสิทธิภาพของยาใหม่ทางคลินิกระยะที่ 1 ในการศึกษาประสิทธิภาพของสารไซโลไซบินในการรักษาภาวะซึมเศร้า ทั้งนี้ศูนย์วิจัยไซคีเดลิกฯ ได้รับการสนับสนุนการวิจัยจากบริษัท COMPASS Pathways อีกด้วย',
        linkVideo: "MZIaTaNR3gk",
        Ref: "https://www.imperial.ac.uk/psychedelic-research-centre"
      }, {
        src: image3,
        name: "Ekaterina Malievskaia, MD. MScPH.",
        title: 'ด็อกเตอร์ แคทเธอรินา มาลีเอสเกีย (Ekaterina Malievskaia, MD. MScPH.) Chief Innovation Officer และผู้ร่วมก่อตั้งบริษัท COMPASS Pathways',
        description: 'บริษัท COMPASS Pathways ได้ร่วมมือกับมหาวิทยาลัยคิงส์ คอลเลจ ลอนดอน ในการศึกษาการใช้ยาไซคีเดลิก ซึ่งผ่านการทดลองทางคลินิกระยะที่ 1 ในการศึกษาประสิทธิภาพของสารไซโลไซบินในการรักษาผู้ป่วยภาวะซึมเศร้า',
        linkVideo: "JMRGiAdLQBs",
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
        <MDBRow>
          {
            this.state.presentation.map((items, index) => {
              return (<MDBCol sm="12" lg="4">
                <a onClick={this.toggle(index + 1)}>
                  <div className="mb-4">

                    <MDBView hover="hover" rounded="rounded" className="z-depth-1-half mb-4">

                      <img className="img-fluid" src={items.src} alt=""/>

                      <a>
                        <MDBMask overlay="white-slight" className="waves-light"/>
                      </a>

                    </MDBView>

                    <h5 className="font-weight-bold dark-grey-text mb-3 p-0">
                      {items.name}
                    </h5>
                    <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                      {items.title}

                    </p>
                  </div>
                </a>
              </MDBCol>)
            })
          }
        </MDBRow>
      </div>
      <MDBModal size="xl" centered isOpen={this.state.modal1} toggle={this.toggle(1)}>
        <MDBModalBody className="mb-0 p-0">
            <MDBIframe src={`https://www.youtube.com/embed/${this.state.presentation[0].linkVideo}`}/>
        </MDBModalBody>
        <MDBModalFooter className='justify-content-center'>
          <p><MDBIcon icon='quote-left mr-1' />{this.state.presentation[0].description}<MDBIcon icon='quote-right mx-1' /></p>
          <div>อ้างอิง : <a href={this.state.presentation[0].Ref} target="_black">{this.state.presentation[0].Ref} </a></div>
          <MDBBtn color="primary" outline="outline" rounded="rounded" size="md" className="ml-4 " onClick={this.toggle(1)}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>

      <MDBModal size="xl" centered isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalBody className="mb-0 p-0">
            <MDBIframe src={`https://www.youtube.com/embed/${this.state.presentation[1].linkVideo}`}/>
        </MDBModalBody>
        <MDBModalFooter className='justify-content-center'>
          <p><MDBIcon icon='quote-left mr-1' />{this.state.presentation[1].description}<MDBIcon icon='quote-right mx-1' /></p>
          <div>อ้างอิง : <a href={this.state.presentation[1].Ref} target="_black">{this.state.presentation[1].Ref} </a></div>
          <MDBBtn color="primary" outline="outline" rounded="rounded" size="md" className="ml-4 " onClick={this.toggle(2)}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>

      <MDBModal size="xl" centered isOpen={this.state.modal3} toggle={this.toggle(3)}>
        <MDBModalBody className="mb-0 p-0">
            <MDBIframe src={`https://www.youtube.com/embed/${this.state.presentation[2].linkVideo}`}/>
        </MDBModalBody>
        <MDBModalFooter className='justify-content-center'>
          <p><MDBIcon icon='quote-left mr-1' />{this.state.presentation[2].description}<MDBIcon icon='quote-right mx-1' /></p>
          <div>อ้างอิง : <a href={this.state.presentation[2].Ref} target="_black">{this.state.presentation[2].Ref} </a></div>
          <MDBBtn color="primary" outline="outline" rounded="rounded" size="md" className="ml-4 " onClick={this.toggle(3)}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>


    </MDBContainer>);
  }
}

export default Researcher;
