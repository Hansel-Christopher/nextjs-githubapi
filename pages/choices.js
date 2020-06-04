import React, { Component } from 'react'

export default class choices extends Component {
    render() {
        return (
            <div className="container">
                <main>
                <h1 className="title">
                  What deets?
                </h1>                            
                
                <div className="button" id="button-2">
                    <div id="slide"></div>
                    <a href="#">Stars</a>
                </div>
                <div className="button" id="button-2">
                    <div id="slide"></div>
                    <a href="#">Commits</a>
                </div>
                <div className="button" id="button-2">
                    <div id="slide"></div>
                    <a href="#">Releases</a>
                </div>

                </main>
                <style jsx>
                {`
                .button {
                display: inline-flex;
                height: 40px;
                width: 150px;
                border: 2px solid #BFC0C0;
                margin: 20px 20px 20px 20px;
                color: #BFC0C0;
                text-transform: uppercase;
                text-decoration: none;
                font-size: .8em;
                letter-spacing: 1.5px;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                }

                a {
                    color: #BFC0C0;
                    text-decoration: none;
                    letter-spacing: 1px;
                }

                #button-2 {
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                }
                
                #button-2 a {
                    position: relative;
                    transition: all .35s ease-Out;
                }
                
                #slide {
                    width: 100%;
                    height: 100%;
                    left: -200px;
                    background: #BFC0C0;
                    position: absolute;
                    transition: all .35s ease-Out;
                    bottom: 0;
                }
                
                #button-2:hover #slide {
                    left: 0;
                }
                
                #button-2:hover a {
                    color: #2D3142;
                }
                
                `}
                </style>
                <style jsx global>
                {`
                    html,
                    body {          
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;            
                        text-align:center;
                    }

                    * {
                    box-sizing: border-box;
                    }

                    .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    }

                    main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    }

                    `}
      </style>
            </div>
        )
    }
}
