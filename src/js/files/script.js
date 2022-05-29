import { isMobile } from "./functions.js";

import { flsModules } from "./modules.js";

import IMask from "imask";
// input mask
let phoneinp = document.querySelectorAll(".phone-num");

phoneinp.forEach((num) => {
  Inputmask({
    mask: "+7(999) 999-99-99",
    showMaskOnFocus: true,
    showMaskOnHover: false,
  }).mask(num);
});

const checkboxGroup = document.querySelectorAll(".checkbox");
checkboxGroup.forEach((checkbox) => {
  checkbox.addEventListener(
    "click",
    function (e) {
      if (
        checkbox.querySelector("label").innerHTML ==
        "Соглашаюсь на обработку персональных данных"
      ) {
        checkbox.querySelector("label").innerHTML = "Это обязательное поле";
      } else {
        checkbox.querySelector("label").innerHTML = "Это обязательное поле";
      }
    },
    false
  );
}, false);

////////////
// typical import
import gsap from "gsap";

// or all tools are exported from the "all" file (excluding members-only plugins):

// don't forget to register plugins

const b1 =
  "linear-gradient(to right,rgba(145, 113, 240, 1),rgba(75, 181, 240, 1),rgba(148, 240, 75, 1),rgba(252, 211, 3, 1),rgba(240, 95, 75, 1),rgba(209, 85, 240, 1));";

const b2 =
  "linear-gradient(to right,rgba(209, 85, 240, 0.5),rgba(240, 95, 75, 1),rgba(252, 211, 3, 0.1),rgba(148, 240, 75, 0.1),rgba(75, 181, 240, 1),rgba(145, 113, 240, 1))";

//via @jack
gsap.fromTo(
  ".info__img--anim",
  { background: b1 },
  {
    ease: "none",
    duration: 2,
    background: b2,
    repeat: -1,
    yoyo: true,
    scale: 0.8,
    opacity: 1,
  }
);
gsap.fromTo(
  ".hero__bg--anim",
  { background: b1 },
  {
    ease: "none",
    duration: 2,
    background: b2,
    repeat: -1,
    yoyo: true,
    scale: 0.8,
    opacity: 1,
  }
);

// show messagers header
const btnShowMessagers = document.querySelector(".header__message");
btnShowMessagers.addEventListener("click", function () {
  document.querySelector(".messagers").style.display = "block";
});
document.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".header__message") &&
      !event.target.closest(".messagers")
    ) {
      closeHeaderMessagers();
    }
  },
  false
);
function closeHeaderMessagers() {
  document.querySelector(".messagers").style.display = "none";
}
// show form header
const btnShowFormHeader = document.querySelector(".header__phone");
btnShowFormHeader.addEventListener("click", function () {
  document.querySelector(".form-header").style.display = "block";
});
document.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".header__phone") &&
      !event.target.closest(".form-header")
    ) {
      closeHeaderForm();
    }
  },
  false
);
function closeHeaderForm() {
  document.querySelector(".form-header").style.display = "none";
}

// /// open favorites sidebar
const btnShowFavorites = document.querySelector(".header__favorites-ic");
btnShowFavorites.addEventListener("click", function () {
  document.querySelector(".favorites").classList.toggle("d-none");
});
document.addEventListener(
  "click",
  function (event) {
    if (
      !event.target.closest(".favorites") &&
      !event.target.closest(".header__favorites-ic") &&
      !event.target.closest(".favorites-ic") &&
      !event.target.closest(".favorites__btn") &&
      !event.target.closest(".btn-remove")
    ) {
      document.querySelector(".favorites").classList.add("d-none");
    }
  },
  false
);
///

function startCountTop() {
  if (
    document
      .querySelector(".favorites-ic__inner")
      .classList.contains("favorites-ic--clicked")
  ) {
    return;
  }
  document
    .querySelector(".favorites-ic__outer")
    .classList.toggle("favorites-ic--outer-hid");
  document
    .querySelector(".favorites-ic__inner")
    .classList.toggle("favorites-ic--clicked");
}

