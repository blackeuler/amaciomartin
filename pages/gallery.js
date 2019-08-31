import React from 'react';
import Page from '../components/page';
import Album from '../components/album'

const Gallery = (props) =>(
    <Page>
        
        <div className="grid ">
           <Album
            title="Hello"
            cover="/static/sample.jpg"
           />
           <Album
            title="Hello"
            cover="/static/sample.jpg"
           />
           <Album
            title="Hello"
            cover="/static/sample.jpg"
           />
           <Album
            title="Hello"
            cover="/static/sample.jpg"
           />
            
            
        </div>

        <style jsx>
            {`


            @media screen and (min-width: 600px) {
                .grid {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                }            
            }

            
            
            `}
        </style>
    </Page>
)

export default Gallery;