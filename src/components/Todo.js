import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style.css'
import todoImg from '../todo.svg'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [item, setItem] = useState([]);
    const addItem = () =>{
        if(!inputData){
            alert("Please enter the data!")
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItem([...item, myNewInputData]);
            console.log(myNewInputData);
            setInputData("");
        }
    }
    const deleteItem = (index) => {
        const updatedItems = item.filter((curElem) => {
          return curElem.id !== index;
        });
        setItem(updatedItems);
      };
    
    const removeAll = () =>{
        setItem([]);
    }
    
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src = {todoImg} alt="todologo" />
                    <figcaption>✍ Add your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" 
                    placeholder=' Add Item'
                    className='form-control'
                    value={inputData}
                    onChange={(event)=> setInputData(event.target.value)}
                    />
                    {/* <i className='fa fa_plus add-btn' onClick={addItem}></i> */}
                    <FontAwesomeIcon icon={faPlus} onClick={addItem} className='fa fa-plus add-btn' />
                </div>
                <div className="showItems">
                    {item.map((curElem) =>{
                        return(
                            <div className="eachItem" key={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                            {/* <FontAwesomeIcon icon={faEdit} className='far fa_edit add-btn' /> */}
                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(curElem.id)} className='far fa_trash-alt add-btn' />
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
                <div className="showItems"><button className="btn effect04" data-sm-link-text="Remove All" onClick={() =>{removeAll()}}>
                    <span>CHECK LIST</span>
                    </button></div>
            </div>
        </div>
    </>
  )
}

export default Todo