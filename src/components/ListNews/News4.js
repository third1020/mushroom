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
import image1 from '../../assets/News4/1.jpg';
import image2 from '../../assets/News4/2.jpg';
import image3 from '../../assets/News4/3.jpg';
import image4 from '../../assets/News4/4.jpg';
import image5 from '../../assets/News4/5.jpg';
const News4 = () => {
  return (<MDBCardBody style={{
      paddingTop: "120px"
    }}>
    <MDBRow>
      <MDBCol md="12">
        <p className="font-weight-bold mt-4 mb-3">
          4. ศูนย์วิจัยไซคีเดลิกแห่งราชวิทยาลัยลอนดอน (Imperial College London) แถลงว่าสารไซโลไซบิน(Psilocybin) จะสามารถวิจัยและพัฒนายาที่สามารถทดแทนยาต้านเศร้าได้ภายใน 5 ปี
        </p>
        <p className="px-4">
          <a href="https://www.who.int/substance_abuse/terminology/psychoactive_substances/en/" target="_black">
            <u>สารที่ออกฤทธิ์ต่อจิตและประสาท</u>
          </a>
          อย่าง
          <a href="https://en.wikipedia.org/wiki/Psilocybin_mushroom" target="_black">
            <u>เห็ดไซโลไซบ์ (Magic Mushroom)</u>
          </a>
        </p>
        <p>
          อาจทำลายอำนาจการผูกขาดของบริษัทยาในตลาดที่สร้างกำไรมหาศาลจากการขายยารักษาภาวะซึมเศร้า หัวหน้าศูนย์วิจัยไซคีเดลิกแห่งแรกของโลกกล่าว
        </p>
        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image1} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="px-4 mt-4">ในรอบทศวรรษที่ผ่านมา
          <a href="https://www.independent.co.uk/news/health/antidepressant-prescriptions-nhs-cost-medicine-england-therapy-a8844731.html" target="_black">
            <u>ใบสั่งยารักษาภาวะซึมเศร้าได้เพิ่มขึ้นกว่า 2 เท่าในประเทศอังกฤษ</u>
          </a>
        </p>
        <p className="text-justify">
          ในจำนวนนี้มีผู้ใหญ่ราว 7 ล้านคนที่บริโภคยา และในตลาดโลกคาดว่าจะ
          <a href="https://www.alliedmarketresearch.com/antidepressants-drugs-market" target="_black">
            <u>มีมูลค่า 15.9 พันล้านเหรียญสหรัฐ</u>
          </a>
          หรือประมาณ 12.5 พันล้านปอนด์ภายในปี ค.ศ. 2023 ณ มหาวิทยาลัยอิมพีเรียลคอลเลจ ลอนดอน
          <a href="https://www.imperial.ac.uk/people/r.carhart-harris" target="_black">
            <u>ดร. โรบิน คาร์ฮาร์ต-แฮร์ริส</u>
          </a>
          หัวหน้าการทดลองทางคลีนิกครั้งแรกที่ทดสอบวิธีการบำบัดโดยใช้เห็ดไซโลไซบ์ ซึ่งถูกห้ามใช้ในปัจจุบันที่สหราชอาณาจักร เมื่อเปรียบเทียบกับ
          <a href="https://www.nhs.uk/conditions/antidepressants/" target="_black">
            <u>ยารักษาภาวะซึมเศร้า (Antidepressant)</u>
          </a>
          ในขณะที่เขาจะไม่ด่วนสรุปผลการทดลองทางคลินิก เขากล่าวว่าผู้เข้าร่วมการทดลองอธิบายถึงการแสดงออกของอารมณ์ขึ้นหลังจากได้รับการรักษาโดยสารไซโลไซ บินว่า “ปลดปล่อย” ซึ่งตรงข้ามกับรักษาภาวะซึมเศร้า ซึ่งผู้ป่วยมักจะบ่นเกี่ยวกับอารมณ์ที่เกิดขึ้นนั้นไว้ไม่ว่าจะเป็นบวกหรือลบว่า “รู้สึกเฉื่อยชา” นับเป็นครั้งแรกของการวิจัยจำนวนมากที่วางแผนไว้ภายใต้การควบคุมของศูนย์วิจัยไซคีเดลิกแห่งใหม่ที่มหาวิท ยาลัยอิมพีเรียลคอลเลจ ณ กรุงลอนดอน พื้นที่ว่างขนาดใหญ่ของวิทยาเขตแฮมเมอร์สมิธ (Hammersmith) ของราชวิทยาลัยลอนดอนจะเป็นที่ตั้งของห้องบำบัดรักษาซึ่งจะทำให้เป็นคลินิกวิจัยการรักษาด้วยยาไซคีเดลิก แห่งแรกของสหราชอาณาจักรและเป็น “ต้นแบบและแรงบันดาลใจ” ให้กับคลินิกเวชกรรมไซคีเดลิก (Psychedelic Clinic) ที่ได้รับใบอนุญาตในอนาคต
        </p>
        <p className="text-justify">
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

        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; การทดลองทางคลินิกของสารไซโลไซบินในการรักษาความผิดปกติของการรับประทานอาหารและการศึกษาผลกระทบของ
          <a href="https://en.wikipedia.org/wiki/N,N-Dimethyltryptamine" target="_black">
            <u>DMT</u>
          </a>
          ที่ทำให้เกิดอาการประสาทหลอนอย่างรุนแรงในสมองนั้นได้รับการวางแผนไว้เรียบร้อยแล้วตามเจตนารมณ์ของราชวิทยาลัยที่มีต่อศูนย์วิจัยฯ อย่างไรก็ตามการทดลองทางคลินิกนี้เป็นการศึกษาที่มีความก้าวหน้าที่สุดและมีแนวโน้มเป็นไปได้มากที่สุดสำห รับการทดลองในปัจจุบัน
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image2} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4 mb-3 px-4">
          ในปัจจุบันผู้เข้าร่วมประมาณ 60
        </p>

        <p className="text-justify">
          คนที่มีอาการภาวะซึมเศร้าในระดับปานกลางถึงระดับรุนแรงจะได้รับการรักษาด้วยสารไซโลไซบิน ร่วมกับการเข้ารับบำบัดกับนักจิตวิทยาคลินิก ผู้เข้าร่วมจะได้รับการทดลองแบบสุ่มเพื่อรับยาหลอกหรือ
          <a href="https://en.wikipedia.org/wiki/Escitalopram" target="_black">
            <u>ยาเอสซิตาโลแพรม (Escitalopram)</u>
          </a>

          โดยไม่มีนักวิจัยหรือผู้ป่วยที่รู้ว่าใครอยู่ในกลุ่มไหน โดยเอสซิตาโลแพรมเป็นยาประเภท SSRIs ซึ่งเป็นยาที่มีปริมาณมากที่สุดในตลาดยาที่ใช้ในการรักษาภาวะซึมเศร้า “ถ้าคุณถามคนที่รับยา
          <a href="https://www.mayoclinic.org/diseases-conditions/depression/in-depth/ssris/art-20044825" target="_black">
            <u>SSRIs</u>
          </a>
          ตามเวลาพวกเขามักจะพูดว่า “ฉันรู้สึกเฉื่อยชา” ซึ่งหมายความว่าทั้งอารมณ์เชิงลบและแง่บวกจะถูกระงับ” ดร. คาร์ฮาร์ท-แฮร์ริส กล่าวกับสำนักข่าวดิ อินดีเพนเดนท์ (The Independent) ว่า “หลังจากการเข้ารับบำบัดด้วยสารไซโลไซบิน พวกเขาพูดในทางตรงกันข้ามเลย พวกเขาพูดถึงการปลดปล่อยอารมณ์ การสร้างสัมพันธ์ทางอารมณ์ใหม่ และอารมณ์ที่สำคัญหลักๆ ก็ตอบสนองได้ดีกว่า” ทีมนักวิจัยใช้เครื่อง
          <a href="https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging" target="_black">
            <u>MRI</u>
          </a>

          สแกนเพื่อศึกษาผลกระทบของยาในสมองพบว่า มีการลดลงของการทำงานในส่วนประสานงานของสมอง ทำให้พวกเขารู้สึกผ่อนคลายมากขึ้น และช่วยให้อารมณ์พื้นฐานออกมามากขึ้น ตัวบ่งชี้อื่นๆ ก่อนหน้านี้คือผลข้างเคียงที่ “ยาออกฤทธิ์นานเป็นสองเท่ากว่าเอสซิตาโลแพร”เช่นเดียวกับการรักษาด้วยไซโลไซบิน และทำหน้าที่ได้เร็วกว่ายาต้านเศร้าเศร้าซึ่งใช้เวลานานเกือบเดือนในการเริ่มออกฤทธิ์หรือกลไกต่อสมอง อย่างไรก็ตามแนวทางการรักษานี้อาจไม่เหมาะสำหรับทุกคนในระหว่างการบำบัด ผู้ป่วยได้รับการกระตุ้นให้ติดตาม “ประสบการณ์การรักษา” โดยยาไซคีเดลิกที่เกิดขึ้นซึ่งอาจมีความชัดเจนเป็นอย่างมากและอาจต้องให้พวกเขาเผชิญหน้ากับความบอบช้ำ ทางจิตใจหรือประสบการณ์ที่ผ่านมา
        </p>
        <p className="font-weight-bold">
          ดร. คาร์ฮาร์ต-แฮร์ริสกล่าว
        </p>
        <p>
          <MDBIcon className="fa fa-quote-left pr-2"/>
          เราไม่เรียกมันว่า ‘ประสบการณ์ที่เลวร้าย’” “เราเรียกมันว่าเป็น ‘ประสบการณ์ท้าทายทางจิตวิทยา’ และเราก็บอกความจริงกับผู้เข้าร่วมว่ามันอาจเหมือนตกนรกเลยก็เป็นได้ อาจเป็นฝันร้ายเลยก็ได้ แต่เราก็เตรียมความพร้อมและรูปแบบหรือแนวทางการรักษาแบบนี้จำเป็นที่จะต้องให้คุณเผชิญหน้ากับปีศาจใ นตัวคุณเองนั่นแหละ
          <MDBIcon className="fa fa-quote-right mx-2"/>
        </p>
        <p className="text-justify">
          การรักษาด้วยสารที่ออกฤทธิ์ต่อจิตและประสาทอาจไม่น่าจะเหมาะสำหรับผู้ที่มีอาการทางจิต ซึ่งหน่วยงานกำกับดูแลจะต้องมีข้อมูล
          <a href="https://en.wikipedia.org/wiki/Evidence-based_medicine" target="_black">
            <u>หลักฐานเชิงประจักษ์</u>
          </a>
          ของคุณภาพ มาตรฐานและความปลอดภัยจากการทดลองทางคลินิก แต่มีหลักฐานเพียงเล็กน้อยที่ระบุว่ายาเหล่านี้มีความเสี่ยงเมื่อได้รับในปริมาณมาก หรือติดยาและนั่นอาจช่วยให้ยาไซคีเดลิกนี้ไปสู่ได้รับการรับรองที่รวดเร็วมากยิ่งขึ้น
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image3} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>

        <p className="text-justify mt-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โดยคุณสามารถเลือกหรือซื้อเห็ดไซโลไซบ์ๆ ในร้านค้าที่ถูกกฎหมายในสหราชอาณาจักรกระทั่งปี ค.ศ. 2005 มีการแก้ไขกฎหมายเพื่อปิดช่องว่างทางกฎหมายและทำให้ยาประเภทนี้เป็น
          <a href="https://www.aleretoxicology.co.uk/en/home/support/drug-classifications.html" target="_black">
            <u>ยาประเภท 1 (Class A drug)</u>
          </a>
          “ฉันจะจินตนาการว่าถ้าคุณมีเจ้ามือพนันรายหนึ่งที่เล่นพนัน มีอัตราต่อรองที่เป็นไปได้สูงมากว่า [การบำบัดรักษาด้วยยาไซคีเดลิก] นั้นจะได้รับอนุญาตในอีก 5 ถึง 10 ปีข้างหน้า หรืออาจเร็วกว่านี้”
          <br/>
          ดร.คาร์ฮาร์ต-แฮร์ริสกล่าว
          <br/>
          นั่นอาจทำให้ยาตัวนี้เป็นที่สนใจของอุตสาหกรรมยายักษ์ใหญ่ได้โดยเฉพาะอย่างยิ่งหากการทดลองแสดงให้เห็น ว่าการรักษาด้วยยาไซคีเดลิกจากสารไซโลไซบินมีประสิทธิภาพเหนือกว่า SSRIs
        </p>
        <p>
          “ผลกระทบของสิ่งนั้นมันน่ากลัวมากโดยส่วนตัวเวลาฉันนึกถึงอำนาจและอิทธิพลของบริษัทยารายใหญ่” ดร.คาร์ฮาร์ต-แฮร์ริสกล่าว
        </p>
        <p>
          “ผมนึกถึงว่าพวกเขาจะทำอะไรกับสิ่งนั้นหากมีความต้องการสาธารณะจำนวนมากของการบำบัดด้วยเห็ดไซโล ไซบ์ และไม่ใช่
          <a href="https://www.drugs.com/fluoxetine.html" target="_black">
            <u>ฟลูออกซิทีน (Fluoxetine)</u>
          </a>
          ?” ขณะเดียวกันก็เกิดกระแสนิยมที่ได้รับความนิยมมากขึ้นอย่าง
          <a href="https://en.wikipedia.org/wiki/Microdosing" target="_black">
            <u>การไมโครโดส</u>
          </a>
          สารไซโลไซบิน หรือ
          <a href="https://th.wikipedia.org/wiki/%E0%B9%81%E0%B8%AD%E0%B8%A5%E0%B9%80%E0%B8%AD%E0%B8%AA%E0%B8%94%E0%B8%B5" target="_black">
            <u>LSD</u>
          </a>

          ซึ่งหลักฐานเชิงประจักษ์ในปัจจุบันแสดงให้เห็นว่า เป็นการรวมกันของการบำบัดและประสบการณ์การใช้ยาไซคีเดดลิกที่มอบทางเลือกที่ดีที่สุดของทางเลือกที่ยั่ง ยืนกว่ายาต้านเศร้า
        </p>
        <p>
          <MDBIcon className="fa fa-quote-left pr-2"/>
          หากคุณระงับการใช้ยาในการบำบัด คุณจะเริ่มเห็นเหตุการณ์อันไม่พึงประสงค์ที่ได้รับรายงานในช่วง ค.ศ. 1960 เมื่อยาหลอนประสาทออกจากทดลองทางคลินิกและกลายเป็นที่นิยมในวงกว้าง” ดร.คาร์ฮาร์ต- แฮร์ริสกล่าวเสริม “ไม่มีใครต้องการให้ความผิดพลาดเหล่านั้นเกิดขึ้นอีกครั้ง
          <MDBIcon className="fa fa-quote-right mx-2"/>
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image4} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="px-4">
          <a href="https://www.kcl.ac.uk/people/james-rucker" target="_black">
            <u>ดร.เจมส์ รักเกอร์</u>
          </a>
        </p>

        <p className="text-justify">
          เป็นอีกหนึ่งในผู้ค้นคว้าเกี่ยวกับประโยชน์ของยาไซคีเดลิกที่สถาบันจิตเวชศาสตร์จิตวิทยาและประสาทวิทยา ณ ราชวิทยาลัยลอนดอน ทีมของราชวิทยาลัยกำลังรายงานผลการทดลองทางคลินิกทั้งสองครั้ง โดยครั้งแรกทำการศึกษาวิจัยว่าการรักษาโดยใช้สารไซโลไซบิน สำหรับ
          <a href="https://www.mayoclinic.org/diseases-conditions/depression/in-depth/treatment-resistant-depression/art-20044324" target="_black">
            <u>ผู้ป่วยผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา์</u>
          </a>

          ต้านเศร้า (Antidepressant) ที่ใช้อยู่ปัจจุบัน
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image5} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="text-justify mt-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          เขาบอกว่า “มีความเป็นไปได้ที่ยาดังกล่าวอาจได้รับใบอนุญาตโดยองค์การอาหารและยาภายในห้าปี แต่มันจะเป็นไปได้ก็ต่อเมื่อทุกอย่างเป็นไปตามแผนและคุณก็รู้ว่าหมายความว่ายังไงเกี่ยวกับแผนการ ที่ดีที่สุดที่ควรเกิดขึ้น” ในความคิดของ ดร.รักเกอร์ กระบวนการมีความคล้ายคลึงกับการรับรองของ
          <a href="https://www.drugs.com/illicit/ketamine.html" target="_black">
            <u>ยาเคตามีน (Ketamine)</u>
          </a>
          ซึ่งการทดลองครั้งแรกในภาวะซึมเศร้าเกิดขึ้นในปี ค.ศ. 1990 และยาที่ใช้เคตามีนเป็นเพื่อการแพทย์เพิ่งได้รับอนุญาตเท่านั้นในตอนนี้
        </p>
        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ซึ่งสารไซโลไซบินนั้นมีความเป็นไปได้สูงกว่ามากในการถูกนำไปใช้ในทางที่ผิดและการใช้ยาเกินขนาด แต่กลุ่มเฝ้าระวังยังคงต้องการการทดลองทาง
          <a href="https://aidsinfo.nih.gov/understanding-hiv-aids/glossary/570/phase-3-trial" target="_black">
            <u>คลินิกในระยะที่3</u>
          </a>

          ซึ่งไม่ได้เริ่มการทดลองทางคลินิกเลย “เช่นเดียวกับการรักษาทั้งหมด ยาพวกนี้จะเหมาะกับบางคนแต่ไม่ใช่สำหรับคนอื่นๆ เคล็ดลับก็เหมือนเช่นเคยคือพยายามที่จะแก้ปัญหานั้นให้ได้ก่อนรัฐบาล แต่เคล็ดลับดังกล่าวได้พิสูจน์แล้วว่าเป็นเรื่องที่ทำได้ยากโดยเฉพาะอย่างยิ่งในด้านจิตเวชศาสตร์” เขากล่าวกับสำนักข่าว ดิอินดีเพนเดนท์ (The Independent)
        </p>

        แหล่งอ้างอิง:
        <br/>
        <a href="https://www.independent.co.uk/news/health/magic-mushroom-depression-psychedelic-drug-mental-health-antidepressant-big-pharma-imperial-lsd-dmt-a8929796.html" target="_black">
          <u>https://www.independent.co.uk/news/health/magic-mushroom-depression-psychedelic-drug-mental-health-antidepressant-big-pharma-imperial-lsd-dmt-a8929796.html</u>
        </a>

      </MDBCol>
    </MDBRow>
  </MDBCardBody>)
}

export default News4;
