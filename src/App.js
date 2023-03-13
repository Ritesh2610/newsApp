import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'

import Navbar from "./components/Navbar";
import News from './components/News';
export default class App extends Component {
  apikey=process.env.REACT_API_KEY;
  render() {
    return (
      <div>
        
        <BrowserRouter>
        <Navbar />
          <Routes>

            <Route index path="/" element={<News apikey={this.apikey} key="general" country='in' pagesize="6" categorey="general" />} />
            <Route exact  path="/business" element={<News apikey={this.apikey} key="business" country='in' pagesize="6" categorey="business" />} />
            <Route exact  path="/entertainment" element={<News apikey={this.apikey} key="entertainment" country='in' pagesize="6" categorey="entertainment" />} />
            <Route exact  path="/health" element={<News apikey={this.apikey} key="health" country='in' pagesize="6" categorey="health" />} />
            <Route exact  path="/science" element={<News apikey={this.apikey} key="science" country='in' pagesize="6" categorey="science" />} />
            <Route exact  path="/sports" element={<News apikey={this.apikey} key="sports" country='in' pagesize="6" categorey="sports" />} />
            <Route exact  path="/technology" element={<News apikey={this.apikey} key="technology" country='in' pagesize="6" categorey="technology" />} />

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

