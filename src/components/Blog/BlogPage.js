import React ,{useState,useEffect} from "react";
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
import axios from 'axios';
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
    months[stringDate.getMonth() + 1] +
    " ," +
    stringDate.getFullYear();
  return transFormDate;
};

const BlogPage = () => {
  let history = useHistory();
  const [dataarray,setdataarray] = useState([]);

  async function fetchBlog() {
    let fetchBlog = await axios.get(`${window.$URLbackend}/blog`)
    if(fetchBlog.data.data.length){
      let array = [];
      let ArrayBlog = fetchBlog.data.data;

      ArrayBlog.map((items,index) => {
        array.push(items);
      })

      setdataarray(array);
    }
    console.log(fetchBlog.data.data.length);

  }

  useEffect(()=>{
        fetchBlog();
  },[])

  return (
    <section className="text-center my-5">
      {/**
        <h2 className="h1-responsive font-weight-bold my-5">
          description
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>

        **/
      }


      <MDBRow className="text-center">
      {
        dataarray.map((items,index) =>
        <MDBCol sm="12" md='6' xl="4" className='mb-r'>
          <a href={items.url_blog} target="_blank">
          <MDBView className="rounded mb-lg-0 mb-4" hover waves>
          <img

            style={{height:"225px"}}
            className="img-fluid w-100"
            src={items.image}
            alt="--url image wrong--"
          />
          <a>
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>

            <MDBCardBody className='pt-0 mt-4'>

              <p className="text-left" style={{color:"#0395D1"}}>
                <u>
                  {transFormDate(items.created_at)}

               </u>
              </p>

              <h5 className="font-weight-bold mb-3 p-0 text-left" style={{color:"#0395D1"}}>
                <strong>{items.title}</strong>
              </h5>
              <p className="text-left dark-grey-text mono-space">
                {items.description}
              </p>
            </MDBCardBody>
            </a>
        </MDBCol>

        )
      }
      </MDBRow>
    </section>
  );
}

export default BlogPage;
