
'use strict';

//书籍清单
let books = [

    { id: 1, title: 'Сказки', author: 'Андерсон', price: 52.01, cn: '这是一本书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },
    { id: 2, title: 'Чиполино', author: 'Джани Родари', price: 52.02, cn: '这是一本书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },
    { id: 3, title: 'Айболит', author: 'Чуковский', price: 52.03, cn: '这是一本书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },
    { id: 4, title: 'Приключения Чиполино', author: 'Джани Родари', price: 52.04, cn: '这是一本书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },
    { id: 5, title: 'Нупогоди', author: 'Раскраска', price: 52.05, cn: '书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },
    { id: 24, title: 'Волшебные', author: 'Народные', price: 52.06, cn: '这是一本书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },
    { id: 25, title: 'Со всего света', author: 'Народные', price: 52.06, cn: '这是一本书', categ: '06', desc: '', ctg_id: 0, cnt: 1 },

    { id: 7, title: 'Война и мир', author: 'Толстой Л.Н.', price: 52.01, cn: '这是一本书', categ: '01', desc: '', ctg_id: 0, cnt: 1 },
    { id: 8, title: 'Пиковая дама', author: 'Пушкин', price: 52.02, cn: '这是一本书', categ: '01', desc: '', ctg_id: 0, cnt: 1 },
    { id: 9, title: 'Евгений Онегин', author: 'Пушкин', price: 52.03, cn: '这是一本书', categ: '01', desc: '', ctg_id: 0, cnt: 1 },
    { id: 10, title: 'Стихотворения', author: 'Лермонтов', price: 52.04, cn: '这是一本书', categ: '01', desc: '', ctg_id: 0, cnt: 1 },
    { id: 11, title: 'Идиот', author: 'Достоевский', price: 52.05, cn: '书', categ: '01', desc: '', ctg_id: 0, cnt: 1 },
    { id: 12, title: 'Мастер и Маргарита', author: 'Булгаков', price: 52.06, cn: '这是一本书', categ: '01', desc: '', ctg_id: 0, cnt: 1 },

    { id: 13, title: 'Научные открытия', author: 'Коллектив', price: 52.07, cn: '这是第二本书', categ: '02', desc: '', ctg_id: 0, cnt: 1 },
    { id: 14, title: 'Вселенная и космос', author: 'Автор1', price: 52.08, cn: '这是第二本书', categ: '02', desc: '', ctg_id: 0, cnt: 1 },
    { id: 15, title: 'Географические открытия', author: 'Автор2', price: 52.09, cn: '这是第二本书', categ: '02', desc: '', ctg_id: 0, cnt: 1 },
    { id: 16, title: 'Изобретения', author: 'Автор3', price: 52.09, cn: '这是第二类', categ: '02', desc: '', ctg_id: 0, cnt: 1 },
    { id: 17, title: 'Мирный атом', author: 'Автор4', price: 52.09, cn: '这是第二类', categ: '02', desc: '', ctg_id: 0, cnt: 1 },

    { id: 18, title: 'Воспитание школьника', author: 'Автор1', price: 52.08, cn: '学生', categ: '03', desc: '', ctg_id: 0, cnt: 1 },
    { id: 19, title: 'Русский язык', author: 'Автор1', price: 52.08, cn: '俄语', categ: '03', desc: '', ctg_id: 0, cnt: 1 },
    { id: 20, title: 'Учебник Русский язык', author: 'Автор2', price: 52.09, cn: '俄语教材', categ: '03', desc: '', ctg_id: 0, cnt: 1 },
    { id: 21, title: 'Юный техник', author: 'Автор3', price: 52.09, cn: '衬衫 短裤', categ: '03', desc: '', ctg_id: 0, cnt: 1 },
    { id: 22, title: 'Сборник задач', author: 'Автор4', price: 52.09, cn: '年轻技术员', categ: '03', desc: '', ctg_id: 0, cnt: 1 },

];

//书籍清单
let cart = [
    { id: 1, t01_id: 13, title: 'Научные открытия', author: 'Коллектив', price: 52.07, cn: '科学', categ: '02', cnt: 1 },
    { id: 2, t01_id: 16, title: 'Изобретения', author: 'Автор3', price: 52.09, cn: '发明', categ: '02', cnt: 1 },

];

let gArrFav = [
    { id: 1, t01_id: 13, title: 'Научные открытия', author: 'Коллектив', price: 52.07, cn: '科学', categ: '02' },
    { id: 2, t01_id: 16, title: 'Изобретения', author: 'Автор3', price: 52.09, cn: '发明', categ: '02' },

];


let arrRBc = [
    { id: 1, title: 'Художественные', folder: '01', idc: 1 },
    { id: 2, title: 'Научно-популярные', folder: '02', idc: 2 },
    { id: 3, title: 'Школьные', folder: '03', idc: 3 },
];

let arrRB = [
    [
        { id: 7, title: 'Война и мир', author: 'Толстой Л.Н.', price: 52.01, cn: '这是一本书', categ: '01', place: 2, desc: '', ctg_id: 0 },
        { id: 8, title: 'Пиковая дама', author: 'Пушкин', price: 52.02, cn: '这是一本书', categ: '01', place: 3, desc: '', ctg_id: 0 },
        { id: 9, title: 'Евгений Онегин', author: 'Пушкин', price: 52.03, cn: '这是一本书', categ: '01', place: 4, desc: '', ctg_id: 0 },
        { id: 10, title: 'Стихотворения', author: 'Лермонтов', price: 52.04, cn: '这是一本书', categ: '01', place: 5, desc: '', ctg_id: 0 },
        { id: 11, title: 'Идиот', author: 'Достоевский', price: 52.05, cn: '书', categ: '01', place: 6, desc: '', ctg_id: 0 }
    ],
    [
        { id: 13, title: 'Научные открытия', author: 'Коллектив', price: 52.07, cn: '这是第二本书', categ: '02', place: 8, desc: '', ctg_id: 0 },
        { id: 14, title: 'Вселенная и космос', author: 'Автор1', price: 52.08, cn: '这是第二本书', categ: '02', place: 9, desc: '', ctg_id: 0 },
        { id: 15, title: 'Географические открытия', author: 'Автор2', price: 52.09, cn: '这是第二本书', categ: '02', place: 10, desc: '', ctg_id: 0 },
        { id: 16, title: 'Изобретения', author: 'Автор3', price: 52.09, cn: '这是第二类', categ: '02', place: 11, desc: '', ctg_id: 0 },
        { id: 17, title: 'Мирный атом', author: 'Автор4', price: 52.09, cn: '这是第二类', categ: '02', place: 12, desc: '', ctg_id: 0 },
    ],
    [
        { id: 18, title: 'Воспитание школьника', author: 'Автор1', price: 52.08, cn: '学生', categ: '03', place: 14, desc: '', ctg_id: 0 },
        { id: 19, title: 'Русский язык', author: 'Автор1', price: 52.08, cn: '俄语', categ: '03', place: 15, desc: '', ctg_id: 0 },
        { id: 20, title: 'Учебник Русский язык', author: 'Автор2', price: 52.09, cn: '俄语教材', categ: '03', place: 16, desc: '', ctg_id: 0 },
        { id: 21, title: 'Юный техник', author: 'Автор3', price: 52.09, cn: '衬衫 短裤', categ: '03', place: 17, desc: '', ctg_id: 0 },
        { id: 22, title: 'Сборник задач', author: 'Автор4', price: 52.09, cn: '年轻技术员', categ: '03', place: 18, desc: '', ctg_id: 0 },

    ]
];


let arrT02 = [
    { id: 1, title: 'Кол-во категорий в РБ на Главной (1-5)', zn: '3' },
    { id: 2, title: 'Кол-во книг на странице Каталога (1-60)', zn: '25' },
    { id: 3, title: 'Сладер hero (Да/Нет)', zn: 'Да' },
];


//书的类别
let arrCateg = [
    { id: 1, title: 'Категория1', folder: '01' },
    { id: 2, title: 'Категория2', folder: '02' },
    { id: 3, title: 'Категория3', folder: '03' },
    { id: 4, title: 'Категория4', folder: '04' },
];
let selectedCtgId = 0;
let gUName = localStorage['gUName'];
let gUId = localStorage['gUId'];
let gLkIn = localStorage['gLkIn'];
let gToken = localStorage['gToken'];
let gSettingsStatus = '';
let gPgnCurrentPage = 1;
let gPgnMaxPage = 1;
let gPgnMinPage = 1;
let gParamProcessT = {
    method: "",
    data: '',
    json: false,
    route: '',
    handler: '',
    f1: '',
    f2: ''
}
let gTimeoutProcessT = null;

if (gLkIn != '0' && gLkIn != '1') {
    gLkIn = '0';
    localStorage['gLkIn'] = '0';
}


const routes = {
    ctgs: 'http://buk/api/allcateg', 
    lgn: 'http://buk/api/lgn',
    rgn: 'http://buk/api/rgn',
    profile: 'http://buk/api/profile',
    updprofile: 'http://buk/api/updprofile',
    lkout: 'http://buk/api/logout',
    users: 'http://buk/api/users',
    upduser: 'http://buk/api/upduser',
    updctg: 'http://buk/api/updctg',
    addbook: 'http://buk/api/addbook',
    updbook: 'http://buk/api/updbook',
    delbook: 'http://buk/api/delbook',
    books: 'http://buk/api/books',
    rb: 'http://buk/api/rb',
    updset: 'http://buk/api/updset',
    getset: 'http://buk/api/getset',
    getbook: 'http://buk/api/getbook',
    allbooks: 'http://buk/api/allbooks',
    getpbooks: 'http://buk/api/getpbooks',
    getucart: 'http://buk/api/getucart',
    getufav: 'http://buk/api/getufav',
    delcrtid: 'http://buk/api/delcrtid',
    delfavid: 'http://buk/api/delfavid',
    addcrt: 'http://buk/api/addcrt',
    addcrtgr: 'http://buk/api/addcrtgr',
    addfav: 'http://buk/api/addfav',
    updcnt: 'http://buk/api/updcnt',
};


let categrecived = false;
let xmlHttp = createXmlHttpRequestObject();


let menuBtn = document.querySelector('.header__cart_img');
let menuCls = document.querySelector('.cart_right_close_img');
let menuClsBack = document.querySelector('.cart_right_back_img');

let menuFavBtn = document.querySelector('.header__fav_img');
let menuFavCls = document.querySelector('.fav_right_close_img');
let menuFavClsBack = document.querySelector('.fav_right_back_img');

let lgnBtn = document.querySelector('.header__user_img');
let lgnCls = document.querySelector('.lgn_close_img');
let lgnClsBack = document.querySelector('.lgn_back_img');

let rgnCls = document.querySelector('.rgn_close_img');
let rgnClsBack = document.querySelector('.rgn_back_img');

let lkmCls = document.querySelector('.lkm_close_img');
let lkmClsBack = document.querySelector('.lkm_back_img');

let menuCtgsBtn = document.querySelector('.ctgs_title');
let menuCtgsCls = document.querySelector('.ctgs_right_close_img');
let menuCtgsClsBack = document.querySelector('.ctgs_right_back_img');

const elHero = document.querySelector('.hero');
const elCartW = document.querySelector('.cart_right_wrap');
const elFavW = document.querySelector('.fav_right_wrap');
const elLgn = document.querySelector('.lgn_wrap');
if (elCartW && !elHero) {
    cart_render();
}
if (elLgn && !elHero) {
    lgn_render();
}
if (elFavW && !elHero) {
    fav_render();
}

let chPicCount = 4; 
let chPicInterval = 2000; 
let chPicTimeOut = 1; 
let chPicCurNum = 0;
let chPicTimeoutId;
let chPicOpacity = 100;
let chPicImgPrefix = 'popular_';
const chPicArr = [
    { pic: "./img/popular/cb1_1.jpg", idb: 1, idk: 6 },
    { pic: "./img/popular/cb1_2.jpg", idb: 2, idk: 6 },
    { pic: "./img/popular/cb1_3.jpg", idb: 3, idk: 6 },
    { pic: "./img/popular/cb1_24.jpg", idb: 24, idk: 6 },
    { pic: "./img/popular/cb1_5.jpg", idb: 5, idk: 6 },
    { pic: "./img/popular/cb1_4.jpg", idb: 4, idk: 6 },
    { pic: "./img/popular/cb1_25.jpg", idb: 25, idk: 6 }
]


function showCart() {

    if (gLkIn == '1') {
        closeLkm();
        let b = document.querySelector('.cart_right_page_off');
        if (b) {
            window.scrollTo(0, 0);
            b.style.display = "inline-block";
            processGetT03u();
        }
    }
    else {
        showLgn();
    }
}

function showLgn() {

    if (gLkIn == '0') {
        closeLkm();
        let b = document.querySelector('.lgn_page_off');
        if (b) {
            window.scrollTo(0, 0);
            b.style.display = "inline-block";
        }
    }
    else if (gLkIn == '1') {
        showLkm();
    }
}

function showFav() {

    if (gLkIn == '1') {
        closeLkm();
        let b = document.querySelector('.fav_right_page_off');
        if (b) {
            window.scrollTo(0, 0);
            b.style.display = "inline-block";
            processGetT04u();
        }
    }
    else {
        showLgn();
    }
}



function showRgn() {

    if (gLkIn == '0') {
        closeLkm();
        let r = document.querySelector('.rgn_page_off');
        if (r) {
            let rd = r.style.display;
            if (rd == 'none') {
                window.scrollTo(0, 0);
                r.style.display = "inline-block";
            }
        }
    }
}

function showLkm() {

    if (gLkIn == '1') {
        closeLkm();
        let b = document.querySelector('.lkm_page_off');
        if (b) {
            window.scrollTo(0, 0);
            b.style.display = "inline-block";
        }
        const u = document.querySelector('.lkm_uname');
        if (u) {
            u.innerHTML = gUName;
        }
    }
    else if (gLkIn == '1') {
        showLgn();
    }
}



function closeLkm() {
    let b = document.querySelector('.lgn_page_off');
    let r = document.querySelector('.rgn_page_off');
    let l = document.querySelector('.lkm_page_off');
    let c = document.querySelector('.cart_right_page_off');
    let f = document.querySelector('.fav_right_page_off');
    if (b) b.style.display = "none";
    if (r) r.style.display = "none";
    if (l) l.style.display = "none";
    if (c) c.style.display = "none";
    if (f) f.style.display = "none";
}

function showCtgs() {

    let b = document.querySelector('.ctgs_right_page_off');
    if (b) {
        let d = b.style.display;
        if (d == 'inline-block' || d == "") {
            b.style.display = "none";
        }
        if (d != "inline-block") {
            b.style.display = "inline-block";

            const elCtlFltSel = document.querySelector('.ctgs_menu_select');
            if (elCtlFltSel) {
                console.log(arrCateg);
                let s = '';
                for (let i = 0; i < arrCateg.length; i++) {
                    s = s + `<option value="${i}">${arrCateg[i].title}</option>`
                }
                elCtlFltSel.innerHTML = s;
            }
        }
    }
}

function storeSelectedCtg(event) {
    const t = event.target;
    selectedCtgId = arrCateg[Number(t.value)].id;
}

if (menuBtn) {
    menuBtn.addEventListener('click', showCart);
    if (menuCls) menuCls.addEventListener('click', closeLkm);
    if (menuClsBack) menuClsBack.addEventListener('click', closeLkm);
}

if (menuFavBtn) {
    menuFavBtn.addEventListener('click', showFav);
    if (menuFavCls) menuFavCls.addEventListener('click', closeLkm);
    if (menuFavClsBack) menuFavClsBack.addEventListener('click', closeLkm);
}

if (menuCtgsBtn) {
    menuCtgsBtn.addEventListener('click', showCtgs);
    menuCtgsCls.addEventListener('click', showCtgs);
    menuCtgsClsBack.addEventListener('click', showCtgs);
}

if (lgnBtn) {
    lgnBtn.addEventListener('click', showLgn);
    if (lgnCls) lgnCls.addEventListener('click', closeLkm);
    if (lgnClsBack) lgnClsBack.addEventListener('click', closeLkm);
}

if (rgnCls) {
    rgnCls.addEventListener('click', closeLkm);
    rgnClsBack.addEventListener('click', closeLkm);
}

if (lkmCls) {
    lkmCls.addEventListener('click', closeLkm);
    lkmClsBack.addEventListener('click', closeLkm);
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function openInThisTab(url) {
    window.open(url, '_self');
}


class Rblock {
    constructor(container = '.ctl', idc = 0, pSearch = '') {
        this.container = container;
        this.arrRBc = arrRBc;    
        this.arrRB = arrRB;      
        this.klc = arrRBc.length;  
    }

    render() {
        const block = document.querySelector(this.container);
        if (block) {
            block.innerHTML = '';                                //空的
            for (let i = 0; i < this.klc; i++) {
                const productObj = new elemRBc(this.arrRBc[i], i);
                block.insertAdjacentHTML('beforeend', productObj.render());
            }
        }
    }
}


//列表的元素
class elemRBc {
    constructor(ctg, pNum) {

        this.title = ctg.title;
        this.arrCards = arrRB[pNum];
        this.kol = this.arrCards.length;
        this.idc = ctg.idc;
        this.num = pNum + 1;

    }
    render() {
        let s = '';

        for (let index = 0; index < this.kol; index++) {
            const arrRB = this.arrCards[index];
            const ctgCard = new elemRBcard(arrRB, index);
            s = s + ctgCard.render();
        }

        return `                                                 
       <div class="ctl_categ${this.num}">
         <div class="ctl_categ_title" data-id="${this.idc}">
           <img src="./img/path.svg" alt="path">
           <span class="ctl_categ_title_span" data-id="${this.idc}">${this.title}</span>
         </div>
       </div>

       ${s}
`
    }
}


class elemRBcard {
    constructor(pCard, pIdx) {
        this.cardRB = pCard;
        this.idx = pIdx;

        this.title = this.cardRB.title;
        this.price = this.cardRB.price;
        this.kol = this.cardRB.count;
        this.id = this.cardRB.id;
        this.categ = this.cardRB.categ;
        this.place = this.cardRB.place;
        this.img = `./img/catalog/k${this.categ}/cb1_${this.id}.jpg`;

    }
    render() {

        return `                                                 
       <div class="div${this.place}">

       <div class="ctl_card" data-id="${this.id}">
           
            <div class="ctl_card_img_wrap">
              
               <img src="${this.img}" alt="cover_book">

               <div class="ctl_card_img_open">
                    <button>
                        Подробнее
                    </button>
                </div>               
                             
            </div>
           <div class="ctl_card_title">${this.title}</div>
           <div class="ctl_card_price_wrap">
               <div class="ctl_card_price"><span>₽${this.price}</span></div>
               <div class="ctl_card_price_fav">
                   <img class="ctl_card_price_fav_img" src="./img/book_mark_ctl.svg"
                       alt="book_mark">
               </div>
           </div>
           <div class="ctl_card_cart">
               <img class="ctl_card_cart_img" src="./img/cart2.svg" alt="cart_ctl">
           </div>
       </div>

   </div>`
    }
}


//列表
class Catalog {
    constructor(container = '.catalog', idc = 0, pSearch = '') {
        this.container = container;
        if (Number(idc) > 0 && !pSearch) {
            this.goods = books.filter((el) => Number(el.categ) == Number(idc));
        }

        else if (!idc && pSearch) {
            this.goods = books.filter((el) =>
                el.title.toLowerCase().indexOf(pSearch.toLowerCase()) >= 0 ||
                el.author.toLowerCase().indexOf(pSearch.toLowerCase()) >= 0
            );
        }
        else if (!idc && !pSearch) {
            this.goods = books;
        }
    }

    render() {
        const block = document.querySelector(this.container);
        if (block) {
            block.innerHTML = '';                                //空的
            for (let product of this.goods) {
                const productObj = new elemCatalog(product);
                block.insertAdjacentHTML('beforeend', productObj.render());
            }
            const elPgnCurrentPage = document.querySelector('.catalog_pgn_inp_page');
            if (elPgnCurrentPage) elPgnCurrentPage.value = gPgnCurrentPage;
            const elPgnMaxPage = document.querySelector('#catalog_pgn_max_page');
            if (elPgnMaxPage) elPgnMaxPage.innerHTML = gPgnMaxPage;
        }
    }
    calcCount() {
        return this.goods.reduce((accum, item) => accum += item.count, 0);
    }
}


//列表的元素
class elemCatalog {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.kol = product.count;
        this.id = product.id;
        this.categ = product.categ;
        this.img = `./img/catalog/k${product.categ}/cb1_${product.id}.jpg`;
    }
    render() {
        return `                                                 
        <div class="ctl_card" data-id="${this.id}">
                
            <div class="ctl_card_img_wrap">
                <img src="${this.img}" alt="cover_book1">
                <div class="ctl_card_img_open">
                                <button>
                                    Подробнее
                                </button>
                </div>
            </div>
            <div class="ctl_card_title">${this.title}</div>
            <div class="ctl_card_price_wrap">
                <div class="ctl_card_price"><span>₽${this.price}</span></div>
                <div class="ctl_card_price_fav">
                    <img class="ctl_card_price_fav_img" src="./img/book_mark_ctl.svg" alt="book_mark">
                </div>
            </div>
            <div class="ctl_card_cart">
                <img class="ctl_card_cart_img" src="./img/cart2.svg" alt="cart_ctl">
            </div>
        

        </div>`
    }
}

//书
class Book {
    constructor(pBook) {

        if (pBook.id) {
            this.product = pBook;
        }
        else {
            this.product = books.find(el => el.id == Number(pBook));
        }
        this.title = this.product.title;
        this.price = this.product.price;
        this.kol = this.product.count;
        this.id = this.product.id;
        this.categ = this.product.categ;
        const i = `cb2_${this.product.id}.jpg`;
        this.img = `./img/catalog/k${this.product.categ}/${i}`;
    }
    render() {
        return `                                                 
                
        <div class="book_card" data-id="${this.id}">
        <div class="book_card_left">
            <div class="book_card_cover">
                <img src="${this.img}" alt="cover_book">
            </div >
        </div >
            <div class="book_card_right">
                <div class="book_card_title_wrap">
                    <h2 class="book_card_h">${this.title}</h2>
                    <div class="ctl_card_price_fav">
                        <img class="ctl_card_price_fav_img" src="./img/book_mark_ctl.svg" alt="book_mark">
                    </div>

                </div>

                <div class="book_card_autor book_card_text_border">
                    Автор (ы): имя автора
                </div>

                <div class="book_card_desc book_card_text_border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                    lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.
                </div>

                <div class="book_card_seller book_card_text_border">
                    Продавец: имя / наименование продавца
                </div>

                <div class="book_card_price_wrap">
                    <div class="book_card_price">
                        ₽30,00
                    </div>
                </div>

                <div class="book_card_btns_wrap">
                    <div class="ctl_card_cart">
                        <img class="ctl_card_cart_img" src="./img/cart2.svg" alt="cart_ctl">
                    </div>
                    <div class="book_card_buy">
                        Купить
                    </div>

                </div>


            </div>`
    }
}


//篮子
class Cart {
    constructor(container = '.cart_right_product_wrap') {
        this.container = container;
        this.goods = cart;
    }

    delProd(id) {
        for (let el of this.goods) {                             //周期
            if (el.id == id) {
                this.goods.splice(this.goods.indexOf(el), 1);
                if (el.id) {
                    processDelElT03u(el.id);
                }
                console.log(this.goods);
            }
        }
    }

    render() {
        const block = document.querySelector(this.container);
        if (block) {
            block.innerHTML = '';                                //空的
            for (let product of this.goods) {
                const productObj = new elemCart(product);
                block.insertAdjacentHTML('beforeend', productObj.render());
            }
            this.incr();
            if (this.goods.length < 1) {
            }
            else {
                //
            }
        }
    }
    calcCount() {
        return this.goods.reduce((accum, item) => accum += item.count, 0);
    }
    calcSum() {                                                  //返回
        let smc=0;   
        for (let index = 0; index < this.goods.length; index++) {
               const el=this.goods[index]; 
               smc = smc+Math.round(el['price']*el['cnt']*100)/100;
        }
       return smc;
    }

    renderSmc(){
      const elSmc=document.querySelector('.cart_right_itog_price');
      if (elSmc){
        elSmc.innerHTML=this.calcSum();
      }
    }   

    

    //按钮 
    incr() {

        const decrementButton = document.querySelectorAll(`[data-action="decrement"]`);  //递减按钮
        const incrementButton = document.querySelectorAll(`[data-action="increment"]`);  //增量按钮

        decrementButton.forEach((button) => {
            function decrement(e) {
                const button = e.target.parentNode.parentElement.querySelector(
                    '[data-action="decrement"]'
                );
                const target = button.nextElementSibling;
                let value = Number(target.value);
                let ide = target.dataset['crtid'];
                value--;
                target.value = value;
                if (target.value < 0) {
                    target.value = "0";
                }
                updCntProd(ide, value);

            }
            button.addEventListener("click", decrement);
        });

        incrementButton.forEach((button) => {
            function increment(e) {
                const button = e.target.parentNode.parentElement.querySelector(
                    '[data-action="decrement"]'
                );
                const target = button.nextElementSibling;
                let value = Number(target.value);
                let ide = target.dataset['crtid'];
                value++;
                target.value = value;
                updCntProd(ide, value);
            }
            button.addEventListener("click", increment);
        });

    }

}

//篮子元素
class elemCart {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.kol = product.count;
        this.id = product.id;
        this.cnt = product.cnt;
        this.t01_id = product.t01_id;
        this.categ = product.categ;
        this.img = `./img/catalog/k${product.categ}/cb1_${product.t01_id}.jpg`;
    }
    render() {
        return `                                                 
            <div class="cart_right_card" data-id="${this.id}">
            <div class="cart_right_card_img">
                <img src="${this.img}" alt="cover">
            </div>
            <div class="cart_right_card_title_wrap">
                <div class="cart_right_card_title">
                    <h3>${this.title}</h3>
                    <p>Имя автора</p>
                </div>
                <div class="cart_right_count">
                    <div class="cart_right_count_wrap">
                        <button data-action="decrement" class="cart_right_count_button">
                            <img class="cart_right_decr_btn_img" src="./img/minus_circle.svg" alt="minus">
                        </button>
                        <input type="number" name="cart_right_inp" id="cart_right_inp" data-crtid="${this.id}" data-crt01id="${this.t01_id}"
                            min="1" value="${this.cnt}" />
                        <button data-action="increment" class="cart_right_count_button">
                            <img class="cart_right_incr_btn_img" src="./img/plus_circle.svg" alt="plus">
                        </button>
                    </div>
                </div>
            </div>
            <div class="cart_right_card_price">
                <p>Р ${this.price} </p>
                <button class="cart_right_trash_btn" onClick="del_prod(${this.id});">
                <img class="cart_right_trash_img" src="./img/trash.svg" alt="trash">
                </button>
            </div>

        </div>`
    }
}


//类别
class Categories {
    constructor(id) {
        this.categ = arrCateg;
    }
    render() {
        return `                                                 
        <div class="ctgs_btn1" data-id="${this.categ[0].id}">${this.categ[0].title}</div>
        <div class="ctgs_btn2" data-id="${this.categ[1].id}">${this.categ[1].title}</div>
        <div class="ctgs_btn3" data-id="${this.categ[2].id}">${this.categ[2].title}</div>
        <div class="ctgs_btn4" data-id="${this.categ[3].id}">${this.categ[3].title}</div>
        <div class="ctgs_btn5" data-id="${this.categ[4].id}">${this.categ[4].title}</div>
        <div class="ctgs_btn6" data-id="${this.categ[5].id}">${this.categ[5].title}</div>
       `
    }
}


class Fav {
    constructor(container = '.fav_right_product_wrap') {
        this.container = container;
        this.goods = gArrFav;
    }

    delProd(id) {
        for (let el of this.goods) {                             //周期
            if (el.id == id) {
                this.goods.splice(this.goods.indexOf(el), 1);
                if (el.id) {
                    processDelElT04u(el.id);
                }
                console.log(this.goods);
            }
        }
    }

    render() {
        const block = document.querySelector(this.container);
        if (block) {
            block.innerHTML = '';                                //空的
            for (let product of this.goods) {
                const productObj = new elemFav(product);
                block.insertAdjacentHTML('beforeend', productObj.render());
            }

            if (this.goods.length < 1) {
                //
            }
            else {
                //
            }
        }
    }
    calcCount() {
        return this.goods.reduce((accum, item) => accum += item.count, 0);
    }
    calcSum() {                                                  //返回
        return Math.round(this.goods.reduce(
            (accum, item) => accum += item.count * item.price, 0) * 100) / 100;
    }
}


//篮子元素
class elemFav {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.kol = product.count;
        this.id = product.id;
        this.t01_id = product.t01_id;
        this.categ = product.categ;
        this.img = `./img/catalog/k${product.categ}/cb1_${product.t01_id}.jpg`;
    }
    render() {
        return `                                                 
            <div class="fav_right_card" data-id="${this.id}">
            <div class="fav_right_card_img">
                <img src="${this.img}" alt="cover">
            </div>
            <div class="fav_right_card_title_wrap">
                <div class="fav_right_card_title">
                    <h3>${this.title}</h3>
                    <p>Имя автора</p>
                </div>
                <div class="fav_right_count">

                    <div class="fav_right_count_btn">
                    <img src="./img/cart2.svg"
                      class="fav_right_cart_img" alt="cart" data-favt01id="${this.t01_id}" onclick="favToCart(${this.t01_id});">
                    </div>
                
                </div>
            </div>
            <div class="fav_right_card_price">
                <p>Р ${this.price} </p>
                <button class="fav_right_trash_btn" onClick="delFavProd(${this.id});">
                <img class="fav_right_trash_img" src="./img/trash.svg" alt="trash">
                </button>
            </div>

        </div>`
    }
}



const divIndexPage = document.querySelector('.hero');
const divCatalogPage = document.querySelector('.catalog_filter');
if (divIndexPage || divCatalogPage || s1BooksPage) {
    process();   
}

function openBook(id) {
    openInThisTab('./book.html?idbook=' + id);
}

function openCatalog(idctg) {
    let cpage = Number(arrT02[1].zn);
    if (!cpage) cpage = 25;
    openInThisTab(`./catalog.html?cpage=${cpage}&idc=` + idctg);
}


const divCatalog = document.querySelector('.catalog');
if (divCatalog) {

    
    if (false) {   //off
        const paramsString = document.location.search;
        const searchParams = new URLSearchParams(paramsString);
        const id = searchParams.get("idc");
        const pSearch = searchParams.get("search");
        const catalog = new Catalog('.catalog', id, pSearch);
        catalog.render();
    }
    else {    
        const paramsString = document.location.search;
        const searchParams = new URLSearchParams(paramsString);
        const idc = searchParams.get("idc");
        const pSearch = searchParams.get("search");
        let page = searchParams.get("page");
        let cpage = searchParams.get("cpage");

        let s1 = './catalog.html';
        s1 = s1 + `?cpage=${cpage}`;
        if (pSearch && page) {
            s1 = s1 + `&search=${pSearch}&page=${page}`;
        }
        else {
            if (pSearch) { s1 = s1 + '&search=' + pSearch; }
            if (page) { s1 = s1 + '&page=' + page; }
            else {
                s1 = s1 + '&page=1';
            }
        }
        if (idc) s1 = s1 + `&idc=${idc}`;
        processGetT01pgn(s1);
    }

    divCatalog.addEventListener('click', ({ target }) => {
        if (target.parentElement.className == 'ctl_card_img_open') {
            const el = target.parentElement.parentElement.parentElement;
            openBook(el.dataset.id);
        }
        if (target.parentElement.className == 'ctl_card_cart') {
            const el = target.parentElement.parentElement;
            buyProd(el.dataset.id);
        }
    });


}


const divRB = document.querySelector('.ctl');


function renderRB() {
    const divRB = document.querySelector('.ctl');
    if (divRB) {

        if (arrRBc.length == 1) divRB.classList.add("ctl1row");
        if (arrRBc.length == 2) divRB.classList.add("ctl2row");
        if (arrRBc.length == 4) divRB.classList.add("ctl4row");
        if (arrRBc.length == 5) divRB.classList.add("ctl5row");

        //
        const books = new Rblock();
        books.render();

        divRB.addEventListener('click', ({ target }) => {
            let o = target.className;
            if (o == 'ctl_categ_title_span') {
                openCatalog(target.dataset.id);
            }

            if (o == 'ctl_card_cart') {
                const el = target.parentElement;
                buyProd(el.dataset.id);
            }
            if (o == 'ctl_card_cart_img') {
                const el = target.parentElement.parentElement;
                buyProd(el.dataset.id);
            }
            if (o == 'ctl_card_price_fav') {
                const el = target.parentElement.parentElement;
                favAddProd(el.dataset.id);
            }
            if (o == 'ctl_card_price_fav_img') {
                const el = target.parentElement.parentElement.parentElement;
                favAddProd(el.dataset.id);
            }

        });

        divRB.addEventListener('click', ({ target }) => {
            if (target.parentElement.className == 'ctl_card_img_open') {
                const el = target.parentElement.parentElement.parentElement;
                openBook(el.dataset.id);
            }
        });
    }
}

const divBook = document.querySelector('.book_card_wrap');
if (divBook) {
    const paramsString = document.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const id = searchParams.get("idbook");

    processGetT01e(id);

}


const elExplorerBtn = document.querySelector('.hero_explorer');
if (elExplorerBtn) {
    elExplorerBtn.onclick = function () {
        let cpage = Number(arrT02[1].zn);
        if (!cpage) cpage = 25;
        openInThisTab(`./catalog.html?cpage=${cpage}`);
    }
}

const elCtgsLeftBtn = document.querySelector('.ctgs_left_btn');
if (elCtgsLeftBtn) {
    elCtgsLeftBtn.onclick = function () {
        let cpage = Number(arrT02[1].zn);
        if (!cpage) cpage = 25;
        openInThisTab(`./catalog.html?cpage=${cpage}`);
    }
}
const elCtgsRightBtn = document.querySelector('.ctgs_right_btn');
if (elCtgsRightBtn) {
    elCtgsRightBtn.onclick = function () {
        openCatalog(selectedCtgId);
    }
}


const elHeaderLogoBtn = document.querySelector('.header__logo');
if (elHeaderLogoBtn) {
    elHeaderLogoBtn.onclick = function () {
        openInThisTab('./index.html');
    }
}

const elDelFromCartBtn = document.querySelector('.cart_right_card_trash');
if (elDelFromCartBtn) {
    elDelFromCartBtn.onclick = function () {
        openInThisTab('./index.html');
    }
}

const clist = new Cart();
const flist = new Fav();


const catalogEl = document.querySelector('.catalog');
if (catalogEl) {
    catalogEl.addEventListener('click', ({ target }) => {
        if (!(target.parentElement.className == 'cardImgBuy')) {
            return;
        }
        const el = target.parentElement.parentElement.parentElement;
        buyProd(el.dataset.id);
    });
}


const elCtlFltSel = document.querySelector('.catalog_flt_select_categ');
if (elCtlFltSel) {
    let s = '<option value="">Категории:</option>';
    for (let i = 0; i < arrCateg.length; i++) {
        s = s + `<option value="${i}">${arrCateg[i].title}</option>`
    }
    elCtlFltSel.innerHTML = s;
}


function createXmlHttpRequestObject() {
    let xmlHttp;

    if (window.ActiveXObject) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {
            xmlHttp = false;
        }
    }

    else {
        try {
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            xmlHttp = false;
        }
    }
    if (!xmlHttp)
        alert("Ошибка создания объекта XMLHttpRequest.");
    else
        return xmlHttp;
}


function process() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        if (!categrecived) {
            xmlHttp.open("GET", routes.ctgs, false);
            xmlHttp.onreadystatechange = handleServerResponse;
            xmlHttp.send(null);
        }
    }
    else {
        setTimeout('process()', 1500);
    }
}


function handleServerResponse() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.dir(xmlResponse);
            arrCateg.length = 0; // Clear array
            arrCateg.push(...xmlResponse.data);
            if (arrCateg.length > 0) {
                categrecived = true;
                const elCtgsBtns = document.querySelector('.ctgs_btns');
                if (elCtgsBtns) {
                    const ctgs = new Categories();
                    elCtgsBtns.innerHTML = ctgs.render();
                    elCtgsBtns.addEventListener('click', ({ target }) => {
                        let o = target.className;
                        if (o == 'ctgs_btn1' || o == 'ctgs_btn2' || o == 'ctgs_btn3' || o == 'ctgs_btn4' || o == 'ctgs_btn5' || o == 'ctgs_btn6') {
                            openCatalog(target.dataset.id);
                        }
                    });
                }
                console.log(arrCateg);
            }
        }
        else {
            //
        }
    }
}


