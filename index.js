import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import Sum from './components/Sum'

class Describe extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div style={{color:'red'}}>Describe: {this.props.desc}</div>
      </div>
    )
  }
}

class Examples extends Component {
  constructor(props) {
    super(props)
    this.state = {describe: 'none'}
    this.updateDescribe = this.updateDescribe.bind(this)
  }
  updateDescribe(describe){
    this.setState({describe: describe})
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <Describe desc={this.state.describe}/>
        <Counter countDesc={this.updateDescribe}/>
        <p/>
        <Sum/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
