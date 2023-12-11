// contact.js (the reducer)
const { LOAD_PEOPLE, GET_PEOPLE, GET_PERSON, FAIL_PEOPLE } = require("../actionType/contact");

// initial state
const initialState = {
    listPeople: [], // Initialize as an empty array
    errors: null,
    load: false,
    personToGet: {},
};

// pure function
const personReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case LOAD_PEOPLE:
            return {...state, load: true};
        case GET_PEOPLE:
            return {...state, load: false, listPeople: payload.listPeople || []}; // Ensure payload.listPeople is defined
        case GET_PERSON:
            return {...state, personToGet: payload.personToGet, load: false};
        case FAIL_PEOPLE:
            return {...state, load: false, errors: payload};
        default:
            return state;
    }
};

export default personReducer;
