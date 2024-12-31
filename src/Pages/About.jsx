import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
function About() {
  return (
    <div >
    <div class="image-container">
  <div class="text">ABOUT</div>
</div>
        <h4 style={{textAlign:'center',fontFamily:'serif' }}className='mt-5 text-primary'>From design, to construction, completion, and handover</h4><br />
        <h5 style={{textAlign:'center',fontFamily:'serif'}}>S K Constructions entered into the business industry as a maintenance company by its CEO, Mr.K. Sreekumar, an engineer by profession who has proved his caliber in India and abroad. His intuition and business sense buttressed with the exhilaration of returning to his homeland led him to believe that he could make Quality the key differentiator between his proposed venture and other construction companies. Gradually we started doing small individual residential houses and villas. In August 2005 we stepped on to Multi-storeyed Apartments in Aluva. Now we’ve an office with full-fledged amenities in the heart of Aluva.
<br /> <br />Acquiring knowledge from past experience, we are ahead with the on-going projects with much excellence by leaving footprints in the construction scenario.</h5>

<div class="image-container1 mt-5">
  <div class="text">Vision</div>
</div>
<div className="row">
    <div className="col-8 mt-5 p-5 ">
    Futuristic edifice, preserving ecological balance <br /><br />

SK Construction is propelled by an exceptional team of construction executives, project managers,<br /> estimators, field and support staff that adheres to SK’s core value system:
    </div>
    <div className="col-4 mt-5 p-5">
        <ul>
            <li >Client commitment</li>
            <li>Fiscal responsibility</li>
            <li>Collaborative process</li>
            <li>Strategic alignment</li>
            <li>Due diligence</li>
        </ul>
    </div>
</div>
 
 <ul style={{backgroundColor:'#faedcd',color:'black',height:'150px'}}>
    <li>Over a decade of quality focused best practices for building world class products have helped us enhance quality of life and delight customers.</li>
    <li>Over a decade of engineering excellence and unique initiative that has helped us to control costs, and deliver in time, every time</li>
 </ul>

 <div class="image-container2">
  <div class="text">Mission</div>
</div>
<p className='mt-5' style={{textAlign:'center'}}>Quality hands, timely delivery with maximum efficiency which suits customer satisfaction. Our mission is engraved in the following seven pillars as:</p>
<h5 className='text-primary' style={{textAlign:'center'}}>Our Seven Pillars of excellence as SQVICWS</h5>

<div className="row mt-5 p-5 d-flex align-items-stretch">
<MDBRow>
      <MDBCol sm='6'>
        <MDBCard  className="h-100">
          <MDBCardBody>
            <MDBCardTitle className='text-primary'>1.Sustainability</MDBCardTitle> <br />
            <MDBCardText>
            SK recognizes the value in sustainable building practices for future generations and is committed to the longevity of the company through environmental awareness.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard className="h-100" >
          <MDBCardBody>
            <MDBCardTitle className='text-primary'>2.Quality</MDBCardTitle><br />
            <MDBCardText>
            At the core of every successful business is a collective commitment to quality. SK follows its proven business equation (Integrity + Performance = Trust®) to ensure success. By embracing a higher standard of excellence, our people deliver higher quality results.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
</div>
<div className="row mt-3 p-5 d-flex align-items-stretch">
<MDBRow>
      <MDBCol sm='6'>
        <MDBCard  className="h-100">
          <MDBCardBody>
            <MDBCardTitle className='text-primary'>3.Value</MDBCardTitle><br />
            <MDBCardText>
            It is ingrained within us to deliver the best value for our clients. Our experience, knowledge and proven processes result in maximized evaluations and are committed to the longevity of the company through environmental awareness.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard  className="h-100">
          <MDBCardBody>
            <MDBCardTitle className='text-primary'>4.Integrity</MDBCardTitle><br />
            <MDBCardText>
            We stand behind our work through the moral and ethical principles of honesty and trust, an approach governed by our impressive track record.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
</div>
<div className="row mt-3 p-5 d-flex align-items-stretch">
<MDBRow>
      <MDBCol sm='6'>
        <MDBCard  className="h-100">
          <MDBCardBody >
            <MDBCardTitle className='text-primary'>5.Collaboration</MDBCardTitle> <br />
            <MDBCardText >
            We believe in facilitating a team approach among all parties involved on the project to create a sharing of knowledge that delivers the best possible project. Unlike many in the industry, we value a collaborative approach that produces the best project results in the most efficient manner.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard  className="h-100">
          <MDBCardBody>
            <MDBCardTitle className='text-primary'>6.Wisdom</MDBCardTitle> <br />
            <MDBCardText>
            Through our experience, vision and knowledge, we are able to accurately and thoroughly deliver both the client’s expectations and the architect’s vision for the project. We understand what it takes for a project to become a reality.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    <div className="row mt-2 p-5 d-flex align-items-stretch" style={{marginLeft:'500px'}}>
        <div className="col" ><MDBCol sm='6'>
        <MDBCard  className="h-100">
          <MDBCardBody>
            <MDBCardTitle className='text-primary'>7.Safety</MDBCardTitle><br />
            <MDBCardText>
            Regardless of the project, safety remains and always will be our number one priority. A core value of each project is a commitment to the safety of all team members.            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol></div>
    
    </div>

    <p className='mt-5 text-center'>In our ongoing and constant pursuit of building perfection, we commit to a business foundation and philosophy supported by the above principles.</p>

</div>
    
  )
}
export default About