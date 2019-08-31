import React from 'react'
import Page from '../components/page'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import * as contentful from 'contentful';


var client = contentful.createClient({
  space: '6glmg7qq7oyg',
  accessToken: '373d3fae019b3a1e90066a9d08748c59b08322d1759044f26e258594138194e2'
})

function Home({photo, photos}) {
  return(
    <Page>
      <Carousel
        autoPlay
        
        infiniteLoop
      >
        {
          photos.slice(0,4).map(x=>(
            <div className="container">
              <img src={x} />
            </div>
          ))
        }
        
      </Carousel>
      
      <style jsx>
      {`
        .container >img{
          height:60vh;
          width:auto;
        }
      
      `}
      </style>
    
  </Page>
  )
}

Home.getInitialProps = async function() {
  var photo = ''
  var entries= await client.getEntries()
  var url = await entries.includes.Asset[5].fields.file.url
  var urls = await entries.includes.Asset.map(x => x.fields.file.url)
  console.log("Loading");
  
  return {
     photo:url,
     photos:urls
  };
};


export default Home
