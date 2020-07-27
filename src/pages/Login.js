import React ,{useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdbreact';
import './Login.css';

const Login = () => {
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');
  let history = useHistory();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setusername(e.target.value);
        break;
      case "password":
        setpassword(e.target.value);
        break;
      default:

    }
  }

  const Submit = (e) => {
    e.preventDefault();
    if(username == "admin" && password == "1234"){
      sessionStorage.setItem('Login', true);
      window.location.href ="/dashboard"
      
    }else{
      alert("username or password wrong");
    }
  }

    return (
      <div id='contactformpage'>

        <MDBView>
          <MDBMask overlay='indigo-strong' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center align-items-center'>

                <MDBCard className='dark-grey-text my-5' style={{width:"500px"}}>
                  <MDBCardBody className='z-depth-2'>
                    <h3 className='dark-grey-text text-center'>
                      <strong>Login:</strong>
                    </h3>
                    <hr />
                    <form onSubmit={Submit}>

                    <MDBInput label='Username' value={username} onChange={handleChange} icon='user' name="username" />
                    <MDBInput label='Password' value={password} onChange={handleChange} type="password" name="password" icon='lock' />

                    <div className='text-center mt-3 black-text'>
                      <MDBBtn type="summit" color='indigo'>Log in</MDBBtn>

                    </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
          </MDBContainer>
        </MDBView>

      </div>
    );
  }

export default Login;
