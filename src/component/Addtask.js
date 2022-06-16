import React, { Component } from 'react'

export class Addtask extends Component {
    state = {
        text : ''
    }
    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
    add =()=>{
       if (this.state.text=="" )
        {return alert('oups')}
        else {this.props.handleAdd(this.state.text.trim()); 
        this.setState({text: ""})}

    }
    render() {
        return (
            <div>
                <input value={this.state.text} onChange= {this.handleChange} />
                <button onClick={()=> this.add()}>ADD</button>
                <button onClick={()=>this.props.handlefiltre}>Filter</button>
            </div>
        )
    }
}

export default Addtask
