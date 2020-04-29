import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBAnimation,
  MDBPageNavm,
  MDBPageItem,
  MDBPageNav,
  MDBPagination,
  MDBFooter

} from "mdbreact";
import {
  useHistory
} from 'react-router-dom'

const Blog = () => {
  let history = useHistory();
  return (<div>
    <div id='minimalistintro2'>

      <MDBView src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg">
        <MDBMask className='gradient'></MDBMask>{' '}
        <MDBContainer className='d-flex justify-content-center align-items-center px-md-3 px-sm-0' style={{
            height: '50vh',
            width: '100%'
          }}>
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBAnimation type='fadeInUp' delay='.3s' align="middle">
                <h1 className='display-3 font-weight-bold mb-0 pt-md-5'>
                  Blog{' '}
                </h1>
              </MDBAnimation>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>

      <section id='home'>
        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center' overlay='black-light'>
            <MDBContainer className='h-100 d-flex justify-content-center align-items-center'>
              <MDBRow>
                <MDBCol md='12' className='mt-5 mx-auto text-center'>
                  <div className='text-center'>
                    <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-3'>
                      <strong>welcome to my blog</strong>
                    </h1>
                    <hr className='hr-light mt-4 wow fadeInDown'/>
                    <h5 className='text-uppercase mb-5 white-text wow fadeInDown'>
                      <strong>Photography &amp; design</strong>
                    </h5>
                    <a href='#!' className='btn btn-outline-white wow fadeInDown waves-effect waves-light'>
                      portfolio
                    </a>
                    <a href='#!' className='btn btn-outline-white wow fadeInDown waves-effect waves-light'>
                      About me
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </section>
      <MDBContainer>
        <section id='recent' className=' my-5 text-center text-lg-left'>
          <h2 className='text-center my-5 h1'>Recent posts</h2>
          <p className='text-center mb-5 w-responsive mx-auto'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <MDBRow>
            <MDBCol lg='4' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Others/img (38).jpg' className='img-fluid' alt='First sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
            </MDBCol>
            <div className='col-lg-7 mb-4'>
              <a href='#!' className='teal-text'>
                <h6 className='pb-1'>
                  <MDBIcon icon='heart'/>
                  <strong>
                    Lifestyle
                  </strong>
                </h6>
              </a>
              <h4 className='mb-4'>
                <strong>This is title of the news</strong>
              </h4>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.
              </p>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Jessica Clark</strong>
                </a>
                , 26/08/2016
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/1')}>Read more</MDBBtn>
            </div>
          </MDBRow>

          <hr className='mb-5'/>

          <MDBRow className='mt-3'>
            <MDBCol lg='4' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg' className='img-fluid' alt='Second sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
            </MDBCol>
            <div className='col-lg-7 mb-4'>
              <a href='#!' className='cyan-text'>
                <h6 className='pb-1'>
                  <MDBIcon icon='plane'/>
                  <strong>
                    Travels</strong>
                </h6>
              </a>
              <h4 className='mb-4'>
                <strong>This is title of the news</strong>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.
              </p>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Jessica Clark</strong>
                </a>
                , 24/08/2016
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/2')}>Read more</MDBBtn>
            </div>
          </MDBRow>

          <hr className='mb-5'/>

          <MDBRow>
            <MDBCol lg='4' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Others/img (35).jpg' className='img-fluid' alt='Third sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
            </MDBCol>
            <div className='col-lg-7 mb-4'>
              <a href='#!' className='brown-text'>
                <h6 className='pb-1'>
                  <MDBIcon icon='camera'/>
                  <strong>
                    Photography</strong>
                </h6>
              </a>
              <h4 className='mb-4'>
                <strong>This is title of the news</strong>
              </h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Jessica Clark</strong>
                </a>
                , 21/08/2016
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/3')}>Read more</MDBBtn>
            </div>
          </MDBRow>

          <hr className='mb-5'/>

          <MDBRow>
            <MDBCol lg='4' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Others/img (39).jpg' className='img-fluid' alt='Third sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
            </MDBCol>
            <div className='col-lg-7 mb-4'>
              <a href='#!' className='red-text'>
                <h6 className='pb-1'>
                  <MDBIcon icon='heart'/>
                  <strong>
                    Lifestyle</strong>
                </h6>
              </a>
              <h4 className='mb-4'>
                <strong>This is title of the news</strong>
              </h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Jessica Clark</strong>
                </a>
                , 21/08/2016
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/2')}>Read more</MDBBtn>
            </div>
          </MDBRow>

          <MDBPagination className='pg-dark flex-center mt-5'>
            <MDBPageItem>
              <MDBPageNav aria-label='Previous'>
                <span aria-hidden='true'>&laquo;</span>
                <span className='sr-only'>Previous</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active="active">
              <MDBPageNav>
                1
                <span className='sr-only'>(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>4</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>5</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav aria-label='Previous'>
                <span aria-hidden='true'>&raquo;</span>
                <span className='sr-only'>Next</span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </section>
        <hr className='mb-5'/>
        <section id='older' className='section extra-margins text-center'>
          <h2 className='text-center my-5 h1'>Older posts</h2>
          <p className='text-center mb-5 w-responsive mx-auto'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <MDBRow>
            <MDBCol lg='4' md='12' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg' className='img-fluid' alt='First sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
              <a href='#!' className='pink-text'>
                <h6 className='mb-3 mt-3'>
                  <i className='fa fa-map '/>
                  <strong>
                    Environment</strong>
                </h6>
              </a>
              <h4 className='font-weight-bold mb-3'>
                This is title of the news
              </h4>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Billy Forester</strong>
                </a>
                , 15/07/2016
              </p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas.
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/5')}>Read more</MDBBtn>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg' className='img-fluid' alt='Second sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
              <a href='#!' className='indigo-text'>
                <h6 className='mb-3 mt-3'>
                  <i className='fa fa-plane'/>
                  <strong>
                    Travels</strong>
                </h6>
              </a>
              <h4 className='font-weight-bold mb-3'>
                This is title of the news
              </h4>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Billy Forester</strong>
                </a>
                , 12/07/2016
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/6')}>Read more</MDBBtn>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4'>
              <MDBView waves="waves" hover="hover" className='z-depth-1'>
                <img src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg' className='img-fluid' alt='Thrid sample'/>
                <a href='#!'>
                  <MDBMask overlay='white-slight'/>
                </a>
              </MDBView>
              <a href='#!' className='cyan-text'>
                <h6 className='mb-3 mt-3'>
                  <i className='fa fa-leaf '/>
                  <strong>
                    Animals</strong>
                </h6>
              </a>
              <h4 className='font-weight-bold mb-3'>
                This is title of the news
              </h4>
              <p>
                by{' '}
                <a href='#!'>
                  <strong>Billy Forester</strong>
                </a>
                , 10/07/2016
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia consequuntur magni dolores eos qui ratione voluptatem.
              </p>
              <MDBBtn color='primary' onClick={()=> history.push('/Blog/7')}>Read more</MDBBtn>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>


  </div>);
}

export default Blog;
