function s1PutScripts(pElBody, arrS) {
    for (let index = 0; index < arrS.length; index++) {
        const element = arrS[index];
        let p1 = document.createElement('script');
        p1.src = arrS[index]; 
        p1.setAttribute('defer', true);
        p1.async = false; 
        pElBody.appendChild(p1);
    }
}

const s1IndexPage = document.querySelector('.hero');
if (s1IndexPage) {
    console.log('index');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/s2.js",
            "./js/imgn.js"
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: Главная страница";
    }
}

const s1CatalogPage = document.querySelector('.catalog');
if (s1CatalogPage) {
    console.log('catalog');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: Каталог книг";
    }
}

const s1BookPage = document.querySelector('.book_card_wrap');
if (s1BookPage) {
    console.log('book');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: Карточка книги";
    }
}


const s1SettPage = document.querySelector('.sett_page');
if (s1SettPage) {
    console.log('Settings');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/t02.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: Настройки сайта";
    }
}

const s1BooksPage = document.querySelector('.books_page');
if (s1BooksPage) {
    console.log('books');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/crud3u.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: ЛК Все книги";
    }
}

const s1ZknPage = document.querySelector('.zkn_page');
if (s1ZknPage) {
    console.log('zkn');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/zkn.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: ЛК Новый заказ";
    }
}


const s1TableUPage = document.querySelector('.tableU_page');
if (s1TableUPage) {
    console.log('tableu');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/s2.js",
            "./js/crud3u.js",
        ];
        document.title = "Букинист: Таблица";
    }
}

const s1CtgsPage = document.querySelector('.ctgs_page');
if (s1CtgsPage) {
    console.log('ctgs');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/crud3u.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: ЛК Категории";
    }
}

const s1ProfilePage = document.querySelector('.profile_page');
if (s1ProfilePage) {
    console.log('profile');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/profile.js",
            "./js/evn.js",
        ];
        window.onload = function () { 
            document.title = "Букинист: Профиль пользователя";
            s1PutScripts(s1ElBody, arrS);
        };
    }
}


const s1UsersPage = document.querySelector('.users_page');
if (s1UsersPage) {
    console.log('users');
    const s1ElBody = document.querySelector('body');
    if (s1ElBody) {
        const arrS = [
            "./js/ren.js",
            "./js/s2.js",
            "./js/crud3u.js",
            "./js/evn.js",
        ];
        s1PutScripts(s1ElBody, arrS);
        document.title = "Букинист: ЛК Пользователи";
    }
}