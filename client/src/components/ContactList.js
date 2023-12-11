//ContactList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../JS/actions/contact';
import ContactCard from './ContactCard';

const PeopleList = () => {
  const dispatch = useDispatch();
  const listPeople = useSelector((state) => state.personReducer.listPeople);
  const load = useSelector((state) => state.personReducer.load);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  useEffect(() => {
    console.log(listPeople);
  }, [listPeople]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '100px',
      }}
    >
      {load ? (
        <h2>Loading...</h2>
      ) : (
        listPeople.map((el) => <ContactCard person={el} key={el._id} />)
      )}
    </div>
  );
};

export default PeopleList;
