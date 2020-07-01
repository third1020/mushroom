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
import image1 from '../../assets/News1/1.jpg';
import image2 from '../../assets/News1/2.jpg';
import image3 from '../../assets/News1/3.jpg';
import image4 from '../../assets/News1/4.jpg';
const News1 = () => {
  return (<MDBCardBody style={{
      paddingTop: "120px"
    }}>
    <MDBRow>
      <MDBCol md="12">
        <MDBCard reverse="reverse">
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image1} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </MDBCard>

        <p className="font-weight-bold mt-4 mb-3">
          1.หลายมลรัฐกำลังพิจารณาอนุญาตให้สามารถใช้เห็ดไซโลไซบ์ (Magic Mushroom) ได้อย่างถูกกฎหมาย
        </p>
        <p>
          ปัจจุบันเมืองเดนเวอร์และเมืองโอ๊คแลนด์ รัฐแคลิฟอร์เนีย ได้อนุญาตให้ลดโทษสำหรับการใช้สารไซโลไซบิน โดยในวันที่ 4 มิถุนายน 20 ผลการลงมติอย่างเป็นเอกฉันท์ ณ สภาเมืองโอ๊คแลนด์ รัฐแคลิฟอร์เนีย ส่งผลให้
          <a href="https://en.wikipedia.org/wiki/Psilocybin" target="_black">
            <u>สารไซโลไซบิน (Psilocybin)</u>
          </a>
          หรือ
          <a href="https://en.wikipedia.org/wiki/Psilocybin_mushroom" target="_black">
            <u>เห็ดไซโลไซบ์ (Magic Mushroom)</u>
          </a>
          ได้รับการลดโทษทางกฎมาย เช่นเดียวกันกับเมืองเดนเวอร์ที่ผ่านการลงคะแนนเสียงในแบบเดียวกันก่อนหน้านั้นไม่ถึงหนึ่งเดือน ขณะนี้รัฐบาลทั้งในระดับท้องถิ่นและมลรัฐต่างมองหาวิธีการที่จะเดินตามแนวทางดังกล่าวนี้ ประกอบกับการสนับสนุนจากนักเรียกร้องสิทธิมนุษยชนในมลรัฐโอเรกอนและรัฐแคลิฟอร์เนีย ให้มีการลดโทษทางกฎหมายสำหรับการใช้สารไซโลไซบิน และในปีนี้หนึ่งในสมาชิกวุฒิสภาในรัฐไอโอวาก็เสนอนโยบายที่มีลักษณะคล้ายคลึงกัน
        </p>
        <MDBCard reverse="reverse">
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image2} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </MDBCard>
        <p className="font-weight-bold mt-4">
          ไม่นานมานี้ ณ กรุงวอชิงตัน ดีซี สมาชิกรัฐสภาพรรคเดโมแครต
          <a href="https://en.wikipedia.org/wiki/Psilocybin_mushroom" target="_black">
            <u>อเล็กซานเดรีย โอคาซิโอ-คอร์เทซจากรัฐนิวยอร์ก</u>
          </a>
        </p>
        <p>
          ได้เสนอกฎหมายที่อนุญาตให้นักวิจัยได้ทำการศึกษาประโยชน์ในเชิงบำบัดและการรักษาทางการแพทย์จากการใช้ สารไซโลไซบินและสารที่ออกฤทธิ์ต่อจิตและประสาทชนิดอื่นๆ ได้ง่ายขึ้นเช่นเดียวกันกับ
          <a href="https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide" target="_black">
            <u>แอลเอสดี</u>
          </a>
          ซึ่งสารไซโลไซบินจัดเป็น
          <a href="https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide" target="_black">
            <u>ยาประเภท 1 (schedule 1 drug)</u>
          </a>
          กล่าวคือ ขณะนี้ยังไม่มีการนำมาใช้ในทางการแพทย์ที่ได้รับการยอมรับ แต่มีแนวโน้มสูงที่จะถูกนำไปใช้ในทางที่ผิด อย่างไรก็ตามการนิรโทษกรรมสำหรับกรณีนี้ ก็ไม่ใช่การทำให้ถูกกฎหมายซะทีเดียว ณ เมืองเดนเวอร์และเมืองโอ๊คแลนด์จะมีการยกเลิกการใช้งบประมานของเทศบาลในการกำหนดบทลงโทษทางอาญา สำหรับผู้ที่มีอายุตั้งแต่ 21 ปีขึ้นไปที่ใช้หรือมีไว้ในครอบครองซึ่งสารไซโลไซบิน ทั้งนี้การจำหน่ายในเชิงพาณิชย์ยังถือว่าผิดกฎหมายอยู่ ซึ่งการลดทอนความเป็นอาชญากรรมของสารไซโลไซบิน เป็นการเปิดโอกาสให้นักวิจัยได้ศึกษาค้นคว้าความเป็นไปได้ของการนำมาใช้ประโยชน์ในเชิงบำบัดและการรักษาท างการแพทย์ ขณะที่มีข้อโต้แย้งว่าการเปิดโอกาสเช่นนี้อาจนำไปสู่อัตราการใช้สารเสพติดที่สูงขึ้น ซึ่งในปัจจุบันข้อมูลจาก
          <a href="https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide" target="_black">
            <u>องค์กรสมาพันธ์นโยบายยา (Drug Policy Aliance)</u>
          </a>
          ซึ่งเป็นองค์กรไม่แสวงหากำไรมุ่งมั่นที่จะยุติสงครามยาเสพติดระบุว่า การใช้ยาใดๆ ภายใต้หมวดหมู
          <a href="https://www.who.int/substance_abuse/terminology/psychoactive_substances/en/" target="_black">
            <u>“สารที่ออกฤทธิ์ต่อจิตและประสาท”</u>
          </a>
          (ซึ่งรวมถึงสารไซโลไซบิน) ภายใน 30 วันสุดท้ายระหว่างปี 2002 ถึง 2014 ยังอยู่ในระดับต่ำโดยเฉลี่ยปีละ 0.1% ของประชากรประเทศสหรัฐ
          <a href="https://ballotpedia.org/Noel_Gallo" target="_black">
            <u>โนเอล กัลโล</u>
          </a>
        </p>
        <p>
          สมาชิกสภาเทศบาลเมืองโอ๊คแลนด์ที่ให้การสนับสนุนมติของเมืองซึ่งลดโทษทางกฎหมายของพืชและเชื้อราที่มีสาร ออกฤทธิ์ต่อจิตและประสาทอื่นๆ โดยกล่าวว่า สารไซโลไซบินถูกใช้เป็นหลายพันปีเพื่อเป็นยารักษา ให้ความรู้ ก่อให้เกิดความคิดส้างสรรค์ และสร้างความสัมพันธ์เชิงจิตวิญญาณ ในปี 2017 เจเรมี่ เดเนียล ผู้ช่วยศาสตราจารย์ของวิทยาลัยเภสัชศาสตร์และสหเวชศาสตร์แห่งมหาวิทยาลัยเซาท์ดาโกตา
          <a href="https://www.usnews.com/best-colleges/south-dakota-state-3471" target="_black">
            <u>(South Dakota State University)</u>
          </a>
          ผู้ตีพิมพ์บทความงานวิจัยเกี่ยวกับ
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6007659/" target="_black">
            <u>ประสิทธิภาพของสารไซโลไซบินต่อการรักษาอาการที่ผิดปกติทางจิตเวช</u>
          </a>
          กล่าวว่างานวิจัยเกี่ยวกับไซโลไซบีนนั้นมีไม่มากพอเมื่อเทียบกับงานวิจัยของกัญชาที่ได้รับการรับรองอย่างถูกกฎหม ายในรัฐโคโลราโดและกรุงวอชิงตันในปี 2012 และขณะนี้ได้รับการรับรองสำหรับการใช้งานด้านสันทนาการใน 11 รัฐและสำหรับการใช้งานทางการแพทย์ใน 46 รัฐ ถึงกระนั้นเขากล่าวว่าการวิจัยแสดงให้เห็นว่าสารไซโลไซบีนอาจมีประโยชน์ในเชิงบำบัดและการรักษาทางการแพทย์
          <p>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“โดยรวมจากหลักฐานที่มีอยู่ในขณะนั้น (จากงานวิจัยของผม) ปรากฏว่า สารไซโลไซบิน (psilocybin) อาจเป็นสารที่ออกฤทธิ์ต่อจิตและประสาทที่มีแนวโน้มที่จะช่วยเหลือปัญหาสุขภาพจิตได้” เดเนียลกล่าว งานวิจัยแสดงให้เห็นถึงแนวโน้มการลดลงของอาการภาวะซึมเศร้า เช่นเดียวกับการลดลงของอัตราการฆ่าตัวตาย มีการพัฒนาไปในทางที่ดีของความผิดปกติของภาวะวิตกกังวลเช่น รวมถึงอาการความอยากแอลกอฮอล์และ
            <a href="https://en.wikipedia.org/wiki/Nicotine" target="_black">
              <u>สารนิโคติน</u>
            </a>
          </p>
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; “อย่างไรก็ตาม ผมก็ยอมรับว่ามาตรฐานในการควบคุมมีน้อยมากระหว่างการศึกษาวิจัยและการนำตัวยาจริงที่นำใช้กับผู้ป่วย” เขากล่าวเสริมว่าปัญหาสุขภาพมักเกี่ยวข้องกับปริมาณการใช้ที่สูงและ “การศึกษาอย่างต่อเนื่องเป็นสิ่งจำเป็นเพื่อที่เราจะสามารถรู้ได้อย่างแน่ชัดถึงประโยชน์ที่อาจเกิดขึ้นของยาตัวนี้”
        </p>
        <MDBCard reverse="reverse">
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image3} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </MDBCard>
        <p className="font-weight-bold mt-4">
          ผู้แทนสมาชิกรัฐสภาจากมลรัฐไอโอวา
          <a href="https://www.iowahouserepublicans.com/members/jeff-shipley/biography" target="_black">
            <u>นายเจฟ ชิพลีย์</u>
          </a>
        </p>
        <p>
          ผู้ยื่นร่างกฏหมายในเดือนกุมภาพันธ์เพื่อลดระดับความเป็นอาชญากรรมของสารไซโลไซบินในรัฐของตนเอง ยกประเด็น
          <a href="https://www.merriam-webster.com/dictionary/personal%20freedom" target="_black">
            <u>“เสรีภาพส่วนบุคคล”์</u>
          </a>

          ขึ้นเป็นหัวข้อการถกเถียงอีกเรื่อง พร้อมกับการตั้งคำถาม “รัฐบาลได้รับอำนาจในการควบคุมสารเหล่านี้มาจากที่ไหนกัน” นายชิพลีย์ กล่าวว่าประชาชนมีสิทธิ์ทดลองใช้ยาตราบใดที่พวกเขายอมรับผลกระทบที่ตามมา เขายังกล่าวถึง บทสนทนาที่เกิดขึ้นระหว่างเขากับคนที่ชีวิตเปลี่ยนแปลงไปหลังจากการใช้เห็ดไซโลไซบ์ (Magic Mushroom)
        </p>
        <p className="mx-4">
          “ผมเป็นใครไม่ทราบที่จะไปบอกพวกเขาว่าสิ่งนี้เป็นสิ่งที่ไม่ดีต่อตัวพวกเขาเอง” ชิพลีย์กล่าว นายชิพลีย์ได้ยื่นร่างกฎหมายฉบับที่สองซึ่งจะอนุญาตให้คณะกรรมการร้านขายยาระดับมลรัฐ สามารถจัดประเภทไซโลไซบิน (Psilocybin) ใหม่ได้ โดยจัดให้อยู่ในประเภทเดียวกันกับยา

        <a href="https://en.wikipedia.org/wiki/Ibogaine" target="_black">
          <u>ไอโบเกน</u>
        </a>
        และ
        <a href="https://en.wikipedia.org/wiki/MDMA" target="_black">
          <u>เอมดีเอมเอ</u>
        </a>
        เพื่อจุดประสงค์ทางการแพทย์ ด้วยหวังว่าคณะกรรมการการพิจารณาเกี่ยวกับร่างกฎหมายจะเป็นผู้จุดชนวนการถกปัญหาในประเด็นดังกล่าว
        </p>

        <MDBCard reverse="reverse">
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image4} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </MDBCard>
        <p className="mt-4">
          ในอีกทางหนึ่ง
        </p>
        <p>
      ผู้ที่ไม่เห็นด้วยกับมาตรการเหล่านี้ยังคงกังวลว่าแนวทางการลดทอนความเป็นอาชญากรรมจะเป็นการส่งเ
      สริมให้ผู้คนจำนวนมากใช้เห็ดไซโลไซบ์และสารไซโลไซบิน ในปริมาณที่เพิ่มขึ้น
      เนื่องจากประเทศกำลังเผชิญกับปัญหาการแพร่ระบาดของยาเสพติด ส่วนคนอื่นๆ เช่นอัยการเขต
      <a href="http://mccannfordenverda.com/about-beth" target="_black">
        <u>เบ็ธ แม็คแคน</u>
      </a>
      แห่งเมืองเดนเวอร์เชื่อว่าเป็นเรื่องสำคัญที่จะต้องเรียนรู้ผลกระทบของการใช้กัญชาได้ถูกต้องตามกฎหมายก่อนที่จะ
      ได้การลดโทษของการใช้เห็ดไซโลไซบ์
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“โคโลราโดยังอยู่ในช่วงเริ่มต้นของการบังคับใช้กฎหมายกัญชาและเรียนรู้ผลกระทบของการตัดสินใจนั้นในหลาย
          ๆ ด้าน” แม็คแคนบอกกับทาง US News ในแถลงการณ์ทางอีเมล์
          โดยเธอกล่าวเพิ่มเติมว่าเธอได้ให้การสนับสนุนการจัดทำบัตรลงคะแนนของเมืองเดนเวอร์ที่เรียกร้องให้คณะกรรมก
          ารด้านนโยบายได้ทำการประเมินผลกระทบของการลดระดับความเป็นอาชญากรรมของไซโลไซบิน
          แม้จะมีการคัดค้านการลงคะแนนเสียงครั้งแรก
          เธอก็บอกว่าเธอเคารพในเจตนารมณ์ของผู้มีสิทธิเลือกตั้งและอยู่ในระหว่างการหารือกับผู้นำเมืองคนอื่นๆ
          เพื่อพิจารณาต่อไปว่าจะปฏิบัติตามกฎหมายใหม่ได้อย่างไร
        </p>
        แหล่งอ้างอิง:
        <br/>
        <a href="https://www.usnews.com/news/best-states/articles/2019-06-14/states-consider-decriminalizing-magic-mushrooms" target="_black">
          <u>https://www.usnews.com/news/best-states/articles/2019-06-14/states-consider-decriminalizing-magic-mushrooms</u>
        </a>
        <br/>
        <a href="https://edition.cnn.com/2020/01/30/us/santa-cruz-mushrooms-psychedelics-trnd/index.html?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf" target="_black">
          <u>https://edition.cnn.com/2020/01/30/us/santa-cruz-mushrooms-psychedelics-trnd/index.html?utm_source=share&amp;utm_medium=ios_app&amp;utm_name=iossmf</u>
        </a>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>)
}

export default News1;
