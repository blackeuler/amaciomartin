import React from 'react';
import Link from 'next/link';

export default () => (
    <div>
        <a href="https://www.instagram.com/macimaserati/"><img className="grow" src="/static/insta.png"/></a>
        <a href="https://www.facebook.com/amacio.martin" ><img className="grow" src="/static/fbook.png"/></a>
        <style jsx>
            {`
            div{
                background-color: #DEDEDE;
                min-height: 1vh;
                left: 0;
                bottom: 0;
                text-align: center;
                width: 100%;
                
                color: rgb(241, 8, 8);
            }
            img{
                width: 30px;
                height: 30px;
                margin-left:10px;
                margin-top:2px;
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