import checkStatus from './checkStatus'
import editTitle from './editTitle'

const reducer = (state, action)=>{
  switch (action.type) {
    
    case 'INIT':
      return [...state, ...action.payload];
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
    return state.filter((el)=>el._id !== action.payload);
    case 'CHECK':    
      // return checkStatus(state, action);
      return [...state].map(el=>{
        return el._id == action.payload.id ? {...el, isDone: !el.isDone} :el
      })
    case 'EDIT':    
    // return editTitle(state, action);
    return [...state].map(el=>{
      return el._id == action.payload.id ? {...el, title: action.payload.title } :el
    })

    default:
      break;
  }
}

export default reducer
