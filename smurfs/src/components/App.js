import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import Smurfs from './Smurfs'
import Form from './Form'
import {fetchSmurfs} from '../actions'
import {postSmurfs} from '../actions'
import ClipLoader from 'react-loader-spinner';

function App(props){
  useEffect(()=>{
    props.fetchSmurfs();
  },[])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {props.isFetching ? <ClipLoader
          className="loader"
          sizeUnit={"px"}
          size={150}
          color={'lightblue'}
          loading={props.isFetching}
        /> : <><Smurfs data={props.data}/>
        <Form postSmurfs={props.postSmurfs}/></>}

    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.data
  };
};
export default connect(
  mapStateToProps,
  { fetchSmurfs, postSmurfs }
)(App);

