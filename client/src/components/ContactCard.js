import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePerson } from '../JS/actions/contact';


const ContactCard = ({person}) => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>{person.age}</Card.Text>
        <Card.Text>{person.favoriteFoods}</Card.Text>
        <Button variant="primary" onClick={() => navigate(`/update/${person._id}`)}>Edit</Button>
        <Button variant="primary" onClick={() => dispatch(deletePerson(person._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard