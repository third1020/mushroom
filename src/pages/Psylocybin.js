import React from 'react'
import './psylocybin.css'
import Infographic from '../assets/Infographic.png'
const Psylocybin = () => {
    return (

      <div style={{marginTop:"50px"}} class="containeriframe">
        { window.innerWidth > 768 ?
      <iframe  style={{zoom: "1.5"}} src="https://tasket.s3-ap-southeast-1.amazonaws.com/Student%20Resume/4Hisk9ipVQK4ajcnXa8Rxb.pdf" width="100%" height={(window.innerHeight + window.innerWidth) / 2}>
      </iframe>
      :
      <div style={{marginTop:"50px"}} class="containeriframe">
      <img src={Infographic} className="img-fluid" alt="" />
      </div>
    }
    </div>

    )
}

export default Psylocybin
