import React from 'react';
import {MDBContainer,MDBBtn} from 'mdbreact';
import {VectorMap} from 'react-jvectormap';
import {useHistory} from 'react-router-dom'
const Blog = () => {
  let history = useHistory();

  const series = {
regions: [
  {
    values: {
      IN: '#5478ab',
      DK: '#88b7d6',
      PL: '#5478ab',
      IQ: '#98c6e5',
      PK: '#88b7d6',
      RU: '#95c9ed',
      CN: '#add8f5',
      AU: '#5478ab',
      AR: '#b6d4e9',
      FR: '#9ccbeb',
      NG: '#98c6e5',
      CA: '#5478ab',
      US: '#9ccbeb'
    }
  }
],
markers: [
  {
    attribute: 'image',
    scale: {
      'closed': '../../assets/mdb-react-small.png',
      'activeUntil2018': '../../assets/mdb-react-small.png',
      'activeUntil2022': '../../assets/mdb-react-small.png'
    }
  }
]
};

  const regionStyle = {
    initial: {
      fill: '#cbced4'
    }
  };

  return (<MDBContainer className="my-5 py-5 dark-grey-text">

    <h1 className="h1-responsive font-weight-bold my-5 text-center">
      Blog
    </h1>
    <p className=" lead w-responsive mb-md-0 mb-5">สถานการณ์ปัจจุบันทั่วโลกต่อสารไซโลไซบิน </p>

    <div
      className="my-3"
      style={{
        width: '100%',
        height: 500
      }}>
      <VectorMap map={'world_mill'}
        backgroundColor='#fff'
        onMarkerClick= {(e,code)=>  {
          console.log(e)
          console.log(code)
          history.push('/Blog/1');
          window.scrollTo(0,0);
        }}
        zoomAnimate
        markerStyle ={
          {
            initial: {
              fill: 'blue',
              stroke: '#505050',
              "fill-opacity": 1,
              "stroke-width": 1,
              "stroke-opacity": 1,
              r: 5
            },
            hover: {
              stroke: 'black',
              "stroke-width": 2,
              cursor: 'pointer'
            },
            selected: {
              fill: 'blue'
            },
            selectedHover: {
            }
          }
}
        markers={[
 {latLng: [41.90, 12.45], name: 'Vatican City'},
 {latLng: [43.73, 7.41], name: 'Monaco'},
 {latLng: [-0.52, 166.93], name: 'Nauru'},
 {latLng: [-8.51, 179.21], name: 'Tuvalu'},
 {latLng: [43.93, 12.46], name: 'San Marino'},
 {latLng: [47.14, 9.52], name: 'Liechtenstein'},
 {latLng: [7.11, 171.06], name: 'Marshall Islands'},
 {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
 {latLng: [3.2, 73.22], name: 'Maldives'},
 {latLng: [35.88, 14.5], name: 'Malta'},
 {latLng: [12.05, -61.75], name: 'Grenada'},
 {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
 {latLng: [13.16, -59.55], name: 'Barbados'},
 {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
 {latLng: [-4.61, 55.45], name: 'Seychelles'},
 {latLng: [7.35, 134.46], name: 'Palau'},
 {latLng: [42.5, 1.51], name: 'Andorra'},
 {latLng: [14.01, -60.98], name: 'Saint Lucia'},
 {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
 {latLng: [1.3, 103.8], name: 'Singapore'},
 {latLng: [1.46, 173.03], name: 'Kiribati'},
 {latLng: [-21.13, -175.2], name: 'Tonga'},
 {latLng: [15.3, -61.38], name: 'Dominica'},
 {latLng: [-20.2, 57.5], name: 'Mauritius'},
 {latLng: [26.02, 50.55], name: 'Bahrain'},
 {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
]}
         containerStyle={{
          width: '100%',
          height: '100%'
        }} containerClassName='map'
        series={series}
        regionStyle={regionStyle}/>
    </div>
    <div className="text-center">
      <MDBBtn onClick={() => {
          history.push('/Blog')
          window.scrollTo(0,0);
        }}
        className="font-weight-bold" rounded outline color="primary" >Discover More
      </MDBBtn>
    </div>
  </MDBContainer>);
};

export default Blog;
