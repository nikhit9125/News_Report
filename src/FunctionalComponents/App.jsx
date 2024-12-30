import React, { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './News'
import Footer from './Footer'
export default function App() {
    let [language, setlanguage] = useState("hi")
    let [pageSize, setpageSize] = useState("8")
    let [search, setsearch] = useState("None")
    let changeLanguage = (data) => {
        setlanguage(data)
    }
    let changePageSize = (data) => {
        setpageSize(data)
    }
    let searchNews = (data) => {
        setsearch(data)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar changeLanguage={changeLanguage} changePageSize={changePageSize} searchNews={searchNews} />
                <Routes>
                    <Route path='/' element={<News search={search} language={language} pageSize={pageSize} q="All" />} />
                    <Route path='/Politics' element={<News search={search} language={language} pageSize={pageSize} q="Politics" />} />
                    <Route path='/Crime' element={<News search={search} language={language} pageSize={pageSize} q="Crime" />} />
                    <Route path='/Education' element={<News search={search} language={language} pageSize={pageSize} q="Education" />} />
                    <Route path='/Science' element={<News search={search} language={language} pageSize={pageSize} q="Science" />} />
                    <Route path='/Technology' element={<News search={search} language={language} pageSize={pageSize} q="Technology" />} />
                    <Route path='/Sports' element={<News search={search} language={language} pageSize={pageSize} q="Sports" />} />
                    <Route path='/Cricket' element={<News search={search} language={language} pageSize={pageSize} q="Cricket" />} />
                    <Route path='/FIFa' element={<News search={search} language={language} pageSize={pageSize} q="FIFa" />} />
                    <Route path='/Entertainment' element={<News search={search} language={language} pageSize={pageSize} q="Entertainment" />} />
                    <Route path='/Jokes' element={<News search={search} language={language} pageSize={pageSize} q="Jokes" />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
