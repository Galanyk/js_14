class Burger {
    static CLASSES = {
        BURGER_LIST: 'burger__list',
        ITEM_BURGER: 'burger-item',
        LINK_HEADER: 'link-header',
        MAIN_CONT: 'burger__nav',
        NAV_LINK: 'nav__link',
        NAV_ITEM: 'nav__item',
        OPEN_BURGER: 'open',
        POPUP_BURGER: 'popup-burger',
    };

    static INDEXES = {
        BURGER_CONTAINER: 0,
        BURGER_NAV: 0,
        LIST_BURGER: 0,
        TEXT_BUTTON: 0,
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    };

    _childrenEl = null;

    constructor(className) {
        this._mainContainer = Burger.getByClassName(className).children[Burger.INDEXES.BURGER_CONTAINER];
        this.init();
    };

    init() {
        this.setChildren(this._mainContainer);
        this.setClasses(this._mainContainer);
        this.setListener(this._mainContainer, 'click', this.onClikBurger);
    };

    setChildren(element) {
        this._childrenEl = element.children;
    };

    setClasses(container) {
        this.setClass(container, Burger.CLASSES.MAIN_CONT);
        this.setClass(container.children[Burger.INDEXES.BURGER_NAV], Burger.CLASSES.BURGER_LIST);

        Array.prototype.forEach.call(container.children[Burger.INDEXES.BURGER_NAV].children, (e) => {
            this.setClass(e, Burger.CLASSES.ITEM_BURGER);
            this.setClass(e, Burger.CLASSES.NAV_ITEM);
            this.setClass(e.children[Burger.INDEXES.LIST_BURGER], Burger.CLASSES.NAV_LINK);
            this.setClass(e.children[Burger.INDEXES.LIST_BURGER], Burger.CLASSES.LINK_HEADER);
        });
    };

    setClass(itemContainer, className) {
        itemContainer.classList.add(className);
    };

    setChildrenClass(items, nameClass) {
        Array.prototype.forEach.call(items, (e) => {
            this.setClass(e, nameClass);
        });
    };

    setListener(element, event, callBack) {
        element.addEventListener(event, callBack);
    };

    onClikBurger = (e) => {
        const popup = this._mainContainer.closest(`.${Burger.CLASSES.POPUP_BURGER}`);
        Array.prototype.forEach.call(this._mainContainer.children[Burger.INDEXES.BURGER_NAV].children, (el) => {
            if (e.target === el || e.target === el.children[Burger.INDEXES.TEXT_BUTTON]) {
                popup.classList.remove(Burger.CLASSES.OPEN_BURGER);
            };
        });
    };
}