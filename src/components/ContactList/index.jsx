import { useDispatch, useSelector } from 'react-redux';
import { delUserAction } from '../../redux/user/reducer';
// import { deleteContAction } from '../../redux/user/action';

export const ContactList = () => {
  const dispatch = useDispatch();

  const listCont = useSelector(state => {
    return state.user.contacts;
  });
  // console.log('listCont', listCont);

  // const filter = useSelector(state => {
  //   return state.filter.filter;
  // });

  const deleteCont = id => {
    dispatch(delUserAction(id));
    // dispatch({ type: 'delUser', payload: id });
  };

  return (
    <ul className="list-group">
      {listCont
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(elem => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={elem.id}
          >
            <label>
              {elem.name} - {elem.number}
            </label>

            <button
              className="btn btn-primary"
              type="button"
              onClick={() => deleteCont(elem.id)}
            >
              Del
            </button>
          </li>
        ))}
    </ul>
  );
};
