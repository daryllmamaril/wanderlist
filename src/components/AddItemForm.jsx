import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert(
        "Oops! Item can't be empty. Please enter the item name to add it to your list."
      );
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        type="text"
        placeholder="Toothbrush..."
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
