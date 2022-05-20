// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import IMask from "imask";
// input mask
// let phoneinp = document.querySelectorAll(".phone-num");

// phoneinp.forEach((num) => {
//   Inputmask({
//     mask: "+7(999) 999-99-99",
//     showMaskOnFocus: true,
//     showMaskOnHover: false,
//   }).mask(num);
// });

// const checkboxGroup = document.querySelectorAll('.checkbox')
// checkboxGroup.forEach(checkbox => {
// checkbox.addEventListener('click', function(e) {
//   if (checkbox.querySelector('label').innerHTML == "Соглашаюсь на обработку персональных данных") {
//     checkbox.querySelector('label').innerHTML = "Это обязательное поле"
//     } else {
//       checkbox.querySelector('label').innerHTML = "Это обязательное поле"
//     }
//   },false)
// },false)
if (window.matchMedia("(max-width: 768px)").matches) {
  let showLessWorks = document.querySelectorAll(".works__item");
  const nodelistToArray = Array.prototype.slice.call(showLessWorks).slice(3, 9);
  nodelistToArray.forEach((item) => {
    item.classList.add("item-d-none");
  });
}

let showMoreProducts = document.getElementById("show-more-works");

if (showMoreProducts || false) {
  showMoreProducts.addEventListener("click", () => {
    let hiddenElements = document.querySelectorAll(
      ".works__items .item-d-none"
    );

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

let favsNumberDiv = document.querySelector(".favs-number");
let favsNumber = 0;

const removeCartItemButtons = document.getElementsByClassName("favs-remove");
for (var i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;

    // let getBtnFav =
    //   buttonClicked.parentElement.parentElement.parentElement.getElementsByClassName(
    //     "favorites__btn"
    //   )[0];

    //getBtnFav.getElementsByClassName("favoites-ic")[0].style.display = "block";

    //buttonClicked.parentElement.style.display = "none";

    //buttonClicked.parentElementremove();

    const favCount = document.querySelectorAll(".favorite__item");
    favsNumber--;
    favsNumberDiv.innerHTML = favsNumber;
    if (favCount.length == 0) {
      document.querySelector(".favorites-ic__outer").style.visibility =
        "visible";
      document
        .querySelector(".favorites-ic__inner")
        .classList.remove("favorites-ic--clicked");
      favsNumberDiv.innerHTML = "";
      document.querySelector(".favorites").classList.add("d-none");
      document.querySelector(".favorites__content").classList.add("d-none");
      document.querySelector(".check-works").classList.remove("d-none");
    }
  });
}
//const addToCartButtons = document.getElementsByClassName("favorites-ic");
const addToCartButtons = document.getElementsByClassName("works__item");

for (var i = 0; i < addToCartButtons.length; i++) {
  let button = addToCartButtons[i];
  button.addEventListener("click", addToCart);
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  // const favImageSRC =
  //  buttonClicked.parentElement.parentElement.getElementsByClassName(
  //    "favorites__img"
  //   )[0].src;

  // hide sidebar when no fav is in
}
function addToCart() {
  let button = event.target;
  let shopItem = button.parentElement;
  let addToFavButton = shopItem.getElementsByClassName("favorites__btn")[0];
  addToFavButton.classList.toggle("d-none");
  shopItem.getElementsByClassName("btn-remove")[0].classList.toggle("d-none");
  let imageSrc = shopItem.getElementsByClassName("work__img")[0].src;

  if (
    shopItem
      .getElementsByClassName("favorites__btn")[0]
      .classList.contains("d-none")
  ) {
    favsNumber++;
    favsNumberDiv.innerHTML = favsNumber;
    document.querySelector(".favorites-ic__outer").style.visibility = "hidden";
    document
      .querySelector(".favorites-ic__inner")
      .classList.add("favorites-ic--clicked");
    addItemToCart(imageSrc);
  } else {
    favsNumber--;

    var cartItems = document.getElementsByClassName("favorites__items")[0];
    var cartItemsNames = cartItems.getElementsByClassName("favorites__img");
    for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].src == imageSrc) {
        cartItemsNames[i].parentElement.parentElement.remove();
      }
    }
    if (favsNumber == 0) {
      favsNumberDiv.innerHTML = "";
      document.querySelector(".favorites-ic__outer").style.visibility =
        "visible";
      document
        .querySelector(".favorites-ic__inner")
        .classList.remove("favorites-ic--clicked");
      document.querySelector(".favorites").classList.add("d-none");
      document.querySelector(".favorites__content").classList.add("d-none");
      document.querySelector(".check-works").classList.remove("d-none");
    } else {
      favsNumberDiv.innerHTML = favsNumber;
    }
  }
}
function addItemToCart(imageSrc) {
  document.querySelector(".check-works").classList.add("d-none");
  document.querySelector(".favorites__content").classList.remove("d-none");
  var cartRow = document.createElement("div");
  var cartItems = document.getElementsByClassName("favorites__items")[0];
  cartRow.classList.add("favorites__list");
  var cartItemsNames = cartItems.getElementsByClassName("favorites__img");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].src == imageSrc) {
      cartItemsNames[i].parentElement.parentElement.remove();
    }
  }

  var cartRowContents = `<div class="favorite__item">
                        <img class="favorites__img" src="${imageSrc}">
                        
                        <a
        href="#"
        data-popup="#popup-form-favs"
        class="link btn--underlined plans__btn"
        >Хочу так же!</a
      >
                   </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  //cartRow
  // .getElementsByClassName("btn-danger")[0]
  // .addEventListener("click", removeCartItem);
}

/// fix scroll

/// open favorites sidebar
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
const clickedFavIcon = document.querySelector(".header__favorites-ic");

clickedFavIcon.addEventListener("click", function () {
  if (
    document
      .querySelector(".favorites-ic__inner")
      .classList.contains("favorites-ic--clicked")
  ) {
    return;
  }
  // document
  //   .querySelector(".favorites-ic__outer")
  //   .classList.toggle("favorites-ic--outer-hid");
  // document
  //   .querySelector(".favorites-ic__inner")
  //   .classList.toggle("favorites-ic--clicked");
});

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
  let self = e.currentTarget;
  let formData = new FormData(self);

  let phone = self.querySelector('[name="phone-head"]').value;
  let name = self.querySelector('[name="name-head"]').value;
  formData.append("Телефон", phone);
  formData.append("Имя", name);

  if (name.length > 10 && phone.length < 3) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-one.php", true);
    xhr.send(formData);
    self.reset();
    console.log(phone.length);
  } else {
    alert(1);
  }
});
/// forms order

document.querySelector(".form-order").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone_1"]').value;
  let name = self.querySelector('[name="name_1"]').value;
  formData.append("Телефон", phone);
  formData.append("Имя", name);

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("send");
        setTimeout(() => {
          alert("Вам скоро перезвонят!");
        }, 300);
      }
    }
  };
  xhr.open("POST", "mailform-order.php", true);
  xhr.send(formData);
  self.reset();
});

// form plan 1
document.querySelector(".form-plan1").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone-plan1"]').value;
  let name = self.querySelector('[name="name-plan1"]').value;
  if (phone.length === 17) {
    formData.append("Телефон", phone);
    formData.append("Имя", name);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-order.php", true);
    xhr.send(formData);
    self.reset();
  }
});
/// form plan 2
document.querySelector(".form-plan2").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone-plan2"]').value;
  let name = self.querySelector('[name="name-plan2"]').value;
  if (phone.length === 17) {
    formData.append("Телефон", phone);
    formData.append("Имя", name);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-order.php", true);
    xhr.send(formData);
    self.reset();
  }
});
/// form plan 3
document.querySelector(".form-plan3").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone-plan3"]').value;
  let name = self.querySelector('[name="name-plan3"]').value;
  if (phone.length === 17) {
    formData.append("Телефон", phone);
    formData.append("Имя", name);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-order.php", true);
    xhr.send(formData);
    self.reset();
  }
});
/// form favs
document.querySelector(".form-favs").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone-favs"]').value;
  let name = self.querySelector('[name="name-favs"]').value;
  if (phone.length === 17) {
    formData.append("Телефон", phone);
    formData.append("Имя", name);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-order.php", true);
    xhr.send(formData);
    self.reset();
  }
});
/// form decor
document.querySelector(".form-decor").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone-decor"]').value;
  let name = self.querySelector('[name="name-decor"]').value;

  if (phone.length === 17) {
    formData.append("Телефон", phone);
    formData.append("Имя", name);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-order.php", true);
    xhr.send(formData);
    self.reset();
  }
});

/// form body
document.querySelector(".form-body").addEventListener("submit", (e) => {
  e.preventDefault();
  let self = e.currentTarget;
  let formData = new FormData(self);
  let phone = self.querySelector('[name="phone-fs"]').value;
  let name = self.querySelector('[name="name-fs"]').value;
  if (phone.length === 17) {
    formData.append("Телефон", phone);
    formData.append("Имя", name);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("send");
          setTimeout(() => {
            alert("Вам скоро перезвонят!");
          }, 300);
        }
      }
    };
    xhr.open("POST", "mailform-order.php", true);
    xhr.send(formData);
    self.reset();
  }
});
