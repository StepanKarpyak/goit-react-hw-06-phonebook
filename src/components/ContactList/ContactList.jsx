import React from 'react';
import { useSelector } from 'react-redux';
import { getItems, getFilter } from 'redux/selectors';
import ContactItem from '../ContactItem';
import { UlContacts } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const contacts = useSelector(getItems);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  return (
    <UlContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </UlContacts>
  )
};

export default ContactList;