const select = document.querySelector(".form-select__selector"),
  selectLabel = document.querySelector(".form-select__label"),
  selectOptionsParent = document.querySelector(".form-select__list").parentElement,
  selectOptions = document.querySelectorAll(".form-select__list-item");

const chips = document.querySelectorAll(".chip"),
  popupCloseBtn = document.querySelector(".popup-close"),
  popup = document.querySelector(".popup");

const submitBtn = document.querySelector(".btn-submit");

const agreementCheckbox = document.querySelector(".agreement__checkbox");

const inputName = document.querySelector(".input-name"),
  inputEmail = document.querySelector(".input-email"),
  inputPhone = document.querySelector(".input-phone");

let inputNameController = inputName.nextElementSibling,
  inputEmailController = inputEmail.nextElementSibling,
  inputPhoneController = inputPhone.nextElementSibling,
  selectActiveValue = document.querySelector(".form-select__title");

popupCloseBtn.addEventListener("click", function() {
  document.querySelector(".popup").classList.remove("popup-opened");
  document.querySelector("body").classList.remove("locked");

  removeError(inputName, "error");
  removeError(inputNameController, "error");
  removeSuccessSelector(inputName, "success");
  removeSuccessSelector(inputNameController, "success");
  inputName.value = "";

  removeError(inputEmail, "error");
  removeError(inputEmailController, "error");
  removeSuccessSelector(inputEmail, "success");
  removeSuccessSelector(inputEmailController, "success");
  inputEmail.value = "";

  removeError(inputPhone, "error");
  removeError(inputPhoneController, "error");
  removeSuccessSelector(inputPhone, "success");
  removeSuccessSelector(inputPhoneController, "success");
  inputPhone.value = "";

  agreementCheckbox.checked = false;
  removeError(select, "error");
  removeSuccessSelector(select, "success");
  selectActiveValue.innerHTML = "Choose";
  selectActiveValue.style.color = "rgba(35, 35, 35, 0.4)";
  selectActiveValue.setAttribute("data-value", "");
});

// Chips
chips.forEach(chip => {
  chip.addEventListener("click", function(e) {
    if (e.target) {
      chip.classList.toggle("active");
    }
  });
});

function handleSelectToggle() {
  select.classList.remove("error");
  openSelect();
  select.classList.remove("selected");

  selectOptions.forEach(option => {
    option.addEventListener("click", function(e) {
      e.stopPropagation();

      if (e.target && e.target.classList.contains("form-select__list-item")) {
        selectActiveValue.innerHTML = e.target.innerHTML;
        selectActiveValue.setAttribute("data-value", e.target.innerHTML);
        closeSelect();
      }

      select.classList.add("selected");
    });
  });
}

function openSelect() {
  select.classList.add("focused");
  selectLabel.classList.add("active");
  selectOptionsParent.classList.remove("hidden");
  selectOptionsParent.classList.add("visible");
}

function closeSelect() {
  selectLabel.classList.remove("active");
  selectOptionsParent.classList.remove("visible");
  selectOptionsParent.classList.add("hidden");
  select.classList.remove("focused");
}

select.addEventListener("click", handleSelectToggle);

popup.addEventListener("click", function(e) {
  let target = e.target;

  if (
    !target.classList.contains("form-select__label") &&
    selectLabel.classList.contains("active") &&
    !target.classList.contains("form-select__title") &&
    !target.classList.contains("arrow-icon")
  ) {
    closeSelect();
  }
});

const popupContent = document.querySelector(".popup-content");

// проверяем, что клик был за пределами popup
document.addEventListener("click", event => {
  if (!popupContent.contains(event.target)) {
    // закрываем popup
    popup.classList.remove("popup-opened");
    document.querySelector("body").classList.remove("locked");
  }
});

//! Validation

//add
function addError(obj, errorSelector) {
  obj.classList.add(errorSelector);
}

//remove
function removeError(obj, errorSelector) {
  obj.classList.remove(errorSelector);
}

//add
function validationSuccess(obj, successSelector) {
  obj.classList.add(successSelector);
}

//remove
function removeSuccessSelector(obj, successSelector) {
  obj.classList.remove(successSelector);
}

// reset Name
inputName.addEventListener("focus", function() {
  removeError(inputName, "error");
  removeError(inputNameController, "error");
  removeSuccessSelector(inputName, "success");
  removeSuccessSelector(inputNameController, "success");
});

// Name Field validation
inputName.addEventListener("change", function() {
  const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
  const minLength = 2;

  if (inputName.value.length < minLength) {
    addError(inputName, "error");
    addError(inputNameController, "error");
    return;
  }

  if (!nameRegex.test(inputName.value)) {
    addError(inputName, "error");
    addError(inputNameController, "error");
    return;
  } else {
    validationSuccess(inputName, "success");
    validationSuccess(inputNameController, "success");
  }
});

// reset Email
inputEmail.addEventListener("focus", function() {
  removeError(inputEmail, "error");
  removeError(inputEmailController, "error");
  removeSuccessSelector(inputEmail, "success");
  removeSuccessSelector(inputEmailController, "success");
});

// Name Field validation
inputEmail.addEventListener("change", function() {
  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(inputEmail.value)) {
    addError(inputEmail, "error");
    addError(inputEmailController, "error");
    return;
  } else {
    validationSuccess(inputEmail, "success");
    validationSuccess(inputEmailController, "success");
  }
});

// reset Phone
inputPhone.addEventListener("focus", function() {
  removeError(inputPhone, "error");
  removeError(inputPhoneController, "error");
  removeSuccessSelector(inputPhone, "success");
  removeSuccessSelector(inputPhoneController, "success");
});

// Phone Field validation
inputPhone.addEventListener("change", function() {
  const phoneRegex = /^\+?\d{1,3}[- ]?\d{1,3}[- ]?\d{2,5}$/;

  if (!phoneRegex.test(inputPhone.value)) {
    addError(inputPhone, "error");
    addError(inputPhoneController, "error");
    return;
  } else {
    validationSuccess(inputPhone, "success");
    validationSuccess(inputPhoneController, "success");
  }
});

// submit btn
submitBtn.addEventListener("click", function(e) {
  validateForm(e);
});

function validateForm(e) {
  e.preventDefault();
  let selectValue = selectActiveValue.getAttribute("data-value");

  const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
  const minLength = 2;

  if (inputName.value.length < minLength) {
    addError(inputName, "error");
    addError(inputNameController, "error");
  }

  if (!nameRegex.test(inputName.value)) {
    addError(inputName, "error");
    addError(inputNameController, "error");
  }

  const emailRegex = /^\S+@\S+\.\S+$/;

  if (!emailRegex.test(inputEmail.value)) {
    addError(inputEmail, "error");
    addError(inputEmailController, "error");
  }
  const phoneRegex = /^\+?\d{1,3}[- ]?\d{1,3}[- ]?\d{2,5}$/;

  if (!phoneRegex.test(inputPhone.value)) {
    addError(inputPhone, "error");
    addError(inputPhoneController, "error");
  }

  if (!agreementCheckbox.checked) {
    alert("Для продолжения необходимо согласиться с условиями.");
  }

  if (selectValue == null) {
    addError(select, "error");
  } else {
    validationSuccess(select, "success");
  }
}
