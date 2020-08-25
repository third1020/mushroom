
import React , { useState ,useEffect } from 'react';
import { MDBDataTableV5 ,MDBCard,MDBCardBody,MDBBtn,MDBIcon,MDBFormInline } from 'mdbreact';
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
export default function TableSubScribe() {
  let history = useHistory();
  const [reRender,setreRender] = useState(0);
  const [isOpen,setisOpen] = useState(false);
  const [Index,setIndex] = useState();
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Email',
        field: 'email',
        width: window.innerWidth*9/10,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Title',
        },
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

  async function fetchSubscribe() {
    let fetchSubscribe = await axios.get(`${window.$URLbackend}/subscribe`)
    if(fetchSubscribe.data.data.length){
      let array = [];
      let ArraySubscribe = fetchSubscribe.data.data;

      ArraySubscribe.map((items,index) => {
        var object = {
          email: items.email,
          created_at: transFormDate(items.created_at),

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
  );
}
