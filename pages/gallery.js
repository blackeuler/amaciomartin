import React from 'react';
import Page from '../components/page';
import Album from '../components/album';
import Link from 'next/link';
import {client} from '../services/contentfulClient';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Gallery(entries){
    return(
        <Page>
            <div className="grid ">
            {
                entries!=null ?(
                entries.entries.map(entry =>(
                    <Link href={`/album/${entry.fields.title}`} as={`/album/${entry.fields.title}?id=${entry.sys.id}`}>
                        <a>
                            <Album
                            title={`${entry.fields.title}`}
                            cover={`${entry.fields.coverImage.fields.file.url}`}
                            />
                        </a>
                    </Link>
                ))):(<div>Loading</div>)
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
}

Gallery.getInitialProps = async () => {
        var contentTypeId = 'photoGallery'
        var content = await client.getEntries({
            content_type: contentTypeId
        });
        var entries = await content.items
        return ({entries:entries})
  }
export default Gallery;