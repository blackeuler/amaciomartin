import React from 'react'
import Page from '../components/page'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {client} from '../services/contentfulClient';

var settings = {
    
    dots: false,
    fade: false,
    infinite: true,
    speed: 900,
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
                        
                        width:auto;
                        height:90%;                        
                        
                    }
                    .sliderback{
                        
                        height:80vh;
                        background:black;
                        
                    }
                    @media screen and (min-width:700px) {
                        .imas{
                            display: block;
                            margin-right:auto;
                            margin-left:auto;
                            width:50%;
                            height:auto;               
                        }
                        .sliderback{
                            width:80vw;
                            height:80vh;
                            background:black;
                            display:flex;
                            justify-content:center;
                        }    
                    }
                    @media screen and (min-width:700px) and (max-height:800px){
                        .imas{
                            display: block;
                            margin-right:auto;
                            margin-left:auto;
                            width:50%;
                            height:auto;               
                        }
                        .sliderback{
                            width:80vw;
                            height:80vh;
                            background:black;
                            display:flex;
                            justify-content:center;
                        }    
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