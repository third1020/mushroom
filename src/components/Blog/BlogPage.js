import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import {
  useHistory
} from 'react-router-dom';
import imageHeader1 from '../../assets/News1/1.jpg';
import imageHeader2 from '../../assets/News2/1.jpeg';
import imageHeader3 from '../../assets/News3/1.jpg';
import imageHeader4 from '../../assets/News4/1.jpg';
import imageHeader5 from '../../assets/News5/1.jpg';
import imageHeader6 from '../../assets/News6/1.jpg';
import imageHeader7 from '../../assets/News7/1.jpg';
let dataarray = [
  { image:imageHeader1,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  },
  { image:imageHeader2,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  },
  { image:imageHeader3,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  },
  { image:imageHeader4,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  },
  { image:imageHeader5,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  },
  { image:imageHeader6,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  },
  { image:imageHeader7,
    title:"Title of the news",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."
  }
]

const BlogPage = () => {
  let history = useHistory();
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        description
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit
        est laborum.
      </p>

      <MDBRow className="text-center">
      {
        dataarray.map((items,index) =>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <a onClick={()=> history.push(`/Blog/${index+1}`)}>
            <img
              style={{height:"250px"}} className="overlay rounded z-depth-1 img-fluid hover"
              src={items.image}
              alt=""
            />

            </a>

          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">{items.title}</h4>
            <p className="grey-text">
              {items.description}
            </p>
          </MDBCardBody>
        </MDBCol>

        )
      }
      </MDBRow>
    </section>
  );
}

export default BlogPage;
