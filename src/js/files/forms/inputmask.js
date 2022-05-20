/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll("input");
if (inputMasks.length) {
  flsModules.inputmask = Inputmask().mask(inputMasks);
}

const headerPhoneInput = document.getElementById("phone_head");
flsModules.inputmask = Inputmask({
  mask: "+7(999) 999-99-99",
  isComplete: function () {
    alert(1);
  },
}).mask(headerPhoneInput);
