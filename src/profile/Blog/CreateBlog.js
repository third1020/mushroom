import React , {useState} from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBContainer,
  MDBAvatar,
  MDBIcon,
  MDBBtn,
  MDBMask,
  MDBView
} from 'mdbreact';
import './v1.css';
import axios from 'axios';
import Swal from 'sweetalert2'
const transFormDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var stringDate = new Date(date);
  const transFormDate =
    stringDate.getDate() +
    " " +
    months[stringDate.getMonth()] +
    " ," +
    stringDate.getFullYear();
  return transFormDate;
};

const CreateBlog = () => {
  const [date,setdate] = useState(new Date);
  const [BlogForm,setBlogForm] = useState({
    image:'',
    url_blog:'',
    title:'',
    description:'',
  });

  const handleChange = (e) => {
    setBlogForm({...BlogForm,[e.target.name] : e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let createBlog = await axios.post(`${window.$URLbackend}/blog`,BlogForm)
    console.log(createBlog);
    Swal.fire(
  'Created Successfully!',
  '',
  'success'
)
  }
  return (
    <div id='profile-v1' className='mb-5'>
      <MDBContainer fluid className='mb-5'>
        <section className='section team-section mb-5'>
          <MDBRow center className='text-center'>
            <MDBCol md='8' className='mb-r'>
              <MDBCard cascade className='cascading-admin-card user-card'>
                <div className='admin-up d-flex justify-content-start'>

                </div>
                <MDBCardBody>
                  <form onSubmit={onSubmit}>
                  <div className='data'>
                    <h5 className='font-weight-bold dark-grey-text'>
                      Create Blog -{' '}
                      <span className='text-muted'>Add information</span>
                    </h5>
                  </div>
                  <MDBRow>
                    <MDBCol md='12'>
                      <p className='text-muted text-left my-4'>
                        <strong>Url Blog</strong>
                      </p>
                      <input className="form-control" value={BlogForm.url_blog} onChange={handleChange} name="url_blog" type='text' label='Url_Image' placeholder={"https://example.com"} />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md='12'>
                      <p className='text-muted text-left my-4'>
                        <strong>Url Image</strong>
                      </p>
                      <input className="form-control" value={BlogForm.image} onChange={handleChange} name="image" type='text' label='Url_Image' placeholder={"https://url-image.jpg"} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol lg='6'>
                      <p className='text-muted text-left my-4'>
                        <strong>Title</strong>
                      </p>
                      <input type='text' value={BlogForm.title} onChange={handleChange} name="title" className="form-control" placeholder='Title' />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md='12' className='about-text'>
                      <p className='text-muted text-left my-4'>
                        <strong>Description</strong>
                      </p>
                      <textarea rows="3" value={BlogForm.description} onChange={handleChange} name="description" className="form-control" placeholder="Write someting here..." />
                    </MDBCol>
                  </MDBRow>

                  <MDBBtn color="primary mt-5"  type="summit">Create blog</MDBBtn>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4' className='mb-r'>
              <a href={BlogForm.url_blog} target="_blank">
              <MDBView className="rounded mb-lg-0 mb-4" hover waves>
              <img

                height={400}
                className="img-fluid w-100"
                src={BlogForm.image}
                alt="--url image wrong--"
              />
              <a>
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>

                <MDBCardBody className='pt-0 mt-4'>

                  <p className="text-left" style={{color:"#0395D1"}}>
                    <u>
                      {transFormDate(date)}

                   </u>
                  </p>

                  <h5 className="font-weight-bold mb-3 p-0 text-left" style={{color:"#0395D1"}}>
                    <strong>{BlogForm.title}</strong>
                  </h5>
                  <p className="text-left dark-grey-text mono-space">
                    {BlogForm.description}
                  </p>
                </MDBCardBody>
                </a>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
};

export default CreateBlog;
