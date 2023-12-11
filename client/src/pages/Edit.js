import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { editPerson, getPerson } from '../JS/actions/contact';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Edit = () => {
    const [newPerson, setNewPerson] = useState({});
    const dispatch = useDispatch();
    const match = useMatch("/update/:id");
    const navigate = useNavigate();
    const personToGet = useSelector(
        (state) => state.personReducer.personToGet
    );
    const handleChange = (e) =>{
        setNewPerson({...newPerson, [e.target.name]: e.target.value});
    };
    useEffect(()=> {
        dispatch(getPerson(match.params.id));
    });
    const handleEdit =()=>{
        dispatch(editPerson(match.params.id, newPerson));
        navigate(-1);
    }
  return (
    <div>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={`${personToGet.name}`} name='name' value={newPerson.name} onChange={handleChange} />
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder={`${personToGet.age}`} name='name' value={newPerson.name} onChange={handleChange} />
        <Form.Label>Favourite food</Form.Label>
        <Form.Control type="text" placeholder={`${personToGet.favoriteFoods}`} name='name' value={newPerson.favoriteFoods} onChange={handleChange} />
      <Button variant="primary" type="submit" onClick={handleEdit}>
        Edit
      </Button>
    </div>
  )
}

export default Edit