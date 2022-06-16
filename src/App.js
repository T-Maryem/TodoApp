import React, { Component } from 'react'
import Addtask from './component/Addtask'
import Listtask from './component/Listtask'


export class App extends Component {
  state = {
    taskList : [{id:0, title: 'html and CSS', isDone: false},
    {id:1, title: 'JavaScript', isDone: true},
    {id:2, title: 'React', isDone: false}]
  }
  handleDelete = (idItem) => {
    this.setState({taskList: this.state.taskList.filter(
    (el) =>  el.id !== idItem

    )})
  }
  handleDone =(idItem) => {
    this.setState({taskList:this.state.taskList.map(
      (el) => el.id === idItem ? {...el,isDone:!el.isDone}: el
    )
     })
  }
  handleAdd =(newTitle) => {
    this.setState({taskList: [...this.state.taskList,
      {id:Date.now(), title:newTitle, isDone:false}]
    })
  }

  // handlefiltre =() => {
  //   this.setState({taskList:this.state.taskList.map(
  //     (el) =>{ if (el.isDone===true) 
  //    { return el} 
  //   }
  //   )
  //    })
  // }
  
  handleEdit=(iditem,newTitle) => {
    this.setState({taskList: this.state.taskList.map(
     (el)=> el.id===iditem ?{...el, title:newTitle}:el 
    )})
  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <Addtask handleAdd={this.handleAdd}handlefiltre={this.handlefiltre}/>
       <Listtask taskList={this.state.taskList} handleEdit={this.handleEdit}handleDelete= {this.handleDelete} handleDone= {this.handleDone}/> 
       
      </div>
    )
  }
}

export default App
