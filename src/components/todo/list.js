import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './list.scss';

const TodoList = (props) => {

  return (
    <ul>
      {props.list.map(item => (
        <li data-testid="list-item"
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span id="listSpan" onClick={() => props.handleComplete(item._id)}>
            {item.text} -- {item.assignee}
          </span>
          <button id="deleteButton" type="submit" onClick={() => props.handleDelete(item._id)}>X</button> 
        </li>
      ))}
    </ul>
  );
  
}

export default TodoList;

//return(
//   <Container>
//     <ListGroup as="ul">
//       {props.list}
//       <ListGroup as="li">
//         <span></span>

//       </ListGroup>
//     </ListGroup>
//   </Container>
// )