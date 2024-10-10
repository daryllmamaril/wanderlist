import { useState } from "react";
import { initialItems } from "../lib/constants";

export default function ItemList() {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item}/>
      ))}
    </ul>
  )
}

function Item({ item }) {
  return (
    <li className="item">
      <label><input type="checkbox"></input>{item.name}</label>
      <button>❌</button>
    </li>
  )
}
