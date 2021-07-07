import React, { Component } from 'react'

export default class User extends Component {
    constructor(props){
        super(props)

        this.state={
            username: ''
       
    }
    } 
  handler=(event)=>{
  this.setState({
      username: 
      console.log(event.target.value)
  })
  }

    render() {
        return (
            <div>
                 <form>
<div>
    <label>Username</label>
    <input type="text" value={this.state.username} onChange={this.handler}>  </input>
</div>
      </form>
            </div>
        )
    }
}
