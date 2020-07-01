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
import image1 from '../../assets/News3/1.jpg';
import image2 from '../../assets/News3/2.jpg';
import image3 from '../../assets/News3/3.jpg';
const News3 = () => {
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
          3. สถาบันยูโซนา (Usona Institute) ได้รับการกำหนดให้เป็น “การค้นพบการบำบัดรักษาที่ก้าวหน้า” จากองค์การอาหารและยาแห่งชาติสหรัฐอเมริกา (FDA) สำหรับงานวิจัยในการใช้สารไซโลไซบิน (Psilocybin) เพื่อการบำบัดรักษาภาวะซึมเศร้า
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ณ เมืองเมดิสัน รัฐวิสคอนซิล
          <a href="https://www.usonainstitute.org/" target="_black">
            <u>สถาบันยูโซน่า (Usona Institute)</u>
          </a>
          ได้รับการกำหนดให้เป็น
          <a href="https://www.fda.gov/patients/fast-track-breakthrough-therapy-accelerated-approval-priority-review/breakthrough-therapy" target="_black">
            <u>“การค้นพบการบำบัดรักษาที่ก้าวหน้า”</u>
          </a>
          จากองค์การอาหารและยาแห่งสหรัฐอเมริกา (FDA) สำหรับงานวิจัยในการใช้
          <a href="https://en.wikipedia.org/wiki/Psilocybin" target="_black">
            <u>สารไซโลไซบิน (Psilocybin)</u>
          </a>
          สารไซโลไซบิน (Psilocybin) เพื่อการบำบัดรักษา
          <a href="https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007" target="_black">
            <u>ภาวะซึมเศร้า (Major Depressive Disorder: MDD)</u>
          </a>
        </p>
        <p>
          โดยรางวัลนี้ได้เสริมสร้างภาพลักษณ์และความมุ่งมั่นขององค์การอาหารและยาในการส่งเสริมโครงการที่ศึกษา วิจัยหรือพัฒนายาโดยสารไซโลไซบินในการรักษาภาวะซึมเศร้าที่มีประสิทธิภาพ
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; การยกระดับให้สารไซโลไซบินในการค้นพบการบำบัดที่ก้าวหน้าสำหรับภาวะซึมเศร้า เป็นการยอมรับ ความต้องการทางการแพทย์ที่ไม่ได้รับการยอมรับจากประชาชนในวงกว้างและศักยภาพในการศึกษา วิจัยและพัฒนาที่ยอดเยี่ยมมากกว่าแนวทางการรักษาที่มีอยู่แล้วในปัจจุบัน และสนับสนุนภารกิจของสถาบันยูโซน่าเพื่อพัฒนากระบวนทัศน์การรักษาแบบปฏิวัติวงกา เพื่อมุ่งสู่การอนุมัติตัวยาชนิดใหม่จากสารไซโลไซบิน
        </p>
        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image2} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4 mb-3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; “ผลลัพธ์จากการศึกษาก่อนหน้านี้แสดงให้เห็นถึงศักยภาพที่น่าทึ่งของสารไซโลไซบินในการรักษาผู้ป่วยภาวะซึ มเศร้าอย่างชัดเจน ซึ่งตอนนี้ทางสถาบันกำลังพยายามที่จะยืนยันผลลัพธ์ที่ได้จากการวิจัยทางคลินิกของตัวเอง สิ่งที่แตกต่างออกไปอย่างแท้จริงคือการรับรองจากองค์การอาหารและยาว่าภาวะซึมเศร้า (MDD) นั้นไม่ได้มีเพียงแค่จำนวนประชากรส่วนน้อยของผู้มีภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา หากแต่แสดงถึงความต้องการทางการแพทย์ที่ยังไม่ได้รับการพิสูจน์ และข้อมูลที่มีอยู่ชี้ให้เห็นว่าสารไซโลไซบินอาจจะปรับปรุงแนวทางการบำบัดรักษาทางคลินิกจากแนวทางการ รักษาที่มีอยู่แล้วในปัจจุบัน”
          <a href="https://www.psychiatry.wisc.edu/staff/raison-charles/" target="_black">
            <u>นายชาร์ล เรสัน</u>
          </a>
        </p>
        <p>
          ผู้อำนวยการการวิจัยทางคลินิกและการแปลความงานวิจัยที่สถาบันยูโซนากล่าว
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“เนื่องจากไซโลไซบินมีความซับซ้อนมาก และยูโซนากำลังอยู่ในกำหนดแผนการใหม่ การที่เกิดปฏิสัมพันธ์อันดีนี้จะทำให้แน่ใจว่าสถาบันยูโซนาและองค์การอาหารและยา นั้นมีความเห็นตรงกันในแนวทางการพัฒนาแนวทางปฏิบัติที่ดีที่สุดที่ยอมรับได้”
        </p>
        <p>
          สถานะใหม่นี้เกิดขึ้นหลังจากการเข้าสู่การทดลองทางคลินิกระยะที่ 2 ของยูโซน่า
          <a href="https://clinicaltrials.gov/ct2/show/NCT03866174" target="_black">
            <u>“PSIL201”</u>
          </a>
          ซึ่งจะประกอบไปด้วยอาสาสมัครประมาณ 80 คนจาก 7 หน่วยวิจัยที่ตั้งอยู่ทั่วสหรัฐอเมริกา ขณะนี้หน่วยวิจัย 2 แห่งจาก 7 แห่งกำลังทำการสรรหาอาสาสมัครและคาดว่าจะเปิดใช้งานได้ภายในไตรมาสแรกของปี ค.ศ. 2020
        </p>
        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image3} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“เนื่องจากไซโลไซบินมีความซับซ้อนมาก และยูโซนากำลังอยู่ในกำหนดแผนการใหม่ การที่เกิดปฏิสัมพันธ์อันดีนี้จะทำให้แน่ใจว่าสถาบันยูโซนาและองค์การอาหารและยา นั้นมีความเห็นตรงกันในแนวทางการพัฒนาแนวทางปฏิบัติที่ดีที่สุดที่ยอมรับได้”
        </p>
        <p>
          แม้ว่าในปัจจุบันจะมีแนวทางการรักษาภาวะซึมเศร้าอยู่หลายวิธี แต่การค้นพบการบำบัดรักษาที่ก้าวหน้าว่าสารไซโลไซบินอาจจะปรับปรุงแนวทางการบำบัดรักษาทางคลินิกจา กแนวทางการรักษาที่มีอยู่แล้วในปัจจุบัน สารไซโลไซบินสามารถเสนอกระบวนทัศน์ใหม่ที่มี
          <a href="https://www.who.int/substance_abuse/terminology/psychoactive_substances/en/" target="_black">
            <u>สารที่ออกฤทธิ์ต่อจิตและประสาท</u>
          </a>
          ในระยะสั้นก่อให้เกิดการเ ปลี่ยนแปลงในจิตสำนึก และสามารถบรรเทาอาการของภาวะซึมเศร้าในระยะยาวได้
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; โรคซึมเศร้าเป็นสาเหตุของการพิการอันดับต้นๆ ของโลกซึ่งส่งผลกระทบต่อผู้คนกว่า 300 ล้านคนทั่วโลก ด้วยผลกระทบที่อาจเกิดขึ้นในวงกว้าง การค้นพบการบำบัดรักษาที่ก้าวหน้านี้แสดงให้เห็นถึงก้าวสำคัญในงานวิจัยด้านสุขภาพจิตและสำหรับผู้ป่วยที่ ทุกข์ทรมาณจากภาวะซึมเศร้า
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;สถาบันยูโซน่าเป็นองค์กรวิจัยทางการแพทย์ที่ไม่หวังผลกำไร (Medical Research Organization: MRO)
          <a href="https://en.wikipedia.org/wiki/501(c)(3)_organization" target="_black">
            <u>501(c)(3)</u>
          </a>
          ที่ดำเนินงานและสนับสนุนการวิจัยทั้งชั้นพรีคลินิก และการวิชัยทางคลินิก เพื่อเสริมสร้างความเข้าใจเกี่ยวกับผลกระทบของสารไซโลไซบิน โดยมุ่งเน้นไปที่การบรรเทาภาวะซึมเศร้าและภาวะวิตกกังวลในผู้ป่วยไม่ตอบสนองต่อแนวทางการรักษาในปัจจุ บันซึ่งไม่เพียงพอในการบรรเทาทุกข์และการมอบคุณภาพชีวิตที่ดีขึ้น
        </p>
        แหล่งอ้างอิง:
        <br/>
        <a href="https://www.fiercebiotech.com/biotech/compass-raises-80m-to-take-magic-mushroom-drug-toward-phase-3" target="_black">
          <u>https://www.fiercebiotech.com/biotech/compass-raises-80m-to-take-magic-mushroom-drug-toward-phase-3</u>
        </a>

      </MDBCol>
    </MDBRow>
  </MDBCardBody>)
}

export default News3;
