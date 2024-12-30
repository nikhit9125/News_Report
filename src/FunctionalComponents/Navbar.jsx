import React, { useState } from 'react'
import "../assets/css/style.css"
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    let [input, setinput] = useState("")
    function getSearch(e) {
        setinput(e.target.value)
    }
    function postSearch(e) {
        e.preventDefault()
        props.searchNews(input)
        document.getElementById("search").value = ""
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top mb-2">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/" onClick={()=>props.searchNews("None")}>NewsApp    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/"  onClick={()=>props.searchNews("None")}>All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Politics"  onClick={()=>props.searchNews("None")}>Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Crime"  onClick={()=>props.searchNews("None")}>Crime</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/Education" onClick={()=>props.searchNews("None")}>Education</Link></li>
                                    <li><Link className="dropdown-item" to="/Science" onClick={()=>props.searchNews("None")}>Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology" onClick={()=>props.searchNews("None")}>Technology</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports" onClick={()=>props.searchNews("None")}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Cricket" onClick={()=>props.searchNews("None")}>Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/FIFA" onClick={()=>props.searchNews("None")}>FIFA</Link></li>
                                    <li><Link className="dropdown-item" to="/Entertainment" onClick={()=>props.searchNews("None")}>Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes" onClick={()=>props.searchNews("None")}>Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button className="dropdown-item" onClick={() => props.changeLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changeLanguage("en")}>English</button></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link text-light dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Articles Size
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize("8")}>8</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize("12")}>12</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize("16")}>16</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.changePageSize("20")}>20</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex w-100" role="search" onSubmit={(e) => postSearch(e)}>
                            <input className="form-control me-2" type="search" onChange={(e) => getSearch(e)} name="search" id='search' placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
