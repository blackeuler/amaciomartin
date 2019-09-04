import { withRouter } from 'next/router';
import Page from '../../components/page';
import Album from '../../components/album';
import {client} from '../../services/contentfulClient'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Photos extends React.Component{
    constructor(props){
        super(props);
        console.log(props.router)
        this.state={
            entries:{},
            id:props.router.query.id
        }
    }
    componentDidMount(){
      const fetchData = async () =>{
        console.log(this.state.id)
        var content = await client.getEntries({'sys.id':this.state.id})

        var entries = await content.items[0].fields.images;
        if(entries){
            this.setState({entries:entries})
        }
        
      }
      fetchData();
    }
    render(){
        return (
            <Page>
              
              <div className="grid ">
                {
                    this.state.entries[0] ? (
                    this.state.entries.map(entry =>(
                        <Album
                            title={`${entry.fields.title}`}
                            cover={`${entry.fields.photo.fields.file.url}`}
                        />      
                    ))):(<div>Loading</div>)
                }
              </div>
                <style jsx>
                    {`
                        h1{
                            text-align:center;
                        }
        
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
          );

    }
}

export default withRouter(Photos);