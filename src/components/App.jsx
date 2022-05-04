import { useSelector } from 'react-redux';
import { getItems } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';


function App() {
  const contacts = useSelector(getItems);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>

          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
}

export default App;


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
