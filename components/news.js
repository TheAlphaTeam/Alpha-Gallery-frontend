import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
export default function News() {
  return (
      <>
      <div className="w-full"style={{ backgroundImage: `url('http://res2.weblium.site/res/5c74178873dbed00222cf694/5c7515df8de8fd0023d19802_optimized_1200')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}>  
    <h1 className="text-4xl font-bold text-center pt-10 pb-14 font-sans">News</h1>
    <div className= "flex flex-row flex-wrap justify-center pb-10"> 
    <div className=" mx-7 border-2 rounded-md p-4 mb-3">  
    <MDBCard style={{ maxWidth: '500px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://images.pexels.com/photos/2261165/pexels-photo-2261165.jpeg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle  className="text-sm text-gray font-bold">Minimalism |May 22, 2018</MDBCardTitle>
            <MDBCardText>
            Recently, the 2.3gallery has been opened in London. I was proud to present twelve paintings 
            by Robert Ryman in the minimalist style. The exhibition of his works completed in
            the period of 1961–2003 years will be on view from April 12 till May 24, 2018.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
   </div>
    <div className=" mx-7 border-2 rounded-md p-4 mb-3 "> 
    <MDBCard style={{ maxWidth: '500px'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://images.pexels.com/photos/4069091/pexels-photo-4069091.jpeg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className="text-sm text-gray font-bold">Avant-garde | May 21, 2018</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.This
              content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>


    <div className=" mx-7 border-2 rounded-md p-4 "> 
    <MDBCard style={{ maxWidth: '500px'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className="text-sm text-gray font-bold">Avant-garde | May 21, 2018</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.This
              content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>


    <div className=" mx-7 border-2 rounded-md p-4 "> 
    <MDBCard style={{ maxWidth: '500px'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://images.pexels.com/photos/2764400/pexels-photo-2764400.jpeg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className="text-sm text-gray font-bold">Avant-garde | May 21, 2018</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content.This
              content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
    </div>
    </div>
    
    </>
  );
}
