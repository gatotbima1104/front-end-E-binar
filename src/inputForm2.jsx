import React, { useState } from 'react';

function ItemList2() {
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState({
    imageSrc: '',
    description: '',
    date: '',
    imageFile: null
  });

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'file') {
      setNewItem({
        ...newItem,
        imageSrc: URL.createObjectURL(event.target.files[0]),
        imageFile: event.target.files[0]
      });
    } else {
      setNewItem({
        ...newItem,
        [name]: value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
    setNewItem({
      imageSrc: '',
      description: '',
      date: '',
      imageFile: null
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
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
      <div className="card-container">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.imageSrc} alt={item.description} />
            <div className="card-body">
              <p>{item.description}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList2;
