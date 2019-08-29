import React from 'react';
import Link from 'next/link';

export default () => (
    <div>
        <Link href="https://www.instagram.com/macimaserati/"><a ><img className="grow" src="/static/insta.png"/></a></Link>
        <Link href="https://www.facebook.com/amacio.martin"><a ><img className="grow" src="/static/fbook.png"/></a></Link>
        <style jsx>
            {`
            div{
                background-color: #DEDEDE;
                min-height: 1vh;
                left: 0;
                bottom: 0;
                position: fixed;
                text-align: center;
                width: 100%;
                padding:10px;
                color: rgb(241, 8, 8);
            }
            img{
                width: 30px;
                height: 30px;
                margin:10px;
            }
            .grow { 
                    transition: all .2s ease-in-out; 
                    }
                     
                    .grow:hover { 
                    transform: scale(1.2); 
                    }
            `}
        </style>
    </div>
)