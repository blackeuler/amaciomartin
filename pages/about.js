import React from 'react';
import Page from '../components/page';
import {client} from '../services/contentfulClient'


export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            entries:{},
            loading:true,
        }
    }
    componentDidMount(){
        const fetchData = async ()=>{
            var contentTypeId = 'contactPage'
      
            var content = await client.getEntries({
                content_type: contentTypeId
            });
            var entries=content.items[0]
            console.log(entries)
            if(entries){
                const picture = entries.fields.biophoto.fields.file.url
                const text = entries.fields.bioText
                this.setState({
                    entries:entries,
                    bioPic:picture,
                    text:text,
                    loading:false,
                })
            }
        }
        fetchData()
        
    }
    render(){

        return(
        <Page>
            {this.state.loading ? (<div>Loading</div> ):(<div className="grid">
            <div className="left">
                <img id="bioPic" src={`${this.state.bioPic}`} alt="Picture of Amacio"/>
            </div>
            <div className="right">
                <article>
                    <h1>About Me</h1>
                    <p>
                       {`${this.state.text}`}
                    </p>
                </article>
            </div>
        </div>)
            
        
            }

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
    }
}