function stopCountTop() {
  document
    .querySelector(".favorites-ic__outer")
    .classList.toggle("favorites-ic--outer-hid");
  document
    .querySelector(".favorites-ic__inner")
    .classList.remove("favorites-ic--clicked");
}

document
  .querySelectorAll('input[type="checkbox"]')
  .forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let checkboxLabel = document.querySelector(
        'label[for="' + checkbox.name + '"]'
      );
      if (checkboxLabel)
        checkboxLabel.textContent = checkbox.checked
          ? "Соглашаюсь на обработку персональных данных"
          : "Это обязательное поле";
    });
  });
/// validate
export function formFieldsInit() {
  // Если включено, добавляем функционал "скрыть плейсходлер при фокусе"
  const formFields = document.querySelectorAll(
    "input[placeholder],textarea[placeholder]"
  );
  if (formFields.length) {
    formFields.forEach((formField) => {
      if (!formField.hasAttribute("data-placeholder-nohide")) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener("focusin", function (e) {
    const targetElement = e.target;
    if (
      targetElement.tagName === "INPUT" ||
      targetElement.tagName === "TEXTAREA"
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = "";
      }
      if (!targetElement.hasAttribute("data-no-focus-classes")) {
        targetElement.classList.add("_form-focus");
        targetElement.parentElement.classList.add("_form-focus");
      }
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener("focusout", function (e) {
    const targetElement = e.target;
    if (
      targetElement.tagName === "INPUT" ||
      targetElement.tagName === "TEXTAREA"
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute("data-no-focus-classes")) {
        targetElement.classList.remove("_form-focus");
        targetElement.parentElement.classList.remove("_form-focus");
      }
      // Моментальная валидация
      if (targetElement.hasAttribute("data-validate")) {
        formValidate.validateInput(targetElement);
      }
    }
  });
}
export let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll("*[data-required]");
    if (formRequiredItems.length) {
      formRequiredItems.forEach((formRequiredItem) => {
        if (
          (formRequiredItem.offsetParent !== null ||
            formRequiredItem.tagName === "SELECT") &&
          !formRequiredItem.disabled
        ) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === "email") {
      formRequiredItem.value = formRequiredItem.value.replace(" ", "");
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (
      formRequiredItem.type === "checkbox" &&
      !formRequiredItem.checked
    ) {
      this.addError(formRequiredItem);
      error++;
    } else {
      if (!formRequiredItem.value) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add("_form-error");
    formRequiredItem.parentElement.classList.add("_form-error");
    let inputError =
      formRequiredItem.parentElement.querySelector(".form__error");
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        "beforeend",
        `<div class="form__error">${formRequiredItem.dataset.error}</div>`
      );
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove("_form-error");
    formRequiredItem.parentElement.classList.remove("_form-error");
    if (formRequiredItem.parentElement.querySelector(".form__error")) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector(".form__error")
      );
    }
  },
  formClean(form) {
    form.reset();
    setTimeout(() => {
      let inputs = form.querySelectorAll("input,textarea");
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove("_form-focus");
        el.classList.remove("_form-focus");
        formValidate.removeError(el);
      }
      let checkboxes = form.querySelectorAll(".checkbox__input");
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index];
          checkbox.checked = true;
        }
      }
      if (flsModules.select) {
        let selects = form.querySelectorAll(".select");
        if (selects.length) {
          for (let index = 0; index < selects.length; index++) {
            const select = selects[index].querySelector("select");
            flsModules.select.selectBuild(select);
          }
        }
      }
    }, 0);
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      formRequiredItem.value
    );
  },
};
/// send form 1

