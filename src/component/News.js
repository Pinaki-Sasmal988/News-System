import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
     
     constructor(){
        super();
        this.state ={
         articles: [],
           loading: true,
           page:1
        }
    }

    async componentDidMount(){
      console.log("cdm");
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=e9f14c05059048f6a1ea7ce6465cfa87&page=1pageSize=20";
      let data=await fetch(url);
      let parseData=await data.json();
      console.log(parseData);
      this.setState({articles: parseData.articles, totalResults:parseData.totalResults})
    }
    handlePrevious=async()=>{
    console.log("previous")
     
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e9f14c05059048f6a1ea7ce6465cfa87&page=${this.state.page - 1}&pageSize=20`;
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);

    this.setState({
        page:this.state.page - 1,
        articles: parseData.articles
    })


    }
    handleNext= async()=>{
       console.log("next")
       if(this.state.page + 1> Math.ceil(this.state.totalResults/20)){

       }
       else{
       let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=e9f14c05059048f6a1ea7ce6465cfa87&page=${this.state.page + 1}&pageSize=20`;
      let data=await fetch(url);
      let parseData=await data.json();
      console.log(parseData);

      this.setState({
          page:this.state.page + 1,
          articles: parseData.articles
      })
    }
    }
    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2>news -Top headline</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                       return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                
             </div>     
                 <div className="container d-flex justify-content-between">
                 <button type="button" disabled={this.state.page<=1}class="btn btn-dark" onClick={this.handlePrevious}> &larr; Preview </button>
                 <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/20)} type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                     </div>
            </div>
        )
    }
}

export default News
