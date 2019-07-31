import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE
  } from '../actions';

  export const initialState = {
    error: '',
    isFetching: false,
    data: null
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_START:
        return {
          ...state,
          error: '',
          isFetching: true,
          data: null

        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          isFetching: false,
          data: action.payload.data
        };
        case FETCH_DATA_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
          data: null
        };
        case POST_DATA_START:
            return {
              ...state,
              error: '',
              isFetching: true,
            };
          case POST_DATA_SUCCESS:
            return {
              ...state,
              error: '',
              isFetching: false,
              data: action.payload.data
            };
            case POST_DATA_FAILURE:
            return {
              ...state,
              error: action.payload,
              isFetching: false,

            };
      default:
        return state;
    }
  };