document.querySelector(".form-header").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("c_1").checked) {
    let self = e.currentTarget;
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone-head"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-head"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-order.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("c_1").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-order").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("c_3").checked) {
    let self = e.currentTarget;
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone_1"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name_1"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-order.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("c_3").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-plan1").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("p_1").checked) {
    let self = e.currentTarget;
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone_plan1"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-plan1"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-plan1.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("p_1").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-plan2").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("p_2").checked) {
    let self = e.currentTarget;
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone-plan2"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-plan2"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-plan2.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("p_2").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-plan3").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("p_3").checked) {
    let self = e.currentTarget;
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone-plan3"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-plan3"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-plan3.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("p_3").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-favs").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  if (document.getElementById("c_favs").checked) {
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone-favs"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-favs"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-favs.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("c_favs").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-decor").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  if (document.getElementById("c_3").checked) {
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone-decor"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-decor"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-one.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("c_3").checked = false))
    alert("Заполните поля корректно!");
});
document.querySelector(".form-body").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("cs_1").checked) {
    let self = e.currentTarget;
    let formData = new FormData(self);
    let phone = self
      .querySelector('[name="phone-fs"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-fs"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-body.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("cs_1").checked = false))
    alert("Заполните поля корректно!");
});

/////
// @ts-nocheck
let productArray = [];

//add to card
let products = {
  1: {
    id: 1,
    title: "Название 1",
    img: "img/work-1.png alt='Project example'",
  },

  2: {
    id: 2,
    title: "Название 2",
    img: "img/work-2.png alt='Project example'",
  },
  3: {
    id: 3,
    title: "Название 3",
    img: "img/work-3.png alt='Project example'",
  },
  4: {
    id: 4,
    title: "Название 4",
    img: "img/work-4.png alt='Project example'",
  },
  5: {
    id: 5,
    title: "Название 5",
    img: "img/work-5.png alt='Project example'",
  },
  6: {
    id: 6,
    title: "Название 6",
    img: "img/work-6.png alt='Project example'",
  },
  7: {
    id: 7,
    title: "Название 7",
    img: "img/work-7.png alt='Project example'",
  },
  8: {
    id: 8,
    title: "Название 8",
    img: "img/work-8.png alt='Project example'",
  },
  9: {
    id: 9,
    title: "Название 9",
    img: "../img/work-9.png alt='Project example'",
  },
  10: {
    id: 10,
    title: "Название 10",
    img: "img/work-10.png alt='Project example'",
  },
  11: {
    id: 11,
    title: "Название 11",
    img: "img/work-11.png alt='Project example'",
  },
  12: {
    id: 12,
    title: "Название 12",
    img: "img/work-12.png alt='Project example'",
  },
  13: {
    id: 13,
    title: "Название 13",
    img: "img/work-13.png alt='Project example'",
  },
  14: {
    id: 14,
    title: "Название 14",
    img: "img/work-14.png alt='Project example'",
  },
  15: {
    id: 15,
    title: "Название 15",
    img: "img/work-15.png alt='Project example'",
  },
  16: {
    id: 16,
    title: "Название 16",
    img: "img/work-16.png alt='Project example'",
  },
  17: {
    id: 17,
    title: "Название 17",
    img: "img/work-17.png alt='Project example'",
  },
  18: {
    id: 18,
    title: "Название 18",
    img: "img/work-18.png alt='Project example'",
  },
  19: {
    id: 19,
    title: "Название 19",
    img: "img/work-19.png alt='Project example'",
  },
  20: {
    id: 20,
    title: "Название 20",
    img: "img/work-20.png alt='Project example'",
  },
  21: {
    id: 21,
    title: "Название 21",
    img: "img/work-21.png alt='Project example'",
  },
  22: {
    id: 22,
    title: "Название 22",
    img: "img/work-22.png alt='Project example'",
  },
  23: {
    id: 23,
    title: "Название 23",
    img: "img/work-23.png alt='Project example'",
  },
  24: {
    id: 24,
    title: "Название 24",
    img: "img/work-24.png alt='Project example'",
  },
  25: {
    id: 25,
    title: "Название 25",
    img: "img/work-25.png alt='Project example'",
  },
  26: {
    id: 26,
    title: "Название 26",
    img: "img/work-26.png alt='Project example'",
  },
  27: {
    id: 27,
    title: "Название 27",
    img: "img/work-27.png alt='Project example'",
  },
  28: {
    id: 28,
    title: "Название 28",
    img: "img/work-28.png alt='Project example'",
  },
  29: {
    id: 29,
    title: "Название 29",
    img: "img/work-29.png alt='Project example'",
  },
};

