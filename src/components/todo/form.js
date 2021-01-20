
import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.scss';
import useForm from './hooks/useForm.js'

const TodoForm = (props) => {

  // const [item, setItem] = useState({});

  // const handleInputChange = e => {
  //   setItem({ ...item, [e.target.name]: e.target.value } );
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.sendTodo(item);
  //   // const item = {};
  //   setItem({});
  // };

  // const [formData, setFormData] = useState({});
  const [handleInputChange, handleSubmit] = useForm(sendItem);

  function sendItem(item){
    console.log('INSIDE todoItem', item);
    props.sendTodo(item);
  }

  return (
  <>
    <Form id="form" onSubmit={handleSubmit}>
    <h3>Add Item</h3>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>To Do Item</Form.Label>
        <Form.Control data-testid='todoItem' type="text" placeholder="Item Details" name="text" placeholder="Add To Do List Item" onChange={handleInputChange}/>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control data-testid='assignee' placeholder="Assignee Name" type="text" name="assignee" onChange={handleInputChange}/>
      </Form.Group>
        <Form.Group controlId="formBasicRange">
          {/* <Form.Label>Difficulty Rating</Form.Label> */}
          <Form.Control data-testid='slider' type="range" defaultValue="1"  min="1" max="5" name="difficulty" onChange={handleInputChange}/>
        </Form.Group>
      <Button data-testid='submit' variant="primary" type="submit">
      Add Item
      </Button>
      
    </Form>
  </>
  );
  
}

export default TodoForm;
