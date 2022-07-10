const review = {
    "валидная вёрстка": 10,
    "header, main, footer": 3,
    "4 элемента section": 3,
    "только один заголовок h1": 3,
    "три заголовка h2": 3,
    "один элемент nav": 3,
    "два списка ul > li > a": 3,
    "четыре кнопки button": 2,
    "блок header": 6,
    "секция preview": 9,
    "секция steps": 9,
    "секция destinations": 9,
    "секция stories": 9,
    "блок footer": 6,
    "флексы или гриды": 2,
    "вёрстка масшатбируется по центру": 2,
    "фоновый цвет на всю ширину страницы": 2,
    "иконки в формате .svg": 2,
    "изображения в формате .jpg": 2,
    "есть favicon": 2,
    "плавная прокрутка по якорям": 5,
    "иконки в футере на гитхаб, страницу курса": 5,
    "интерактивность": 5,
    "плавное изменение внешнего вида элемента": 5,
}

let sum = Object.values(review).reduce((r, e) => r + e, 0);
sum = (sum > 100) ? 100 : sum;

console.warn("Если не видите ниже таблицу, перезагрузите страницу, не закрывая консоль");
console.table(review);
console.log("Сумма баллов: %d из 100", sum);


const menuBurger = document.querySelector(".menu-burger");
const menuBurgerBg = document.querySelector(".menu-burger-bg");
const navMobile = document.querySelector(".nav-mobile");
navMobile.addEventListener("click", showBurgerMenu);
[menuBurger, menuBurgerBg].forEach(e => e.addEventListener("click", hideBurgerMenu));

function showBurgerMenu() {
    menuBurger.style.top = "0px";
    menuBurgerBg.style.display = "block";
}

function hideBurgerMenu(event) {
    event.stopPropagation();
    menuBurger.style.top = "-200px";
    menuBurgerBg.style.display = "none";
}