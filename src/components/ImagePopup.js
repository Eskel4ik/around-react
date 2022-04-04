import closeButtonPath from "../images/addButton.svg";

function ImagePopup(props) {
  return (
    <section className={`popup popup_type_image ${props.card ? 'popup_visible' : ''}`}>
      <div className="popup__content-container">
        <button
          className="popup__close-button popup__close-button_type_image"
          type="button"
          onClick={props.onClose}
        >
          <img
            className="popup__close-button-icon"
            src={closeButtonPath}
            alt="cross icon"
          ></img>
        </button>
        <img className="popup__image" src={props.card ? props.card.link : '#'} alt={props.card ? props.card.name : 'Alt text'}></img>
        <p className="popup__image-text">{props.card ? props.card.name : ''}</p>
      </div>
    </section>
  );
}
export default ImagePopup;
