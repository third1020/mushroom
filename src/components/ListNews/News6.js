import React from 'react';
import {
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBView,
  MDBCardBody,
  MDBBadge,
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBMask,
  MDBBox
} from 'mdbreact';
import image1 from '../../assets/News6/1.jpg';
import image2 from '../../assets/News6/2.jpg';
import image3 from '../../assets/News6/3.jpg';
const News6 = () => {
  return (<MDBCardBody style={{
      paddingTop: "120px"
    }}>
    <MDBRow>
      <MDBCol md="12">
        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image1} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4 mb-3">
          6.ผู้เชี่ยวชาญหลายฝ่ายเรียกร้องให้รัฐบาลออสเตรเลียให้ใช้สารไซโลไซบินเพื่อการรักษาภาวะผิดปกติทางจิตเวชในช่วงการระบาดของเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ (COVID-19)
        </p>
        <p className="px-4">หลายสัปดาห์ที่ผ่านมาของ
          <a href="https://www.publichealthontario.ca/-/media/documents/ncov/factsheet-covid-19-how-to-self-isolate.pdf?la=en" target="_black">
            <u>การกักตัว (self-isolating)</u>
          </a>
          ในออสเตรเลีย</p>
        <p>
          หลายคนต่างกำลังรู้สึกอึดอัดกับวิถีชีวิตแบบใหม่ของพวกเขา ผู้คนส่วนใหญ่ถูกบังคับให้ทำงานจากที่บ้านและกิจวัตรการออกกำลังกายของเราก็ถูกหยุดชะงักเพื่อให้แน่ใจว่าเ ราจะไม่แพร่กระจายเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ (COVID-19) ทำให้ผู้คนจำนวนมากกำลังมองหาแนวทางการบรรเทาทางด้านสุขภาพจิต ขณะที่เหล่าผู้เชี่ยวชาญกำลังเรียกร้องให้รัฐบาลออสเตรเลียผ่อนคลายกฎเกณฑ์ การใช้
          <a href="https://www.usonainstitute.org/" target="_black">
            <u>สารไซโลไซบิน (Psilocybin)</u>
          </a>
          และ
          <a href="https://www.usonainstitute.org/" target="_black">
            <u>MDMA (สารที่ออกฤทธิ์ต่อจิตและประสาทที่ในเห็ดไซโลไซบ์)</u>
          </a>
          ซึ่งเป็นสารประกอบที่สามารถนำมาใช้ในการรักษาผู้ป่วยมีอาการที่ผิดปกติจิตเวช
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image2} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4 mb-3 px-4">
          องค์กร Mind Medicine Australia (MMA)
        </p>
        <p>
          คิดว่ายาที่พัฒนาจากสารประกอบทั้งสองชนิดนี้อาจเป็นจุดเปลี่ยนในการช่วยเหลือผู้คนในการจัดการ กับปัญหาทางด้านสุขภาพจิตที่มีขึ้นมาในระหว่างช่วงการกักตัวหรือปัญหาทางด้านสุขภาพจิตที่กำลังเผชิญอยู
          <a href="https://mindmedicineaustralia.org/board/" target="_black">
            <u>นายแอนดรูว รอบบ์</u>
          </a>
          สมาชิกคณะกรรมการขององค์กร Mind Medicine Australia กล่าวกับสำนักข่าว ABC ว่า “มันคือนวัตกรรมที่สำคัญที่สุดในด้านสุขภาพจิตที่เราเคยเห็นในหลายทศวรรษ เราอาจจะบกพร่องในหน้าที่ของเรา ในฐานะประเทศและในฐานะรัฐบาลของประเทศนี้ หากเราไม่ได้ใช้โอกาสนี้เพื่อคว้าเทคโนโลยีนี้ไว้ และหลังจากนั้นเราก็จะมาสังเกตว่าเรานำเสนอในลักษณะใดที่สามารถสร้างประโยชน์กับประชากรชาวออสเต รเลียอย่างมาก”
        </p>
        <p>
          <MDBIcon className="fa fa-quote-left pr-2"/>เมื่อเราผ่านพ้นโรคระบาดครั้งนี้ จะมีผู้คนจำนวนนับหมื่นที่จำเป็นที่จะต้องได้รับการรักษาและช่วยเหลือ” ถึงอย่างนั้นทางองค์กรก็ไม่ต้องการให้ยาสองตัวนี้ถูกนำมาใช้ในเชิงสันทนาการ เนื่องจากอาจถูกนำไปใช้ในทางที่ผิดได้หากไม่ได้รับการควบคุมอย่างเข้มงวด อย่างไรก็ตามพวกเขากล่าวว่างานวิจัยเมื่อไม่นานมานี้แสดงให้เห็นว่าเป็นประโยชน์อย่างยิ่งต่อผู้ที่กำลังทรมาณ อยู่กับปัญหาสุขภาพจิต<MDBIcon className="fa fa-quote-right mx-2"/>
        </p>

        <p>
          งานวิจัยจากมหาวิทยาลัยฮาร์วาร์ดพบว่าระหว่าง 60 ถึง 80 เปอร์เซ็นต์ของผู้ที่มีภาวะซึมเศร้า
          <a href="https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007" target="_black">
            <u>(Major Depressive Disorder)</u>
          </a>
          หรือโรค
          <a href="https://www.mayoclinic.org/diseases-conditions/post-traumatic-stress-disorder/symptoms-causes/syc-20355967" target="_black">
            <u>Post Traumatic Stress Disorder (PTSD)</u>
          </a>
          มี
          <a href="https://en.wikipedia.org/wiki/Evidence-based_medicine" target="_black">
            <u>หลักฐานเชิงประจักษ์</u>
          </a>
          ของการการบรรเทาของอาการหลังจากใช้หนึ่งในสองชนิดของยา โรงพยาบาลเซนต์วินเซนต์ในเมลเบิร์น (Melbourn’s St Vincent’s Hospital) กำลังอยู่ในระหว่างการทดลองทางคลินิกเกี่ยวกับประสิทธิภาพการใช้ยาไซคีเดลิกต่อผู้ป่วยระยะสุดท้ายที่ถูกคุ กความโดยภาวะซึมเศร้าหรือภาวะวิตกกังวล
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image3} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="px-4">
          นายรอบบ์กล่าวอีกว่า
          <a href="https://adf.org.au/drug-facts/psychedelics/" target="_black">
            <u>ยาไซคีเดลิก</u>
          </a>
          จากสารไซโลไซบิน หรือ MDMA
        </p>
        <p>
          นั้นมีประสิทธิภาพมากกว่าแนวทางการรักษาที่มีอยู่ในปัจจุบัน “อัตราการบรรเทาอาการสำหรับผู้ที่ประสบปัญหาภาวะซึมเศร้าโดยใช้การรักษามาตรฐานของยา SSRIs และจิตบำบัดมีประสิทธิภาพเพียง 35 เปอร์เซ็นต์และอัตราการบรรเทาอาการโรค PTSD อยู่ในระดับต่ำกว่าที่ควรจะเป็น” รอบบ์กล่าวขึ้นระหว่างแถลงการณ์
        </p>

        แหล่งอ้างอิง:
        <br/>
        <a href="https://www.ladbible.com/news/news-calls-for-australian-government-to-allow-mdma-for-mental-health-help-20200426" target="_black">
          <u>https://www.ladbible.com/news/news-calls-for-australian-government-to-allow-mdma-for-mental-health-help-20200426</u>
        </a>

      </MDBCol>
    </MDBRow>
  </MDBCardBody>)
}

export default News6;
