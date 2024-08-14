import React, { useState } from 'react';

interface ItemInputProps {
  addItem: (itemName: string) => void;
}

const ItemInput: React.FC<ItemInputProps> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add new item"
        className="flex-grow p-2 border rounded"
      />
      <button className="bg-blue-500 text-white ml-3 px-4 py-2 rounded hover:bg-blue-700" type="submit" >Add</button>
    </form>
  );
};

export default ItemInput;
