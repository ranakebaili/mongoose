import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../JS/actions/contact';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Add = () => {
  const [newPerson, setNewPerson] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
    console.log(newPerson.name)
  };

  const add = () => {
    dispatch(addPerson(newPerson));
  };

  return (
    <div>
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter name"
        name="name"
        value={newPerson.name || ''}
        onChange={handleChange}
      />
      <Form.Label>Age</Form.Label>
      <Form.Control
        type="number"
        placeholder="enter age"
        name="age"
        value={newPerson.age || ''}
        onChange={handleChange}
      />
      <Form.Label>Favourite food</Form.Label>
      <Form.Control
        type="text"
        placeholder="enter favourite food"
        name="favoriteFoods"
        value={newPerson.favoriteFoods || ''}
        onChange={handleChange}
      />
      
        <Button variant="primary" type="submit" onClick={dispatch(addPerson(newPerson))}>
          Add
        </Button>
      
    </div>
  );
};

export default Add;
