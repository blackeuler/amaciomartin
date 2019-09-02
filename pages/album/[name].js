import { useRouter } from 'next/router';
import Page from '../../components/page';
import Album from '../../components/album';
import {client} from '../../services/contentfulClient'

class Photos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            entries:{}
        }
    }
    componentDidMount(){
      const fetchData = async () =>{
        var content = await client.getEntries({'sys.id':query.id})
        var entries = await content.items[0].fields.images;
        this.setState(entries)
      }
      fetchData();
    }
    render(){
        const router = useRouter();
        return (
            <Page>
              <h1>{router.query.name}</h1>
              <div className="grid ">
                {
                    entries.map(entry =>(
                        <Album
                            title={`${entry.fields.title}`}
                            cover={`${entry.fields.photo.fields.file.url}`}
                        />      
                    ))
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

export default Photos;