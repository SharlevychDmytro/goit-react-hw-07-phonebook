import { FormContact, Input, Label } from 'components/Form/Form.styled';
import { Formik } from 'formik';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

const initialValues = {
  name: '',
  phone: '',
};

export const FormContacts = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const formSubmit = async (values, { resetForm }) => {
    const some = data.some(
      cont => cont.name.toLowerCase() === values.name.toLowerCase()
    );
    if (some) {
      alert(`${values.name} is already in contacts`);
      resetForm();
      return;
    }
    await addContact(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      <FormContact>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <button type="submit">Add contact</button>
      </FormContact>
    </Formik>
  );
};
