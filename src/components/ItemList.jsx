export default function ItemList({
  handleDeleteItem,
  handleToggleItem,
  items,
}) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}

function Item({ handleDeleteItem, handleToggleItem, item }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        ></input>
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
