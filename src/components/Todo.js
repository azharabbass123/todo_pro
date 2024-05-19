import React, { useState } from 'react'
import '../style.css'
import todoImg from '../todo.svg'
const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [item, setItem] = useState([]);
    const addItem = () =>{
        if(!inputData){
            alert("Please enter the data!")
        } else {
            const myNewInputData = {
                id: new Date().getTime.toString(),
                name: inputData
            }
            setItem([...item, myNewInputData]);
            setInputData("");
        }
    }
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src = {todoImg} alt="todologo" />
                    <figcaption>Add your List Here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" 
                    placeholder=' Add Item'
                    className='form-control'
                    value={inputData}
                    onChange={(event)=> setInputData(event.target.value)}
                    />
                    {/* <i className='fa fa_plus add-btn' onClick={addItem}></i> */}
                    <FontAwesomeIcon icon="fa fa_plus add-btn" />
                    <button onClick={addItem} style={{backgroundColor : "#fff", border: "none", fontSize: "30px", padding: "5px 10px", borderRadius:"4px"}}>+</button>
                </div>
                <div className="showItems">
                    {item.map((curElem) =>{
                        return(
                            <div className="eachItem" id={curElem.id}>
                        <h3>{curElem.name}</h3>
                        <div className='todo-btn'>
                        <i className='far fa_edit add-btn'></i>
                        <i className='far fa_trash-alt add-btn'></i>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
                <div className="showItems"><button className="btn effect04" data-sm-link-text="Remove All">
                    <span>CHECK LIST</span>
                    </button></div>
            </div>
        </div>
    </>
  )
}

export default Todo