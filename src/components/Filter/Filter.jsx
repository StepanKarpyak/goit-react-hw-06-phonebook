import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/PhonebookSlice';
import { LabelFil, InputFil } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (  
  <LabelFil>
    Find contacts by name
      <InputFil
        type="text"
        onChange={e => dispatch(updateFilter(e.currentTarget.value))}
      />
  </LabelFil>
)
};

export default Filter;