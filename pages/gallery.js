import React from 'react';
import Page from '../components/page';

const Gallery = (props) =>(
    <Page>
        
        <div className="grid container">
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
            <img  className="grow" src="static/sample.jpg"/>
        </div>

        <style jsx>
            {`

            .container{
                margin:0 auto;
                padding:10px;
            }
            img{
                width:300px;
                border: 1px solid black;
                margin:1vh;
            }

            .grow { 
                transition: all .2s ease-in-out; 
            }
                     
            .grow:hover { 
                transform: scale(1.05); 
            }
            
            `}
        </style>
    </Page>
)

export default Gallery;