function processLgn() {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {

        const elEmail = document.getElementById('lgn_inp_name');
        let email = '';  
        if (elEmail) email = elEmail.value;

        const elPass = document.getElementById('lgn_inp_pass');
        let password = ''; 
        if (elPass) password = elPass.value;

        if (!password || !email) return;

        const data = `email=${email}&password=${password}`;

        xmlHttp.open("POST", routes.lgn, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");

        xmlHttp.onreadystatechange = handleSrvResLgn;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);

    }
    else {
        setTimeout('processLgn()', 1000);
    }
}


function handleSrvResLgn() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.dir(xmlHttp.response);
            console.dir(xmlHttp.getAllResponseHeaders());
            gLkIn = '1';
            gUName = xmlResponse.username;
            gUId = xmlResponse.id;
            gToken = xmlResponse.token;
            localStorage['gLkIn'] = gLkIn;
            localStorage['gUName'] = gUName;
            localStorage['gToken'] = gToken;
            localStorage['gUId'] = gUId;
            showLkm();
            alert('вход ok');
        }
        else {
            //
        }
    }
}


function processLkmout() {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        let email = 'user3@asd.as'; 
        let password = '1111'; 
        let data = 'email=user3@asd.as&password=1111';
        localStorage['gLkIn'] = '0';
        gLkIn = '0';
        xmlHttp.open("GET", routes.lkout, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResLkout;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        setTimeout('processLkmout()', 1500);
    }
}

