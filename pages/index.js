import React from 'react'
import Page from '../components/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {client} from '../services/contentfulClient';

var settings = {
    
    dots: true,
    fade: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

function Home({data}){
    return(
        <Page>
                {data==null ? (
            <div>Loading ...</div>
        ) : (
            
                <Slider {...settings}>
                { data.map(x=>(
                    <div className="sliderback">
                        <img className="imas"src={x} />
                    </div>
            ))}
            </Slider>
            
            
            
        )}

        

        <style jsx>
            {`
                    .imas{
                        
                        width: auto ;
                        max-width: 100% ;
                        height: auto ;
                    }
                    .sliderback{
                        
                        background-color:black;
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