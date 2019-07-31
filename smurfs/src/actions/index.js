import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    // fetch DATA
    axios
      .get(
        `http://localhost:3333/smurfs`)
      .then(res => {
        console.log("SUCCESFULLY GOT DATA", res)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res });
      })
      .catch(err => {
          console.log("OH AN ERROR HAPPENED", err)
          dispatch({type: FETCH_DATA_FAILURE, payload: err})
        });
  };

export const postSmurfs = data => dispatch => {
    dispatch({ type: POST_DATA_START });

    axios
        .post(`http://localhost:3333/smurfs`, data)
        .then(res => {
            console.log("SUCCESFULLY POSTED DATA", res)
            dispatch({ type: POST_DATA_SUCCESS, payload: res });
        })
        .catch( err => {
            console.log("OH NO AN ERROR HAPPENED", err)
            dispatch({type: POST_DATA_FAILURE, payload: err});
        })
}