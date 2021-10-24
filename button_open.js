class BurgerOpen {
    static CLASSES = {
        OPEN_BURGER: 'open',
        POPUP_BURGER: 'popup-burger',
    }

    constructor(className) {
        this._buttonContainerOpen = BurgerOpen.getByClassName(className);
        this._popup = BurgerOpen.getByClassName(BurgerOpen.CLASSES.POPUP_BURGER);
        this.init();
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

    init() {
        this.setListener(this._buttonContainerOpen, 'click', this.onClikBurger);
    };

    setClass(itemContainer, className) {
        itemContainer.classList.add(className);
    };

    setListener(element, event, callBack) {
        element.addEventListener(event, callBack);
    };

    onClikBurger = (e) => {
        this.setClass(this._popup, BurgerOpen.CLASSES.OPEN_BURGER);
    };
}