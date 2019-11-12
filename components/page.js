import React from 'react';
import Meta from './meta';
import Header from './header';
import Footer from './footer';

export default (props) => (
    <div>
        <Meta/>
        <Header/>
        {props.children}
        <Footer/>

        <style jsx>
            {`
            
            
            
            `}
        </style>
    </div>

)