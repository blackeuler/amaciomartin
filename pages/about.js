import React from 'react';
import Page from '../components/page';

const About = (props) =>(
    <Page>
        <div className="grid">
        <img id="bioPic" src="static/bio.jpg" alt="Picture of Amacio"/>
        <article>
            <p>
                My name is Amacio Martin and i have been a photography for as long as I can remeber. 
                I love capturing the human form I  find it fascinating. I hope that you do as well.
                This is my website/portfolio of all that I am working on. I hope we can work together in the future. Thanks
            </p>
        </article>
        </div>

        <style jsx>
            {`
                .grid{
                    display:grid;
                    grid-template-columns: 1fr 1fr;
                }

                img{
                    width:50px;
                }
            
            `}
        </style>
    </Page>
)

export default About;