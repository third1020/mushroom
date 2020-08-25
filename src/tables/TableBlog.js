
import React , { useState ,useEffect } from 'react';
import { MDBDataTableV5,MDBView,MDBMask ,MDBCard,MDBCardBody,MDBBtn,MDBIcon,MDBFormInline,MDBModalHeader,MDBModalFooter,MDBModal,MDBModalBody,MDBInput } from 'mdbreact';
import axios from 'axios'
import {
  useHistory
} from 'react-router-dom'

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
    "-" +
    months[stringDate.getMonth()] +
    "-" +
    stringDate.getFullYear();
  return transFormDate;
};
export default function TableBlog() {
  let history = useHistory();
  const [reRender,setreRender] = useState(0);
  const [isOpen,setisOpen] = useState(false);
  const [ListBlog,setListBlog] = useState([]);
  const [Index,setIndex] = useState();
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Title',
        field: 'title',
        width: 370,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Title',
        },
      },
      {
        label: 'Created at',
        field: 'created_at',
        width: 100,
      },
      {
        label: 'Link Redirect',
        field: 'url_blog',
        width: 50,
      },
      {
        label: 'Action',
        field: 'action',
        width: 200,
      },
    ],
    rows: [],
  });

  async function DeleteBlog(id) {
    var DeletedBlog = await axios.delete(`${window.$URLbackend}/blog/${id}`);
    setDatatable({...datatable,rows:[]});
    setreRender(reRender+1);
  }

  async function EditBlog(id) {
    history.push(`/EditBlog/${id}`);
  }

  async function SetModal(index) {
    setisOpen(true);
    setIndex(index);
  }

  async function fetchBlog() {
    let fetchBlog = await axios.get(`${window.$URLbackend}/blog`)
    if(fetchBlog.data.data.length){
      let array = [];
      let ArrayBlog = fetchBlog.data.data;
      setListBlog(ArrayBlog);

      ArrayBlog.map((items,index) => {
        var object = {
          title: items.title,
          created_at: transFormDate(items.created_at),
          url_blog:<a href={items.url_blog} target="_blank"><MDBIcon icon="external-link-alt primary-text" /> </a>,
          action:
          <MDBFormInline>
          <MDBBtn tag="a" size="sm" floating color="warning mx-1" onClick={()=>EditBlog(items._id)}>
    <MDBIcon icon="pen" />
  </MDBBtn>
  <MDBBtn tag="a" size="sm" floating color="danger mx-1" onClick={()=>DeleteBlog(items._id)}>
    <MDBIcon icon="trash" />
  </MDBBtn>
          </MDBFormInline>,
          clickEvent: () => SetModal(index)
        }
        array.push(object);
      })

      setDatatable({...datatable,rows:array});
    }
    console.log(fetchBlog.data.data.length);

  }

  useEffect(()=>{
    fetchBlog();
  },[reRender])

  return (
    <>
    <MDBCard>
      <MDBCardBody>
    <MDBDataTableV5
      hover
      entriesOptions={[10, 20, 25]}
      entries={10}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}

    />
  </MDBCardBody>
  </MDBCard>

  <MDBModal isOpen={isOpen} toggle={()=>setisOpen(false)}>
  <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={()=>setisOpen(false)}>Information</MDBModalHeader>
  <MDBModalBody>
    <form className="mx-3 grey-text">
      {
        ListBlog[Index] ?
        <a href={ListBlog[Index].url_blog} target="_blank">
        <MDBView className="rounded mb-lg-0 mb-4" hover waves>
        <img

          height={400}
          className="img-fluid w-100"
          src={ListBlog[Index].image}
          alt="--url image wrong--"
        />
        <a>
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>

          <MDBCardBody className='pt-0 mt-4'>

            <p className="text-left" style={{color:"#0395D1"}}>
              <u>
                {transFormDate(ListBlog[Index].created_at)}

             </u>
            </p>

            <h5 className="font-weight-bold mb-3 p-0 text-left" style={{color:"#0395D1"}}>
              <strong>{ListBlog[Index].title}</strong>
            </h5>
            <p className="text-left dark-grey-text mono-space">
              {ListBlog[Index].description}
            </p>
          </MDBCardBody>
          </a>

    : null
      }

    </form>
  </MDBModalBody>
  <MDBModalFooter className="justify-content-center">
    <MDBBtn color="danger" onClick={()=>setisOpen(false)}>Close

    </MDBBtn>
  </MDBModalFooter>
</MDBModal>

  </>
  );
}
