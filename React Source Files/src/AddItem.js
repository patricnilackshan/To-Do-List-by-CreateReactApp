import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        required
        placeholder="Add Item"
        id="addItem"
        value={newItem}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
