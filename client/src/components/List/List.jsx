import todoContect from '../../utils/contexts/todoContext'
import {useContext} from 'react'
import Card from '../Card/Card.jsx'

function List(props) {
  const {list} = useContext(todoContect)
  return (
    <ul>
      {list.map(el=>(
        <Card key={el._id} todo={el}/>
      ))}
    </ul>
  );
}

export default List;
