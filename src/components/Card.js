function Card({ cardData, onCardClick, onDeleteClick }) {
  function handleImageCLick() {
    onCardClick(cardData);
  }
  function handleDeleteClick() {
    onDeleteClick(cardData);
  }
  return (
    <div className="gallery__card">
      <button
        className="gallery__delete-button"
        type="button"
        aria-label="Delete card"
        onClick={handleDeleteClick}
      ></button>
      <img
        className="gallery__picture"
        src={cardData.link}
        alt={cardData.name}
        onClick={handleImageCLick}
      ></img>
      <div className="gallery__text-container">
        <p className="gallery__text">{cardData.name}</p>
        <div className="gallery__like-wrapper">
          <button
            className="gallery__like-button"
            type="button"
            aria-label="Like!"
          ></button>
          <span className="gallery__like-counter">{cardData.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
