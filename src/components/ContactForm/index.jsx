import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
// import { Component } from 'react';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const listContacts = useSelector(state => {
    return state.contacts;
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
    const contObj = {
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    };

    dispatch({ type: 'addUser', payload: contObj });
    // console.log('listContacts', listContacts);

    // if (newCont.name) {
    // const contObj = { id: nanoid(), ...newCont };
    //Массив имен из объекта
    // const arrName = [];
    // for (const contact of contacts) {
    //   arrName.push(contact.name);
    // }
    //Проверка на наличие уже такого имени
    // const arrNameLowerCase = arrName.map(elem => elem.toLowerCase());
    // if (arrNameLowerCase.includes(newCont.name.toLowerCase())) {
    //   alert(`${newCont.name} is already in contacts`);
    //   return;
    // }
    // setContacts([...contacts, contObj]);
    // }

    e.target.name.value = '';
    e.target.number.value = '';
  };

  const handleChange = ({ target: { name, value } }) => {
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;
    //   case 'number':
    //     setNumber(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="form-control"
          id="exampleFormControlInput1"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Telephone
        </label>
        <input
          type="tel"
          name="number"
          required
          className="form-control"
          id="exampleFormControlInput2"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Add contact
      </button>
    </form>
  );
};
