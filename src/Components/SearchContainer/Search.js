import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchContainer = (props) => {
  return (
    <div className='searchContainer'>
      <Form inline>
        <FormControl
          type='text'
          placeholder='Search'
          className='mr-sm-2'
          onChange={props.search}
        />
        <Button variant="light">Search</Button> 
      </Form>

    </div>
  );
};

export default SearchContainer;