function handleSrvResLkout() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.dir(xmlHttp.response);
            console.dir(xmlHttp.getAllResponseHeaders());
            gLkIn = '0';
            gUName = '';
            gToken = '';
            gUId = '';
            localStorage['gLkIn'] = gLkIn;
            localStorage['gUName'] = gUName;
            localStorage['gToken'] = gToken;
            localStorage['gUId'] = gUId;
            closeLkm();
            showLgn();
            alert('выход ok');
        }
        else {
            //
        }
    }
}


function processRgn() {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const elName = document.getElementById('rgn_inp_name');
        let uname = '';
        if (elName) uname = elName.value;
        const elEmail = document.getElementById('rgn_inp_email');
        let email = '';
        if (elEmail) email = elEmail.value;
        const elPass = document.getElementById('rgn_inp_pass');
        let password = ''; 
        if (elPass) password = elPass.value;
        if (!password || !email || !uname) return;
        const data = `email=${email}&password=${password}&name=${uname}`;
        xmlHttp.open("POST", routes.rgn, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xmlHttp.onreadystatechange = handleSrvResRgn;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        setTimeout('processRgn()', 1500);
    }
}

function handleSrvResRgn() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.dir(xmlHttp.response);
            console.dir(xmlHttp.getAllResponseHeaders());
            gLkIn = '1';
            gUName = xmlResponse.username;
            gToken = xmlResponse.token;
            gUId = xmlResponse.id;
            const elName = document.getElementById('rgn_inp_name');
            let uname = '';
            if (elName) gUName = elName.value;
            localStorage['gLkIn'] = gLkIn;
            if (gUName) localStorage['gUName'] = gUName;
            else localStorage['gUName'] = '';
            localStorage['gToken'] = gToken;
            localStorage['gUid'] = gUId;
            showLkm();
            alert('вход ok');
        }
        else {
            //
        }
    }
}


