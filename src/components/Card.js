function Card(props) {
  function handleImageCLick() {
    props.onCardClick(props.cardData);
  }
  function handleDeleteClick() {
    props.onDeleteClick(props.cardData);
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
        src={props.cardData.link}
        alt={props.cardData.name}
        onClick={handleImageCLick} 
      ></img>
      <div className="gallery__text-container">
        <p className="gallery__text">{props.cardData.name}</p>
        <div className="gallery__like-wrapper">
          <button
            className="gallery__like-button"
            type="button"
            aria-label="Like!"
          ></button>
          <span className="gallery__like-counter">
            {props.cardData.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
