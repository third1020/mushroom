import React from 'react'
import './IconHeader.css'
import LogoImg from '../assets/LogoCompany.png';
import { MDBView, MDBMask } from 'mdbreact';
const IconHeader = () => {

  return (


         <MDBView hover rounded style={{background:"#f9f9f9"}}>
                   <div class="panel-body">
<img class="img-thumbnail"  src={LogoImg} style={{padding:"8px",height:"80px"}} />
  <MDBMask className="flex-center" overlay="blue-slight">

    </MDBMask>
    </div>
</MDBView>




  )
}

export default IconHeader;