const elPopularCards = document.querySelector('.popular_cards');
if (elPopularCards) {

    const elChPicN1 = document.querySelector('#popular_img1');
    const elChPicN2 = document.querySelector('#popular_img2');
    const elChPicN3 = document.querySelector('#popular_img3');
    const elChPicN4 = document.querySelector('#popular_img4');

    elPopularCards.addEventListener('click', ({ target }) => {
        let o = target.className;
        if (o == 'popular_cover') {
            openBook(target.dataset.idb);
        }
    });

    chPicTimeoutId = setInterval(
        function () {

            chPicCurNum = chPicCurNum + 1;
            if (chPicCurNum >= chPicArr.length) chPicCurNum = 0;
            elChPicN4.src = chPicArr[chPicCurNum].pic;
            elChPicN4.dataset.idb = chPicArr[chPicCurNum].idb;

            chPicCurNum = chPicCurNum + 1;
            if (chPicCurNum >= chPicArr.length) chPicCurNum = 0;
            elChPicN3.src = chPicArr[chPicCurNum].pic;
            elChPicN3.dataset.idb = chPicArr[chPicCurNum].idb;

            chPicCurNum = chPicCurNum + 1;
            if (chPicCurNum >= chPicArr.length) chPicCurNum = 0;
            elChPicN2.src = chPicArr[chPicCurNum].pic;
            elChPicN2.dataset.idb = chPicArr[chPicCurNum].idb;

            chPicCurNum = chPicCurNum + 1;
            if (chPicCurNum >= chPicArr.length) chPicCurNum = 0;
            elChPicN1.src = chPicArr[chPicCurNum].pic;
            elChPicN1.dataset.idb = chPicArr[chPicCurNum].idb;

        }, chPicInterval
    );
}
else {
    if (chPicTimeoutId) {
        clearInterval(chPicTimeoutId);
    }
}


