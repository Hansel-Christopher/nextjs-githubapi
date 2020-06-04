import React, { Component } from 'react'
import fetch from  'isomorphic-unfetch'

export default class inital extends Component {
    static async getInitialProps(ctx) {
        const res = await fetch('https://api.github.com/repos/vercel/next.js')
        const json = await res.json()
        return { stars: json.stargazers_count }
    }
    render() {
        return (
            <div>
                Fetched data : {this.props.stars}
            </div>
        )
    }
}