let out = "";

for (let key in products) {
  out += `<div class="works__item item" id="item" data-id="${products[key].id}">`;
  out += ` <div class="anim-bg-1"></div>
<div class="anim-bg-2"></div>`;
  out += `<div class="item-img__container item__top-img--${products[key].id}"><img class="work__img" src=${products[key].img}></div>`;

  out += `<div class="item__bottom item__bottom--${products[key].id}">`;

  out += `<div class="table-body">`;
  out += `<div class="checkwrap">`;
  out += `<input  class="table-checkbox" type="checkbox" id="${products[key].id}">`;
  out += `<span class="castom-checkbox"><svg class="add-to-fav" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 2.59808C19.047 1.70491 20.953 1.70491 22.5 2.59808L33.8205 9.13398C35.3675 10.0271 36.3205 11.6778 36.3205 13.4641V26.5359C36.3205 28.3222 35.3675 29.9729 33.8205 30.866L22.5 37.4019C20.953 38.2951 19.047 38.2951 17.5 37.4019L6.17949 30.866C4.63249 29.9729 3.67949 28.3222 3.67949 26.5359V13.4641C3.67949 11.6778 4.63249 10.0271 6.17949 9.13397L17.5 2.59808Z" stroke="#F05F4B" stroke-width="2"/>
    <path d="M19.95 26.6333L19.5465 27.3577C19.7974 27.4973 20.1026 27.4973 20.3534 27.3577L19.95 26.6333ZM19.95 15.9891L19.1869 16.3134C19.317 16.6195 19.6174 16.8182 19.95 16.8182C20.2826 16.8182 20.583 16.6195 20.7131 16.3134L19.95 15.9891ZM11.6587 17.4899C11.6587 20.3697 13.7815 22.8704 15.6673 24.5509C16.6365 25.4146 17.602 26.1132 18.3233 26.5953C18.6848 26.8369 18.9869 27.0255 19.2003 27.1545C19.307 27.219 19.3917 27.2688 19.4506 27.3029C19.4801 27.3199 19.5031 27.3331 19.5192 27.3423C19.5273 27.3468 19.5336 27.3504 19.5382 27.353C19.5405 27.3543 19.5423 27.3553 19.5437 27.3561C19.5444 27.3565 19.545 27.3568 19.5455 27.3571C19.5457 27.3572 19.546 27.3573 19.5461 27.3574C19.5463 27.3575 19.5465 27.3577 19.95 26.6333C20.3534 25.9089 20.3536 25.909 20.3537 25.9091C20.3537 25.9091 20.3538 25.9091 20.3538 25.9091C20.3538 25.9092 20.3537 25.9091 20.3535 25.909C20.3531 25.9088 20.3522 25.9083 20.3509 25.9075C20.3483 25.9061 20.344 25.9036 20.3379 25.9002C20.3258 25.8933 20.307 25.8825 20.2818 25.8679C20.2313 25.8387 20.1557 25.7943 20.0584 25.7355C19.8637 25.6177 19.5828 25.4426 19.2447 25.2166C18.5669 24.7636 17.6668 24.1115 16.7705 23.3128C14.9252 21.6684 13.3169 19.5974 13.3169 17.4899H11.6587ZM20.7131 15.6648C19.7337 13.3602 17.5014 12.2931 15.4785 12.5853C14.4633 12.732 13.4963 13.2225 12.7854 14.0697C12.0723 14.9196 11.6587 16.0777 11.6587 17.4899H13.3169C13.3169 16.4084 13.6288 15.6444 14.0557 15.1356C14.4849 14.6241 15.0725 14.3195 15.7156 14.2266C17.0092 14.0397 18.508 14.7159 19.1869 16.3134L20.7131 15.6648ZM26.583 17.4899C26.583 19.5974 24.9748 21.6684 23.1295 23.3128C22.2332 24.1115 21.3331 24.7636 20.6552 25.2166C20.3171 25.4426 20.0363 25.6177 19.8416 25.7355C19.7443 25.7943 19.6686 25.8387 19.6182 25.8679C19.593 25.8825 19.5741 25.8933 19.562 25.9002C19.556 25.9036 19.5516 25.9061 19.549 25.9075C19.5477 25.9083 19.5469 25.9088 19.5465 25.909C19.5462 25.9091 19.5461 25.9092 19.5462 25.9091C19.5462 25.9091 19.5463 25.9091 19.5463 25.9091C19.5464 25.909 19.5465 25.9089 19.95 26.6333C20.3534 27.3577 20.3536 27.3575 20.3539 27.3574C20.354 27.3573 20.3542 27.3572 20.3545 27.3571C20.3549 27.3568 20.3555 27.3565 20.3562 27.3561C20.3576 27.3553 20.3595 27.3543 20.3617 27.353C20.3663 27.3504 20.3727 27.3468 20.3807 27.3423C20.3969 27.3331 20.4199 27.3199 20.4494 27.3029C20.5083 27.2688 20.5929 27.219 20.6996 27.1545C20.913 27.0255 21.2152 26.8369 21.5767 26.5953C22.298 26.1132 23.2634 25.4146 24.2327 24.5509C26.1185 22.8704 28.2413 20.3697 28.2413 17.4899H26.583ZM20.7131 16.3134C21.3919 14.7159 22.8907 14.0397 24.1844 14.2266C24.8275 14.3195 25.415 14.6241 25.8442 15.1356C26.2712 15.6444 26.583 16.4084 26.583 17.4899H28.2413C28.2413 16.0777 27.8277 14.9196 27.1145 14.0697C26.4037 13.2225 25.4366 12.732 24.4215 12.5853C22.3986 12.2931 20.1663 13.3602 19.1869 15.6648L20.7131 16.3134Z" fill="#F05F4B"/>
    </svg>
    </span>`;
  out += `<label class="table-lable" for="check-${products[key].id}"></label>`;
  out += "</div>";

  out += "</div>";
  out += "</div>";

  out += "</div>";
}
document.getElementById("out").innerHTML = out;

