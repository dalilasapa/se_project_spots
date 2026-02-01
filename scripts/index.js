const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const newPostBtn = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameElement = document.querySelector(".profile__name");
const profileDescElement = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const addCardFormElement = newPostModal.querySelector(".modal__form");
const nameInput = newPostModal.querySelector("#new-caption-input");
const linkInput = newPostModal.querySelector("#link-url-input");

editProfileBtn.addEventListener("click", () => {
  openModal(editProfileModal);
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescInput.value = profileDescElement.textContent;
});

editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});
newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescElement.textContent = editProfileDescInput.value;
  closeModal(editProfileModal);
  console.log("submitting");
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(linkInput.value);
  console.log(nameInput.value);
  evt.target.reset();
  closeModal(newPostModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