function openCatalogSearch(event) {
    const pSearch = event.target[0].value;
    let cpage = Number(arrT02[1].zn);
    if (!cpage) cpage = 25;
    openInThisTab(`./catalog.html?cpage=${cpage}&search=` + pSearch);
}

function lgn() {
    processLgn();
}

function rgn() {
    processRgn();
}

function lkmout() {
    processLkmout();
}


function lgn_render() {
    if (elLgn && !elHero) {
        elLgn.innerHTML = `


    <div class="lgn_page_off" id="idlgn">
    <div class="lgn">
        <img class="lgn_close_img"
            src="img/close.png" alt="close" onClick="closeLkm();">
        <div class="lgn_h4_wrap">
            <img src="./img/book_open.svg"
                class="lgn_back_img" alt="back" onClick="closeLkm();">
            <h4 class="lgn_h4">Личный кабинет</h4>
        </div>

        <div class="lgn_controls">
           <div class="lgn_inp_wrap">
            <input type="text"
            class="lgn_inp"
            id="lgn_inp_name"
            placeholder="Логин">
            <img class="lgn_inp_img"
            src="./img/user1.svg"
            alt="login" onclick="putlogin(event);">
          </div>     
          <div class="lgn_inp_wrap">
            <input type="password"
            class="lgn_inp"
            id="lgn_inp_pass"
            placeholder="Пароль">
            <img class="lgn_inp_img"
            src="./img/key.svg"
            alt="key" onclick="putpass(event);">
          </div>     

          <div>
            <input type="checkbox" id="saveLogin" name="saveLogin">
            <label for="saveLogin">Сохранить</label>
          </div>

            <button class="lgn_btn_in" onclick="lgn();">Войти</button>
            <button class="lgn_btn_reg" onclick="showRgn();">Регистрация</button>
            <!-- <a href="" class="lgn_btn_reg">Регистрация</a> -->

        </div>

    </div>
</div>

<div class="rgn_page_off" id="idrgn">
    <div class="lgn">
        <img class="rgn_close_img"
            src="img/close.png" alt="close" onClick="closeLkm();">
        <div class="lgn_h4_wrap">
            <img src="./img/book_open.svg"
                class="rgn_back_img" alt="back" onClick="closeLkm();">
            <h4 class="lgn_h4">Личный кабинет</h4>
        </div>

        <div class="lgn_controls">

            <div class="lgn_inp_wrap">
                <input type="text"
                class="lgn_inp"
                id="rgn_inp_name"
                placeholder="Логин">
                <img class="lgn_inp_img"
                src="./img/user1.svg"
                alt="login" onclick="putlogin(event);">
            </div> 

            <div class="lgn_inp_wrap">
                <input type="email"
                class="lgn_inp"
                id="rgn_inp_email"
                placeholder="Емаил">
                <img class="lgn_inp_img" style="visibility: hidden"
                src="./img/user1.svg"
                alt="login" >
            </div> 

                                        
            <div class="lgn_inp_wrap">
                <input type="password"
                class="lgn_inp"
                id="rgn_inp_pass"
                placeholder="Пароль">
                <img class="lgn_inp_img"
                src="./img/key.svg"
                alt="key" onclick="putpass(event);">
            </div> 

            <div class="lgn_inp_wrap">
                <input type="password"
                class="lgn_inp"
                id="rgn_inp_pass2"
                placeholder="Пароль еще раз">
                <img class="lgn_inp_img" style="visibility: hidden"
                src="./img/key.svg"
                alt="key" >
            </div>                                     

            <div>
                <input type="checkbox" id="saveLogin2" name="saveLogin2">
                <label for="saveLogin2">Сохранить</label>
            </div>

            <button class="lgn_btn_in" onclick="rgn();">Регистрация</button>
            <button class="lgn_btn_reg" onclick="showLgn();">Вход</button>
            <!-- <a href="" class="lgn_btn_reg">Регистрация</a> -->

        </div>

    </div>
</div>



<div class="lkm_page_off" id="idlkm">
    <div class="lgn">
        <img class="lkm_close_img"
            src="img/close.png" alt="close" onClick="closeLkm();">
        <div class="lgn_h4_wrap">
            <img src="./img/book_open.svg"
                class="lkm_back_img" alt="back" onClick="closeLkm();">
            <h4 class="lgn_h4">Личный кабинет</h4>
        </div>

        <div class="lgn_controls">
            <p class="lkm_uname"></p>

            <p class="lkm_users_lbl" onclick="openInThisTab('profile.html');">Профиль</p>
            <p>Избранное</p>
            <p>Корзина</p>
            <p class="lkm_users_lbl" onclick="openInThisTab('users.html');">Пользователи</p>
            <p class="lkm_users_lbl" onclick="openInThisTab('ctgs.html');">Категории</p>
            <p class="lkm_users_lbl" onclick="openInThisTab('books.html');">Книги</p>
            <p class="lkm_users_lbl" onclick="openInThisTab('sett.html');">Настройки</p>
            <p class="lkm_users_lbl" onclick="openInThisTab('zks.html');">Заказы</p>


            <button class="lgn_btn_in" onclick="lkmout();">Выход</button>

        </div>

    </div>
</div>
`;
   }
}


