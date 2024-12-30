import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export default function News(props) {
    let [articles, setarticles] = useState([])
    let [page, setpage] = useState(1)
    let [totalResults, settotalResults] = useState(0)
    async function getData() {
        try {
            setpage(1)
            let rawdata = ""
            if (props.search == "None")
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${page}&q=${props.q}&pageSize=${props.pageSize}&language=${props.language}&apiKey=c66887260083453088f62057966b20eb`)
            else
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${page}&q=${props.search}&pageSize=${props.pageSize}&language=${props.language}&apiKey=c66887260083453088f62057966b20eb`)
            let result = await rawdata.json()
            setarticles(result.articles)
            settotalResults(result.totalResults)
        }
        catch (error) {
            alert("Something Went Wrong")
        }
    }
    let fetchMoreData = async () => {
        try {
            setpage(page+1)
            let rawdata = ""
            if (props.search == "None")
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${page}&q=${props.q}&pageSize=${props.pageSize}&language=${props.language}&apiKey=c66887260083453088f62057966b20eb`)
            else
                rawdata = await fetch(`https://newsapi.org/v2/everything?&page=${page}&q=${props.search}&pageSize=${props.pageSize}&language=${props.language}&apiKey=c66887260083453088f62057966b20eb`)
            let result = await rawdata.json()
            setarticles(articles.concat(result.articles))
        }
        catch (error) {
            alert("Something Went Wrong")
        }
    }
    useEffect(() => {
        getData()
    }, [props.q, props.language, props.pageSize, props.search])
    return (
        <div className='container-fluid mb-5'>
            <h5 className='background text-light text-center p-2'>{props.q} News Section</h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className='row'>
                    {
                        articles.map((item, index) => {
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
