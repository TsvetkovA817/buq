let gIsRendingTblToHtml = true;

let arrDt = [
    { fullName: 'Алекс', email: '11@11.11', salary: 'саляр1', city: 'Москва' },
    { fullName: 'Маша', email: '22@22.22', salary: 'саляр2', city: 'Питер' },
    { fullName: 'Паша', email: '33@33.33', salary: 'саляр3', city: 'Казань' },
    { fullName: 'Саша', email: '43@44.44', salary: 'саляр4', city: 'Город' },
];

let arrDtP = [
    { fullName: 'Имя', email: 'Емаил', salary: 'Описание', city: 'Город' }, 
    { fullName: 'rw', email: 'rw', salary: 'rw', city: 'rw' }, 
    { fullName: '*', email: '*', salary: '', city: '' },   
];


let nameCalls = '';
let datarecivedList = false;
let routeGetList = '';
let routePostToList = '';
let arrFuncForm = [];
let cmdPanel = '';
let gElementId = '0';
let gElementId0 = '0';
let gElementFolder = '00';
let gElementRow = null;


const elCtgsPage = document.querySelector('.ctgs_page');
if (elCtgsPage) {
    nameCalls = 'ctgs';
    arrDt = [
        { id: '1', title: 'Категория1', folder: '01', desc: 'Описание1' },
        { id: '2', title: 'Категория2', folder: '02', desc: 'Описание2' },
        { id: '3', title: 'Категория3', folder: '03', desc: 'Описание3' },
        { id: '4', title: 'Категория4', folder: '04', desc: 'Описание4' },
    ];

    for (let index = 0; index < arrCateg.length; index++) {
        const element = arrCateg[index];
        let idx = arrDt.findIndex(item => item.id == element.id);
        if (idx >= 0) {
            arrDt[idx].title = arrCateg[index].title;
            arrDt[idx].desc = arrCateg[index].desc;
        }
        else {
            let newEl = { id: arrCateg[index].id, title: arrCateg[index].title, folder: '01', desc: arrCateg[index].desc };
            arrDt.push(newEl);
        }

    }

    arrDtP = [
        { id: 'ИД', title: 'Наименование', folder: 'Папка', desc: 'Описание' }, 
        { id: 'rw', title: 'rw', folder: 'rw', desc: 'rw' }, 
        { id: '*', title: '*', folder: '', desc: '' },   
    ];

    routeGetList = routes.ctgs;
    routePostToList = routes.updctg;
}

const elUsersPage = document.querySelector('.users_page');
if (elUsersPage) {
    nameCalls = 'users';
    arrDt = [
        { id: '1', name: 'user1', email: '11@111.11', fname: 'Петрович', adr: 'Адрес1' },
        { id: '2', name: 'user2', email: '22@111.11', fname: 'Андрей', adr: 'Адрес2' },
        { id: '3', name: 'user3', email: 'user3@asd.as', fname: 'Василий', adr: 'Адрес3' },
        { id: '4', name: 'user4', email: '44@111.11', fname: 'Алексей', adr: 'Адрес4' },
    ];
    arrDtP = [
        { id: 'ИД', name: 'Ник', email: 'Емаил', fname: 'Имя', adr: 'Адрес' },
        { id: 'rw', name: 'rw', email: 'rw', fname: 'rw', adr: 'rw' },
        { id: '*', name: '*', email: '*', fname: '', adr: '' },

    ];

    routeGetList = routes.users;
    routePostToList = routes.upduser;
}

