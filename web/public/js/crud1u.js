let arrDt = [
    { fullName: '', email: '', salary:'', city:'' },
    { fullName: '', email: '', salary:'', city:''},  
    { fullName: '', email: '', salary:'',  city:''}, 
    { fullName: '', email: '', salary:'', city:''}, 
];

let arrDtP=[
    { fullName: 'Имя', email: 'Емаил', salary: 'Описание', city:'Город'}, 
    { fullName: 'rw', email: 'rw', salary: 'rw', city:'rw'}, 
    { fullName: '*', email: '*', salary: '', city:''},   
];


const elCtgsPage=document.querySelector('.ctgs_page');
if (elCtgsPage){
    arrDt = [
        { id: '1', title: 'Категория1', folder:'01', desc:'Описание1' },
        { id: '2', title: 'Категория2', folder:'02', desc:'Описание2' },  
        { id: '3', title: 'Категория3', folder:'03', desc:'Описание3'}, 
        { id: '4', title: 'Категория4', folder:'04', desc:'Описание4'}, 
    ];
    
    for (let index = 0; index < arrCateg.length; index++) {
        const element = arrCateg[index];
        let idx = arrDt.findIndex(item => item.id == element.id);
        if(idx>=0) {
            arrDt[idx].title=arrCateg[index].title;
            arrDt[idx].desc=arrCateg[index].desc;
        }
        else {
            let newEl={ id: arrCateg[index].id, title: arrCateg[index].title, folder:'01', desc:arrCateg[index].desc };
            arrDt.push(newEl);
        }
        
    }
    
    arrDtP=[
        { id: 'ИД', title: 'Наименование', folder: 'Папка', desc:'Описание'}, 
        { id: 'rw', title: 'rw', folder: 'rw', desc:'rw'}, 
        { id: '*',  title: '*', folder: '', desc:''},   
    ];
}


const elUsersPage=document.querySelector('.users_page');
if (elUsersPage){
    arrDt = [
        { id: '1', lname: 'user1', email:'11@111.11', pass:'12345', fname:'Петрович' },
        { id: '2', lname: 'user2', email:'22@111.11', pass:'12345', fname:'Андрей' },
        { id: '3', lname: 'user3', email:'user3@asd.as', pass:'12345', fname:'Василий' },
        { id: '4', lname: 'user4', email:'44@111.11', pass:'12345', fname:'Алексей' },
    ];
    arrDtP=[
        { id: 'ИД', lname: 'Ник', email:'Емаил', pass:'Пароль', fname:'Имя' },
        { id: 'rw', lname: 'rw', email:'rw', pass:'rw', fname:'rw' },
        { id: '*', lname: '*', email:'*', pass:'*', fname:'Василий' },

    ];
}


const elBooksPage=document.querySelector('.books_page');
if (elBooksPage){
    arrDt=books;
    arrDtP=[
        { id: 'ИД', title: 'Наименование', author: 'Автор', price: 'Цена', desc: 'Описание', categ: 'Категория' },
        { id: 'rw', title: 'rw', author: 'rw', price: 'rw', desc: 'rw', categ: 'rw' },
        { id: '*', title: '*', author: '', price: '', desc: '', categ: '*' },
    ];
}

const countObjLenght = (obj) => {
    return Object.keys(obj).length;
}

let elArr=arrDt[0];
let kolFields=countObjLenght(arrDt[0]); 
console.log(kolFields);

let arrKey=[];
let arrZn=[];
 for (let key in elArr) {
    const hasKey = key in arrDtP[0];
    if(hasKey){
     arrKey.push(key);
     arrZn.push(elArr[key]);
    }
}
kolFields=arrKey.length;
console.log(arrKey);

let selectedRow = null

const elF=document.querySelector('.lk_usrs_form');

if (elF){
let s='<form onsubmit="event.preventDefault();lkUsrsOnFormSubmit();" autocomplete="off">';
let ob=false;
let s1='';
let s2='';
let s3='';
let s4='';
 for (let index = 0; index < kolFields; index++) {
     const key = arrKey[index];
     let lbl = '';
     if(arrDtP[2][key]=='*'){ ob=true; lbl = arrDtP[0][key]+'*';}
     else { lbl = arrDtP[0][key]; ob=false;}

     s1=`
     <div>
      <label>${lbl}</label> `;
    if (ob){
        s2=`<label class="lk_usrs_validation_error lk_usrs_hide" id="lk_usrs_${key}ValidationError">Обязательно заполнить</label>`;
    } 
    else{
        s2='';
    }
    s3=`<input type="text" name="${key}" id="lk_usrs_${key}" class="lk_usrs_inp">
    </div> `;

    s=s+s1+s2+s3;   

 } //for   
 s4=`
 <div  class="lk_usrs_form_action_buttons">
     <button type='button' class="lk_usrs_btn_c" onClick="resetForm();">Очистить</button>
     <input type="submit" value="Отправить" class="lk_usrs_btn">
 </div> `;
s=s+s4;
s=s+'</form>';

elF.innerHTML=s;
}

const elT=document.querySelector('.lk_usrs_wrap');
if (elT){

    s=`<table class="lk_usrs_tbl" id="lk_usrs_tbl">
    <thead class="lk_usrs_tbl_thl">
        <tr> `;

    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        let lbl = arrDtP[0][key];
        s1=`<th>${lbl}</th>`;
        s=s+s1;
    }   
    s2=`<th>Действия</th>`;
    s=s+s2;
    s2=`</tr>
    </thead>
    <tbody>

    </tbody>
</table>`;
    s=s+s2;
    elT.innerHTML=s;

}    

function readFormData() {
    let formData = {};
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        formData[key] = document.getElementById("lk_usrs_"+key).value;    
    }  
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("lk_usrs_tbl").getElementsByTagName('tbody')[0];
    
    let newRow = table.insertRow(table.length);

    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        let cell1 = newRow.insertCell(index);
        cell1.innerHTML=data[key];  
    }  
    let cell4 = newRow.insertCell(kolFields);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="lk_usrs_a">Изменить</a>
                       <a onClick="onDelete(this)" class="lk_usrs_a">Удалить</a>`;
}

function resetForm() {
    let s1='';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1='lk_usrs_'+key;
        document.getElementById(s1).value = "";
    }  
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    let s1='';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1='lk_usrs_'+key;
        document.getElementById(s1).value = "";
        document.getElementById(s1).value = selectedRow.cells[index].innerHTML;
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
        document.getElementById("lk_usrs_tbl").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    let isValid = true;
    let s1='';
    let s2='';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1='lk_usrs_'+key;
        s2=`lk_usrs_${key}ValidationError`;
         
        const el=document.getElementById(s2);
        if(el){
            if (document.getElementById(s1).value == "") {
                isValid = false;
                document.getElementById(s2).classList.remove("lk_usrs_hide");
            } else {
                //isValid = true;
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
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

for (let index = 0; index < arrDt.length; index++) {
    const el = arrDt[index];
    insertNewRecord(el);    
}  