function cart_render() {
    if (elCartW && !elHero) {
        elCartW.innerHTML = `
        <div class="cart_right_page_off" id="cart_right_page_off">
        <div class="cart_right">
            <img class="cart_right_close_img"
                src="img/close.png" alt="close" onclick="closeLkm();">
            <div class="cart_right_h4_wrap">
                <img src="./img/caret_left_cart.svg"
                    class="cart_right_back_img" alt="back" onclick="closeLkm();">
                <h4 class="cart_right_h4">Ваша корзина</h4>
            </div>
            <div class="cart_right_products">
                <div class="cart_right_product_wrap">


                </div>

                <div class="cart_right_product_itog">
                    <div
                        class="cart_right_product_itog_wrap">
                        <span class="cart_right_itog_lbl">Итого:</span>
                        <span class="cart_right_itog_price">Р
                            60.00</span>
                    </div>
                    <div class="cart_right_itog_btn" onclick="openInThisTab('zkn.html');">Заказ</div>
                </div>

            </div>

        </div>
    </div>
    `;
    }
}


function fav_render() {
    if (elFavW && !elHero) {
        elFavW.innerHTML = `
        <div class="fav_right_page_off" id="fav_right_page_off">
        <div class="fav_right">
            <img class="fav_right_close_img"
                src="img/close.png" alt="close" onclick="closeLkm();">
            <div class="fav_right_h4_wrap">
                <img src="./img/caret_left_cart.svg"
                    class="fav_right_back_img" alt="back" onclick="closeLkm();">
                <h4 class="fav_right_h4">Избранное</h4>
            </div>
            <div class="fav_right_products">

                <div class="fav_right_product_wrap">
                <!-- fav rnd -->

                </div>

                <div class="fav_right_product_itog">
                    <div
                        class="fav_right_product_itog_wrap">
                        <span class="fav_right_itog_lbl">Итого:</span>
                        <span class="fav_right_itog_price">Р
                            60.00</span>
                    </div>
                    <div class="fav_right_itog_btn">
                        <img src="./img/cart2.svg"
                        class="fav_right_cart_img" alt="cart" onclick="favAllToCart();"> 
                    </div>
                </div>

            </div>

        </div>
    </div>
    `;
    }
}


