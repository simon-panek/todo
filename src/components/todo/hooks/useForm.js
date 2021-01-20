import { useState } from 'react';

const useForm = (callback) => {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value } );
  };

  const handleSubmit = (e) => {
    console.log('INSIDE HandleSubmit Hook', item);
    e.preventDefault();
    e.target.reset();
    // props.sendTodo(item);
    callback(item);
    // const item = {};
    setItem({});
  };

  return [handleInputChange, handleSubmit, item]
}

export default useForm;