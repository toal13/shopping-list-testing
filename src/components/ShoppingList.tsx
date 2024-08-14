import React, { useState } from 'react';
import ItemInput from './ItemInput';
import ShoppingItem from './ShoppingItem';
 
interface Item {
  id: number;
  name: string;
}
 
const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
 
  const addItem = (itemName: string) => {
    setItems([
      ...items,
      {
        name: itemName,
        id: Date.now(),
      },
    ]);
  };
 
  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
 
  return (
    <div className="max-w-lg mx-auto p-4">
      <ItemInput addItem={addItem} />
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <ShoppingItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </ul>
    </div>
  );
};
 
export default ShoppingList;
