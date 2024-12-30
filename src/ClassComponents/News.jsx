import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0
        }
    }
    async getData() {
        try {
            this.setState({page:1})
            let rawdata = ""
            if (this.props.search == "None")
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${this.state.page}&q=${this.props.q}&pageSize=${this.props.pageSize}&language=${this.props.language}&apiKey=c66887260083453088f62057966b20eb`)
            else
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${this.state.page}&q=${this.props.search}&pageSize=${this.props.pageSize}&language=${this.props.language}&apiKey=c66887260083453088f62057966b20eb`)
            let result = await rawdata.json()
            this.setState({
                articles: result.articles,
                totalResults: result.totalResults
            })
        }
        catch (error) {
            alert("Something Went Wrong")
        }
    }
    fetchMoreData = async()=>{
        try {
            this.setState({page:this.state.page+1})
            let rawdata = ""
            if (this.props.search == "None")
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${this.state.page}&q=${this.props.q}&pageSize=${this.props.pageSize}&language=${this.props.language}&apiKey=c66887260083453088f62057966b20eb`)
            else
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${this.state.page}&q=${this.props.search}&pageSize=${this.props.pageSize}&language=${this.props.language}&apiKey=c66887260083453088f62057966b20eb`)
            let result = await rawdata.json()
            this.setState({
                articles: this.state.articles.concat(result.articles)
            })
        }
        catch (error) {
            alert("Something Went Wrong")
        }
    }
    componentDidMount() {
        this.getData()
    }
    componentDidUpdate(old) {
        if (old.q != this.props.q || old.language != this.props.language || old.pageSize != this.props.pageSize || old.search != this.props.search)
            this.getData()
    }
    render() {
        return (
            <div className='container-fluid mb-5'>
                <h5 className='background text-light text-center p-2'>{this.props.q} News Section</h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length<this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className='row'>
                        {
                            this.state.articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    pic={item.urlToImage}
                                    url={item.url}
                                    date={item.publishedAt}
                                    source={item.source.name}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
