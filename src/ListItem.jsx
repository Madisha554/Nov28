import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({ item, handleDelete, handleChange }) => {
  const inputId = `checkbox-${item.id}`;

  return (
    <li className="item" type="none">
      <input
        className="w-6 h-6 text-blue-800 focus:ring-red-500 focus:ring-2"
        id={inputId}
        type="checkbox"
        name="checkbox"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      /> 
      &nbsp;
      <label
        // htmlFor={inputId}
        className="text-3xl"
        onDoubleClick={() => handleChange(item.id)}
        style={item.checked ? { textDecoration: 'line-through' } : null}
      >
        {item.item}
      </label>
      &nbsp; &nbsp; &nbsp;
      <button
        className="text-2xl hover:text-red-700"
        onClick={() => handleDelete(item.id)}
      >
        <FaTrashAlt tabIndex="0" />
      </button>
    </li>
  );
};

export default ListItem;
