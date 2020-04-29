import React from 'react';
import {
MDBIcon,
MDBCol,
MDBRow,
MDBCard,
MDBView,
MDBCardBody,
MDBBadge,
MDBJumbotron
} from 'mdbreact';
const News1 = () => {
  return(
    <>
    <section id="post" className="section section-blog-fw pb-3">

        <MDBRow>
            <MDBCol md="12">
                <MDBCard reverse>
                    <MDBView cascade>
                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" alt="Wide sample post"/>
                    </MDBView>

                    <MDBCardBody cascade className="text-center">
                        <h2><a href="#!"><strong>This is title of the news</strong></a></h2>
                        <p>Written by <a href="#!">Abby Madison</a>, 26/08/2016</p>



                    </MDBCardBody>
                </MDBCard>

                <div className="excerpt mt-5">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                        non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                        et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>

                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                        autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                        ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.</p>

                    <blockquote className="blockquote mt-4 mb-4">
                        <p className="mb-0"><em>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</em></p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>


                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                    </p>

                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                        qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>


                    <div className="mt-4 d-flex justify-content-end">
                        <MDBBadge color="pink" className="mr-1">Travel</MDBBadge>
                        <MDBBadge color="primary" className="mr-1">Adventure</MDBBadge>
                        <MDBBadge color="grey" className="mr-1">Photography</MDBBadge>
                        <MDBBadge color="info">Education</MDBBadge>
                    </div>

                </div>
            </MDBCol>
        </MDBRow>
    </section>

    <hr className="my-5"/>

    <section id="author">

        <MDBJumbotron className="p-5 text-center text-md-left author-box">
            <h4 className="h3-responsive text-center font-weight-bold dark-grey-text">About author</h4>
            <hr/>
            <MDBRow>
                <MDBCol size="12" md="2" className="mb-md-0 mb-4">
                    <img src="http://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="img-fluid rounded-circle z-depth-2" alt="An avatar"/>
                </MDBCol>
                <MDBCol size="12" md="10">
                    <h5 className="font-weight-bold dark-grey-text mb-3">
                        <strong>John Doe</strong>
                    </h5>
                    <div className="personal-sm pb-3">
                    <a href="#!"><MDBIcon fab icon="facebook" className="fb-ic pr-2 mr-2"/></a>
                    <a href="#!"><MDBIcon fab icon="twitter" className="tw-ic pr-2 mr-2"/></a>
                    <a href="#!"><MDBIcon fab icon="google-plus" className="gplus-ic pr-2 mr-2"/></a>
                    <a href="#!"><MDBIcon fab icon="linkedin" className="li-ic pr-2 mr-2"/></a>
                    </div>
                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint esse nulla quia quam veniam commodi
                        dicta, iusto inventore. Voluptatum pariatur eveniet ea, officiis vitae praesentium beatae
                        quas libero, esse facere.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBJumbotron>
    </section>
    </>
  )
}

export default News1;
