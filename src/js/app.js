
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();


import "./libs/popup.js";

import * as flsForms from "./files/forms/forms.js";


flsForms.formFieldsInit({ viewPass: false });


import "./files/forms/inputmask.js";


import "./files/sliders.js";


import * as flsScroll from "./files/scroll/scroll.js";


flsScroll.pageNavigation();


import "./files/script.js";