const elBooksPage = document.querySelector('.books_page');
if (elBooksPage) {
    nameCalls = 'books';
    arrDt = books;
    arrDtP = [
        { id: 'ИД', title: 'Наименование', author: 'Автор', price: 'Цена', cnt: 'Кол-во', desc: 'Описание', categ: 'Папка', ctg_id: 'Категория' },
        { id: 'rw', title: 'rw', author: 'rw', price: 'rw', cnt: 'rw', desc: 'rw', categ: 'rw', ctg_id: 'dl' },
        { id: '*', title: '*', author: '', price: '*', cnt: '*', desc: '', categ: '*', ctg_id: '*' },
    ];

    routeGetList = routes.books;
    routeAddToList = routes.addbook;
    routePostToList = routes.updbook;
    routeDelFromList = routes.delbook;
    //--
    const elArrFuncForm = function lk_usrs_ctg_id_initOptions() {   // (1)
        const elBooksSelCtg = document.querySelector('#lk_usrs_ctg_id');
        if (elBooksSelCtg) {
            let s = '<option value="0">Категории:</option>';
            for (let i = 0; i < arrCateg.length; i++) {
                s = s + `<option value="${arrCateg[i].id}">${arrCateg[i].title}</option>`
            }
            elBooksSelCtg.innerHTML = s;
        }
    }
    arrFuncForm.push(elArrFuncForm);
    //--
    const elFormBook = document.querySelector('.lk_usrs_form');
    elFormBook.className = 'lk_usrs_form_with_img';

    const elFormBook2 = document.querySelector('.lk_usrs_form_with_img');
    const elRightFolder = document.getElementById('lk_usrs_folder_img');
    const elRightId = document.getElementById('lk_usrs_id_img');
    if (elFormBook2) {
        elFormBook2.addEventListener('input', ({ target }) => {
            let o = target.id;
            if (o == 'lk_usrs_categ') {
                elRightFolder.value = target.value;
                const el7 = document.getElementById('lk_usrs_img1_path');
                const el8 = document.getElementById('lk_usrs_img2_path');
                if (el7) el7.innerHTML = `k${elRightFolder.value}/cb1_${elRightId.value}.jpg`;
                if (el8) el8.innerHTML = `k${elRightFolder.value}/cb2_${elRightId.value}.jpg`;
            }
        });

        elFormBook2.addEventListener('input', ({ target }) => {
            let o = target.id;
            if (o == 'lk_usrs_id') {
                elRightId.value = target.value;
                const el7 = document.getElementById('lk_usrs_img1_path');
                const el8 = document.getElementById('lk_usrs_img2_path');
                if (el7) el7.innerHTML = `k${elRightFolder.value}/cb1_${elRightId.value}.jpg`;
                if (el8) el8.innerHTML = `k${elRightFolder.value}/cb2_${elRightId.value}.jpg`;
            }
        });

    }
}


const elZknPage = document.querySelector('.zkn_page');
if (elZknPage) {
    gIsRendingTblToHtml = false;
    if (gIsRendingTblToHtml) {
        nameCalls = 'users';
        arrDt = [
            { id: '1', name: 'user1', email: '11@111.11', fname: '', adr: 'Адрес1' },
            { id: '2', name: 'user2', email: '22@111.11', fname: '', adr: 'Адрес2' },
            { id: '3', name: 'user3', email: 'user3@asd.as', fname: '', adr: 'Адрес3' },
            { id: '4', name: 'user4', email: '44@111.11', fname: '', adr: 'Адрес4' },
        ];
        arrDtP = [
            { id: 'ИД', name: 'Ник', email: 'Емаил', fname: 'Имя', adr: 'Адрес' },
            { id: 'rw', name: 'rw', email: 'rw', fname: 'rw', adr: 'rw' },
            { id: '*', name: '*', email: '*', fname: '', adr: '' },

        ];

        routeGetList = routes.users;
        routePostToList = routes.upduser;
    }
}


let arrKey = [];
let arrZn = [];
let kolFields = 0;

//---
const countObjLenght = (obj) => {
    return Object.keys(obj).length;
}

//---


