import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';

export const ContactsItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const onDelete = async () => {
    await deleteContact(id);
  };
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
