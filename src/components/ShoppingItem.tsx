import React from 'react';

interface ShoppingItemProps {
  item: {
    id: number;
    name: string;
  };
  removeItem: (id: number) => void;
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({ item, removeItem }) => {
  return (
    <li className="flex justify-between items-center bg-white p-2 shadow-sm rounded">
      {item.name}
      <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">Remove</button>
    </li>
  );
};

export default ShoppingItem;
