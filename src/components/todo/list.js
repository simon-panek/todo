import React, {useContext, useEffect, useState} from 'react';
// import { ListGroup } from 'react-bootstrap';
import './list.scss';
import { AppSettingsContext } from './context/appSettingsContext.js';
// import { setState } from 'react-jsonschema-form/lib/utils';
import SignUp from './signUp.js';
import cookie from 'react-cookies';

const TodoList = (props) => {

  const appSettingsContext = useContext(AppSettingsContext);

  const [numPageCount, setNumPageCount] = useState([]);
  const [nextList, setNextList] = useState([]);
  const [renderSignUp, setRenderSignUp] = useState(true);
  
  let page = props.list.slice(0, appSettingsContext.maxDisplay);

  // console.log('props.list ', props.list);
  
  useEffect(()=>{
    calcPages();
    setNextList(page);
  },[props.list]);

  // optionally render the SignUp form

  let signedUpCookie = cookie.load('signedUp');

  useEffect(()=>{
    if(signedUpCookie){
      setRenderSignUp(false);
    }
  });

  const calcPages = () => {
    let pageButtonArray = [];
    let numPages = Math.ceil((props.list.length) / appSettingsContext.maxDisplay);
    for (let i = 1; i <= numPages; i++){
      pageButtonArray.push(<button  key={i} name={i} onClick={nextPage}>Page {i}</button>);
    }
    // console.log('calcPages ', numPages);
    setNumPageCount([pageButtonArray]);
  }
 
  const nextPage = (e) => {
    let pageNumber = e.target.name;

    let newPage = props.list.slice((pageNumber-1)*appSettingsContext.maxDisplay, appSettingsContext.maxDisplay + (pageNumber-1)*appSettingsContext.maxDisplay);

    setNextList(newPage);
    // console.log('page ', page);
  }

  
  return (
    <>
    <div>
      { renderSignUp === false ? '' : 
      <SignUp />
      }
    </div>
    <div>
      <ul>
        {nextList.map(item => (
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
      <div>
      {numPageCount}
      </div>
    </div>
    </>
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