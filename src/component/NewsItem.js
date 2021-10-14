import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div className="my-3">
              <div className="card" style={{ width: "18rem" }}>
             <img src={!imageUrl?"https://images.livemint.com/img/2021/10/11/600x338/IPO_Reuters_1628584540315_1633938018946.PNG":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
               <h5 className="card-title">{title}....</h5>
              <p className="card-text">{description}....</p>
             <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
              </div>
             </div>

            </div>
        )
    }
}

export default NewsItem
