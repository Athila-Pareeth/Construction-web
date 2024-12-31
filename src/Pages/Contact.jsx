import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MDBTextArea } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div>
        <div class="image-container">
  <div class="text">CONTACTS</div>
</div>
<div className="row mt-5" style={{marginLeft:'100px'}}>
    <div className="col-4">
        <FaLocationDot className='text-center' />
        <h4 className='text-primary'>Head Office</h4>
        <p className='text-primary'>IInd Floor , Palm Lands Complex Temple <br /> Road Bank Junction Aluva Pin: 683101</p>
    </div>
    <div className="col-4">
    <IoCall  className='text-center'/>
        <h4 className='text-primary'>Call Us</h4>
        <p className='text-primary'>Phone: 0484- 4063522 / 0484- 4063523 <br />
        Mob: +91 9995278278 / +91 9895065039</p>
    </div>
    <div className="col-4 p-2">
    <IoMdMail style={{textAlign:'center'}}/>
        <h4 className='text-primary' >Email Us</h4>
        <p className='text-primary'>contactus@skconstructions.net.in, <br />
        constructions.sk@gmail.com</p>
    </div>
</div>
          <div className="row">
            <div className="col-6 border border-3 shadow mt-5 p-3">
              <h2 >Send us a message</h2>
               <input type="text" placeholder='Name' className='form-control mt-5'/><br />
               <input type="email" placeholder='Email' className='form-control'/><br />
               <input type="number" placeholder='Phone' className='form-control'/><br />
               <MDBTextArea label="Message" id="textAreaExample" rows="{4}" /><br />
               <MDBBtn rounded className='mx-2' color='dark' style={{marginBottom:'3%'}}>
               Send a message
                 </MDBBtn>
            </div>
            <div className="col-6 mt-5">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.8343622144575!2d76.34956757479516!3d10.112640789998602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f28aa22b60f%3A0x6551222e26c7870a!2sSK%20Constructions!5e0!3m2!1sen!2sin!4v1735632274545!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ border: 0 ,marginLeft:'80px'}}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="SK Constructions Map"
  ></iframe>
</div>
          </div>
          <hr style={{marginTop:'60px', height:'3px',border:'none',background: "linear-gradient(to right,yellow,blue)"}}/>

    </div>
  )
}

export default Contact