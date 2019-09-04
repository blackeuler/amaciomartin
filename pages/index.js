import React,{useState,useEffect} from 'react'
import Page from '../components/page'

import Carousel from 'nuka-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {client} from '../services/contentfulClient';

function Home({data}){
    return(
        <Page>
                {data==null ? (
            <div>Loading ...</div>
        ) : (
            <Carousel
                
                cellAlign="center"
                dragging={true}
                easing="easeInOutElastic"
            >
                { data.map(x=>(
                    
                        <img src={x} />
                    
                ))}
            </Carousel>
        )}

        
        </Page> 
    )
}

Home.getInitialProps = async () => {
    const res = await client.getEntries({
        content_type: 'slideshow'
      });
    const entries2 = await res.items[0].fields.featuredImages.map(x=>(
        x.fields.photo.fields.file.url
    ));
    return { data: entries2 }
  }

  export default Home;