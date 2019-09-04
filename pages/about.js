import React from 'react';
import Page from '../components/page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {client} from '../services/contentfulClient'

const About = (entries) =>(
    <Page>
        <div className="grid">
            <div className="left">
                <img id="bioPic" src={`${entries.entries[0].fields.biophoto.fields.file.url}`} alt="Picture of Amacio"/>
            </div>
            <div className="right">
                <article>
                    <h1>About Me</h1>
                    <p>
                       {`${entries.entries[0].fields.bioText}`}
                    </p>
                </article>
            </div>
        </div>

        <style jsx>
            {`
                .grid{
                    display:grid;
                    grid-template-columns: 1fr ;
                    
                }
                @media screen and (min-width: 600px) {
                    .grid {
                        display:grid;
                        grid-template-columns: 1fr 1fr;
                    }
                
                }
                .left{
                    height:40vh;
                }

                .left img{
                    height:100%;
                    width:100%;
                    margin:0 auto;
                    padding:10px;
                }
                @media screen and (min-width:600px){
                    .left{
                        height:100vh;
                    }

                    .left img{
                        height:100%;
                        width:100%;
                    }
                }
                h1{
                    text-align:center;
                }
                .right{
                    background-color:white;
                    
                    text-align:center;
                    font-size: calc(10px + 2vmin);
                    text-align: justify;
                    text-justify: inter-word;
                    margin:1em;
                }
            
            `}
        </style>
    </Page>
)

About.getInitialProps = async function() {
    var contentTypeId = 'contactPage'
      
      var content = await client.getEntries({
          content_type: contentTypeId
        });
        var entries=content.items
    
    
   
    return {
       entries
    };
  };

export default About;