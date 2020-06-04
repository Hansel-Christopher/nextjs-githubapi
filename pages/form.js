import React, { Component } from 'react'
import Link from 'next/link'


export default class form extends Component {
    render() {
        return (
            
            <div className="container">
            <main>
                <h1 className="title">
                  Let's get some deets!
                </h1>                            
                
                <form>
                <label>
                    <input type="text" required />
                    <div className="label-text">User name</div>
                </label>
                <label>
                    <input type="text" required />
                    <div className="label-text">Repository</div>
                </label>
                    <Link href="/choices"><button className="glow-on-hover" type="button">Submit</button></Link>
                </form>
                             
            </main>
            <style jsx>
            {`
                         
        .glow-on-hover {
            width: 220px;
            height: 50px;
            border: none;
            outline: none;
            margin: 1em;
            color: #fff;
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
          }
  
          .glow-on-hover:before {
            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left:-2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
          }
  
          .glow-on-hover:active {
            color: #000
          }
  
          .glow-on-hover:active:after {
            background: transparent;
          }
  
          .glow-on-hover:hover:before {
            opacity: 1;
          }
  
          .glow-on-hover:after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #111;
            left: 0;
            top: 0;
            border-radius: 10px;
          }
  
          @keyframes glowing {
            0% { background-position: 0 0; }
            50% { background-position: 400% 0; }
            100% { background-position: 0 0; }
          }

          form {
            text-align: center;
          }
          
          label {
            display: block;
            letter-spacing: 4px;
            padding-top: 30px;
            text-align: center;
          }
          label .label-text {
            color: #9B9B9B;
            cursor: text;
            font-size: 20px;
            line-height: 20px;
            text-transform: uppercase;
            -moz-transform: translateY(-34px);
            -ms-transform: translateY(-34px);
            -webkit-transform: translateY(-34px);
            transform: translateY(-34px);
            transition: all 0.3s;
          }
          label input {
            background-color: transparent;
            border: 0;
            border-bottom: 2px solid #4A4A4A;            
            font-size: 36px;
            letter-spacing: -1px;
            outline: 0;
            padding: 5px 20px;
            text-align: center;
            transition: all 0.3s;
            width: 240px;
          }
          label input:focus {
            max-width: 100%;
            width: 400px;
          }
          label input:focus + .label-text {
            color: #F0F0F0;
            font-size: 13px;
            -moz-transform: translateY(-74px);
            -ms-transform: translateY(-74px);
            -webkit-transform: translateY(-74px);
            transform: translateY(-74px);
          }
          label input:valid + .label-text {
            font-size: 13px;
            -moz-transform: translateY(-74px);
            -ms-transform: translateY(-74px);
            -webkit-transform: translateY(-74px);
            transform: translateY(-74px);
          }
          
          button {
            background-color: #333333;
            border: 2px solid white;
            border-radius: 27px;
            color: white;
            cursor: pointer;
            font-size: 15px;
            margin-top: 20px;
            padding: 15px 30px;
            transition: all 200ms;
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

      `}</style>
            </div>
        )
    }
}
