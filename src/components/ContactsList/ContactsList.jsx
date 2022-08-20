import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { useGetContactsQuery } from 'redux/contactsSlice';

export const ContactsList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter?.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {!isLoading &&
        getVisibleContacts().map(({ id, name, phone }) => (
          <ContactsItem key={id} name={name} number={phone} id={id} />
        ))}
    </ul>
  );
};
