const contactsForm = document.querySelector('.contacts__form');
const successPopup = document.querySelector('#successPopup');
const popupCloseButton = document.querySelector('.popup__close');
const popupOverlay = document.querySelector('.popup__overlay');

function openPopup() {
  successPopup.classList.add('popup--active');
  successPopup.setAttribute('aria-hidden', 'false');
}

function closePopup() {
  successPopup.classList.remove('popup--active');
  successPopup.setAttribute('aria-hidden', 'true');
}

if (contactsForm && successPopup && popupCloseButton && popupOverlay) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!contactsForm.checkValidity()) {
      contactsForm.reportValidity();
      return;
    }

    openPopup();
    contactsForm.reset();
  });

  popupCloseButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', closePopup);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && successPopup.classList.contains('popup--active')) {
      closePopup();
    }
  });
}