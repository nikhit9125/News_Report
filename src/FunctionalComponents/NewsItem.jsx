import React from 'react'
import noImage from "../assets/images/no.jpg"
export default function NewsItem(props) {
    return (
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
            <div className="card">
                <img src={props.pic ? props.pic : noImage} height="200px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "80px" }}>{props.title.slice(0, 50) + "..."}</h5>
                    <h6 className="card-title" style={{ fontSize: "13px" }}>{props.date}</h6>
                    <h6 className="card-title" style={{ fontSize: "13px" }}>{props.source ? props.source : "Unknown"}</h6>
                    <hr />
                    <p className="card-text" style={{ height: "170px" }}>{props.description ? props.description.slice(0, 150) + "..." : ""}</p>
                    <a href={props.url} className="btn background text-light w-100 mybtn">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
