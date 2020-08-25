import React, {useState,useEffect} from 'react';
import {
  MDBNavbar,
  MDBNavItem,
  MDBNavbarNav,
  MDBNavLink,
  MDBIcon,
  MDBContainer,
  MDBCollapse,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBBtn,
  MDBCol,
  MDBModalBody,
  MDBModalHeader,
  MDBModal,
  MDBRow,
  MDBInput,
  MDBCardBody,
  MDBView,
  MDBMask
} from 'mdbreact';
import LogoImg from '../assets/LogoCompany.png';
import axios from 'axios';
import Swal from 'sweetalert2'
import './Topmenu.scss';
import IconHeader from './IconHeader';
import './IconHeader.css'
import {
  useHistory
} from 'react-router-dom'

const TopMenu = () => {
  const [collapsed, setcollapsed] = useState(false);
  const [checkcollapsed, setcheckcollapsed] = useState(true);
  const [ModalSignup, setModalSignup] = useState(false);
  const [accept, setaccept] = useState(false);
  const [ContactForm,setContactForm] = useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:"",
  });
  let history = useHistory();

  const handleChangeContactForm = (e) => {
    setContactForm({...ContactForm , [e.target.name] : e.target.value })

  }

  const SubmitContactForm = async (e) => {
    e.preventDefault();
    if(accept){
      let createdContactForm = await axios.post(`${window.$URLbackend}/signup`,ContactForm);
      console.log(createdContactForm);
      console.log(ContactForm);
      Swal.fire(
    'Successfully',
    '',
    'success'
    )
    }else{
      Swal.fire(
    '',
    'กรุณากดปุ่มยินยอม',
    'error'
    )
    }


  }
  const navStyle = {
    boxShadow: 'none',
    color: "#fff",
    backgroundColor: "#fff"
  };

  const ChangeToggle = () => {
    setcollapsed(!collapsed);
  }

  useEffect(()=> {
    window.onscroll = function() {
      if(window.pageYOffset === 0) {
        setcheckcollapsed(true);
      }else{
        setcheckcollapsed(false);
      }
    };

  },[])

  return (<MDBNavbar style={navStyle} dark="dark" expand='md' fixed='top' >
  <div className="container">
    <MDBNavbarBrand>
      <IconHeader/>
    </MDBNavbarBrand>

<MDBNavbarToggler onClick={ChangeToggle} image={ collapsed ? "https://image.flaticon.com/icons/svg/148/148777.svg" : "https://image.flaticon.com/icons/svg/747/747822.svg"} />
      <MDBCollapse isOpen={collapsed} navbar="navbar">

        <MDBNavbarNav right="right">
          <MDBNavItem >
            <MDBNavLink className={window.location.pathname === '/' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} } onClick={() => {
                setcollapsed(false)
                window.location.href = '/'
              }} to='/'>หน้าแรก</MDBNavLink>
          </MDBNavItem>
          {/**
            <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/About' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} } onClick={() => setcollapsed(false)} to='/About'>เกี่ยวกับเรา</MDBNavLink>
          </MDBNavItem>
          **/}
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Psylocybin' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} } onClick={() =>{
              setcollapsed(false)
              window.location.href = '/Psylocybin'
            }} to='/Psylocybin'>สารไซโลไซบิน</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Research' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"} }  onClick={() => {
              setcollapsed(false)
              window.location.href = '/Research'
            }} to='/Research'>งานวิจัย</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Blog' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"}  } onClick={() => {
              setcollapsed(false)
              window.location.href = '/Blog'
            }} to='/Blog'>ข่าวสาร</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className={window.location.pathname === '/Contact' ? 'effect-underline-active' : "effect-underline"} style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"}  } onClick={() => {
              setcollapsed(false)
              window.location.href = '/Contact'
              }} to='/Contact'>ติดต่อเรา</MDBNavLink>
          </MDBNavItem>

          {/**
            window.innerWidth > 768 ? <a onClick={()=>{
              setModalSignup(!ModalSignup)
              window.scrollTo(0,0);
            }} class="btn-mix-noborder" data-text="ลงชื่อสนับสนุน">ลงชื่อสนับสนุน</a> :
            <MDBNavItem>
              <MDBNavLink className='effect-underline' style={ {color:"#424242 ",fontWeight:"400",marginTop:"9px"}  } onClick={() =>{
                  setModalSignup(!ModalSignup)
                  }} to='/Contact'>ลงชื่อสนับสนุน</MDBNavLink>
            </MDBNavItem>
          **/}


          <MDBModal className="modal-info text-white" isOpen={ModalSignup}
  toggle={()=>setModalSignup(false)}>
  <MDBModalHeader tag="p" toggle={()=>setModalSignup(false)}>
    Related article
  </MDBModalHeader>
  <MDBModalBody className="form"  style={{backgroundColor:"#eceff1",height:"600px"}}>
    <MDBCardBody style={{color:'black'}}>
      <h3 className="mt-4" style={{color:"#0395d1"}}>

      ลงชื่อสนับสนุน
      </h3>
      <form onSubmit={SubmitContactForm}>
      <MDBRow>
        <MDBCol md="6">

          <div className="md-form mb-0">
            <MDBInput
              className="black-text"
              type="text"
              id="form-contact-name"
              label="ชื่อจริง"
              name="first_name"
              value={ContactForm.first_name}
              onChange={handleChangeContactForm}
              required
            />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <div className="md-form mb-0">
            <MDBInput
              className="black-text"
              id="form-contact-email"
              label="นามสกุล"
              name="last_name"
              value={ContactForm.last_name}
              onChange={handleChangeContactForm}
              required
            />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <div className="md-form mb-0">
            <MDBInput
              className="black-text"
              type="phone"
              id="form-contact-email"
              label="เบอร์ติดต่อ"
              name="phone"
              value={ContactForm.phone}
              onChange={handleChangeContactForm}
              required
            />
          </div>
        </MDBCol>
        <MDBCol md="12">
          <div className="md-form mb-0">
            <MDBInput
              className="black-text"
              type="email"
              id="form-contact-email"
              label="อีเมล"
              name="email"
              value={ContactForm.email}
              onChange={handleChangeContactForm}
              required
            />
          </div>
        </MDBCol>
      </MDBRow>
      <div className="mb-4">
        <MDBInput
    label={
      <>
        <p className='grey-text'>
          ข้าพเจ้ายินยอมให้CONSCIOUS FLOW เปิดข้อมูลชื่อ เบอร์โทรศัพท์และอีเมลเพื่อ
การลงชื่อสนับสนุนการใช้สารไซโลไซบินเพื่อการวิจัยและการรักษาทางการแพทย์
</p>
      </>
    }
    getValue={()=>{
      setaccept(!accept)
    }}
    type='checkbox'
    id='checkbox1'
  />
      </div>

      <div id="fontblue">
        <button type="summit"  className="font-weight-bold" style={{
                      fontSize: "16px",
                      textTransform: "capitalize",
                      backgroundColor:"#0395d1",
                      color:"white",
                      width:"200px",
                      padding:"10px"
                    }}><MDBIcon icon="paper-plane" /></button>
                </div>

      </form>
    </MDBCardBody>
  </MDBModalBody>
</MDBModal>



        </MDBNavbarNav>
      </MDBCollapse>
      </div>

  </MDBNavbar>);
};

export default TopMenu;
