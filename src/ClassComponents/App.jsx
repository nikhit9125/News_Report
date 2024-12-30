import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import News from './News'
import Footer from './Footer'
export default class App extends Component {
    constructor(){
        super()
        this.state={
            language:"hi",
            pageSize:"8",
            search:"None"
        }
    }
    changeLanguage = (data)=>{
        this.setState({language:data})
    }
    changePageSize = (data)=>{
        this.setState({pageSize:data})
    }
    searchNews = (data)=>{
        this.setState({search:data})
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar changeLanguage={this.changeLanguage} changePageSize={this.changePageSize} searchNews={this.searchNews}/>
                    <Routes>
                        <Route path='/' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="All"/>}/>
                        <Route path='/Politics' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Politics"/>}/>
                        <Route path='/Crime' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Crime"/>}/>
                        <Route path='/Education' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Education"/>}/>
                        <Route path='/Science' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Science"/>}/>
                        <Route path='/Technology' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Technology"/>}/>
                        <Route path='/Sports' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Sports"/>}/>
                        <Route path='/Cricket' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Cricket"/>}/>
                        <Route path='/FIFa' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="FIFa"/>}/>
                        <Route path='/Entertainment' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Entertainment"/>}/>
                        <Route path='/Jokes' element={<News search={this.state.search} language={this.state.language} pageSize={this.state.pageSize} q="Jokes"/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>
            </>
        )
    }
}
