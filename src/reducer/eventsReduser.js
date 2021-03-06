import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_RESET,
  CREATE_EVENT_SUCCESS,
  GET_SINGLE_EVENT,
  GET_USER_EVENT,
} from '../constants/eventConstants';

export const createEventReducer = (state = { events: [] }, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        loading: true,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case CREATE_EVENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CREATE_EVENT_RESET:
      return {};
    default:
      return state;
  }
};

export const getEventsReducer = (state = { event: [] }, action) => {
  switch (action.type) {
    case GET_USER_EVENT:
      return {
        ...state,
        event: action.payload,
      };

    default:
      return state;
  }
};

export const getSingleEventsReducer = (state = { singleEvent: [] }, action) => {
  switch (action.type) {
    case GET_SINGLE_EVENT:
      return {
        singleEvent: action.payload,
      };
    default:
      return state;
  }
};

export const editEventReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_EVENT:
      return {
        success: true,
      };
    default:
      return state;
  }
};
