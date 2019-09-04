import React from 'react'
import Page from '../components/page'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {client} from '../services/contentfulClient';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:false,
        }
    }
    static async getInitialProps () {
        const fetchData = async () => {
            this.setState({loading:true});
            const res = await client.getEntries({
                content_type: 'slideshow'
              });
            const entries2 = res.items[0].fields.featuredImages.map(x=>(
                x.fields.photo.fields.file.url
            ));
            this.setState({
                loading:false,
                data:entries2
            });
            console.log(entries2)
            return entries2
          };
          var  entries2  =fetchData();
          return({entries2:entries2})
      }
    componentDidMount(){
        const fetchData = async () => {
            this.setState({loading:true});
            const res = await client.getEntries({
                content_type: 'slideshow'
              });
            const entries2 = res.items[0].fields.featuredImages.map(x=>(
                x.fields.photo.fields.file.url
            ));
            this.setState({
                loading:false,
                data:entries2
            });
          };
          fetchData();
    }

    render(){
        return(
            <Page>
                {this.state.loading ? (
            <div>Loading ...</div>
        ) : (
            <Carousel
                autoPlay
                infiniteLoop
            >
                { this.state.data.map((x,index)=>(
                    <div key={index} className="container">
                        <img src={x} />
                    </div>
                ))}
            </Carousel>
        )}
        </Page> 
        )
    }
}


export default Home;