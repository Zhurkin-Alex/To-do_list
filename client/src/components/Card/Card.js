import {useContext,useState} from 'react';
import './card.css'
import todoContect from '../../utils/contexts/todoContext'

function Card({todo}) {
//  console.log(todo);
    const{dispatch}=useContext(todoContect)
 
 const deleteHandler = ()=>{
   fetch('/todo/del', {
     method:"DELETE",
     headers:{
      "Content-type": "Application/json",
     },
     body: JSON.stringify({
      id:todo._id
     })
   })
    .then(res=>res.json())
    .then(data=>dispatch({type:"DELETE", payload:data.id}))
  // console.log(todo._id);
 }
 
 const checkboxHandler = ()=>{
   console.log("todo._id",todo._id);
   fetch('/todo/check', {
     method:"PUT",
     headers:{
      "Content-type": "Application/json",
     },
     body: JSON.stringify({
      id:todo._id
     })
   })
   .then(res=>res.json())
   .then(data=>dispatch({type:"UPDETE", payload:data}))
    // .then(data=>console.log("data", data))
 }
 const[edit,setEdit]= useState(false)
 const updateHandler = ()=>{
  setEdit(true)
 }
//  console.log("edit", edit);

 const saveHandler= (e)=>{
  e.preventDefault()
  setEdit(false)
  const{ title:{value: title}} = e.target
  fetch('/todo/udate', {
    method:"PUT",
    headers:{
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      title,
      id: e.target.id,
    })
  })
  .then((res) => res.json())
  .then(({ title, id }) =>
        dispatch({ type: "EDIT", payload: { title, id } })
  );
 }


  return (
    <>
    { !todo.isDone && !edit && ( 
    <li className="todo-item " id={todo._id}>
      <div className="todo-check">
        <input className="form-checkbox" type="checkbox" onChange={checkboxHandler}/>
        <span className="undone">{todo.title}</span>
      </div>
      <div className="btn-update">
        <button className="btn btn-primary form-btn_delete" onClick={deleteHandler}>Delete</button>
        <button className="btn btn-primary" onClick={updateHandler}>Update</button>
     </div>
    </li>)
    }
    {todo.isDone && ( 
    <li className="todo-item " id={todo._id}>
      <div className="todo-check">
        <input className="form-checkbox" type="checkbox" onChange={checkboxHandler} checked/>
        <span className=" done" >{todo.title}</span>
      </div>
      <div className="btn-update">
        <button className="btn btn-primary form-btn_delete" onClick={deleteHandler}>Delete</button>
        <button className="btn btn-primary" onClick={updateHandler}>Update</button>
     </div>
    </li>)
    }

    {edit &&(
      <li className="edit-box">
      <span className=''>
        <form className="edit-form" onSubmit={saveHandler} id={todo._id} action="/todo">
          <input className="inpurt-form" name="title" defaultValue={todo.title} />
          <button className="btn btn-primary" >Save</button>
        </form>
      </span>      
      <button className="btn btn-primary" onClick={deleteHandler}>Delete</button>
    </li>
      )
    }

    </>
  )



}

export default Card;