function showForms() {
    let elArr = Object.keys(arrDt[0]);
    kolFields = countObjLenght(arrDt[0]); 
    for (let key in arrDtP[0]) {
        const hasKey = elArr.includes(key);
        if (hasKey) {
            arrKey.push(key);
            arrZn.push(arrDt[0][key]);
        }
    }
    kolFields = arrKey.length;
    console.log(arrKey);
    processList();
    let selectedRow = null
    const elF = document.getElementById('lk_usrs_form');

    if (elF) {
        let s = '<form onsubmit="event.preventDefault();lkUsrsOnFormSubmit();" autocomplete="off">';
        let ob = false;
        let s1 = '';
        let s2 = '';
        let s3 = '';
        let s4 = '';
        let s5 = '';
        let s6 = '';
        let s7 = '';
        for (let index = 0; index < kolFields; index++) {
            const key = arrKey[index];
            let lbl = '';
            if (arrDtP[2][key] == '*') { ob = true; lbl = arrDtP[0][key] + '*'; }
            else { lbl = arrDtP[0][key]; ob = false; }

            s1 = `
     <div>
      <label>${lbl}</label> `;
            if (ob) {
                s2 = `<label class="lk_usrs_validation_error lk_usrs_hide" id="lk_usrs_${key}ValidationError">Обязательно заполнить</label>`;
            }
            else {
                s2 = '';
            }

            if (arrDtP[1][key] == 'ro') {
                s3 = `<input type="text" name="${key}" id="lk_usrs_${key}" class="lk_usrs_inp" readonly>
        </div> `;
            }
            else if (arrDtP[1][key] == 'rw') {
                s3 = `<input type="text" name="${key}" id="lk_usrs_${key}" class="lk_usrs_inp">
        </div> `;
            }
            else if (arrDtP[1][key] == 'dl') {
                s3 = `<select name="${key}" id="lk_usrs_${key}" class="lk_usrs_inp"></select>
        </div> `;
            }


            s = s + s1 + s2 + s3;

        } //for   

        s4 = `
 <div  class="lk_usrs_form_action_buttons">`

        s5 = `    <button type='button' class="lk_usrs_btn_c" onClick="resetForm();">Очистить</button>
     <input type="submit" value="Сохранить" class="lk_usrs_btn">`

        s6 = '</div> ';


        if (cmdPanel) {
            s7 = s4 + cmdPanel + s5 + s6;
        }
        else {
            s7 = s4 + s5 + s6;
        }

        s = s + s7;
        s = s + '</form>';

        elF.innerHTML = s;
    }

    for (let index = 0; index < arrFuncForm.length; index++) {
        const element = arrFuncForm[index];
        if (element) element();
    }

}


const elLkBooksIdInp = document.getElementById('lk_usrs_id');
if (elLkBooksIdInp) {
    document.getElementById('lk_usrs_id').value = gElementId0;
}

const elLkUsrsFolder = document.getElementById('lk_usrs_categ');
if (elLkUsrsFolder) elLkUsrsFolder.value = gElementFolder;
//e

const elLkUsrsCtgSelect = document.getElementById('lk_usrs_ctg_id');
if (elLkUsrsCtgSelect && elLkUsrsFolder) {
    elLkUsrsCtgSelect.addEventListener('change', ({ target }) => {
        let idc = target.value;  
        const ctg = arrCateg.find(el => el.id == Number(idc));
        elLkUsrsFolder.value = ctg.folder;
    });

}


function showTable1() {
    const elT = document.querySelector('.lk_usrs_wrap');
    if (elT) {

        s = `<table class="lk_usrs_tbl" id="lk_usrs_tbl">
               <thead class="lk_usrs_tbl_thl">
                  <tr> `;

        for (let index = 0; index < kolFields; index++) {
            const key = arrKey[index];
            let lbl = arrDtP[0][key];
            s1 = `<th>${lbl}</th>`;
            s = s + s1;
        }
        s2 = `<th>Действия</th>`;
        s = s + s2;
        s2 = `</tr>
              </thead>
           <tbody>
           </tbody>
       </table>`;
        s = s + s2;
        elT.innerHTML = s;

    }
}


