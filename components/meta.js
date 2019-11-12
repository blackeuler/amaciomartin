import React from 'react';
import Head from 'next/head';

export default () =>(
    <div>
        <Head>
            <title>Amacio Martin Photography</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
            <link rel="shortcut icon" type="image/x-icon" href="/static/logo.png" />
        </Head>
        <style jsx global>{`
        * { box-sizing: border-box; 
            margin: 0; 
            padding: 0;
            font-family: 'Poppins', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;       
        }
        html,body
            {
                width: 100%;
                margin: 0px;
                padding: 0px;
                overflow-x: hidden; 
            }
        
        `}</style>
    </div>
    
)