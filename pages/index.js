import React from 'react'
import Page from '../components/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {client} from '../services/contentfulClient';

var settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

function Home({data}){
    return(
        <Page>
                {data==null ? (
            <div>Loading ...</div>
        ) : (
            <div className="sliderback">
                <Slider {...settings}>
                { data.map(x=>(
                    <div><img className="imas"src={x} /></div>
                    
                    
                    
                
            ))}
            </Slider>
            </div>
            
            
        )}

        

        <style jsx>
            {`
                    .imas{
                        height:auto;
                        width:100%;
                    }
                    .sliderback{
                        background-color:black;
                        height:30vh;
                    }
            `}
        </style>
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