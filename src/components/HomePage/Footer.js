import React, {useState} from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBFormInline

} from 'mdbreact';
import LogoImg from '../../assets/LogoFooter.png';
import {useHistory} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  let history = useHistory();
  const [Modalpolicy, setModalpolicy] = useState(false);
  return (<div>
    <MDBFooter color="unique-color-dark" className="font-small">
      <MDBContainer className="text-md-left">
        <div style={{
            paddingTop: '40px'
          }}></div>
        <MDBRow>
          <MDBCol md="4">
            <MDBCol md="12">
              <img id="hideLogo" src={LogoImg} height="100" alt=""/>
            </MDBCol>
            <MDBCol md="12">
              {
                window.innerWidth < 768
                  ? <center className="mb-3">
                      <p className="mx-auto mt-3">สมัครรับข้อมูลข่าวสารและสถานการณ์ล่าสุดของ CONSCIOUS FLOW</p>
                      <button onClick={() => {
                          history.push('/Contact');
                          window.scrollTo(0, 0)
                        }} className="font-weight-bold border border-white" rounded="rounded" flat="flat" style={{
                          fontSize: "14px",
                          textTransform: "capitalize",
                          backgroundColor: "#1c2331",
                          borderRadius: "25px",
                          color: "white",
                          width: "200px",
                          padding: "10px"
                        }}>Subscribe</button>
                    </center>
                  : <p className="mx-auto mt-3">สมัครรับข้อมูลข่าวสารและสถานการณ์ล่าสุดของ CONSCIOUS FLOW</p>
              }
            </MDBCol>

            <MDBCol md="3" id="fontblack">
              {
                window.innerWidth > 768
                  ? <button onClick={() => {
                        history.push('/Contact');
                        window.scrollTo(0, 0)
                      }} className="font-weight-bold border border-white" flat="flat" style={{
                        fontSize: "16px",
                        textTransform: "capitalize",
                        backgroundColor: "#1c2331",
                        borderRadius: "25px",
                        color: "white",
                        width: "200px",
                        padding: "10px"
                      }}>Subscribe</button>
                  : null
              }

            </MDBCol>
          </MDBCol>
          <MDBCol md="8" className="mt-3">
            <MDBRow>
              <MDBCol md="3" className="text-center mt-4">
                <p className="font-weight-bold">
                  Useful links
                </p>
              </MDBCol>
            </MDBRow>
            {
              window.innerWidth < 768
                ? <>
                <center>
                 <a className="mr-2" onClick={()=>{window.location.href = "/Psylocybin"}}>สารไซโลไซบิน</a>
              </center>
              <center className = "mt-3" >
                <a className="mr-2" href="/Research">งานวิจัย</a>
                </center>
                <center className="mt-3">
                  <a className="mr-2" href="/Blog">ข่าวสาร</a>
                </center>
                <center className="mt-3">
                  <a className="mr-2" href="/Contact">ติดต่อเรา</a>
                </center>

              </>

                : <MDBRow>
                    <MDBCol md="3" className="text-center">
                      <p>
                        <a href="/Psylocybin">สารไซโลไซบิน</a>
                      </p>
                      <p>
                        <a href="/Blog">สถานการณ์</a>
                      </p>
                    </MDBCol>
                    <MDBCol md="3" className="text-center">
                      <p>
                        <a href="/Research">งานวิจัย</a>
                      </p>
                      <p>
                        <a href="/Contact">ติดต่อเรา</a>
                      </p>
                    </MDBCol>
                    <MDBCol md="3" className="text-center">
                    </MDBCol>
                  </MDBRow>
            }

          </MDBCol>
        </MDBRow>
        <hr style={{
            backgroundColor: "white"
          }}/>
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <MDBRow>
              <a className="mx-3" onClick={() => setModalpolicy(!Modalpolicy)}>นโยบายและความเป็นส่วนตัว</a>
              <p className="text-center text-md-left grey-text mx-3">
                CONSCIOUS FLOW &copy; {new Date().getFullYear()}
                {' '}All rights reserved.
              </p>
            </MDBRow>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    <MDBContainer>
      <MDBModal isOpen={Modalpolicy} size="lg" toggle={() => setModalpolicy(false)}>
        <MDBModalHeader toggle={() => setModalpolicy(false)}>
          นโยบายความเป็นส่วนตัวสำหรับการใช้งานเว็บไซต์
        </MDBModalHeader>
        <MDBModalBody>
          นโยบายความเป็นส่วนตัวฉบับนี้ ซึ่งต่อไปนี้จะเรียกว่า “นโยบาย” บังคับใช้ครั้งแรกเมื่อวันที่ 1 มิถุนายน 2563 โดยมีรายละเอียดดังต่อไปนี้
          <p className="font-weight-bold mt-3">ข้อ 1 คำนิยาม</p>
          ภายในนโยบายฉบับนี้
          <ul>
            <li>“เว็บไซต์” หมายความว่า เว็บไซต์ ชื่อว่า CONSCIOUS FLOW และมีที่อยู่หน้าเว็บไซต์ที่
              <a href="https://consciousedgeflow.com" target="_black">https://consciousedgeflow.com</a>
            </li>
            <li>“ผู้ควบคุมข้อมูล” หมายความว่าผู้ให้บริการหรือเจ้าของเว็บไซต์ ตามนโยบายฉบับนี้ อันได้แก่ นายศิรินทร์ รักพาณิชย์ ติดต่อ info@consciousflow.com</li>
            <li>“ผู้ประมวลผลข้อมูล” หมายความว่า บุคคลภายนอกซึ่งประมวลข้อมูลเพื่อประโยชน์ในนามของผู้ควบคุมข้อมูล</li>
            <li>“ข้อมูล” หมายความว่า สิ่งที่สื่อความหมายให้รู้เรื่องราวข้อเท็จจริง ข้อมูล หรือสิ่งใดๆ ไม่ว่าการสื่อความหมายนั้นจะทำได้โดยสภาพของสิ่งนั้นเองหรือผ่านวิธีการใดๆ และไม่ว่าจะได้จัดทำไว้ในรูปแบบเอกสาร แฟ้ม รายงาน หนังสือ แผนผัง แผนที่ ภาพวาด ภาพถ่าย ฟิล์ม การบันทึกภาพหรือเสียง การบันทึกโดยเครื่องคอมพิวเตอร์ โดยวิธีทางอิเล็กทรอนิกส์ หรือวิธีอื่นใดที่ทำให้สิ่งที่บันทึกปรากฏได้</li>
            <li>“ข้อมูลส่วนบุคคล” หมายความว่า ข้อมูลเกี่ยวกับบุคคลธรรมดาใดๆ ซึ่งทำให้สามารถระบุตัวตนของบุคคลนั้นได้ไม่ว่าทางตรงหรือทางอ้อม</li>
            <li>“ข้อมูลส่วนบุคคลที่มีความอ่อนไหว (Sensitive Data)” หมายความว่า ข้อมูลส่วนบุคคลของผู้ใช้งานที่เกี่ยวข้องกับเชื้อชาติ เผ่าพันธุ์ ความคิดเห็นทางการเมือง ความเชื่อในลัทธิ ศาสนา หรือปรัชญา พฤติกรรมทางเพศ ประวัติอาชญากรรม ข้อมูลสุขภาพ ความพิการ พันธุกรรม ข้อมูลชีวภาพ ข้อมูลจำลองใบหน้า ม่านตา หรือลายนิ้วมือ ข้อมูลสหภาพแรงงาน หรือข้อมูลอื่นใดซึ่งคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลได้ประกาศให้เป็นข้อมูลส่วนบุคคลที่มีความอ่อนไหว</li>
            <li>“ผู้ใช้งาน” หมายความว่า ท่าน ผู้เยี่ยมชม ผู้ใช้ ผู้เป็นสมาชิกของเว็บไซต์ ซึ่งเป็นเจ้าของข้อมูลส่วนบุคคลตามนโยบายฉบับนี้</li>
          </ul>

          <p className="font-weight-bold mt-3">ข้อ 2 ความยินยอมของผู้ใช้งาน</p>
          ในการเข้าใช้งานเว็บไซต์ ผู้ใช้งานตกลงและให้ความยินยอมเกี่ยวกับการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคล ดังต่อไปนี้
          <ul>
            <li>วัตถุประสงค์แห่งการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคล ผู้ใช้งานรับทราบ ตกลง และยินยอมให้ผู้ควบคุมข้อมูลและผู้ประมวลผลข้อมูลเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ดังต่อไปนี้เท่านั้น การติดต่อสอบถามและการลงชื่อสนับสนุนการใช้สารไซโลไซบิน เพื่อการวิจัยและการรักษาทางการแพทย์</li>
            <li>ข้อมูลส่วนบุคคลที่เก็บรวบรวมและใช้ ผู้ใช้งานรับทราบ ตกลง และยินยอมให้ผู้ควบคุมข้อมูลและผู้ประมวลผลข้อมูลเก็บรวบรวมและใช้ข้อมูลส่วนบุคคล ดังต่อไปนี้เท่านั้น ชื่อ นามสกุล อีเมล
            </li>
            <li>ระยะเวลาในการเก็บรวบรวมข้อมูล ผู้ใช้งานรับทราบ ตกลง และยินยอมให้ผู้ควบคุมข้อมูลและผู้ประมวลผลข้อมูลเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลเป็นระยะเวลาทั้งสิ้น 5 (ห้า) ปีนับจากวันที่ยินยอมให้เก็บรวบรวมข้อมูลส่วนบุคคลตามนโยบายฉบับนี้
            </li>
          </ul>
          <p className="font-weight-bold mt-3">ข้อ 3 การติดตามพฤติกรรมการใช้งานเว็บไซต์ของผู้ใช้งาน</p>
          ผู้ใช้งานรับทราบ ยินยอม และตกลงให้ผู้ควบคมข้อมูลหรือดูแลข้อมูลอาจจะใช้ระบบและ/เทคโนโลยีดังต่อไปนี้ในการติดตามพฤติกรรมของผู้ใช้งาน เทคโนโลยี Cookies ทั้งนี้เพื่อวัตถุประสงค์ต่อไปนี้เท่านั้น เพื่อพัฒนาส่วนต่อประสานกับผู้ใช้งานและประสบการณ์ของผู้ใช้งานให้ตอบสนองต่อผู้ใช้งานดียิ่งขึ้น

          <p className="font-weight-bold mt-3">ข้อ 4 การถอนความยินยอมของผู้ใช้งาน</p>
          ผู้ใช้งานรับทราบบว่าผู้ใช้งานมีสิทธิที่จะถอนความยินยอมใดๆ ที่ผู้ใช้งานได้ให้ไว้แก่ผู้ควบคุมข้อมูลตามนโยบายฉบับนี้ได้ ไม่ว่าเวลาใดโดยดำเนินการ ดังต่อไปนี้ แจ้งเป็นลายลักษณ์อักษร ที่ report@consciousflow.com

          <p className="font-weight-bold mt-3">ข้อ 5 สิทธิของผู้ใช้งาน</p>
          ในการเข้าใช้เว็บไซต์ตามนโยบายฉบับนี้และการให้ความยินยอมใดๆ ตามนโยบายฉบับนี้ ผู้ใช้งานได้ทราบถึงสิทธิของตนในฐานะเจ้าของงข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลเป็นอย่างดีแล้ว อันรวมถึงแต่ไม่จำกัดเพียงสิทธิผู้ใช้งาน ดังต่อไปนี้
          <ul>
            <li>ผู้ใช้งานอาจถอนความยินยอมที่ให้ไว้ตามนโยบายฉบับนี้เมื่อใดก็ได้ โดยแจ้งเป็นลายลักษณ์อักษรแก่ผู้ควบคุมข้อมูลตามวิธีและช่องทางที่กำหนดไว้ในนโยบายฉบับนี้</li>
            <li>ผู้ใช้งานมีสิทธิการเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของตนหรือที่เกี่ยว ข้องกับตนที่ผู้ควบคุมข้อมูลได้เก็บรวบรวมเอาไว้ในนโยบายฉบับนี้</li>
            <li>ผู้ใช้งานมีสิทธิได้รับการเปิดเผยจากผู้ควบคุมข้อมูลถึงการได้มาซึ่งข้อมูลส่วนบุคคลของตนที่เกี่ยวข้องกับตนซึ่งตนไม่ได้ให้ความยินยอม หากว่ามรกรณีเช่นว่า</li>
            <li>ผู้ใช้งานอาจให้ผู้ควบคุมข้อมูลส่งหรือโอนข้อมูลส่วนบุคคลของตนที่เกี่ยวข้องกับตนไปยังผู้ควบคุมข้อมูลรายอื่น รวมถึงการขอรับข้อมูลที่ได้ส่งหรือโอนดังกล่าวโดยตรงจากผู้ควบคุมข้อมูลที่ส่งหรือโอนข้อมูลนั้นด้วย</li>
            <li>
              ผู้ใช้งานอาจคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของตนหรือที่เกี่ยวข้องกับตนได้ในกรณีดังต่อไปนี้
              <ul>
                <li>ผู้ควบคุมข้อมูลเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของผู้ใช้งานด้วยความจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎหมายของผู้ควบคุมข้อมูลหรือบุคคลอื่นซึ่งผู้ใช้งานอาจพิสูจน์ได้ว่าตนมีสิทธิดีกว่าผู้ควบคุมข้อมูล</li>
                <li>ผู้ควบคุมข้อมูลเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของผู้ใช้งานเพื่อเป็นการปฏิบัติตามกฎหมายของผู้ควบคุมข้อมูล ซึ่งผู้ใช้งานอาจพิสูจน์ได้ว่าตนอาจมีสิทธิดีกว่าผู้ควบคุมข้อมูล</li>
                <li>ผู้ควบคุมข้อมูลเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้นไปเพื่อวัตถุประสงค์เกี่ยวกับการตลาดแบบตรง</li>
                <li>ผู้ควบคุมข้อมูลเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้นไปเพื่อวัตถุประสงค์เกี่ยวกับการศึกษาวิจัยทางวิทยาศาสตร์ ประวัติศาสตร์ หรือสถิติ โดยที่การศึกษาวิจัยนั้นไม่มีความจำเป็นในการดำเนินการเพื่อก่อให้เกิดประโยชน์สาธารณะ</li>
              </ul>
            </li>
            <li>
              ผู้ใช้งงานอาจให้ผู้ควบคุมข้อมูลดำเนินการลบ ทำลาย หรือทำให้ข้อมูลไม่สามารถระตัวบุคคลผู้เป็นเจ้าของข้อมูลได้ ในกรณีดังต่อไปนี้
              <ul>
                <li>เมื่อข้อมูลส่วนบุคคลหมดความจำเป็นในการเก็บรักษาไว้ตาม วัตุประสงค์ในการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้น
                </li>
                <li>เมื่อผู้ใช้งานซึ่งเป็นเจ้าของข้อมูลส่วนบุคคลได้ถอนความยินยอมในการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้นและผู้ควบคุมข้อมูลนั้นไม่มีอำนาจอื่นตามกฎหมายที่จะเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้นได้อีกต่อไป</li>
                <li>เมื่อผู้ใช้งานคัดค้านการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลนั้นโดยชอบด้วยกฎหมาย</li>
                <li>เมื่อข้อมูลส่วนบุคคลได้ถูกเก็บรวบรวม ใช้ หรือเปิดเผยโดยไม่ชอบด้วยกฎหมาย กฎ ระเบียบ ข้อบังคับเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล</li>
              </ul>
            </li>
            <li>
              ผู้ใช้งานอาจให้ผู้ควบคุมข้อมูลระงับการใช้ข้อมูลส่วนบุคคลนั้นโดยยังคงเก็บรักษาเอาไว้ได้อยู่ ในกรณีดังต่อไปนี้
              <ul>
                <li>ผู้ควบคุมข้อมูลอยู่ในระหว่างการถูกตรวจสอบโดยคณะกรรมการผู้เชี่ยวชาญตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลซึ่งผู้ใช้งานได้ร้องเรียนให้มีการตรวจสอบดังกล่าว</li>
                <li>ข้อมูลส่วนบุคคลได้ถูกเก็บรวบรวม ใช้ หรือเปิดเผยโดยไม่ชอบด้วยกฎหมาย กฎ ระเบียบ ข้อบังคับเกี่บกับการคุมครองข้อมูล ส่วนบุคคล</li>
                <li>ในกรณีที่ผู้ใช้งานมีความจำเป็นต้องการให้ผู้ควบคุมข้อมูลเก็บรักษาข้อมูลส่วนบุคคลของตนเอาไว้เพื่อประโยชน์ในสิทธิการเรียกร้องของผู้ใช้งานเอง อันได้แก่ การก่อสิทธิเรียกร้องตามกฎหมายของผู้ใช้งาน การปฏิบัติตามหรือการใช้สิทธิเรียกร้องตามกฎหมาย หรือการยกขึ้นต่อสู้กับสิทธิเรียกร้องตามกฎหมาย ผู้ใช้งานอาจให้ผู้ควบคุมข้อมูลเพียงระงับการใช้ข้อมูลแทนการดำเนินการลบ ทำลาย หรือทำให้ข้อมูลไม่สามารถระบุตัวบุคคลผู้เป็นเจ้าของข้อมูลได้</li>
                <li>ผู้ควบคุมข้อมูลอยู่ในระหว่างการพิสูจน์หรือตรวจสอบเพื่อปฏิเสธการคัดค้านการเก็บรวบรวม ใช้ หรือเผยแพร่ข้อมูลส่วนบุคคลของผู้ใช้งานตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลซึ่งผู้ใช้งานได้คัดค้านโดยชอบด้วยกฎหมายนั้น</li>
              </ul>
            </li>
            <li>เมื่อผู้ใช้งานพบเห็นว่าข้อมูลส่วนบุคคลของผู้ใช้งานผิด ล้าหลัง ไม่ชัดเจน ผู้ใช้งานมีสิทธิให้ผู้ควบคุมข้อมูลดำเนินการแก้ไขข้อมูลส่วนบุคคลนั้นให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิดได้</li>
            <li>ผู้ใช้งานอาจร้องเรียนต่อคณะกรรมการผู้เชี่ยวชาญตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลในกรณีที่เกี่ยวกับการกระทำการฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมาย กฎ ระเบียบ ข้อบังคับเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลของผู้ควบคุมข้อมูลและ/ผู้ประมวลผลข้อมูล</li>
          </ul>
          <p className="font-weight-bold mt-3">ข้อ 6 การรักษาความมั่นคงปลอดภัย</p>
          ในการเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลตามนโยบายฉบับนี้ ผู้ควบคุมข้อมูลจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยที่เหมาะสมเพื่อป้องกันการสูญหาย การเข้าถึง ใช้ เปลี่ยนแปลง แก้ไข หรือการเปิดเผยข้อมูลที่ไม่เป็นไปตามกฎหมาย ด้วยมาตรการ มาตรฐาน เทคโนโลยีและ/หรือด้วยระบบ ดังต่อไปนี้ กำหนดสิทธิการเข้าถึงข้อมูล (Access Right) ให้กับผู้เกี่ยวข้อง โดยใช้รหัสข้อมูล (Encryption) ในการส่งผ่านข้อมูลและการระบบการรักษาความปลอดภัย: Firewalls และ Internet Protocol Security (IPsec) รวมถึงการควบคุมให้ผู้ประมวลผลข้อมูลมีการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลที่ไม่น้อยไปกว่าที่กำหนดในนโยบายฉบับนี้ด้วย

          <p className="font-weight-bold mt-3">ข้อ 7 การแก้ไขปรับปรุงข้อมูลส่วนบุคคล</p>
          ผู้ควบคุมข้อมูลจะจัดให้มีระบบและมาตรการตรวจสอบ ดังต่อไปนี้

          <ul>
            <li>ดำเนินการปรับปรุงแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง เป็นปัจจุบัน สมบูรณ์ และไม่ก่อให้เกิดความเข้าใจผิด</li>
            <li>ลบ ทำลายข้อมูลส่วนบุคคลที่เกินระยะเวลาเก็บรวบรวมที่ผู้ใช้งานได้ให้ความยินยอมไว้ และ</li>
            <li>ลบ ทำลายข้อมูลส่วนบุคคลที่ไม่เกี่ยวข้องกับการใช้ข้อมูลส่วนบุคคลดังกล่าว ตามที่ผู้ใช้งานได้ให้ความยินยอมเอาไว้</li>
          </ul>
          <p className="font-weight-bold mt-3">ข้อ 8 การเก็บรวบรวม ใช้และ/หรือเปิดเผยข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล</p>
          ผู้ใช้งานรับทราบและตกลงว่าผู้ควบคุมข้อมูลเก็บรวบรวม ใช้ และ/หรือเปิดเผยข้อมูลของผู้ใช้งานได้โดยไม่ต้องได้รับความยินยอมจากผู้ใช้งานก่อนล่วงหน้า ทั้งนี้เท่าที่จำเป็นและตราบเท่าที่เป็นไปตามวัตถุประสงค์และในกรณี ดังต่อไปนี้เท่านั้น
          <ul>
            <li>เพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวกับการจัดทำเอกสารประวัติศาสตร์หรือจดหมายเหตุเพื่อประโยชน์สาธารณะ หรือเกี่ยวกับการศึกษาวิจัยหรือสถิติซึ่งได้จัดให้มีมาตราการปกป้องที่เหมาะสมเพื่อคุ้มครองสิทธิและเสรีภาพของข้อมูลส่วนบุคคลของผู้ใช้งาน</li>
            <li>เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพใดๆ</li>
            <li>เป็นการจำเป็นเพื่อการปฏิบัติตามสัญญาซึ่งผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้นเป็นคู่สัญญาหรือเพื่อใช้ในการดำเนินการตามคำขอของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลก่อนทำสัญญาดังกล่าวนั้น</li>
            <li>เป็นการจำเป็นเพื่อการปฏิบัติหนเที่ในการดำเนินการเพื่อประโยชน์สาธารณะของผู้ควบคุมหรือปฏิบัติหน้าที่ในการใช้อำนาจรัฐที่ได้มอบให้แก่ผู้ควบคุมข้อมูลนั้น</li>
            <li>เป็นการจำเป็นเพื่อประโยชน์โดยชอบด้วยกฎมายของผู้ควบคุมข้อมูลหรือของบุคคลซึ่งประโยชน์ดังกล่าวมีความสำคัญมากกว่าสิทธิขึ้นพื้นฐานในข้อมูลส่วนบุคคลของผู้ใช้งานนั้น</li>
            <li>เป็นการปฏิบัติตามกฎหมายของผู้ควบคุมข้อมูล</li>
          </ul>
          ทั้งนี้ ผู้ควบคุมข้อมูลจะบันทึกเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของผู้ใช้งานตามวรรคก่อนหน้าไว้เป็นสำคัญ
          <p className="font-weight-bold mt-3">ข้อ 9 การเก็บรวบรวม ใช้และ/หรือเปิดเผยข้อมูลส่วนบุคคลที่มีความอ่อนไหว (Sensitive Data)</p>
          ผู้ใช้งานรับทราบและตกลงว่านอกจากการเก็บรวบรวม ใช้และ/เปิดเผยข้อมูลส่วนบุคคลซึ่งผู้ใช้งานได้ให้ความยินยอมไว้โดยชัดเจนให้เก็บรวบรวม ใช้และ/หรือเปิดเผยข้อมูลส่วนบุคคลในวรรคก่อนแล้ว ผู้ควบคุมข้อมูลอาจเก็บรวบรวม ใช้และ/หรือเปิดเผยชข้อมูลส่วนบุคคลที่มีความอ่อนไหว (Sensitive Data) ของผู้ใช้งานได้โดยไม่ต้องได้รับความยินยอมจากผู้ใช้งายก่อนล่วงหน้า ทั้งนี้เท่าที่จำเป็นและตราบเท่าที่เป็นไปตามวัตถุประสงค์และในกรณีดังต่อไปนี้เท่านั้น
          <ul>
            <li>เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลซึ่งไม่สามารถให้ความยินยอมได้ ไม่ว่าเหตุใดก็ตาม</li>
            <li>เป็นข้อมูลที่เปิดเผยต่อสาธารณด้วยความยินยอมโดยชัดแจ้งของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้น</li>
            <li>เป็นการจำเป็นเพื่อการก่อตั้ง การปฏิบัติตาม การใช้หรือการยกขึ้นต่อสู้ซึ่งสิทธิเรียกร้องตามกฎหมาย</li>
            <li>
              เป็นการจำเป็นในการปฏิบัติตามกฎหมายเพื่อบรรลุวัตถุประสงค์อันเกี่ยวกับ
              <ul>
                <li>เวชศาสตร์ป้องกันหรืออาชีวเวชศาสตร์ การประเมินความสามารถในการทำงานของลูกจ้าง การวินิจฉัยโรคของการแพทย์ การให้บริการด้านสุขภาพหรือด้านสังคม การรักษาทางการแพทย์ การจัดการด้านสุขภาพ หรือระบบการให้บริการด้านสังคมสงเคราะห์</li>
                <li>ประโยชน์สาธารณะด้านสาธารณะสุข เช่น การป้องกันด้านสุขภาพจากโรคติดต่ออันตรายหรือโรคระบาดที่อาจติดต่อหรือแพร่เข้ามาในราชอาณาจักร หรือการควบคุมมาตรฐานหรือคุณภาพของยา เวชภัณฑ์ หรือเครื่องมือแพทย์ ซึ่งได้จัดให้มีมาตรการที่เหมาะสมเจาะจงเพื่อคุ้มครองสิทธิเสรีภาพของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลโดยเฉพาะการรักษาความลับของข้อมูลส่วนบุคคลตามหน้าที่หรือตามจริยธรรมแห่งวิชาชีพ</li>
                <li>การคุ้มครองแรงงาน การประกันสังคม หลักประกันสุขภาพแห่งชาติ สวัสดิการเกี่ยวกับการรักษาพยาบาลของผู้มีสิทธิตามกฎหมาย การคุ้มครองผู้ประสบภัยจากรถหรือการคุ้มครองทางสังคม ซึ่งการเก็บรวบรวมข้อมูลส่วนบุคคลของผู้ใช้งานนั้นเป็นสิ่งที่จำเป็นในการปฏิบัติตามสิทธิหรือหน้าที่ของผู้ควบคุมข้อมูลหรือผู้ใช้งานเจ้าของข้อมูล โดยจัดให้มีมาตรการที่เหมาะสมเพื่อคุ้มครองสิทธิขั้นพื้นฐานแลประโยชน์ของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้น</li>
                <li>การศึกษาวิจัยทางวิทยาศาสตร์ ประวัติศาสตร์ หรือสถิติ หรือประโยชน์สาธารณะอื่นๆ ทั้งนี้ด้วยการเก็บรวบรวม ใช้และ/หรือเปิดเผยเพียงเท่าที่จำเป็นและได้จัดให้มีมาตรการที่เหมาะสมเพื่อคุ้มครองสิทธิขั้นพื้นฐานและประโยชน์ของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้นตามที่คณะกรรมการคุ้มครองข้อมูลส่วนบุคคลได้กำหนด</li>
                <li>ประโยชน์สาธารณะที่สำคัญ โดยจัดให้มีมาตรการที่เหมาะสมเพื่อคุ้มครองสิทธิขั้นพื้นฐานและประโยชน์ของผู้ใช้งานของข้อมูลส่วนบุคคลนั้น์</li>
              </ul>
            </li>
          </ul>
          ทั้งนี้ ผู้ควบคุมข้อมูลจะบันทึกเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของผู้ใช้งานตามวรรคก่อนหน้าไว้เป็นสำคัญ
          <p className="font-weight-bold mt-3">ข้อ 10 การใช้งานเว็บไซต์ของบุคคลซึ่งอยู่ในความปกครอง อนุบาล หรือพิทักษ์ของผู้ใช้งาน</p>
          ผู้ใช้งานรับรองว่าจะตนไม่ใช่หรือจะไม่ยินยอมให้บุคคลซึ่งเป็นบุคคลบกพร่องความสามารถตามกำหมายดังต่อไปนี้ เยี่ยมชม ใช้งาน หรือเป็นสมาชิกของเว็บไซต์
          <ul>
            <li>คนไร้ความสามารถซึ่งอยู่ในความอนุบาลของผู้ใช้งาน</li>
            <li>คนเสมือนไร้ความสามารถซึ่งอยู่ในความพิทักษ์ของผู้ใช้งาน</li>
          </ul>
          ในกรณีที่ผู้ใช้งานยินยอมให้บุคคลดังกล่าวข้างต้นเยี่ยมชม ใช้งาน หรือเป็นสมาชิกของเว็บไซต์ ผู้ใช้งานตกลงให้ถือว่าผู้ใช้งานได้ใช้อำนาจปกครอง อนุบาล หรือพิทักษ์ของบุคคลดังกล่าว แล้วแต่กรณี ในการตกลงและให้ความยินยอมตามนโยบายฉบับนี้ทั้งสิ้นเพื่อและในนามของบุคคลดังกล่าวด้วย
          <p className="font-weight-bold mt-3">ข้อ 11 การส่งหรือโอนข้อมูลส่วนบุคคลไปยังต่างประเทศ</p>
          ผู้ควบคุมข้อมูลอาจส่งหรือโอนข้อมูลส่วนบุคคลของผู้ใช้งานไปยังต่างประเทศได้ในกรณี ดังต่อไปนี้เท่านั้น
          <ul>
            <li>ประเทศปลายทางหรือองค์การระหว่างประเทศที่รับข้อมูลส่วนบุคคลนั้นมีมาตรฐานคุ้มครองข้อมูลส่วนบุคคล</li>
            <li>ได้รับความยินยอมจากเจ้าของข้อมูลส่วนบุคคล โดยที่ผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลได้รับแจ้งและรับทราบถึงมาตรฐานการคุ้มครองข้อมูลส่วนบุคคลที่ไม่เพียงพอของบางประเทศปลายทางทางหรือองค์การระหว่างประเทศที่รับข้อมูลนั้นแล้ว</li>
            <li>เป็นการปฏิบัติตามกฎหมาย</li>
            <li>เป็นการจำเป็นเพื่อปฏิบัติตามสัญญาซึ่งผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลเป็นคู่สัญญานั้นหรือเพื่อใช้ในการดำเนินการตามคำขอของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลก่อนการเข้าทำสัญญานั้น</li>
            <li>เป็นการกระทำตามสัญญาระหว่างผู้ควบคุมข้อมูลกับบุคคลอื่นโดยเป็นไปเพื่อประโยชน์ของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้น</li>
            <li>เพื่อป้องกันหรือระงับอันตรายต่อชีวิต ร่างกาย หรือสุขภาพของผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้นหรือบุคคลใดๆ เมื่อเจ้าของข้อมูลส่วนบุคคลไม่สามารถให้ความยินยอมในขณะนั้นได้</li>
            <li>เป็นการจำเป็นเพื่อการดำเนินภารกิจเพื่อประโยชน์สาธารณะที่สำคัญ</li>
          </ul>

          <p className="font-weight-bold mt-3">ข้อ 12 การแจ้งเตือนเหตุการณ์ละเมิดข้อมูลส่วนบุคคล</p>
          ในกรณีที่ผู้ควบคุมข้อมูลทราบถึงการละเมิดข้อมูลส่วนบุคคลไม่ว่าจะมีการละเมิดโดยบุคคลใด ผู้ควบคุมข้อมูลจะดำเนินการดังต่อไป
          <ul>
            <li>ในกรณีที่มีความเสี่ยงที่จะมีผลกระทบต่อสิทธิหรือเสรีภาพของบุคคลใดๆ ผู้ควบคุมข้อมูลจะแจ้งเหตุการละเมิดข้อมูลส่วนบุคคลดังกล่าวต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล โดยมิชักช้าเท่าที่จะสามารถกระทำได้ภายใน 72 (เจ็ดสิบสอง) ชั่วโมงนับแต่ทราบเหตุ</li>
            <li>ในกรณีมีความเสี่ยงที่จะมีผลกระทบอย่างสูงต่อสิทธิหรือเสรีภาพของบุคคลใดๆ ผู้ควบคุมข้อมูลจะแจ้งเหตุการละเมิดข้อมูลส่วนบุคคลดังกล่าวและแนวทางการเยียวยาต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลและต่อผู้ใช้งานเจ้าของข้อมูลส่วนบุคคลนั้น โดยมิชักช้าเท่าที่จะสามารถกระทำได้ภายใน 72 (เจ็ดสิบสอง) ชั่วโมงนับแต่ทราบเหตุ</li>
          </ul>
          <p className="font-weight-bold mt-3">ข้อ 13 การร้องเรียนและแจ้งปัญหาเกี่ยวกับข้อมูลส่วนบุคคล</p>
          ผู้ใช้งานอาจร้องเรียนและรายงานปัญหาเกี่ยวกับข้อมูลส่วนบุคคล อันรวมถึงแต่ไม่จำกัดเพียง การขอให้ผู้ควบคุมข้อมูลแก้ไขปรับปรุงข้อมูลให้เป็นปัจจุบันและ/หรือให้ถูกต้อง การคัดค้านการเก็บข้อมูล หรือระงับการใช้ข้อมูลได้ที่ช่องทางต่อไปนี้ report@consciousflow.com

          <p className="font-weight-bold mt-3">ข้อ 14 การบันทึกรายการสำคัญ</p>
          เว้นแต่กฎหมายคุ้มครองข้อมูลส่วนบุคคลจะกำหนดให้สิทธิผู้ควบคุมข้อมูลไว้เป็นอย่างอื่น ผู้ควบคุมข้อมูลจะบันทึกรายการสำคัญเกี่ยวกับการจัดเก็บ การใช้ หรือการเปิดเผยข้อมูลเป็นหนังสือหรือระบบอิเล็กทรอนิกส์ เพื่อการตรวจสอบจากผู้ใช้งานเจ้าของข้อมูลหรือหน่วยงานของรัฐ อันรวมถึงแต่ไม่จำกัดเพียงรายการ ดังต่อไปนี้
          <ul>
            <li>ข้อมูลส่วนบุคคลที่มีการเก็บรวบรวม</li>
            <li>วัตถุประสงค์ของการเก็บรวบรวมข้อมูลส่วนบุคคลแต่ละประเภท</li>
            <li>ข้อมูลเกี่ยวกับผู้ควบคุมข้อมูล</li>
            <li>ระยะเวลาการเก็บรักษาข้อมูลส่วนบุคคล</li>
            <li>สิทธิและวิธีการเข้าถึงข้อมูลส่วนบุคคล รวมทั้งเงื่อนไขเกี่ยวกับบุคคลที่มีสิทธิเข้าถึงข้อมูลส่วนบุคคลและเงื่อนไขในการเข้าถึงข้อมูลส่วนบุคคลนั้น</li>
            <li>การเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลที่ได้รับยกเว้นไม่ต้องขอความยินยอมจากผู้ใช้งานเจ้าของข้อมูล</li>
            <li>การปฏิเสธคำขอและการคัดค้านต่างๆ</li>
            <li>รายละเอียดเกี่ยวกับมาตรการรักษาความมั่นคงปลอดภัยในข้อมูลส่วนบุคคล</li>
          </ul>
          <p className="font-weight-bold mt-3">ข้อ 15 การแก้ไขเปลี่ยนแปลงนโยบาย</p>
          ผู้ควบคุมข้อมูลอาจแก้ไขและเปลี่ยนแปลงข้อความในนโยบายฉบับนี้ได้ ไม่ว่าเวลาใดก็ตาม และไม่ว่าทั้งหมดหรือบางส่วน โดยผู้ควบคุมข้อมูลจะแจ้งให้ผู้ใช้งานทราบเมื่อมีการเปลี่ยนแปลงในแต่ละคราวเพื่อให้ผู้ใช้งานได้พิจารณาและดำเนินการยอมรับด้วยวิธีการทางอิเล็กทรอนิกส์หรือวิธีการอื่นใด และหากว่าผู้ใช้งานได้ดำเนินการเพื่อยอมรับนั้นแล้วให้ถือว่านโยบายที่แก้ไขเพิ่ทเติมดังกล่าวเป็นส่วนหนึ่งของนโยบายฉบับนี้ด้วย อนึ่ง ผู้ใช้งานอาจะเข้าถึงนโยบายความเป็นส่วนตัวที่มีแก้ไขและเปลี่ยนแปลงล่าสุดได้จากแหล่งที่ผู้ควบคุมข้อมูลจัดแสดงไว้จากช่องทาง ดังต่อไปนี้ https://consciousedgeflow.com
        </MDBModalBody>

      </MDBModal>

    </MDBContainer>
  </div>);
}
export default Footer;
