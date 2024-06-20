import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  }

  function addItem(Item) {
    const Id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItems = items.concat({
      id: Id,
      checked: false,
      item: Item,
      edit: false,
    });
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function deleteItem(id) {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function changeEdit(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, edit: !item.edit } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function handleEdit(id) {
    const listItems = items.map((Item) =>
      Item.id === id ? { ...Item, item: edit } : Item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
    setEdit("");
  }

  return (
    <div className="App">
      <Header title="Patric's" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        changeEdit={changeEdit}
        handleEdit={handleEdit}
        edit={edit}
        setEdit={setEdit}
        deleteItem={deleteItem}
      />
      <Footer length={items.length} />
    </div>
  );
}