const checkCatalog = document.querySelectorAll(".catalog__item-size-label");

const checkClick = document.querySelectorAll(".checkwrap");

if (checkClick.length > 0) {
  for (let index = 0; index < checkClick.length; index++) {
    const el = checkClick[index];

    el.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.localName === "span") {
        e.target.classList.toggle("active");
        e.target.nextSibling.classList.toggle("active");
        e.target.parentElement.parentElement.classList.toggle("active");
        e.target.querySelector(".add-to-fav").classList.toggle("d-none");

        orderTotal();
      } else {
        e.target.classList.toggle("active");
        e.target.parentElement.parentElement.classList.toggle("active");
      }
    });
  }
}

function orderTotal() {
  let line = "";
  let arr = document.querySelector(".works__items").children;
  let item = document.querySelectorAll(".item");

  for (item of arr) {
    let img = item.querySelector(".work__img").src;
    let dataId = item.getAttribute("data-id");
    let itemQuantity = 0;

    item.querySelectorAll(".table-body.active").forEach((el) => {
      itemQuantity++;
    });

    if (itemQuantity > 0) {
      document.querySelector(".favorites__content").classList.remove("d-none");
      document.querySelector(".favorites").classList.remove("d-none");
      document.querySelector(".check-works").classList.add("d-none");
      startCountTop();
      let out = `
      <div id="item--${dataId}" class="favorite__item" data-id="${dataId}">
      <img class=" favorites__img" src=${img}>
      <a
        href="#"
        data-popup="#popup-form-favs"
         class="link btn--underlined favs-button"
         >Хочу так же!</a
       >
    </div>
      
       `;
      out = out + `</ul></ul>`;
      line = line + out;
    }
    if (itemQuantity < 0) {
      document.querySelector(".favorites__content").classList.add("d-none");
      document.querySelector(".check-works").classList.remove("d-none");
    }
  }
  document.querySelector(".box").innerHTML = line;
  //document.getElementById('form-confirm').innerHTML = line;

  let chooseItem = document.querySelectorAll(".favs-button");

  chooseItem.forEach((el) => {
    el.addEventListener("click", function () {
      let itemId = el.parentElement.getAttribute("data-id");
      document.querySelector(".form-favs").setAttribute("data-id", `${itemId}`);
    });
  });
  document.querySelector(".favs-number").classList.remove("d-none");
  let itemArr = document.querySelectorAll(".favorite__item");
  let favsNumberDiv = document.querySelector(".favs-number");

  favsNumberDiv.innerHTML = itemArr.length;
  if (itemArr.length == 0) {
    document.querySelector(".favorites__content").classList.add("d-none");
    document.querySelector(".check-works").classList.remove("d-none");
    document.querySelector(".favs-number").classList.add("d-none");
    stopCountTop();
  }
}
// hide fav icon

