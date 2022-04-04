import React from "react";
import editIconPath from "../images/editButton.svg";
import addCardIconPath from "../images/addButton.svg";
import editAvatarIconPath from "../images/pencil.svg";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [cards, setCards] = React.useState([]);
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
  return (
    <main>
      <section className="user">
        <div className="user__avatar-wrapper" onClick={props.onEditAvatarClick}>
          <img
            className="user__avatar"
            id="jacques"
            src={userAvatar}
            alt="user"
          ></img>
          <img
            className="user__avatar-icon"
            src={editAvatarIconPath}
            alt="white pencil icon"
          ></img>
        </div>
        <div className="user__text-container">
          <div className="user__title-container">
            <h1 className="user__name">{userName}</h1>
            <button
              className="user__edit-button"
              type="button"
              aria-label="Edit profile"
              onClick={props.onEditProfileClick}
            >
              <img
                className="user__edit-button-icon"
                src={editIconPath}
                alt="white pencil icon"
              ></img>
            </button>
          </div>
          <p className="user__info">{userDescription}</p>
        </div>
        <button
          className="user__add-button"
          type="button"
          aria-label="Add picture"
          onClick={props.onAddPlaceClick}
        >
          <img src={addCardIconPath} alt="white cross"></img>
        </button>
      </section>
      <section className="gallery">
        {cards.map((item) => (
          <Card
            key={item._id}
            cardData={item}
            onCardClick={props.onCardClick}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
