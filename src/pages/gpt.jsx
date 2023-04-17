import { useState } from 'react';

function CardList() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const cards = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
  ];

  return (
    <div className="card-list">
      {cards.map((card) => (
        <div className="card" key={card.id} onClick={() => handleCardClick(card)}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
      {selectedCard && <CardDescription card={selectedCard} />}
    </div>
  );
}

function CardDescription({ card }) {
  return (
    <div className="card-description">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}


export default CardList;