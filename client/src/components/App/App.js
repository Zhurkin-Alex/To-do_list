import {useReducer, useEffect} from 'react'
import './App.css';
import todoContext from '../../utils/contexts/todoContext'
import reducer from '../../utils/reducer/reducer'
import Form from '../Form/Form.jsx'
import List from '../List/List.jsx'

function App() {

  
  const[list, dispatch] = useReducer(reducer, [])
  // console.log('listApp', list);

  useEffect(()=>{
    fetch('/todo')
    .then(res=>res.json())
    .then(data=>dispatch({type:"INIT", payload:data.allTodo}))
  },[])

  return (
    <todoContext.Provider value = {{list, dispatch}}>
    <div className="container">
    <h2>Hi</h2>
    <Form/>
    <List/>
    </div>
    </todoContext.Provider>
  );
}

export default App;
