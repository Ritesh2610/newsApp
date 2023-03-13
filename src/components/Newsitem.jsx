import React, { Component } from 'react'

export default class Newsitem extends Component {
   
    render() {
        let { title, description, imageUrl, url, publishedAt } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={(imageUrl!==null)?imageUrl:"https://fdn.gsmarena.com/imgroot/news/22/08/ios-16-beta-5-battery-indicator/-952x498w6/gsmarena_000.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <strong>{new Date(publishedAt).toGMTString()}</strong>
                        <p className="card-text">{description}</p>
                        <a rel='noreferrer' href={url} target="_blank" className="btn btn-sm btn-dark">Read more..</a>
                    </div>
                </div>

            </div>
        )
    }
}
