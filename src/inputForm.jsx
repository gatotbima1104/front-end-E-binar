import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState({
    imageSrc: '',
    description: '',
    date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
    setNewItem({
      imageSrc: '',
      description: '',
      date: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            type="text"
            name="imageSrc"
            value={newItem.imageSrc}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newItem.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
      <hr />
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageSrc} alt={item.description} />
          <p>{item.description}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
