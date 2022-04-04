import closeButtonPath from "../images/addButton.svg";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
      <div className="popup__form-container">
        <button className="popup__close-button" type="button" onClick={props.onClose}>
          <img
            className="popup__close-button-icon"
            src={closeButtonPath}
            alt="cross icon"
          ></img>
        </button>
        <form
          className={`popup__form popup__form-${props.name}`}
          action="#"
          name={`${props.name}`}
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__button" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
