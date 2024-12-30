import React, { Component } from 'react'
import noImage from "../assets/images/no.jpg"
export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                <div className="card">
                    <img src={this.props.pic?this.props.pic:noImage} height="200px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{height:"80px"}}>{this.props.title.slice(0,50)+"..."}</h5>
                            <h6 className="card-title" style={{fontSize:"13px"}}>{this.props.date}</h6>
                            <h6 className="card-title" style={{fontSize:"13px"}}>{this.props.source?this.props.source:"Unknown"}</h6>
                            <hr/>
                            <p className="card-text" style={{height:"170px"}}>{this.props.description?this.props.description.slice(0,150)+"...":""}</p>
                            <a href={this.props.url} className="btn background text-light w-100 mybtn">Read Full Article</a>
                        </div>
                </div>
            </div>
        )
    }
}
