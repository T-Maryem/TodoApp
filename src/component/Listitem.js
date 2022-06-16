import React from 'react'
import '../App.css'

const Listitem = ({item, handleDelete,handleDone,handleEdit}) => {
  const  edit=()=>{
   var  editedtext =  prompt("changer le titre",item.title);
   handleEdit(item.id,editedtext)
  

    }
    return (
        <div>
            <p className={item.isDone ? "Done":null}>{item.title}</p>
            <button onClick={()=>edit()}>edit</button>
            <button onClick={()=>handleDelete(item.id)}>delete</button>
            <button onClick= {()=>handleDone(item.id)}>{item.isDone ? "Done" : '"UnDone'}</button>
        </div>
    )
}

export default Listitem
