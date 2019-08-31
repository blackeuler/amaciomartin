import React from 'react'

export default ({title,cover}) =>(
    <div className="cell">
                
                <img  className="responsive-img" src={`${cover}`}/>
                <h2>{title}</h2>
        <style jsx>
        {`
                .cell{
                    margin:1rem;
                    text-align:center;
                    background-color:#DEDEDE;
                    color:#c10000;
                    border:1px solid black;
                }
                .cell img {
                    display: block;
                }

                .responsive-img{
                    max-width:100%;
                }

                @media screen and (min-width: 600px) {
                    .cell {
                        width: calc(50% - 2rem);
                    }             
                }

                @media screen and (min-width: 1000px) {
                    .cell {
                        width: calc(33.3333% - 2rem);
                    }
                }`
            }
        </style>
    </div>
)