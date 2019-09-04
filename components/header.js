import React from 'react';
import Link from 'next/link';




const Header = () => (
    <header className="header">
                
              <Link href="/"><a>Home</a></Link>
              <Link href="/"><a><img src="/static/logo.png" className="logo grow" alt="logo" /></a></Link>
              <Link href="/gallery"><a>Gallery</a></Link>
              <Link href="/about"><a>About</a></Link>


              <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                  }
                body{
                    padding:0;
                    margin:0;
                }
                 .logo {
                    height: 20vmin;
                    
                  }
                  
                  .header {
                    background-color: #DEDEDE;
                    min-height: 10vh;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    font-size: calc(10px + 2vmin);
                    color: #c10000;
                    width: 100%;
                    
                  }
                
                  .grow { 
                    transition: all .2s ease-in-out; 
                    }
                     
                    .grow:hover { 
                    transform: scale(1.4); 
                    }
                
                    a{
                        text-decoration: none;
                        color: #c10000;
                        transition: all .2s ease-in-out;
                        margin:1.0em;
                      }
                      a:hover{
                        color: white;
                        transform: scale(1.1); 
                      }
                `}</style>
    </header>

    
)

export default Header;