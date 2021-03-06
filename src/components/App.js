import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";
function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [deletedCard, setDeletedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const [popupButtonText, setPopupButtonText] = React.useState('Save');
  const [deletePopupButtonText, setDeletePopupButtonText] = React.useState('Yes');
   React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  React.useEffect(()=> {
    api.getUserInfo()
    .then(res => {
      setCurrentUser(res);
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  function handleAddPlaceSubmit(cardData) {
    setPopupButtonText('Saving...');
    api.sendCardData(cardData).then(res => {
      setCards([res, ...cards]);
      closeAllPopups();
    })
    .catch(err => {
      console.log(err);
    })
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id); 
      api.changeLikeCardStatus(card, isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    })
    .catch(err => {console.log(err)});
  }
  function handleCardDelete(card) {
    setDeletePopupButtonText('Saving...');
  api.deleteCard(card).then(res => {
    setCards((state) => state.filter(item => item._id !== card._id));
    closeAllPopups();
  }).catch(err => {
    console.log(err);
  })
  } 
   function handleUpdateUser(userData) {
    setPopupButtonText('Saving...');
     api.setUserInfo(userData).then(res => {
       setCurrentUser(res);
       closeAllPopups();
     })
     .catch(err => {
       console.log(err);
     })
   }
   function handleUpdateAvatar(userData) {
    setPopupButtonText('Saving...');
     api.editProfilePhoto(userData).then(res => {
       setCurrentUser(res);
       closeAllPopups();
     })
     .catch(err => {
       console.log(err);
     })
   }
  function handleEditAvatarClick() {
    setPopupButtonText('Save');
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setPopupButtonText('Save');
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setPopupButtonText('Save');
    setIsAddPlacePopupOpen(true);
  }
  function handleDeleteClick(data) {
    setDeletePopupButtonText('Yes');
    setIsDeletePopupOpen(true);
    setDeletedCard(data);
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
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onDeleteClick={handleDeleteClick}
        cards={cards}
        onCardDelete={handleCardDelete}
        onCardLike={handleCardLike}
      />
      <Footer />
      <EditAvatarPopup onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} buttonText={popupButtonText} onUpdateAvatar={handleUpdateAvatar}/>
      <EditProfilePopup onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} buttonText={popupButtonText} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} buttonText={popupButtonText} onAddPlaceSubmit={handleAddPlaceSubmit}/>
      <ConfirmDeleteCardPopup onClose={closeAllPopups} isOpen={isDeletePopupOpen} card={deletedCard} buttonText={deletePopupButtonText} onConfirmDeleteSubmit={handleCardDelete}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
