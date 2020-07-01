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
import image1 from '../../assets/News2/1.jpeg';
import image2 from '../../assets/News2/2.jpg';
import image3 from '../../assets/News2/3.jpg';
import image4 from '../../assets/News2/4.jpg';
import image5 from '../../assets/News2/5.jpeg';
const News2 = () => {
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
          2. บริษัทคอมพาสส์ (COMPASS) สามารถระดมเงินทุนได้มากกว่า 80 ล้านเหรียญดอลล่าสหรัฐเพื่อการวิจัยและพัฒนายาจากเห็ดไซโลไซบ์ (Magic Mushroom) เข้าสู่การทดลองทางคลินิกระยะที่ 3
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; บริษัทคอมพาสส์ (COMPASS)
          <a href="https://www.prnewswire.co.uk/news-releases/mental-health-care-company-compass-pathways-concludes-successful-series-b-investment-round-834771290.html" target="_black">
            <u>ระดมเงินทุน</u>
          </a>
          ได้มากกว่า 80 ล้านเหรียญสหรัฐเพื่อเตรียมการสำหรับศึกษาและวิจัยการบำบัดด้วย
          <a href="https://en.wikipedia.org/wiki/Psilocybin" target="_black">
            <u>สารไซโลไซบิน (Psilocybin)</u>
          </a>
          เข้าสู่การทดลองทางคลินิกระยะที่ 3 บริษัทนี้กำลังวิจัยและพัฒนายาโดยใช้สารออกฤทธิ์ต่อจิตและประสาทใน
          <a href="https://en.wikipedia.org/wiki/Psilocybin_mushroom" target="_black">
            <u>เห็ดไซโลไซบ์ (Magic Mushroom)</u>
          </a>
          เพื่อใช้ในการบำบัดหรือการรักษาทางการแพทย์
          <a href="https://en.wikipedia.org/wiki/Treatment-resistant_depression" target="_black">
            <u>ผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา</u>
          </a>

        </p>
        <p className="px-4">
          ไซโลไซบินได้รับการศึกษาในช่วงปี ค.ศ. 1960 แต่ได้มีการหยุดการวิจัยลงกลางคันในช่วงหลายทศวรรษที่ผ่านมา คณะทำงานที่ศึกษาวิจัยที่สถาบันการศึกษาหลายแห่งได้แก่
          <br/>มหาวิทยาลัยแห่งแคลิฟอร์เนีย (University of California) วิทยาเขตลอสแองเจลิส
          <br/>มหาวิทยาลัยนิวยอร์ก (University of New York)
          <br/>มหาวิทยาลัยจอนส์ฮอปกิ้นส์ (Johns Hopkins)
          <br/>ราชวิทยาลัยลอนดอน (Imperial College London)
          <br/>มหาวิทยาลัยซูริค (University of Zurich)
          <br/>ต่างช่วยกันรื้อฟื้นงานวิจัยที่จะช่วยดึงดูดความน่าสนใจของสารไซโลไซบินในช่วงไม่กี่ปีที่ผ่านมา และกำลังพยายามศึกษาลงลึกไปในระดับโมเลกุลเพื่อการสร้าง
          <a href="https://en.wikipedia.org/wiki/Evidence-based_medicine" target="_black">
            <u>หลักฐานเชิงประจักษ์</u>
          </a>
          ต่อประสิทธิภาพของ การบำบัดหรือการรักษาทางการแพทย์ของสารไซโลไซบินต่อผู้ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บริษัทคอมพาสส์ได้สานต่อเจตนารมณ์ของนักวิจัยเหล่านี้ โดยระดมเงินทุนได้เป็นจำนวน 31 ล้านเหรียญสหรัฐและได้ริเริ่มสร้างองค์ความรู้เกี่ยวกับความปลอดภัยของการบำบัดด้วยสารไซโลไซบินจา กอาสาสมัครซึ่งเป็นผู้ที่มีสุขภาพดี เมื่อใกล้สิ้นสุดช่วงของ
          <a href="https://vision-dmd.info/2b-trial-information/" target="_black">
            <u>การทดลองทางคลินิกระยะที่ 2b</u>
          </a>
          บริษัทสามารถระดมเงินทุนได้มากพอสำหรับการดำเนินงานในขั้นต่อไป
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การระดมทุนใน&nbsp;
          <a href="https://www.investopedia.com/terms/s/series-b-financing.asp" target="_black">
            <u>Series B</u>
          </a>
        </p>
        <p>
          จะเปิดโอกาสให้บริษัทคอมพาสส์สามารถทดลองทางคลีนิกได้มากยิ่งขึ้นที่ซึ่งจะส่งผลต่อรูปแบบของ
          <a href="https://www.investopedia.com/terms/s/series-b-financing.asp" target="_black">
            <u>Series B</u>
          </a>
          จะเปิดโอกาสให้บริษัทคอมพาสส์สามารถทดลองทางคลีนิกได้มากยิ่งขึ้นที่ซึ่งจะส่งผลต่อรูปแบบของ
          <a href="https://aidsinfo.nih.gov/understanding-hiv-aids/glossary/570/phase-3-trial" target="_black">
            <u>การทดลองทางคลินิกระยะที่ 3</u>
          </a>
          เช่นการติดตามผลในระยะยาวจากการทดลองทางคลินิกระยะที่ 2b จากการศึกษาวิจัยนี้ คอมพาสส์ได้วางเป้าหมายเพื่อเข้าใจรายละเอียดต่างๆ ให้มากยิ่งขึ้น เช่นวิธีที่สารไซโลไซบินมีปฏิสัมพันธ์กับยากลุ่ม
          <a href="https://www.mayoclinic.org/diseases-conditions/depression/in-depth/ssris/art-20044825" target="_black">
            <u>SSRIs</u>
          </a>
          และยาอื่นๆ ที่ใช้รักษาภาวะซึมเศร้า ด้วยวิธีนี้จะทำให้เห็นภาพที่ชัดเจนมากยิ่งขึ้นเกี่ยวกับกลไกหรือหลักการทำงานของสารไซโลไซบิน
        </p>
        <p>
          ในฐานะที่เป็น
          <a href="https://www.drugs.com/article/csa-schedule-1.html" target="_black">
            <u>ยาประเภท 1 (Schedule 1 Drug)</u>
          </a>

          ไซโลไซบินยังอยู่ภายใต้ข้อบังคับทางกฎหมายอยู่ อย่างไรก็ตามหลังจากการตรวจสอบปัญหาทางด้านโลจิสติกส์ เช่นการส่งยาไปยังหน่วยปฏิบัติการทดลองทางคลีนิก โดยผู้ร่วมก่อตั้งบริษัทคอมพาสส์
          <a href="https://compasspathways.com/team-member/lars-christian-wilde/" target="_black">
            <u>นายลาส์ คริสเตียน ไวลด์</u>
          </a>
          ไม่ได้กังวลต่อปัญหาต่างๆ ที่จะเกิดขึ้นเมื่อเข้าสู่การทดลองทางคลินิกระยะที่ 3 เพราะไม่ว่าอย่างไรบริษัทก็จะใช้ทรัพยากรและองค์ความรู้ที่สร้างขึ้นมาจากการทดลองทางคลินิกระยะที่ 2b เพื่อลดความยุ่งยากในการเปลี่ยนไปสู่การศึกษาที่อยู่ในวงที่กว้างมากยิ่งขึ้น
        </p>
        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image2} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="px-4 mt-4">
          <p className="font-weight-bold">
            “จริง ๆ แล้วเรามีหน่วยปฏิบัติการมากกว่า 20 แห่งที่สามารถเข้าร่วมการทดลองได้เป็นอย่างดี เราอยู่ในตำแหน่งที่เหมาะสมในการนำหน่วยปฏิบัติการเหล่านั้นปรับปรุงใช้สำหรับการทดลองทางคลินิกระยะที่ 3 ของเรา ความท้าทายอีกประการหนึ่งคือการฝึกอบรมนักบำบัดในวิธีการรักษาซึ่งไปได้ดีมากจนถึงปัจจุบัน ในตอนนี้เราได้ฝึกอบรมนักบำบัดมากกว่า 70 คน นั่นไม่ควรเป็นอุปสรรคในการไต่ระดับการทดลอง”
          </p>
          <p>
            นายไวลด์ ประธานและหัวหน้าฝ่ายธุรกิจของบริษัทคอมพาสส์กล่าว</p>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Series B จะให้การสนับสนุนงานเพื่อปรับปรุงโปรแกรมการฝึกอบรมนักบำบัดโรค โดยนักบำบัดเหล่านี้ได้รับโปรแกรมการฝึกอบรมดิจิตอลก่อนที่จะเข้าร่วมใน “การฝึกอบรมแบบตัวต่อตัว” นายไวลด์กล่าวเงินทุนจะช่วยให้บริษัทสามารถพัฒนาโปรแกรมการฝึกอบรมล่วงหน้าก่อนจะถึงการทดลองทางคลิ นิกระยะที่ 3 ได้
        </p>
        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image3} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="mt-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ผู้ป่วยจะได้รับโปรแกรมการเตรียมความพร้อมด้วยระบบดิจิตอลเช่นเดียวกัน บริษัทยังวางแผนที่จะเพิ่มเครื่องมือดิจิทัลเพื่อช่วยให้ผู้ป่วย
          <a href="https://www.crisisprevention.com/Blog/The-Integrated-Experience" target="_black">
            <u>“ประสานประสบการณ์”</u>
          </a>
          นายไวลด์กล่าว ซึ่งสะท้อนให้เห็นถึงบทบาทที่เกิดขึ้นด้วยตนเอง ความคิดภายหลังการรักษา และข้อมูลเชิงลึกในการรักษาด้วยไซโลไซบินและศักยภาพของเทคโนโลยีเพื่อช่วยขยายแนวทางการบำบัดหรือการ รักษาทางการแพทย์ ผู้ป่วยจะได้รับโปรแกรมการเตรียมความพร้อมด้วยระบบดิจิตอลเช่นเดียวกัน บริษัทยังวางแผนที่จะเพิ่มเครื่องมือดิจิทัลเพื่อช่วยให้ผู้ป่วย “ประสานประสบการณ์” นายไวลด์กล่าว ซึ่งสะท้อนให้เห็นถึงบทบาทที่เกิดขึ้นด้วยตนเอง ความคิดภายหลังการรักษา และข้อมูลเชิงลึกในการรักษาด้วยไซโลไซบินและศักยภาพของเทคโนโลยีเพื่อช่วยขยายแนวทางการบำบัดหรือการ รักษาทางการแพทย์

        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การเตรียมการของบริษัทสำหรับระยะที่ 3 กำลังดำเนินไปพร้อมๆ กับวิกฤตการณ์
          <a href="https://covid19.who.int/" target="_black">
            <u>การแพร่ระบาดของเชื้อไวรัสโคโรน่าสายพันธุ์ใหม่ (COVID-19)
            </u>
          </a>
          และ
          <a href="https://en.wikipedia.org/wiki/Lockdown" target="_black">
            <u>การล็อคดาวน์ (Lockdown)</u>
          </a>
          แต่การแพร่ระบาดก็ส่งผลกระทบต่อการทดลองทางคลินิกระยะที่ 2b เช่นเดียวกัน ด้วยเหตุที่หุ้นส่วนของบริษัทหลายแห่งหยุดกิจการบางอย่างไป ไม่ว่าจะเป็นบริษัทด้านเทคโนโลยีชีวภาพที่หยุดการมีส่วนร่วมในการทำศึกษาวิจัยชั่วคราวเมื่อเดือนที่แล้ว
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; “เป็นเรื่องน่าเสียดายนิดหน่อย เพราะการวิจัยดำเนินไปได้ดีมากในแง่ของการเปิดรับอาสาสมัคร แต่สัญญาณที่ดีคือเรามีผู้ป่วยตกค้างที่ได้รับการคัดกรองเบื้องต้นเรียบร้อยแล้ว ซึ่งกำลังรอการลงทะเบียนเพื่อเข้าร่วมการศึกษาวิจัยอยู่ ทันทีที่โลกกลับมาเหมือนเดิม
        </p>

        <center>
          <MDBView hover="hover" cascade="cascade" waves="waves">
            <img src={image4} alt="" className="img-fluid"/>
            <MDBMask overlay="white-slight" className="waves-light"/>
          </MDBView>
        </center>
        <p className="mt-4">
          เราพร้อมที่จะกลับไปทำการทดลองทางคลินิกระยะที่ 2b ทันที” นายไวลด์กล่าว บริษัทมีเป้าหมายที่จะทำการทดลองให้แล้วเสร็จภายในสิ้นปี 2020 นี้
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บริษัทคอมพาสส์กำลังพัฒนาโปรแกรมรักษาผู้ป่วยทางคลินิกไปพร้อมกับการทำงานล่วงหน้าไปด้วยไปด้วย บริษัทเทคโนโลยีชีวภาพนี้มุ่งเน้นไปที่การรักษาด้วยสารไซโลไซบินเป็นอย่างแรก ด้วยความเชื่อที่ว่าจะสามารถยกระดับองค์ความรู้ที่มีอยู่ของยาดังกล่าวได้อย่างรวดเร็วเพื่อรับผลิตภัณฑ์ใหม่ให้กับผู้ ป่วยภาวะซึมเศร้าที่ไม่ตอบสนองต่อการรักษาด้วยยา ซึ่งนั่นทำให้คอมพาสส์มีชื่อเสียงอย่างมากกับผลงานวิจัยเชิงบำบัดหรือการรักษาทางการแพทย์ด้วยสารไซโลไซบิน ถึงอย่างนั้นไวลด์มองว่าบริษัทเป็น “ผู้ไม่เชื่อเรื่องการเป็นพระเจ้าในการรักษาทุกโรค” ซึ่งเป็นจุดที่สามารถปรากฏให้คนภายนอกบริษัทเห็นได้อย่างชัดเจนตอนที่รายละเอียดของผลผลิตในขั้นบุกเบิกนี้ก ลายเป็นของสาธารณะ
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“ในขณะที่การศึกษาวิจัยสารไซโลไซบินเป็นจุดเริ่มต้นที่ยอดเยี่ยม เราคิดว่าจากสิ่งที่เราได้รับจากผลงานทั้งในชั้นพรีคลินิกและด้านกลไก เราจะสามารถพัฒนายาได้ดียิ่งขึ้นไปอีก”
        </p>
        <p>
          ไวลด์กล่าว<br/>
          คอมพาสส์ได้ร่วมมือกับศูนย์วิจัยซึ่งส่วนใหญ่ตั้งอยู่ในสหรัฐอเมริกาเพื่อจัดตั้งศูนย์การค้นคว้ายาเสมือนจริงโดยมุ่งเน้ นไปที่การค้นคว้า และการพัฒนาประสิทธิภาพของยาดังกล่าว หน่วยงานชั้นพรีคลินิกในกรุงลอนดอนซึ่งเป็นส่วนหนึ่งของบริษัทขนาดประมาณ 50 คนที่ตั้งอยู่ทั่วสหราชอาณาจักรและสหรัฐอเมริกากำลังร่วมมือกันในการค้นคว้ายา โดยบริษัทคอมพาสส์จะใช้เงินทุนบางส่วนที่ได้จากการระดมเงินทุนใน Series B เพื่อเพิ่มจำนวนพนักงานในศูนย์วิจัย
        </p>
        <p>
          ผู้ลงทุนรายเดิมอย่าง
          <a href="https://www.atai.life/" target="_black">
            <u>ATAI Life Sciences</u>
          </a>
          ถูกดึงให้เข้าร่วมการลงทุนใน Series B อีกครั้งพร้อมด้วยผู้ลงทุนรายใหม่ได้แก่
          <br/>
          <a href="https://www.crunchbase.com/organization/mcquade-center-for-strategic-research-and-development" target="_black">
            <u>ศูนย์การวิจัยเชิงกลยุทธ์และการพัฒนา McQuade</u>
          </a>
          <br/>

          <a href="https://foundersfund.com/" target="_black">
            <u>กองทุนผู้ก่อตั้ง (Founder Fund)</u>
          </a>
          <br/>

          <a href="https://ablepartners.nyc/" target="_black">
            <u>กองทุน Able Partners</u>
          </a>
          <br/>

          <a href="https://camdenpartners.com/" target="_black">
            <u>กองทุน Camden Partners Nexus</u>
          </a>
          <br/>

          <a href="https://www.perceptivelife.com/" target="_black">
            <u>บริษัท Perceptive Advisors</u>
          </a>
          <br/>

          <a href="https://skyviewslifescience.com/" target="_black">
            <u>บริษัท Skyviews Life Science</u>
          </a>

          และ
          <a href="http://www.soleuscapital.com/" target="_black">
            <u>กองทุน Soleus Capital</u>
          </a>
        </p>
        แหล่งอ้างอิง:
        <br/>
        <a href="https://www.businesswire.com/news/home/20191122005452/en/FDA-grants-Breakthrough-Therapy-Designation-Usona-Institutes" target="_black">
          <u>https://www.businesswire.com/news/home/20191122005452/en/FDA-grants-Breakthrough-Therapy-Designation-Usona-Institutes</u>
        </a>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>)
}

export default News2;
