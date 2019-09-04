import Page from '../../components/page';
import Album from '../../components/album';
import {client} from '../../services/contentfulClient'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Photos(entries){
    return(
        <Page>
              
              <div className="grid ">
                {
                    entries.entries[0] ? (
                    entries.entries.map(entry =>(
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
    )
}

Photos.getInitialProps = async function({query}) {
    var content = await client.getEntries({'sys.id':query.id})
    var entries = await content.items[0].fields.images;
    return {
       entries:entries
    };
  };

  export default Photos;