//mail

//popup

// const modalOpen = document.querySelectorAll(".modal-open");
// const body = document.querySelector("body");
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 300;

// document.querySelector(".form-favs").addEventListener("submit", (e) => {
//   console.log(11111);
//   e.preventDefault();
//   let self = e.currentTarget;
//   let formData = new FormData(self);
//   //let phone = self.querySelector('[name="Телефон"]').value;

//   // formData.append("Телефон", phone);

//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         console.log("send");
//       }
//     }
//   };

//   // xhr.open("POST", "mail.php", true);
//   //xhr.send(formData);

//   // self.reset();
// });
document.querySelector(".form-favs").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;

  if (document.getElementById("c_favs").checked) {
    let formData = new FormData(self);
    let itemid = self.getAttribute("data-id");
    console.log(itemid);
    let phone = self
      .querySelector('[name="phone-favs"]')
      .value.replace(/[^+\d]/g, "");
    let name = self.querySelector('[name="name-favs"]').value;
    formData.append("Телефон", phone);
    formData.append("Имя", name);
    formData.append("Id", itemid);
    if (phone.length >= 12) {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (4 === xhr.readyState)
          if (200 === xhr.status) {
            console.log("send");
            setTimeout(() => {
              alert("Вам скоро перезвонят!");
            }, 300);
          }
      };
      xhr.open("POST", "mailform-favs.php", true);
      xhr.send(formData);
      self.reset();
    }
  } else if ((document.getElementById("c_favs").checked = false))
    alert("Заполните поля корректно!");
});

if (window.matchMedia("(max-width: 768px)").matches) {
  let showLessWorks = document.querySelectorAll(".works__item");
  const nodelistToArray = Array.prototype.slice
    .call(showLessWorks)
    .slice(2, 15);
  console.log(showLessWorks);

  nodelistToArray.forEach((item) => {
    item.classList.add("item-d-none");
  });
} else {
  let showLessWorks = document.querySelectorAll(".works__item");
  const nodelistToArray = Array.prototype.slice
    .call(showLessWorks)
    .slice(8, 28);

  nodelistToArray.forEach((item) => {
    item.classList.add("item-d-none");
  });
}

let showMoreProducts = document.getElementById("show-more-works");

if (showMoreProducts || false) {
  showMoreProducts.addEventListener("click", () => {
    let hiddenElements = document.querySelectorAll(".works__item.item-d-none");

    let commentsList = Array.prototype.slice.call(hiddenElements).slice(0, 3);

    commentsList.forEach((item, index) => {
      item.className = "works__item";
      if (index === 0) {
        item.scrollIntoView({
          behavior: "smooth",
        });
      }
    });

    if (hiddenElements.length === 0) {
      showMoreProducts.className = "item-d-none";
    }
  });
}