function putlogin(event) {
    const el = document.getElementById('lgn_inp_name');
    const sl = localStorage['savedl'];
    if (el && sl) el.value = sl;
}
function putpass(event) {
    const el = document.getElementById('lgn_inp_pass');
    const sl = localStorage['savedk'];
    if (el && sl) el.value = sl;
}

const elSaveLgChb = document.querySelector("#saveLogin");
if (elSaveLgChb) {
    elSaveLgChb.addEventListener("change", () => {
        if (elSaveLgChb.checked) {
            const el = document.getElementById('lgn_inp_name');
            if (el) localStorage['savedl'] = el.value;
            const el2 = document.getElementById('lgn_inp_pass');
            if (el2) localStorage['savedk'] = el2.value;
        } else {
            localStorage['savedl'] = '';
            localStorage['savedk'] = '';
        }
    });
}


function processGetRB() {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {

        let kcards = 5;
        let kcateg = Number(arrT02[0].zn);
        const data = `ctgs=${kcateg}&cards=${kcards}`;

        xmlHttp.open("GET", routes.rb + '?' + data, false);

        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }

        xmlHttp.onreadystatechange = handleSrvResGetRb;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);

    }
    else {
        //
    }
}

function handleSrvResGetRb() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            arrRBc.length = 0; 
            arrRBc.push(...xmlResponse.data1);
            arrRB.length = 0; 
            arrRB.push(...xmlResponse.data2);
            console.log(arrRBc);
            renderRB();
            if (arrRBc.length > 0) {
                 //
            }
        }
        else {
            //
        }
    }
}


function processGetT02() {

    if (gSettingsStatus == '' || gSettingsStatus == 'upd') {
        if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
            const data = ``;
            xmlHttp.open("GET", routes.getset, false);
            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            xmlHttp.setRequestHeader('Accept', '*/*');
            xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (gToken) {
                xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
            }
            xmlHttp.onreadystatechange = handleSrvResGetT02;
            xmlHttp.withCredentials = true;
            xmlHttp.send(data);
        }
        else {
            //
        }
    }
}

function handleSrvResGetT02() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            arrT02.length = 0;
            arrT02.push(...xmlResponse.data);
            if (arrT02.length > 0) {
                gSettingsStatus = 'ok';
                processGetRB();
            }
        }
        else {
        }
    }
}

processGetT02();


function processGetT01e(pId) {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const data = `id=${pId}`;
        xmlHttp.open("GET", routes.getbook + '?' + data, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResGetT01e;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
            //
    }
}


function handleSrvResGetT01e() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            const divBook = document.querySelector('.book_card_wrap');
            if (divBook) {
                const book = new Book(xmlResponse.data);
                divBook.innerHTML = book.render(xmlResponse.data.id);
            }
        }
        else {
            //
        }
    }
}


function processGetT01all() {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const data = null;
        xmlHttp.open("GET", routes.allbooks, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResGetT01all;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}


function handleSrvResGetT01all() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            books.length = 0;
            books.push(...xmlResponse.data);
            if (books.length > 0) {
                const divCatalog = document.querySelector('.catalog');
                if (divCatalog) {
                    const paramsString = document.location.search;
                    const searchParams = new URLSearchParams(paramsString);
                    const id = searchParams.get("idc");
                    const pSearch = searchParams.get("search");
                    const catalog = new Catalog('.catalog', id, pSearch);
                    catalog.render();
                }
            }
        }
        else {
            //
        }
    }
}


function openCatalogSearchBack(event) {

    const paramsString = document.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const idc = searchParams.get("idc");
    const pSearch = searchParams.get("search");
    const cpage = searchParams.get("cpage");
    if (!cpage) cpage = arrT02[1].zn;
    if (cpage && Number(cpage) <= 0) cpage = arrT02[1].zn;

    let page = 0;
    let tpage = searchParams.get("page");
    if (tpage) {
        page = Number(tpage) - 1;
    }
    else { page = 1; }
    if (page == 0) page = 1;

    let s1 = './catalog.html';
    s1 = s1 + `?cpage=${cpage}`;
    if (pSearch && page) {
        s1 = s1 + `&search=${pSearch}&page=${page}`;
    }
    else {
        if (pSearch) { s1 = s1 + '&search=' + pSearch; }
        if (page) { s1 = s1 + '&page=' + page; }
        else {
            s1 = s1 + '&page=1';
        }
    }
    if (idc) s1 = s1 + `&idc=${idc}`;
    openInThisTab(s1);
}


function openCatalogSearchForw(event) {
    const paramsString = document.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const idc = searchParams.get("idc");
    const pSearch = searchParams.get("search");
    const cpage = searchParams.get("cpage");
    if (!cpage) cpage = arrT02[1].zn;
    if (cpage && Number(cpage) <= 0) cpage = arrT02[1].zn;

    let page = 0;
    let tpage = searchParams.get("page");
    if (tpage) {
        page = Number(tpage) + 1;
    }
    else { page = 2; }

    let s1 = './catalog.html';
    s1 = s1 + `?cpage=${cpage}`;
    if (pSearch && page) {
        s1 = s1 + `&search=${pSearch}&page=${page}`;
    }
    else {
        if (pSearch) { s1 = s1 + '&search=' + pSearch; }
        if (page) { s1 = s1 + '&page=' + page; }
        else {
            s1 = s1 + '&page=2';
        }
    }
    if (idc) s1 = s1 + `&idc=${idc}`;
    openInThisTab(s1);
}


function processGetT01pgn(pUrl) {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {

        let data = null;
        const p1 = String(pUrl).indexOf('?');
        data = String(pUrl).substring(p1,);
        xmlHttp.open("GET", routes.getpbooks + data, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResGetT01pgn;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}

function handleSrvResGetT01pgn() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            books.length = 0;
            books.push(...xmlResponse.data);
            if (books.length > 0) {
                const pSearch = xmlResponse.search;
                let page = xmlResponse.page;
                let cpage = xmlResponse.cpage;

                gPgnCurrentPage = xmlResponse.page;
                if (Number(cpage) > 0) {
                    gPgnMaxPage = Number(xmlResponse.all) / Number(cpage);
                    gPgnMaxPage = Math.ceil(gPgnMaxPage);
                }
                gPgnMinPage = 1;
                let s1 = './catalog.html';
                s1 = s1 + `?cpage=${cpage}`;
                if (pSearch && page) {
                    s1 = s1 + `&search=${pSearch}&page=${page}`;
                }
                else {
                    if (pSearch) { s1 = s1 + '&search=' + pSearch; }
                    if (page) { s1 = s1 + '&page=' + page; }
                    else {
                        s1 = s1 + '&page=1';
                    }
                }
                let id = null;
                const catalog = new Catalog('.catalog', id, pSearch);
                catalog.render();
            }
        }
        else {
            //
        }
    }
}


function processGetT03u() {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        let data = null;
        let p1 = '';
        if (gUId) {
            p1 = '?idu=' + gUId;
        }
        else {
            p1 = '?idu=0';
        }
        data = p1;
        xmlHttp.open("GET", routes.getucart + data, true);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResGetT03u;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}

function handleSrvResGetT03u() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            cart.length = 0;
            cart.push(...xmlResponse.data);
            if (cart.length > 0) {
                const ca = new Cart();
                ca.render();
                ca.renderSmc();
            }
        }
        else {
            //
        }
    }
}


function processGetT04u() {

    let data = null;
    let p1 = '';
    if (gUId) {
        p1 = '?idu=' + gUId;
    }
    else {
        p1 = '?idu=0';
    }
    data = p1;

    gParamProcessT = {
        method: "GET",
        data: data,
        route: routes.getufav,
        f1: handlerPr1GetT04u,
        f2: null
    }

    processT(gParamProcessT);
}

function handlerPr1GetT04u(pData) {
    gArrFav.length = 0;
    gArrFav.push(...pData.data);
    if (gArrFav.length > 0) {
        const fa = new Fav();
        fa.render();
    }
}


