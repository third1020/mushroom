import React, {useState, useEffect} from 'react';
import {
  MDBContainer,
  MDBBtn,
  Typography,
  MDBCard,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdbreact';
import styles from "./mapStyles";
import {useHistory} from 'react-router-dom'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import mapStyles from './mapStyles';

const Blog = (props) => {
  let history = useHistory();
  const [showingInfoWindow, setshowingInfoWindow] = useState(true);
  const [activeMarker, setactiveMarker] = useState();
  const [selectedPlace, setselectedPlace] = useState();
  const markerCenter = {
    lat: 47.778519,
    lng: -122.405640
  }

  const containerStyle = {
    position: 'relative',
    width: '100%'
  }

  const style = {
    width: '100%',
    height: '100%'
  }
  function mapLoaded(mapProps, map) {
    map.setOptions({styles: mapStyle})
  }

  const mapStyle = mapStyles;

  const onMapClicked = (props) => {
    console.log();
    if (showingInfoWindow) {
      setactiveMarker(null);
      setshowingInfoWindow(false);
    }
  };

  const handleWindowClose = (props) => {
    setshowingInfoWindow(false);
  };

  const handleMarkerClick = (props, marker, e) => {
    setshowingInfoWindow(true);
    setactiveMarker(marker);
    setselectedPlace(props);
  }

  const ListMarker = props => {
    return (<div>
      <div>
        <MDBIcon icon="building" className="teal-text pr-1"/> {props.name}
      </div>
      <a hover="hover">
        click here
      </a>
    </div>);
  };



  useEffect(() => {}, [showingInfoWindow])

  return (<MDBContainer className="dark-grey-text mb-5">

    <h1 className="h1-responsive font-weight-bold my-5 text-center">
      สถานการณ์ปัจจุบันทั่วโลก
    </h1>

    <MDBRow>
      <MDBCol md="8" style={{
          padding: "0px",
          height: "500px"
        }}>
        <Map onClick={onMapClicked} google={props.google} zoom={1.4} onReady={(mapProps, map) => mapLoaded(mapProps, map)}>
          <Marker
  title={'The marker`s title will appear as a tooltip.'}
  name={'SOMA'}
  position={{lat: 37.778519, lng: -122.405640}} />
<Marker
  name={'Dolores park'}
  position={{lat: 37.759703, lng: -122.428093}} />
<Marker />


        </Map>
      </MDBCol>
      <MDBCol md="4" style={{
          padding: "0px"
        }} className="border  border-grey">
        <MDBContainer style={{
            backgroundColor: "white",
            height: "500px",
            overflowY: "scroll"
          }}>
          <MDBCol md="12">
            <input className="form-control mt-3 mb-3" type="text" placeholder="Search" aria-label="Search"/>
          </MDBCol>
          <MDBRow className="mb-3 border border-right-0 border-left-0 border-grey mt-3">

            <MDBCol>

              <h5 className="font-weight-bold mb-3">Safety</h5>
              <p className="grey-text">
                ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text"/>
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Technology</h5>
              <p className="grey-text">
                isicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text"/>
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Finance</h5>
              <p className="grey-text">
                elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="1">
              <MDBIcon icon="share" size="lg" className="indigo-text"/>
            </MDBCol>
            <MDBCol xl="10" md="11" size="10">
              <h5 className="font-weight-bold mb-3">Finance</h5>
              <p className="grey-text">
                elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>

  </MDBContainer>);
};

export default GoogleApiWrapper({apiKey: ("AIzaSyDnmGzOiSJeXAFo2uFsEDOa92cYcT7waO0"),language:"thai"})(Blog);
