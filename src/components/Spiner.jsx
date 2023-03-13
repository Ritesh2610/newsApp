import React, { Component } from 'react'
import loading from "./loading.gif"

export default class Spiner extends Component {
  render() {
    return (
      <div className='text-center display-1'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
