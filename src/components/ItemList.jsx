import EmptyView from "./EmptyView";

export default function ItemList({
  handleDeleteItem,
  handleToggleItem,
  items,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.map((item) => (
        <Item
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

function Item({ onDeleteItem, onToggleItem, item }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        ></input>
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
