class Burger {
    static CLASSES = {
        MAIN_CONT: 'burger__nav',
        BURGER_LIST: 'burger__list',
        OPEN_BURGER: 'open-burger',
        CLOSE_BURGER: 'close-burger',

        BURGER_CONTAINER: 0,
    };

    childrenEl = null;

    constructor(className) {
        const generalContainer = Burger.getByClassName(className);
        this.mainContainer = generalContainer.children[Burger.CLASSES.BURGER_CONTAINER]
            // const foo = Burger.getByClassName('burger__list');
            // console.log(foo);
        this.init();
    };

    // setChildren() {
    //     this.childrenEl = element.children;
    // }

    init() {
        // this.setChildren(this.mainContainer);
        this.setClasses();
        this.setListener(this.mainContainer, 'click', this.onClikBurger);
    }

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    }

    setClasses() {
        // console.log(this.mainContainer);
        this.setClass(this.mainContainer, Burger.CLASSES.MAIN_CONT);
        this.setClass(this.mainContainer.children[0], Burger.CLASSES.BURGER_LIST);


    }

    setClass(itemContainer, className) {
        itemContainer.classList.add(className);
    };

    static getByClassName(className) {
        return document.querySelector(`.${className}`);
    }

    setListener(element, event, callBack) {
        element.addEventListener(event, callBack);
    }



}

const btnEl = document.querySelector('btm-nav');
btnEl.addEventListener(click, 'onClick');

// onclick() {

// }