import { useItemsStore } from "../stores/itemStore";
import Logo from "./Logo";
import Counter from "./Counter";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}
