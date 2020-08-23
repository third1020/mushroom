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
import image1 from '../../assets/News5/1.jpg';
import image2 from '../../assets/News5/2.jpg';
import image3 from '../../assets/News5/3.jpg';
import image4 from '../../assets/News5/4.jpg';
import image5 from '../../assets/News5/5.jpg';
import image6 from '../../assets/News5/6.jpg';
const News5 = () => {
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
        <p className="font-weight-bold text-justify mt-4 mb-3">
          5. ทรัฟเฟิลในเนเธอร์แลนด์ ทุกสิ่งที่คุณควรรู้สำหรับทริปไซคีเดลิกในปี ค.ศ. 2020
        </p>

        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ยินดีต้อนรับสู่คำแนะนำเกี่ยวกับการบริโภค
          <a href="https://en.wikipedia.org/wiki/Magic_truffle" target="_black">
            <u>“ทรัฟเฟิล (Truffles)”</u>
          </a>
          ในเนเธอร์แลนด์ คุณเคยได้รับคำแนะนำหรือไม่ว่าในระหว่างการเดินทางไปเมืองอัมสเตอร์ดัม คุณควรจะลองบริโภคทรัฟเฟิลไปด้วย และบางทีคุณอาจจะยังไม่ได้รับคำแนะนำเรื่องอื่นๆ ดังนั้นเราจึงได้รวบรวมทุกสิ่งที่คุณควรรู้เมื่อคุณมาถึงเมืองอัมสเตอร์ดัม ประเทศเนเธอแลนด์ไว้ที่นี่ ที่เดียว
        </p>
        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://en.wikipedia.org/wiki/Psychoactive_drug" target="_black">
            <u>ยาที่ออกฤทธิ์ต่อจิตและประสาท์</u>
          </a>
          สามารถเป็นตัวกลางในการยกระดับจิตวิญญาณของเรา ยาบางชนิดสังเคราะห์ขึ้นโดยมนุษย์ เช่น
          <a href="https://en.wikipedia.org/wiki/MDMA" target="_black">
            <u>ยาMDMA</u>
          </a>
          และยาอื่นๆ เป็นยาจากธรรมชาติ เช่น
          <a href="https://en.wikipedia.org/wiki/Cannabis_(drug)" target="_black">
            <u>ยากัญชา</u>
          </a>
          บางชนิดถูกใช้เพื่อการเฉลิมฉลอง เช่น
          <a href="https://en.wikipedia.org/wiki/Ethanol" target="_black">
            <u>เอทิลแอลกอฮอล์</u>
          </a>
          และบางชนิดถูกตีตรา เช่น
          <a href="https://en.wikipedia.org/wiki/Lysergic_acid_diethylamide" target="_black">
            <u>ยาLSD</u>
          </a>
          หากไม่คำนึงถึงสารเคมีที่เป็นส่วนประกอบในยาแต่ละชนิดแล้ว สังคมต่างก็ตีตรายาทั้งหมดเหล่านี้ภายใต้คำจำกัดความเดียวกันนั่นก็คือ “ยาเสพติด”
        </p>
        <p className="text-justify">
          ทรัฟเฟิลเป็นยาที่ออกฤทธิ์ต่อจิตและประสาทที่อยู่ภายใต้ภาพลักษณ์ “ยาเสพติด” และผิดกฎหมายในประเทศส่วนใหญ่ไม่ว่าจะเป็นสหรัฐอเมริกา นอร์เวย์ สหราชอาณาจักร เยอรมนี ออสเตรเลีย เบลเยียม และในอีกหลากหลายประเทศ แต่เมื่อคุณมาที่เมืองอัมสเตอร์ดัม มันจะกลายเป็นเรื่องที่สุดแสนจะธรรมดาของคนดัตช์มากที่จะบริโภคทรัฟเฟิล
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image2} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4 mb-3 px-4">
          ทรัฟเฟิลคืออะไร?
        </p>
        <p className="mt-4 mb-3">
          ทรัฟเฟิลเป็นผลพลอยได้จาก
          <a href="https://en.wikipedia.org/wiki/Psilocybin_mushroom" target="_black">
            <u>เห็ดไซโลไซบ์ (Magic Mushroom)</u>
          </a>
          หรือเรียกว่า “แห้ว” ที่เรารู้จักกันดี ทรัฟเฟิลและเห็ดไซโลไซบ์มักใช้สลับกันได้แม้ว่าจะมีความแตกต่างกันเล็กน้อย โดยทรัฟเฟิลเติบโตใต้ดินและไม่ทำลายดิน ในขณะที่เห็ดจะงอกขึ้นเหนือพื้นดิน ซึ่งทั้งสองชนิดนี้ต่างผลิต
          <a href="https://www.who.int/substance_abuse/terminology/psychoactive_substances/en/" target="_black">
            <u>สารที่ออกฤทธิ์ต่อจิตและประสาท</u>
          </a>
          ประสบการณ์โดยตรงจากผู้ทดลองบริโภค
          <a href="https://dutchreview.com/culture/society/truffles-in-the-netherlands-everything-you-need-to-know-for-a-psychedelic-trip-in-2020/" target="_black">
            <u>Dutchreview</u>
          </a>
        </p>
        <p className="text-justify">
          แสดงให้เห็นว่าผลข้างเคียงของการบริโภคทรัฟเฟิลมักจะอ่อนกว่าผลข้างเคียงของการบริโภคเห็ดไซโลไซบ์ ซึ่งจะลุ่มลึกและเข้มข้นมากกว่า อย่างไรก็ตามเนื่องจากสารประกอบทางเคมีของทรัฟเฟิลและเห็ดไซโลไซบ์เหมือนกัน จึงไม่ได้มีความแตกต่างในเชิงคุณภาพกันมากนัก หากมีเหตุผลที่เป็นไปได้ว่าทำไมทรัฟเฟิลถึงมีฤทธิ์รุนแรงกว่าอาจเป็นเพราะปริมาณที่บริโภคเข้าไป ดังนั้นการบริโภคทรัฟเฟิลจึงมีความเป็นมาตรฐานมากขึ้น คราวนี้เราจะดูกันว่าทำไมถึงเป็นเรื่องสำคัญที่ควรทราบเกี่ยวกับความแตกต่างระหว่างเห็ดไซโลไซบ์และทรัฟเฟิ ลในประเทศเนเธอร์แลนด์ในภายหลัง
        </p>
        <p className="px-4">
          ทรัฟเฟิลและเห็ดไซโลไซบ์ ผลกระทบคืออะไร?
        </p>
        <p className="px-4">
          ทรัฟเฟิลและเห็ดไซโลไซบ์มีสารประกอบที่เรียกว่า
          <a href="https://en.wikipedia.org/wiki/Psilocybin" target="_black">
            <u>สารไซโลไซบิน (Psilocybin)</u>
          </a>
        </p>
        <p className="text-justify">
          ซึ่งช่วยกระตุ้นการการหลังสาร
          <a href="https://psychology.wikia.org/wiki/Serotonin" target="_black">
            <u>เซโรโทนิน (Serotonin)</u>
          </a>
          ในสมอง การบริโภคทรัฟเฟิลในเนเธอร์แลนด์สามารถทำให้ผู้เสพรู้สึกอุ่นใจ สงบสุขและใคร่ครวญอย่างลึกซึ้ง สีและลวดลายทางเรขาคณิตมีความชัดเจนยิ่งขึ้น
        </p>
        <p className="text-justify">
          โดยผู้บริโภคบางคนกล่าวว่าผลข้างเคียงของการบริโภคเป็นอาการคลื่นไส้ ซึ่งการออกฤทธิ์ตลอดช่วงเวลาในทริปไซคีเดลิกนั้นจะใช้เวลาประมาณ 4-6 ชั่วโมง แต่อย่างไรก็ตามเวลามักจะบิดเบี้ยวในขณะที่ฤทธิ์ยายังคงอยู่ โดยมันขึ้นอยู่กับปริมาณของทรัฟเฟิลและอารมณ์หรือสภาวะที่ผู้ใช้ในระหว่างที่บริโภคอยู่ บางคนรับมือกับสิ่งนี้ได้ดี แต่บางคนก็ตื่นตระหนกโดยเชื่อว่าตนเองติดอยู่ในห้วงเวลาที่ไม่สิ้นสุด ในแนวคล้ายๆกันกับคนที่พูดว่า “เวลาเยียวยาทุกคน” ในขณะที่ต้องเจอกับผลข้างเคียงที่ไม่ดี เราจะไม่บอกคุณว่า “มันแค่ทริป ไม่ต้องตกใจ” สิ่งที่คุณทำได้คือผ่านมันไปให้ได้และมีเพื่อนที่ไว้ใจได้คอยทำให้คุณใจเย็นและคอยดูแลคุณตลอดเวลาที่คุณบริโ ภคทรัฟเฟิล
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image3} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4 px-4">
          ลองปรับเปลี่ยนทัศนคติ<br/>
          เห็ดไซโลไซบ์ได้รับการพิสูจน์แล้วว่ามีประสิทธิภาพการรักษาที่ล้ำลึก
          <a href="http://www.imperial.ac.uk/psychedelic-research-centre/about-us/people/" target="_black">
            <u>ดร. โรสลิน วัตต์</u>
          </a>
          จากสารไซโลไซบิน หรือ MDMA
        </p>
        <p>
          นักจิตวิทยาคลินิก แห่งราชวิทยาลัยลอนดอน (Imperial College London)<br/>
          เป็นหนึ่งในนักวิจัยชั้นนำที่ศึกษาวิจัยเกี่ยวกับสารไซโลไซบิน<br/>
          เขาอธิบายว่าสมองมีความละเอียดอ่อนมากขึ้นในขณะที่ใช้ยา<br/>
        </p>
        <p>
          <MDBIcon className="fa fa-quote-left pr-2"/>เราคิดว่านี่เป็นสาเหตุที่ผู้เข้าร่วมการศึกษาวิจัยจำนวนมากสามารถออกมาจากกฎเกณฑ์ต่างๆได้หลังการศึกษาพวกเขามักจะอธิบายความสามารถในการมองเห็น รู้สึกและทำสิ่งต่างๆ ในรูปแบบใหม่<MDBIcon className="fa fa-quote-right mx-2"/>
        </p>
        <p className="px-4">
          คุณจะบริโภคทรัฟเฟิลได้อย่างไร? ทรัฟเฟิลรับประทานได้แต่มีรสชาติที่ค่อนข้างแย่ พวกเขาเคยอธิบายให้ฉันฟังว่า
        </p>
        <p className="text-justify">
          “เหมือนเคี้ยวถั่วที่เก่าและนิ่มแล้วถูด้วยดิน” โชคร้ายทรัฟเฟิลไม่สามารถกลืนได้ทันที เพื่อที่สารไซโลไซบินจะสามารถออกฤทธิ์ต่อจิตและประสาทได้อย่างมีประสิทธิภาพ คุณต้องเคี้ยวมันช้าๆ ก่อนที่จะกลืน แต่มันอาจเป็นความคิดที่ดีมากหากจะผสมทรัฟเฟิลให้เข้ากับมันฝรั่งทอดหรือวางลงไปบนหน้าพิซซ่า
        </p>
        <p className="text-justify px-4">ช่องโหว่ทางกฎหมายเมื่อทรัฟเฟิลเป็นสิ่งผิดกฎหมาย ดังนั้นคุณจะสามารถซื้อทรัฟเฟิลในเนเธอร์แลนด์ได้หรือไม่?
        </p>
        <p className="text-justify">
          ชาวดัตช์พยายามเป็นอย่างมากที่สุดเท่าที่จะทำได้เพื่อลดความเป็นอาชญากรรมในการใช้ยาโดยการทำให้เป็นเ รื่องส่วนตัวของแต่ละบุคคลและไม่ใช่เรื่องของกฏข้อบังคับของทางรัฐ อย่างไรก็ตามในปี ค.ศ. 2008 มีการประท้วงเพื่อต่อต้านสารที่ออกฤทธิ์ต่อจิตและประสาทขึ้น หลังจากที่เด็กผู้หญิงคนหนึ่งกระโดดออกจากหน้าต่างขณะที่มีผลข้างเคียงจากการบริโภคยาที่ออกฤทธิ์ต่อจิตแ ละประสาท พ่อแม่ของหญิงสาวคนดังกล่าวตำหนิรัฐบาลเนเธอร์แลนด์เพราะกฎหมายในประเทศเนเธอแลนด์นั้น ยาที่ออกฤทธิ์ต่อจิตและประสาทนั้นถูกกฎหมาย หลังจากนั้นนักการเมืองหลายคนเชิญชวนให้มีห้ามการขายทรัฟเฟิลและเห็ดไซโลไซบ์ รายการสินค้าของเห็ดไซโลไบซ์ถูกห้ามภายใต้กฎหมายในแต่ละเมือง แต่มีประเภทหนึ่งที่ได้รับการยกเว้น นั่นก็คือ “ทรัฟเฟิล” นั่นเอง จึงเป็นเหตุผลที่ว่าทำไมคุณยังสามารถซื้อทรัฟเฟิลอย่างถูกกฎหมายในประเทศเนเธอร์แลนด์และท่องเที่ยวไปใ น
          <a href="https://en.wikipedia.org/wiki/Psychedelic_experience" target="_black">
            <u>ทริปไซคีเดลิก</u>
          </a>

          ที่เมืองอัมสเตอร์ดัม
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image4} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="font-weight-bold mt-4">
          คุณจะสามารถซื้อทรัฟเฟิลได้ที่ไหน?
        </p>
        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทรัฟเฟิลในเนเธอร์แลนด์สามารถซื้อได้จากร้านสมาร์ทช็อป (ซึ่งต่างจากร้านกาแฟ) สมาร์ทช็อปเปิดในปี ค.ศ. 1993 และจำหน่ายสินค้ามากมายเช่น เครื่องดื่มสมุนไพรและวิตามิน อีกไม่นานพวกเขาก็กลายเป็นที่รู้จักเมื่อขายทรัฟเฟิล เช่นเดียวกับการขายกัญชาในร้านกาแฟในเมืองอัมสเตอร์ดัม ร้านขายทรัฟเฟิลในเนเธอร์แลนด์ต่างก็มีชื่อและคำอธิบายที่ไร้สาระหรือชวนขำขัน ยกตัวอย่างเช่น Mexicana’s, Dragons gynamite หรือ Tampanensis เป็นต้น ทางที่ดีควรถามเจ้าของร้านเพื่อขอคำแนะนำว่าควรซื้อประเภทไหน หรือจะดีมากหากไปซื้อพร้อมกันกับเพื่อนที่มีประสบการณ์ที่คุณเชื่อใจและรู้ขีดจำกัดของคุณ
        </p>
        <p className="px-4">
          สมาร์ทช็อปสำหรับการซื้อทรัฟเฟิลในอัมสเตอร์ดัม
        </p>

        <ol>
          <li>Kokopelli อยู่ติดกันกับย่านโคมแดงใน Warmoestraat คุณจะพบกับร้านสมาร์ทช็อปที่น่าสนใจมาก แม้ว่าคุณจะไม่สนใจการบริโภคทรัฟเฟิล ร้านนี้ก็ยังคุ้มค่าที่คุณจะเข้าไปช็อปปิ้ง</li>
          <li>Mediamatic Fabriek ที่นี่คุณสามารถเรียนรู้กระบวนการเพาะปลูกทรัฟเฟิลอย่างแท้จริง Mediamatic เสนอเวิร์คช็อป (Workshop) เกี่ยวกับการให้ความรู้ในการการเพาะทรัฟเฟิลทุกๆ 2-3 เดือน โดยสามารถลงทะเบียนเพื่อรับจดหมายข่าวของพวกเขาเพื่อดูว่าครั้งที่กำหนดการณ์ครั้งต่อไปจะเ ป็นเมื่อไร</li>
          <li>Tatanka Smartshop Amsterdam ร้านสมาร์ทช็อปที่ขนาดใหญ่และกว้างขวาง และมีพนักงานคอยให้ความช่วยเหลือและให้ความรู้คุณ</li>
        </ol>

        <p>
          ในขณะเดียวกันทรัฟเฟิลก็สามารถหาซื้อทางออนไลน์ได้จากเว็บไซต์เช่นเว็บไซต์
          <a href="https://www.trufflemagic.com/" target="_black">
            <u>Truffle Magic</u>
          </a>
        </p>

        <p className="px-4">
          ควรบริโภคในปริมาณเท่าไหร่?
        </p>
        <p className="px-4">
          เราขอแนะนำให้แต่ละท่านบริโภคปริมาณระหว่าง 5-10 มิลลิกรัม
        </p>
        <p>
          ซึ่งทรัฟเฟิลในเนเธอร์แลนด์มักจะขายในปริมาณ 15 หรือ 20 มิลลิกรัม แต่ละกล่องมีตัวบ่งชี้ถึงระดับความเข้มข้น แต่ละกล่องจะแบ่งช่วงตามราคาแต่โดยทั่วไปมีราคาอยู่ที่ระหว่าง 10 ยูโรและ 40 ยูโร
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image5} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>

        <p className="font-weight-bold mt-4">
          สิ่งที่ควรทำหรือสิ่งที่ไม่ควรทำ ในระหว่างคุณบริโภคทรัฟเฟิล (อยู่ระหว่างทริปไซคีเดลิก)
        </p>
        <ul>
          <li>ไม่ควรทำสิ่งที่เพื่อนของฉันทำไปแล้วนั่นคือการไปที่พิพิธภัณฑ์ภาพวาดของแวนโก๊ะ ภาพวาดสุดงงงวยของแวนโก๊ะ ไม่น่าจะทำให้จิตใจของคุณสงบนิ่ง ในขณะที่ผู้เข้าชมพิพิธภัณฑ์กำลังจ้องมองคุณขณะที่คุณพยายามทำตัวสงบเสงี่ยมตามนโยบายห้ามพูด คุยในพิพิธภัณฑ์</li>
          <li>ควรร่วมบริโภคกับคนที่คุณอยู่ด้วยแล้วรู้สึกสบายใจมากๆ และไว้วางใจ</li>
          <li>ไม่ควรบริโภคถ้าหากสภาพจิตใจคุณในขณะนั้นยังแย่อยู่</li>
          <li>ควรบริโภคก็ต่อเมื่อคุณอยู่ในสภาพแวดล้อมที่ปลอดภัยหรือเงียบสงบ เช่น อพาร์ทเมนต์หรือป่าไม้แสนร่มรื่นหรือสวนสาธารณะ</li>
          <li>ไม่ควรตื่นตระหนก ถ้ารู้สึกว่าผลข้างเคียงเริ่มรุนแรงมากเกินไปให้ คุณควรบอกเพื่อนสักคนหายใจเข้าลึกๆ ทำซ้ำแล้วบอกกับตัวเองว่ามันจะดีขึ้นในไม่ช้า่</li>
          <li>ควรรับประทานผลไม้หรือน้ำผึ้งถ้าคุณต้องการลดระดับความเข้มข้นของทรัฟเฟิลเพราะเป็นที่รู้กันของชาวดัตช์ว่าน้ำตาล
            <a href="http://www.foodnetworksolution.com/wiki/word/0638/dextrose-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%81%E0%B8%8B%E0%B9%8C%E0%B9%82%E0%B8%97%E0%B8%A3%E0%B8%AA" target="_black">
              <u>เดกซ์โทรส</u>
            </a>
            ช่วยลดผลข้างเคียงของทรัฟเฟิลได้</li>
          <li>ควรมีเพื่อนคนที่ไม่ได้บริโภคที่สามารถคอยดูแลคุณได้ในขณะที่คุณยังอยู่ในระหว่างทริปไซคีเดลิกอยู่</li>
        </ul>
        <p className="px-4">
          จากประเด็นข้างต้น เราจะเป็นคนดูแลที่ดีได้อย่างไร
        </p>
        <p>
          ให้เลือกเพื่อนหนึ่งคนในกลุ่มที่ยังมีสติสัมปชัญญะดีในขณะที่เพื่อนของคุณกำลังบริโภคอยู่ต่อไปนี้เป็นคำแนะนำดีๆ สำหรับผู้ที่จะบริโภค
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image6} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="px-4 mt-4 font-weight-bold">
          การไมโครโดสยาไซคีเดลิกในประเทศเนเธอร์แลนด์
        </p>
        <p className="px-4">
          หากคุณยังไม่แน่ใจว่าการบริโภคทรัฟเฟิลเหมาะกับคุณหรือไม่
        </p>
        <p>
          เราขอแนะนำให้คุณเริ่มกับทรัฟเฟิลในเนเธอร์แลนด์ด้วย
          <a href="https://en.wikipedia.org/wiki/Microdosing" target="_black">
            <u>วิธีการไมโครโดส (Microdosing)</u>
          </a>
          วิธีนี้คุณสามารถทดสอบความสามารถในการบริโภคสารที่ออกฤทธิ์ต่อจิตและประสาทได้อย่างปลอดภัย การบริโภคในปริมาณเล็กน้อยนั้นถูกบันทึกไว้ว่าเป็นประโยชน์อย่างมากและการบริโภคครั้งแรกมีประโยชน์เกือ บทุกครั้งงานวิจัยชิ้นหนึ่งที่มหาวิทยาลัยจอนส์ ฮอปกินส์ (Johns Hopkins) ในเมืองบัลติมอร์แสดงให้เห็นว่าการบริโภคเห็ดวิเศษ
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5367557/%E0%B8%83/" target="_black">
            <u>ช่วยลดอาการภาวะวิตกกังวลของผู้ป่วยระยะสุดท้าย</u>
          </a>
          และนำไปสู่การพัฒนาด้านอารมณ์และความเป็นอยู่ที่ดีขึ้นมากยิ่งขึ้น
          <a href="https://www.theguardian.com/society/2019/jul/13/walter-white-microdosing-magic-mushrooms-grief" target="_black">
            <u>ผู้บริโภครายหนึ่ง</u>
          </a>
          แสดงให้เห็นว่าการใช้ไมโครโดสช่วยให้ความสามารถในการรับมือกับความโศกเศร้าของการสู ญเสียลูกของเขาได้อย่างดีขึ้นอย่างมาก เธอกล่าวว่า “ในวันที่ฉันบริโภคแบบไมโครโดส ใจของฉันรู้สึกเปิดกว้างและอิสระมากขึ้น ฉันรู้สึกใกล้ชิดกับธรรมชาติมากขึ้น มันสวยงามมากขึ้น และฉันรู้สึกว่าตนเองอยู่กับปัจจุบันมากยิ่งขึ้นในเวลาที่ได้อยู่ใกล้ชิดกับครอบครัวของฉัน และสำหรับอารมณ์ตนเอง ฉันรู้สึกว่ามีแนวโน้มที่จะเริ่มสนทนากับคนแปลกหน้าบ่อยขึ้น ปริมาณยาน้อยมากเกินไปกว่าที่จะก่อให้เกิดผลข้างเคียงที่เห็นได้อย่างชัดเจน มันเป็นความรู้สึกของการเปิดรับพลังบวกเข้ามามากขึ้น และฉันสามารถสังเกตเห็นรายละเอียดที่ผ่านฉันไปก่อนหน้านี้ได้ดีมากขึ้น” นอกจากนี้ยังเป็นเรื่องที่น่าสังเกตว่ามี
          <a href="https://dutchreview.com/culture/stuff/scientists-in-the-netherlands-are-microdosing-psilocybin/" target="_black">
            <u>ชาวดัตช์ที่ใช้ยา LSD หรือยาที่ออกฤทธิ์ต่อจิตและประสาทเพื่อเพิ่มความคิดสร้างสรรค์และประสิทธิภาพในการทำงาน</u>
          </a>

        </p>
        <p className="px-4">
          เมื่อบริโภคทรัฟเฟิล ผู้ใช้ได้รับความรู้เกี่ยวกับยา
        </p>
        <p>
          การบริโภคทรัฟเฟิลในเนเธอร์แลนด์สามารถเป็นประสบการณ์ที่เปิดหูเปิดตาและสร้างผลกระทบในที่ดีระ ยะยาวได้ อย่างไรก็ตามคุณจำเป็นที่พึงตระหนักถึงผลข้างเคียงที่อาจเกิดขึ้นอยู่เสมอและควรบริโภคในปริมาณที่เหมาะส ม แต่หลังจากได้รับความรู้จากเราไปแล้ว อย่าอายที่จะได้เพิ่มประสบการณ์ใหม่ๆ เข้ามาในชีวิต
        </p>

        แหล่งอ้างอิง:
        <br/>
        <a href="https://dutchreview.com/culture/society/truffles-in-the-netherlands-everything-you-need-to-know-for-a-psychedelic-trip-in-2020/" target="_black">
          <u>https://dutchreview.com/culture/society/truffles-in-the-netherlands-everything-you-need-to-know-for-a-psychedelic-trip-in-2020/</u>
        </a>

      </MDBCol>
    </MDBRow>
  </MDBCardBody>)
}

export default News5;