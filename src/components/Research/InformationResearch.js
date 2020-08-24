import React, {useState, useEffect} from "react";
import {
  MDBContainer,
  MDBCard,
  MDBRow,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
  MDBScrollspyBox,
  MDBListGroup,
  MDBListGroupItem,
  MDBScrollspyText,
  MDBView,
  MDBMask,
  MDBTypography,
  MDBBadge,
  MDBBox,
  MDBChip
} from "mdbreact";
import "./InformationResearch.css";
import SearchField from "react-search-field";
import researchData from "./researchData";

const InformationResearch = (props) => {
  const [InitialWord,setInitialWord] = useState('');

  const [Data, setData] = useState(researchData);

  const onSubmitSearch = () => {
    let filterData = [];
    for (var i = 0; i < researchData.length; i++) {
      for (var j = 0; j < researchData[i].Keywords.length; j++) {
        const UpperKeyword = researchData[i].Keywords[j].toUpperCase();
        if (UpperKeyword.includes(props.WordSearch.toUpperCase())) {
          filterData.push(researchData[i]);
          break;
        }
      }
    }
    props.setWordSearch(InitialWord);
    setData(filterData);
    console.log(filterData);
  }

  const onChange = (value, event) => {
    if (value === "") {
      setData(researchData)
    }
    let filterData = [];
    // for (var i = 0; i < researchData.length; i++) {
    //   for (var j = 0; j < researchData[i].Keywords.length; j++) {
    //     const UpperKeyword = researchData[i].Keywords[j].toUpperCase();
    //     if (UpperKeyword.includes(value.toUpperCase())) {
    //       filterData.push(researchData[i]);
    //       break;
    //     }
    //   }
    // }

    props.setWordSearch(value);
    setInitialWord(value);
    // setData(filterData);
    // console.log(filterData);
  }

  useEffect(() => {
    onSubmitSearch(props.WordSearch);
    onChange(props.WordSearch);
  },
  [props.WordSearch])

  return (<>
    <h2 className="h1-responsive text-left my-5">
      Psychedelic Bibliography
    </h2>

    <MDBCardBody style={{
        border: "1px solid #eeeeee"
      }}>
      <h3 className=" h3-responsive text-left mb-5">
        Psychedelic Bibliography
      </h3>
      <div className="pb-5">

        <SearchField placeholder="Search..." searchText={InitialWord} onChange={onChange} onSearchClick={onSubmitSearch} classNames="test-class"/>

      </div>
      {
        Data.map((items, index) => {
          return (<div>
            <MDBRow>
              <MDBCol lg="8" xl="9">
                <MDBTypography blockquote="blockquote">
                  <h4 mb={0} className='bq-title'>{items.Title}</h4>

                  <p className="my-4">
                    KEYWORDS :
                    <> {
                  items.Keywords.map((word,indexword) =>{
                    return(
                      <MDBChip className="info mx-1 font-weight-bold" bgColor="info-color" text="white" >{word}</MDBChip>

                    )
                  } )
                } </>
                  </p>
                </MDBTypography>
              </MDBCol>
              <MDBCol lg="4" xl="3">
                <div className="my-3">
                  {
                    items.Abstract
                      ? <MDBBtn style={{
                            fontSize: "13px",
                            borderRadius: "0px"
                          }} onClick={() => {
                            window.open(items.Abstract)
                          }} color="grey darken-3" size="sm">
                          อ่านบทคัดย่องานวิจัย
                        </MDBBtn>
                      : null
                  }
                  {
                    items.Fulltext
                      ? <MDBBtn style={{
                            fontSize: "13px",
                            borderRadius: "0px"
                          }} onClick={() => {
                            window.open(items.Fulltext)
                          }} color="grey darken-3" size="sm">
                          อ่านงานวิจัยฉบับเต็ม
                        </MDBBtn>
                      : null
                  }
                  {
                    items.Moreinformation
                      ? <MDBBtn style={{
                            fontSize: "13px",
                            borderRadius: "0px"
                          }} onClick={() => {
                            window.open(items.Fulltext)
                          }} color="grey darken-3" size="sm">
                          ข้อมูลเพิ่มเติมงานวิจัย
                        </MDBBtn>
                      : null
                  }

                </div>
              </MDBCol>
            </MDBRow>
            <hr/>
          </div>)
        })
      }
    </MDBCardBody>
  </>);

}

export default InformationResearch;
