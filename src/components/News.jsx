import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize:6,
        categorey:"general",
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        categorey:PropTypes.string,

    }
    capitalizeFirstLetter=(string) =>{
return string.charAt(0).toUpperCase() + string.slice(1);
}

    constructor(props){
        super(props)
        this.state={ 
           articles : [],
           page:1,
           loading:false,
           totalResults:0
        }

        document.title=`${this.capitalizeFirstLetter(this.props.categorey)}: News`;
        }
        async componentDidMount(){
            this.setState({ loading:true})
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categorey}&apiKey=a3649601383a495cb68fb08d7e6fd16a&page=1&pageSize=${this.props.pagesize}`;
            let data = await fetch(url);
            let parseData=await data.json()
            // console.log(parseData)
            this.setState({articles:parseData.articles, 
                totalResults: parseData.totalResults,
                loading:false})
        }
            
        fetchMoreData = async()=>{
            this.setState({page:this.state.page + 1});
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categorey}&apiKey=a3649601383a495cb68fb08d7e6fd16a&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
            this.setState({loading: true}); 
            let data = await fetch(url);
            let parseData=await data.json()
            // console.log(parseData)
            this.setState({articles:this.state.articles.concat(parseData.articles), 
                totalResults: parseData.totalResults,
                // page:this.state.page + 1,
                loading:false})
             
        }
         render() {

        return (
            <div className='container my-3'>
                <h1 className='mb-3'>NewsApp -Top headlines</h1>
              {/* <h1 style={{height:"100px"}}>  {this.state.loading && <Spiner/>}</h1> */}

              <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner/>}
        >
             <div className="container">
                <div className="row ">

                    {this.state.articles.map((element)=>{
                          
                    return<div className="col-lg-4" key={(element.url!==null)?element.url:"null"}>
                     <Newsitem 
                      title={element.title}
                      description={(element.description!==null)?element.description:"null"}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      publishedAt={element.publishedAt} />
                    </div>
                    })}
                   
                    </div>
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}
