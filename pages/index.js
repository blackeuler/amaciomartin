import React,{useState,useEffect} from 'react'
import Page from '../components/page'
import "../styles.css";
import { Carousel } from 'react-responsive-carousel';
import {client} from '../services/contentfulClient';

function Home({data}){
    return(
        <Page>
                {data==null ? (
            <div>Loading ...</div>
        ) : (
            <Carousel
                autoPlay
                infiniteLoop
            >
                { data.map(x=>(
                    <div className="container">
                        <img src={x} />
                    </div>
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