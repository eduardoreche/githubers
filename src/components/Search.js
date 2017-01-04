import React from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/profile';
import Row from './helpers/Row';

let Search = ({dispatch}) => {
  let input;

  return (
    <Row>
      <form
        className="col-md-offset-2 col-md-8"
        onSubmit={(e)=> {
            e.preventDefault();
            dispatch(fetchProfile(input.value));
            input.value = '';
          }}>
        <div className="form-group">
          <input 
            className="form-control"
            type="search" 
            placeholder="Search GitHuber"
            ref={node => {
                input = node;
              }}/>
        </div>
      </form>
    </Row>
  )
};

Search = connect()(Search);

export default Search;