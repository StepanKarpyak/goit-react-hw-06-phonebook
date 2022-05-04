import { Label } from './Filter.styled';
import { addFilter, getFilter } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeOfFilter = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        value={filter}
        onChange={changeOfFilter}
        type="text"
        name="filter"
      />
    </div>
  );
}