import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from 'redux/PhonebookSlice';
import PropTypes from 'prop-types';
import { LiContact, ButtonDelete } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContact = () => {
    dispatch(deleteItem(id))
  };


  return (
    <LiContact>
      {name}: {number}
      <ButtonDelete type="button" onClick={deleteContact}>
        Delete
      </ButtonDelete>
    </LiContact>
  )
};

export default ContactItem;


ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id:  PropTypes.string.isRequired,
};