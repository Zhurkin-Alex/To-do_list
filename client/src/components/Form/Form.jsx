import React, {useContext} from 'react';
import './form.css'
import todoContext from '../../utils/contexts/todoContext'

function Form(props) {
  const {dispatch} = useContext(todoContext)

  const inputTodo = (e)=>{
    e.preventDefault()
    const form = e.target
    const input = e.target.input.value
    fetch('/todo/add',{
      method:"POST",
      headers:{
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        input
      })
    })
      .then(res=> res.json())
      .then((data)=>dispatch({type:'ADD', payload:data.newTodo}))
      // .then(data=>console.log("data",data))
      
    form.reset()
  }

  return (
    <form className="form-box" onSubmit={inputTodo} >
    <div className="mb-3 form-input">   
    <input className="form-control" name="input"  type="text"   placeholder="new to-do"/>
    <button className="btn btn-primary form-btn" type="submit" >Submit</button>
  </div>
  
</form>
  );
}

export default Form;
