
import React , { useState ,useEffect } from 'react';
import { MDBDataTableV5 ,MDBCard,MDBCardBody,MDBBtn,MDBIcon,MDBFormInline ,MDBCol ,MDBModalHeader,MDBModalFooter,MDBModal,MDBModalBody,MDBInput } from 'mdbreact';
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
    months[stringDate.getMonth() + 1] +
    "-" +
    stringDate.getFullYear();
  return transFormDate;
};
export default function TableContactUs() {
  let history = useHistory();
  const [reRender,setreRender] = useState(0);
  const [isOpen,setisOpen] = useState(false);
  const [Index,setIndex] = useState();
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: window.innerWidth*8/10,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Title',
        field: 'title',
        width: window.innerWidth*1/10,
      },
      {
        label: 'Created at',
        field: 'created_at',
        width: window.innerWidth*1/10,
      },
    ],
    rows: [],
  });

  // async function DeleteBlog(id) {
  //   var DeletedBlog = await axios.delete(`${window.$URLbackend}/blog/${id}`);
  //   setDatatable({...datatable,rows:[]});
  //   setreRender(reRender+1);
  // }
  //
  // async function EditBlog(id) {
  //   history.push(`/EditBlog/${id}`);
  // }

  async function SetModal(index) {
    setisOpen(true);
    setIndex(index);
  }

  async function fetchSubscribe() {
    let fetchSubscribe = await axios.get(`${window.$URLbackend}/contact`)
    if(fetchSubscribe.data.data.length){
      let array = [];
      let ArraySubscribe = fetchSubscribe.data.data;

      ArraySubscribe.map((items,index) => {
        var object = {
          name: items.name,
          email: items.email,
          title: items.title,
          description: items.description,
          created_at: transFormDate(items.created_at),
          clickEvent: () => SetModal(index)
        }
        array.push(object);
      })

      setDatatable({...datatable,rows:array});
    }
    console.log(fetchSubscribe.data.data.length);

  }

  useEffect(()=>{
    fetchSubscribe();
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
      exportToCSV
    />
  </MDBCardBody>
  </MDBCard>
  <MDBModal isOpen={isOpen} toggle={()=>setisOpen(false)}>
  <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={()=>setisOpen(false)}>Information</MDBModalHeader>
  <MDBModalBody>
    <form className="mx-3 grey-text">
      {
        datatable.rows[Index] ?
        <div className="black-text">
        <p> <strong>Name : </strong> { datatable.rows[Index].name }</p>
        <p> <strong>Email :</strong> { datatable.rows[Index].email }</p>
        <p> <strong>Title :</strong> { datatable.rows[Index].title }</p>
        <p> <strong>Description : </strong> { datatable.rows[Index].description }</p>
        </div>

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
