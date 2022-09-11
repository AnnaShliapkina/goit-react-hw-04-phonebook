import PropTypes from 'prop-types';
import { List } from './ContactList.styled.jsx';
import { ContactCard } from '../ContactCard/ContactCard';
export const ContactList = ({ contacts, onDeleleButton }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactCard
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleleButton={onDeleleButton}
          />
        );
      })}
    </List>
  );
};

ContactList.prototypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleleButton: PropTypes.func.isRequired,
};
