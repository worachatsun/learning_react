import React, { Component } from 'react'

export default class Sum extends Component {
  constructor(props) {
    super(props)
    this.sum  = this.sum.bind(this)
    this.state = {a: 1, b: 2, sum: 3}
  }
  sum(){
    this.state.sum = Number(this.state.a) + Number(this.state.b)
    this.setState({sum: this.state.sum})
  }
  render() {
    return (
      <div>
        <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/> 
        + <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
        = <span>{this.state.sum}</span>
        <button onClick={this.sum}>Sum</button>
        <p/>
      </div>
    )
  }
}