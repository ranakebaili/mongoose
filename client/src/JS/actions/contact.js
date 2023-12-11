import axios from "axios";
import { FAIL_PEOPLE, GET_PEOPLE, GET_PERSON, LOAD_PEOPLE } from "../actionType/contact";

//get all people
export const getPeople = () => async (dispatch) => {
  dispatch({ type: LOAD_PEOPLE });
  try {
    let result = await axios.get("/api/person/show");
    dispatch({ type: GET_PEOPLE, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PEOPLE, payload: error.response });
  }
};

//add person
export const addPerson = (newPerson) => async (dispatch) => { // pass newPerson as a parameter
  try {
    await axios.post("/api/person/add", newPerson);
    dispatch(getPeople());
  } catch (error) {
    dispatch({ type: FAIL_PEOPLE, payload: error.response });
  }
};

//delete person
export const deletePerson = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/person/delete/${id}`);
    dispatch(getPeople());
  } catch (error) {
    dispatch({ type: FAIL_PEOPLE, payload: error.response });
  }
};

//edit person
export const editPerson = (id, newPerson) => async (dispatch) => {
  try {
    await axios.put(`/api/person/update/${id}`, newPerson);
    dispatch(getPeople());
  } catch (error) {
    dispatch({ type: FAIL_PEOPLE, payload: error.response });
  }
};

//get one person
export const getPerson = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PEOPLE });
  try {
    let result = await axios.get(`/api/person/${id}`); // removed unnecessary 'newPerson' argument
    dispatch({ type: GET_PERSON, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PEOPLE, payload: error.response });
  }
};


