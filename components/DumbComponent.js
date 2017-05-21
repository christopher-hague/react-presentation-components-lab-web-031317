import React from 'react'

export default class DumbComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if(this.state.mood === 'happy') {
      this.setState({ mood: 'sad' })
    } else if(this.state.mood === 'sad') {
      this.setState({ mood: 'happy' })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
