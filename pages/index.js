import React from 'react'
import Page from '../components/page'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {client} from '../services/contentfulClient'

function Home({ photos}) {
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
  var contentTypeId = 'slideshow'
    
    var content = await client.getEntries({
        content_type: contentTypeId
      });
      var entries=content
      console.log(entries)
  var urls = await entries.includes.Asset.map(x => x.fields.file.url)
  
  return {
     photos:urls
  };
};


export default Home