function processT(pP) {
    let p = null;
    if (!pP) {
        p = gParamProcessT;
    }
    else {
        p = pP;   
    }

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        clearTimeout(gTimeoutProcessT);

        let data = null;
        if (p.data) data = p.data;

        const rout = p.route;
        if (p.method == 'GET') {
            if (data) {
                xmlHttp.open("GET", rout + data, true);
            }
            else {
                xmlHttp.open("GET", rout, true);
            }
        }
        else if (p.method == 'DEL' || p.method == 'D' || p.method == 'DELETE') {
            xmlHttp.open("DELETE", rout, true);
        }
        else if (p.method == 'POS' || p.method == 'P' || p.method == 'POST') {
            xmlHttp.open("POST", rout, true);
        }
        else {
            console.log('Не указан метод');
            return;
        }

        if (p.json) {
            xmlHttp.setRequestHeader('Content-type', 'content-type: application/json; charset=utf-8');
        }
        else {
            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        }

        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }

        xmlHttp.onreadystatechange = handleSrvResProcessT;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);

    }
    else {
        gTimeoutProcessT = setTimeout('processT(gParamProcessT)', 1500);
    }
}


function handleSrvResProcessT() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            const f1 = gParamProcessT.f1;
            if (f1) {
                f1(xmlResponse);
            }
            else {
                console.log('Не указана функция');
            }
        }
        else {
            const f2 = gParamProcessT.f2;
            if (f2) {
                f2();
            }
        }
    }
}



const del_prod = (id) => {
    clist.delProd(id);
    clist.renderSmc();
};

function processDelElT03u(ide) {

    let data = null;
    let p1 = '';
    if (gUId) {
        p1 = 'id=' + ide;
    }
    else {
        p1 = 'id=0';
    }
    data = p1;

    gParamProcessT = {
        method: "DEL",
        data: data,
        route: routes.delcrtid,
        f1: handlerPr1DelElT03u,
        f2: null
    }

    processT(gParamProcessT);
}

function handlerPr1DelElT03u(pData) {
    const fa = new Cart();
    fa.render();
}


const delFavProd = (id) => {
    flist.delProd(id);
};

function processDelElT04u(ide) {

    let data = null;
    let p1 = '';
    if (gUId) {
        p1 = 'id=' + ide;
    }
    else {
        p1 = 'id=0';
    }
    data = p1;

    gParamProcessT = {
        method: "DEL",
        data: data,
        route: routes.delfavid,
        f1: handlerPr1DelElT04u,
        f2: null
    }

    processT(gParamProcessT);
}

function handlerPr1DelElT04u(pData) {
    const fa = new Fav();
    fa.render();
}



function buyProd(pId) {
    let f = false;
    let nId = null;
    if (pId) {
        nId = Number(pId);
    }
    else {
        console.log('Не указан Id элемента');
    }
    if (!nId) {
        console.log('Не указан Id элемента');
        return;
    }

    for (let el of clist.goods) {
        if (el.id == nId) {
            f = true;
            let k = Number.parseInt(el.count);
            k += 1;
            el.count = k;
        }
    }
    if (!f) {
        for (let el of books) {
            if (el.id == nId) {
                clist.goods.push({
                    "id": Number(el.id),
                    "t01_id": 0,
                    "title": el.title,
                    "price": el.price,
                    "categ": el.categ,
                    "author": el.author
                    //"count": 1
                });
            }
        }

        if (!f) {
            processAddElT03u(pId);
        }

    }
}

function processAddElT03u(ide) {
    let data = null;
    let p1 = '';
    if (gUId) {
        p1 = 't01_id=' + ide + '&user_id=' + gUId + '&cnt=1';
    }
    else {
        window.scrollTo(0, 0);
        showLgn();
        return;
    }
    data = p1;
    gParamProcessT = {
        method: "POST",
        data: data,
        route: routes.addcrt,
        f1: handlerPr1AddElT03u,
        f2: null
    }
    processT(gParamProcessT);
}

function handlerPr1AddElT03u(pData) {
    console.log('Добавлено в корзину', pData);
}


function favAddProd(pId) {
    let f = false;
    let nId = null;
    if (pId) {
        nId = Number(pId);
    }
    else {
        console.log('Не указан Id элемента');
    }
    if (!nId) {
        console.log('Не указан Id элемента');
        return;
    }

    for (let el of flist.goods) {
        if (el.id == nId) {
            f = true;
            let k = Number.parseInt(el.count);
            k += 1;
            el.count = k;
        }
    }
    if (!f) {
        for (let el of books) {
            if (el.id == nId) {
                flist.goods.push({
                    "ide": 0,
                    "id": Number(el.id),
                    "title": el.title,
                    "price": el.price,
                    "categ": el.categ,
                    "author": el.author
                    //"count": 1
                });
            }
        }

        if (!f) {
            processAddElT04u(pId);
        }

    }
}


function processAddElT04u(ide) {
    let data = null;
    let p1 = '';
    if (gUId) {
        p1 = 't01_id=' + ide + '&user_id=' + gUId + '&cnt=1';
    }
    else {
        window.scrollTo(0, 0);
        showLgn();
        return;
    }
    data = p1;
    gParamProcessT = {
        method: "POST",
        data: data,
        route: routes.addfav,
        f1: handlerPr1AddElT04u,
        f2: null
    }
    processT(gParamProcessT);
}

function handlerPr1AddElT04u(pData) {
    console.log('Добавлено в Избранное', pData);
}


function updCntProd(pId, pCnt) {
    let f = false;
    let nId = null;
    if (pId) {
        nId = Number(pId);
    }
    else {
        console.log('Не указан Id элемента');
    }
    if (!nId) {
        console.log('Не указан Id элемента');
        return;
    }

    for (let el of clist.goods) {
        if (el.id == nId) {
            f = true;
            let k = Number.parseInt(pCnt);
            el.cnt = k;
        }
    }

    if (f) {
        processUpdCntElT03u(pId, pCnt);
    }

}

function processUpdCntElT03u(pId, pCnt) {
    let data = null;
    let p1 = '';
    if (gUId) {
        p1 = 'id=' + pId + '&cnt=' + pCnt;
    }
    else {
        window.scrollTo(0, 0);
        showLgn();
        return;
    }
    data = p1;
    gParamProcessT = {
        method: "POST",
        data: data,
        route: routes.updcnt,
        f1: handlerPr1UpdCntElT03u,
        f2: handlerPr2UpdCntElT03u
    }
    processT(gParamProcessT);
}

function handlerPr1UpdCntElT03u(pData) {
    console.log('Изм кол-во в корзине', pData);
    if (pData['success'] == false) {
        const dt = pData.data;
        const el = document.querySelector(`[data-crtid="${dt['id']}"]`);
        if (el) {
            el.value = dt.cnt;
        }
    }
    else{
        clist.renderSmc();      
    }
}

function handlerPr2UpdCntElT03u() {
    console.log('Не изм кол-во в корзине');
}

function processTUpdCntElT03u(formData) {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const data = gParamProcessT.data;
        xmlHttp.open("POST", routes.updcnt, false);

        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }

        xmlHttp.onreadystatechange = handleSrvResUpdCntElT03u;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);

    }
    else {
        //
    }
}

function handleSrvResUpdCntElT03u() {
    console.log('Изм кол-во в корзине');
}


function favToCart(pT01id) {
    buyProd(pT01id)
}

function favAllToCart() {
    const els = document.querySelectorAll('[data-favt01id]');
    let arrToCart = [];
    for (let i = 0; i < els.length; i++) {
        const ide = els[i].dataset['favt01id'];
        arrToCart.push({ user_id: gUId, t01_id: ide, cnt: 1 });
    }
    if (arrToCart.length > 0) {
        processAddElsT03u(arrToCart);
    }
}


function processAddElsT03u(pArr) {

    let s1 = '';
    s1 = JSON.stringify(pArr);
    gParamProcessT = {
        method: "POST",
        data: s1,
        json: true,
        route: routes.addcrtgr,
        f1: handlerPr1AddElsT03u,
        f2: handlerPr2AddElsT03u,
    }
    processT(gParamProcessT);
}
function handlerPr1AddElsT03u(pData) {
    console.log('Добавлена гр товаров в корзину', pData);
}
function handlerPr2AddElsT03u() {
    console.log('Не добавлена гр товаров в корзину');
}
