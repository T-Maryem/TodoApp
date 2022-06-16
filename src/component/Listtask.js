import React from 'react'
import Listitem from './Listitem'

const Listtask = ({taskList, handleDelete, handleDone,handleEdit}) => {
    return (
        <div>
            {taskList.map(
                (item ,i) => <Listitem key={i} item={item} handleEdit={handleEdit}handleDelete={handleDelete} handleDone={handleDone}/>
            )}
        </div>
    )
}

export default Listtask
