import React from 'react';
import Page from '../components/page';
import Album from '../components/album';
import Link from 'next/link';
import * as contentful from 'contentful';


var client = contentful.createClient({
  space: '63i3zfsp3i6k',
  accessToken: 'W2aFltqZ34NA4Wb8OYtWCIIp6jOvwqxId7Hj9o85tS4'
})


const title = "Hello"
const Gallery = (props) =>(
    
    <Page>
        
        <div className="grid ">

        {
          props.entries.map(entry =>(
            <Link href={`/album/${entry.fields.title}`} as={`/album/${entry.fields.title}?id=${entry.sys.id}`}>
                <a>
                    <Album
                    title={`${entry.fields.title}`}
                    cover={`${entry.fields.coverImage.fields.file.url}`}
                />
                </a>
            </Link>
          ))
        }
           
           
           
            
            
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

Gallery.getInitialProps = async function() {
    var contentTypeId = 'photoGallery'
    
    var content = await client.getEntries({
        content_type: contentTypeId
      });
      var entries =content.items
      
      return {entries:entries};
    }
    
    
    
  

export default Gallery;