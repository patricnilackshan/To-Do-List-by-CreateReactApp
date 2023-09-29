import { FaEdit, FaTrash } from "react-icons/fa";
export default function Content({
  items,
  handleCheck,
  changeEdit,
  deleteItem,
  handleEdit,
  edit,
  setEdit,
}) {
  return (
    <main>
      {items.length === 0 ? (
        <h1>No Tasks Yet</h1>
      ) : (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                onChange={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaEdit
                role="button"
                tabIndex="0"
                onClick={() => changeEdit(item.id)}
              />
              <FaTrash
                role="button"
                tabIndex="0"
                onClick={() => deleteItem(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
