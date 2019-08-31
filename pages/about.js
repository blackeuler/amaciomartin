import React from 'react';
import Page from '../components/page';

const About = (props) =>(
    <Page>
        <div className="grid">
            <div className="left">
                <img id="bioPic" src="static/bio.jpg" alt="Picture of Amacio"/>
            </div>
            <div className="right">
                <article>
                    <h1>About Me</h1>
                    <p>
                        My name is Amacio Martin and i have been a photography for as long as I can remeber. 
                        I love capturing the human form I  find it fascinating. I hope that you do as well.
                        This is my website/portfolio of all that I am working on. I hope we can work together in the future. Thanks
                    </p>
                </article>
            </div>
        </div>

        <style jsx>
            {`
                .grid{
                    display:grid;
                    grid-template-columns: 1fr 1fr;
                    
                }
                .left{
                    height:100vh;
                }

                .left img{
                    height:100%;
                    width:100%;
                }
                h1{
                    text-align:center;
                }
                .right{
                    background-color:white;
                    grid-columns:2;
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

export default About;