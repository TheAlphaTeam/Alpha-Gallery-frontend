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
            <MDBCardTitle  className="text-sm text-gray font-bold">Kate Brown | July 29, 2021</MDBCardTitle>
            <MDBCardText>
            Galleries
            Veteran Dealer Marian Goodman Has Named Five New Partners as Part of a Major Gallery Restructure
            Goodman herself will step into the role of C.E.O.
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
          <MDBCardImage src='https://news.artnet.com/app/news-upload/2021/07/SAMARAS_inst_2005_v1-High-Resolution-%E2%80%94-300-dpi--256x256.jpeg' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className="text-sm text-gray font-bold">Taylor Dafoe | July 2, 2021</MDBCardTitle>
            <MDBCardText>
            Pace Gallery Jumps Headfirst Into the Crypto-Art Market With a Dedicated NFT Platform
             The gallery is also accepting cryptocurrency as a form of payment for all artworks, physical or digital.  
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
          <MDBCardImage src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/04/18/Art-Prices.jpg?width=550&hight=330&quality=75' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className="text-sm text-gray font-bold">Adam Sherwin| 04 March 2016</MDBCardTitle>
            <MDBCardText>
            Peak art sales reached as slump sees Matisse and Picasso paintings fall in price,A run of disappointing sales has forced the leading auction houses to take radical action


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
            <MDBCardTitle className="text-sm text-gray font-bold"> Jason Farago | 10 April, 2020 </MDBCardTitle>
            <MDBCardText>
            Saint Rosalia: Van Dyck’s offering to a plague-ridden Palermo,In grim times you have to believe – if not in saints, then at least in art. All it can offer, in good times or bad, is a view of 
            the world we want to live in rather than the world at hand
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