if (gIsRendingTblToHtml) {
    showForms();
    showTable1();
}

function readFormData() {
    let formData = {};
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        formData[key] = document.getElementById("lk_usrs_" + key).value;
    }
    return formData;
}


function insertNewRecord(data) {
    let table = document.getElementById("lk_usrs_tbl").getElementsByTagName('tbody')[0];

    let newRow = table.insertRow(table.length);

    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        let cell1 = newRow.insertCell(index);
        cell1.innerHTML = data[key];
    }

    let cell4 = newRow.insertCell(kolFields);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="lk_usrs_a">Изменить</a>
                       <a onClick="onDelete(this)" class="lk_usrs_a">Удалить</a>`;
}

function resetList() {
    let table = document.getElementById("lk_usrs_tbl").getElementsByTagName('tbody')[0];
    table.innerHTML = '';
}

function resetForm() {
    let s1 = '';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1 = 'lk_usrs_' + key;
        document.getElementById(s1).value = "";
    }
    selectedRow = null;
    //
    document.getElementById('lk_usrs_id').value = gElementId0;
    const elLkUsrsFolder = document.getElementById('lk_usrs_categ');
    if (elLkUsrsFolder) elLkUsrsFolder.value = gElementFolder;

    if (elBooksPage) {
        const el1 = document.getElementById('lk_usrs_id_img');
        if (el1) el1.value = '';
        const el2 = document.getElementById('lk_usrs_folder_img');
        if (el2) el2.value = '';

        const el7 = document.getElementById('lk_usrs_img1_path');
        const el8 = document.getElementById('lk_usrs_img2_path');
        if (el7) el7.innerHTML = `${el1.src}` + 'Эскиза нет';
        if (el8) el8.innerHTML = `${el2.src}` + 'Обложки нет';

        const el5 = document.querySelector('.lk_usrs_right_img1');
        const el6 = document.querySelector('.lk_usrs_right_img2');
        if (el5) el5.src = `./img/catalog/k00/cb1_0.jpg`;
        if (el6) el6.src = `./img/catalog/k00/cb2_0.jpg`;

    }

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    let s1 = '';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1 = 'lk_usrs_' + key;
        document.getElementById(s1).value = "";
        document.getElementById(s1).value = selectedRow.cells[index].innerHTML;
    }

    if (elBooksPage) {
        const el1 = document.getElementById('lk_usrs_id_img');
        const el3 = document.getElementById('lk_usrs_id');
        const el2 = document.getElementById('lk_usrs_folder_img');
        const el4 = document.getElementById('lk_usrs_categ');
        const el5 = document.querySelector('.lk_usrs_right_img1');
        const el6 = document.querySelector('.lk_usrs_right_img2');
        const el7 = document.getElementById('lk_usrs_img1_path');
        const el8 = document.getElementById('lk_usrs_img2_path');
        if (el1 && el3) el1.value = el3.value;
        if (el2 && el4) el2.value = el4.value;

        if (el5 && el4 && el3) {
            el5.src = `./img/catalog/k${String(el4.value).trim()}/cb1_${String(el3.value).trim()}.jpg`;
        }
        if (el6 && el4 && el3) {
            el6.src = `./img/catalog/k${String(el4.value).trim()}/cb2_${String(el3.value).trim()}.jpg`;
        }
        if (el5 && el6 && el7 && el8) {
            const n1 = String(el5.src).indexOf('catalog');
            const n2 = String(el6.src).indexOf('catalog');
            if (n1 > 0) {
                el7.innerHTML = `${String(el5.src).substring(n1 + 8,)}`;
            }
            if (n2 > 0) {
                el8.innerHTML = `${String(el6.src).substring(n2 + 8,)}`;
            }
        }
    }
}

function updateRecord(formData) {
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        selectedRow.cells[index].innerHTML = formData[key];
    }
}


function onDelete(td) {
    if (confirm('Удалить запись?')) {
        row = td.parentElement.parentElement; 
        processDelProfile(row);  

    }
}

function DeleteFromTbl(row) {
    document.getElementById("lk_usrs_tbl").deleteRow(row.rowIndex);
    resetForm();
}

function onDeleteTbl(td) {
    if (confirm('Удалить запись?')) {
        row = td.parentElement.parentElement; 
        document.getElementById("lk_usrs_tbl").deleteRow(row.rowIndex); 
        resetForm();
    }
}

function validate() {
    let isValid = true;
    let s1 = '';
    let s2 = '';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1 = 'lk_usrs_' + key;
        s2 = `lk_usrs_${key}ValidationError`;

        const el = document.getElementById(s2);
        if (el) {
            if (document.getElementById(s1).value == "") {
                isValid = false;
                document.getElementById(s2).classList.remove("lk_usrs_hide");
            } else {
                if (!document.getElementById(s2).classList.contains("lk_usrs_hide"))
                    document.getElementById(s2).classList.add("lk_usrs_hide");
            }
        }
    }
    return isValid;
}

function lkUsrsOnFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            if (nameCalls == 'books') {
                processAddProfile(formData);
            }
            insertNewRecord(formData);
            tableReplaceLastId0(gElementId);
        }
        else {
            if (nameCalls == 'ctgs' || nameCalls == 'users' || nameCalls == 'books') {
                processUpdProfile(formData);
            }
            if (nameCalls == 'books') {
                //processAddProfile(formData); 
            }
            updateRecord(formData);
        }
        resetForm();
    }
}


function tableSearch() {
    var phrase = document.getElementById('search-text');
    var table = document.getElementById('info-table');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    for (var i = 1; i < table.rows.length; i++) {
        flag = false;
        for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
            flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
            if (flag) break;
        }
        if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }

    }
}



function putArrToTable() {
    for (let index = 0; index < arrDt.length; index++) {
        const el = arrDt[index];
        insertNewRecord(el);
    }
}


if (gIsRendingTblToHtml) {
    putArrToTable();
}


async function processList() {

    if (!routeGetList) return;

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        if (!datarecivedList) {
            xmlHttp.open("GET", routeGetList, true);

            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            xmlHttp.setRequestHeader('Accept', '*/*');
            xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (gToken) {
                xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
            }
            xmlHttp.withCredentials = true;

            xmlHttp.onreadystatechange = handleServerResponseList;
            await xmlHttp.send(null);
        }
    }
    else {
        setTimeout('process()', 1500);
    }
}

function handleServerResponseList() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200 && xmlHttp.response) {
            let xmlResponse = null;
            try {
                xmlResponse = JSON.parse(xmlHttp.response);
            } catch (error) {
                console.log('Ответ не json');
                return;
            }

            console.dir(xmlResponse);
            arrDt.length = 0; // Clear array
            arrDt.push(...xmlResponse.data);
            if (arrDt.length > 0) {
                datarecivedList = true;
                resetList();
                putArrToTable();
                console.log(arrDt);
            }
        }
        else {
            //
        }
    }
}


function updProfile() {
    let formData = {};
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        formData[key] = document.getElementById("lk_usrs_" + key).value;
    }
    console.log(formData);
    if (crud1Validate()) {
        processUpdProfile(formData);
    }
}


function processUpdProfile(formData) {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        let s1 = '';
        for (const key in formData) {
            if (Object.hasOwnProperty.call(formData, key)) {
                const zn = formData[key];
                if (!s1) s1 = s1 + key + '=' + zn;
                else s1 = s1 + '&' + key + '=' + zn;
            }
        }
        const data = s1;
        xmlHttp.open("POST", routePostToList, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResUpdProfile;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}

function handleSrvResUpdProfile() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
        }
        else {
            //
        }
    }
}

function crud1Validate() {
    let isValid = true;
    let s1 = '';
    let s2 = '';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1 = 'lk_usrs_' + key;
        s2 = `lk_usrs_${key}ValidationError`;

        const el = document.getElementById(s2);
        if (el) {
            if (document.getElementById(s1).value == "") {
                isValid = false;
                document.getElementById(s2).classList.remove("lk_usrs_hide");
            } else {
                if (!document.getElementById(s2).classList.contains("lk_usrs_hide"))
                    document.getElementById(s2).classList.add("lk_usrs_hide");
            }
        }
    }
    return isValid;
}


function processAddProfile(formData) {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        let s1 = '';
        for (const key in formData) {
            if (Object.hasOwnProperty.call(formData, key)) {
                const zn = formData[key];
                if (!s1) s1 = s1 + key + '=' + zn;
                else s1 = s1 + '&' + key + '=' + zn;
            }
        }

        const data = s1;
        xmlHttp.open("POST", routeAddToList, false);

        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResAddProfile;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}


function handleSrvResAddProfile() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            gElementId = xmlResponse.data.id;
            console.log(gElementId);
            const id = gElementId;
            const categ = xmlResponse.data.categ;
            if (id && categ) {
                processCopyBlCbProfile(id, categ);
            }
        }
        else {
            //
        }
    }
}


function tableReplaceLastId0(pId) {
    const phrase = String(pId).trim();
    const table = document.getElementById('lk_usrs_tbl');
    if (table) {
        const i = table.rows.length;
        const lr = table.rows.item(i - 1);
        if (lr) {
            lr.cells[0].innerText = phrase;
        }
    }
}


function processDelProfile(row) {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const formData = readFormData();
        let s1 = '';
        for (const key in formData) {
            if (Object.hasOwnProperty.call(formData, key)) {
                let zn = formData[key];
                if (key == 'id') zn = row.cells[0].innerText;
                if (key == 'categ') zn = row.cells[5].innerText;
                if (!s1) s1 = s1 + key + '=' + zn;
                else s1 = s1 + '&' + key + '=' + zn;
            }
        }
        const data = s1;
        gElementRow = row;
        xmlHttp.open("POST", 'delf1.php', false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResDelProfile1;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}

function handleSrvResDelProfile1() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = xmlHttp.response;
            console.log(xmlResponse);
            console.log(200);
            processDelProfile2(gElementRow);

        }
        else {
            //
        }
    }
}


function processDelProfile2(row) {
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const formData = readFormData();
        let s1 = '';
        for (const key in formData) {
            if (Object.hasOwnProperty.call(formData, key)) {
                let zn = formData[key];
                if (key == 'id') zn = row.cells[0].innerText;
                if (!s1) s1 = s1 + key + '=' + zn;
                else s1 = s1 + '&' + key + '=' + zn;
            }
        }
        const data = s1;
        gElementRow = row;
        xmlHttp.open("DELETE", routeDelFromList, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResDelProfile2;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);
    }
    else {
        //
    }
}

function handleSrvResDelProfile2() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            gElementId = xmlResponse.data.id;
            console.log(gElementId);
            DeleteFromTbl(gElementRow);
        }
        else {
            //
        }
    }
}


function processCopyBlCbProfile(id, categ) {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {

        const data = `id=${id}&categ=${categ}`;
        xmlHttp.open("POST", 'loadbcb.php?' + data, false);
        xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp.setRequestHeader('Accept', '*/*');
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }
        xmlHttp.onreadystatechange = handleSrvResCopyBlCbProfile;
        xmlHttp.withCredentials = true;
        xmlHttp.send(data);

    }
    else {
        //
    }
}

function handleSrvResCopyBlCbProfile() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = xmlHttp.response;
            console.log(xmlResponse);
            console.log(200, 'B');
        }
        else {
            //
        }
    }
}


