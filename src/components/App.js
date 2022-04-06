import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeleteClick() {
    setIsDeletePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
    setSelectedCard(null);
  }
  function handleCardClick(data) {
    setSelectedCard(data);
  }
  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onDeleteClick={handleDeleteClick}
      />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Change profile picture"
        isOpen={isEditAvatarPopupOpen}
        buttonText="Save"
        onClose={closeAllPopups}
        noValidate
      >
        <input
          className="popup__input popup__input_value_url"
          id="avatar-input"
          type="url"
          name="avatar"
          placeholder="Image URL"
          required
        />
        <span className="popup__error_avatar-url popup__error avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        buttonText="Save"
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_value_name"
          id="name-input"
          type="text"
          name="name"
          placeholder="Your name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__error name-input-error"></span>
        <input
          className="popup__input popup__input_value_about"
          id="about-input"
          type="text"
          name="about"
          placeholder="About me"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__error_profile-about popup__error about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="addCard"
        title="New place"
        isOpen={isAddPlacePopupOpen}
        buttonText="Save"
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_value_title"
          id="title-input"
          type="text"
          name="title"
          placeholder="Title"
          minLength="1"
          maxLength="30"
          required
        />
        <span className="popup__error_addCard-name popup__error title-input-error"></span>
        <input
          className="popup__input popup__input_value_url"
          id="url-input"
          type="url"
          name="url"
          placeholder="Image URL"
          required
        />
        <span className="popup__error_addCard-url popup__error url-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        title="Are you sure?"
        isOpen={isDeletePopupOpen}
        buttonText="Yes"
        onClose={closeAllPopups}
        noValidate
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
